---
title: Embedding Photo Footprints using OpenLayers (1)
layout: post
tags: Python JavaScript
permalink: /posts/:title/
date: 2026-2-9
---

When I attempted to tidy up my Google Photos last month, I decided to pin their location metadata to an interactive map to trace my past footsteps.


## Extract metadata from photos

Exifread is installed to extract metadata. 

Tags can be extracted by using `exifread.process_file()`, and tags in detail can be checked in their GitHub repo: 

[https://github.com/ianare/exif-py/blob/master/exifread/tags/exif.py](https://github.com/ianare/exif-py/blob/master/exifread/tags/exif.py)

To obtain GPS metadata, “GPSLatitude” and “GPSLongitude” is necessary. “GPSAltitude” might also help if the map is in 3D view, but since the map I used is a 2D map, only `tags['GPS GPSLatitude’]` and `tags['GPS GPSLongitude']` are used.

The date is also extracted and formalised to be used as the name of each pinpoint on the map.

{% highlight python %}
def GetMetaData(imagePath):
    latitude = None
    longitude = None
    date = None

    try:
        with open(imagePath, 'rb') as f:
            tags = exifread.process_file(f)

        if not tags:
            print(f"No EXIF data found in '{imagePath}'.")
            return None, None, None

        gps_info_found = False

        def convert_to_degrees(value):
            d = float(value.values[0].num) / float(value.values[0].den)
            m = float(value.values[1].num) / float(value.values[1].den)
            s = float(value.values[2].num) / float(value.values[2].den)
            return d + (m / 60.0) + (s / 3600.0)

        if 'GPS GPSLatitude' in tags:
            lat_ref = tags.get('GPS GPSLatitudeRef', '').printable
            lat_values = tags['GPS GPSLatitude']
            latitude = convert_to_degrees(lat_values)
            if lat_ref == 'S':
                latitude = -latitude
            gps_info_found = True

        if 'GPS GPSLongitude' in tags:
            lon_ref = tags.get('GPS GPSLongitudeRef', '').printable
            lon_values = tags['GPS GPSLongitude']
            longitude = convert_to_degrees(lon_values)
            if lon_ref == 'W':
                longitude = -longitude
            gps_info_found = True

        if not gps_info_found:
            print(f"No GPS EXIF data found in '{imagePath}'.")

        if 'EXIF DateTimeDigitized' in tags:
            date_values = tags['EXIF DateTimeDigitized']
            date = datetime.strptime(str(date_values), "%Y:%m:%d %H:%M:%S").strftime("%Y%m%d")
        else:
            print(f"No DateTimeDigitized EXIF data found in '{imagePath}'.")

        return round(latitude, 4), round(longitude, 4), date

    except FileNotFoundError:
        print(f"Error: The file '{imagePath}' was not found. Please ensure the path is correct and your Google Drive is mounted.")
        return None, None, None
    except Exception as e:
        print(f"An unexpected error occurred while processing '{imagePath}': {e}")
        return None, None, None
{% endhighlight %}

After extracting the metadata to a csv file, a link to the Google Photos image is chosen and added manually to the end of each line. The sample csv file contains lines like this:

{% highlight csv %}
20250530,35.6984,139.7725,POINT (139.7725 35.6984),https://lh3.googleusercontent.com/pw/***
{% endhighlight %}

(The link is simplified)

## Embed a Map with OpenLayers

OpenLayers is a tool that allows users to put an interactive, dynamic map on their webpages. First, we need to download the library and put it in the directory of the web project. It is recommended to download to the local instead of using the link.

[https://openlayers.org/download/](https://openlayers.org/download/)

{% highlight html %}
<script src="/assets/js/OpenLayers/v10.7.0-package/dist/ol.js"></script> 
<link rel="stylesheet" href="/assets/js/OpenLayers/v10.7.0-package/ol.css">
{% endhighlight %}

By adding it to our project directory, we can now create a new JavaScript file to draw the map.

{% highlight javascript %}
const map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: 'https://{a-c}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
      }),
    }),
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([165, 35]),
    zoom: 2.5,
  }),
});
{% endhighlight %}

ol.Map() will create a map component to be rendered. For the layer parameter, I used a customised map layer [https://basemaps.cartocdn.com/](https://basemaps.cartocdn.com/) to match the dark theme of my website, and the view parameter could be used to set the default center of the map.

{% highlight javascript %}
const vectorSource = new ol.source.Vector();
const markerLayer = new ol.layer.Vector({
  source: vectorSource,
});
map.addLayer(markerLayer);

fetch('/assets/js/gps_data.csv')
  .then(response => response.text())
  .then(data => {
    const lines = data.trim().split('\n');
    lines.shift(); // Remove header line
    lines.forEach(line => {
      const [name, lat, lon, point, image] = line.split(',');
      console.log(`Adding marker: ${name} at (${lat}, ${lon})`);
      const feature = new ol.Feature({
        geometry: new ol.geom.Point(
          ol.proj.fromLonLat([parseFloat(lon), parseFloat(lat)])
        ),
        name: name,
        image: image,
      });
      vectorSource.addFeature(feature);
    });
  });
{% endhighlight %}

Next, we can add a vector source that includes all location metadata as vector features, and a marker layer to put the vector source on. Data is read from csv, then ol.geom.Feature() will be created with location metadata assigned.

(To be continued..)