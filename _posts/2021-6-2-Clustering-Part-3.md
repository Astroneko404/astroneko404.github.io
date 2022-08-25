---
title: COMMON CLUSTERING ALGORITHMS (PART 3)
layout: post
category: Misc
date: 2021-6-2
---

## Mean Shift

##### Steps
1. Randomly pick up a data point as centroid.
2. Calculate the Euclidean distance between the centroid and other data points.
    * If the distance is less than the bandwidth, add the data point to the cluster *c<sub>1</sub>*.
3. Calculate the average of all data points within the cluster *c<sub>1</sub>*, and shift the cluster to the average. Update the new centroid.
    * Repeat until converge.
4. If *c<sub>1</sub>* is overlapped with *c<sub>2</sub>*, another cluster, only the cluster with more points is preserved.
5. Repeat until all data points are assigned to a cluster.

##### Pros
1. Single parameter (bandwidth)
2. Does not assume any prior shape on data clusters
3. Robust to outliers

##### Cons
1. Output depends on the bandwidth
2. Time complexity of *O(n<sup>2</sup>)*

## OPTICS
Similar to DBSCAN, OPTICS has following parameters:
* ***MinPts***: The minimum number of points to form a dense region;
* ***Eps (Optional)***: The maximum distance between two data points to be considered as a cluster.

Besides, there are more definitions:
* ***Core point***: A point p is a core point if at least MinPts points are found within its Eps-neighborhood;
* ***Core distance***: The minimum Eps to make a distinct point a core point;
* ***Reachability distance***: The reachability distance of a core point *p* with regards to another data point *o* equals to *max(coreDist(p), dist(o, p))*

##### Steps
1. Initialize a ordered list for storing the final sorted points;
2. Choose an unprocessed point from the dataset, mark it as processed and put it in the ordered list:
    * If it's a core point, then initiate another priority queue and iterate through all its neighbors:
    * For each unprocessed neighbor point, calculate its reachability distance from the core point:
        * If it's not in the priority queue, insert the neighbor point with its reachability distance;
        * If it's already in the priority queue and the new reachability distance is smaller, update the reachability distance of the neighbor point;
    * After iterating all unprocessed neighbor points, iterate through the priority queue, mark each point as processed, put it in the ordered list and update its neighbor points' reachability distance
3. For each point *p* in the ordered list, denote its reachability distance as `r_p` and its core distance as `c_p`:

{% highlight plaintext %}
If r_p > Eps or not r_p:
    if c_p <= Eps and c_p:
        // p is a new cluster
    else:
        // p is an outlier
else:
    // p belongs to current cluster
{% endhighlight %}

Below is a pseudocode of step 2 from Wikipedia:


{% highlight plaintext %}
function OPTICS(DB, eps, MinPts) is
    for each point p of DB do
        p.reachability-distance = UNDEFINED
    for each unprocessed point p of DB do
        N = getNeighbors(p, eps)
        mark p as processed
        output p to the ordered list
        if core-distance(p, eps, MinPts) != UNDEFINED then
            Seeds = empty priority queue
            update(N, p, Seeds, eps, MinPts)
            for each next q in Seeds do
                N' = getNeighbors(q, eps)
                mark q as processed
                output q to the ordered list
                if core-distance(q, eps, MinPts) != UNDEFINED do
                    update(N', q, Seeds, eps, MinPts)

function update(N, p, Seeds, eps, MinPts) is
    coredist = core-distance(p, eps, MinPts)
    for each o in N
        if o is not processed then
            new-reach-dist = max(coredist, dist(p,o))
            if o.reachability-distance == UNDEFINED then // o is not in Seeds
                o.reachability-distance = new-reach-dist
                Seeds.insert(o, new-reach-dist)
            else               // o in Seeds, check for improvement
                if new-reach-dist < o.reachability-distance then
                    o.reachability-distance = new-reach-dist
                    Seeds.move-up(o, new-reach-dist)
{% endhighlight %}

##### OPTICS vs DBSCAN
* DBSCAN is sensitive on radius since Eps is fixed, which means it could be difficult to handle unbalanced density;
* OPTICS costs more on memory due to its usage of priority queue.

<!--## Spectral Clustering-->
## References
* <a href="https://medium.com/@darkprogrammerpb/mean-shift-clustering-algorithm-from-scratch-477499caaa10" target="_blank">Mean shift Clustering algorithm from scratch</a>
* <a href="https://blog.csdn.net/hjimce/article/details/45718593" target="_blank">机器学习（十）Mean Shift 聚类算法</a>
* <a href="http://vision.stanford.edu/teaching/cs131_fall1617/lectures/lecture13_kmeans_mean_shift_cs131_2016" target="_blank">Lecture 13: k-means and mean-shift clustering</a>
* <a href="https://ml-explained.com/blog/mean-shift-explained" target="_blank">Mean Shift</a>
* <a href="https://towardsdatascience.com/clustering-using-optics-cac1d10ed7a7" target="_blank">Clustering Using OPTICS</a>
* <a href="https://xzz201920.medium.com/optics-d80b41fd042a" target="_blank">OPTICS (Ordering points to identify the clustering structure)</a>
* <a href="https://blog.csdn.net/xuanyuansen/article/details/49471807" target="_blank">OPTICS聚类算法原理</a>
* <a href="https://blog.csdn.net/itplus/article/details/10089323" target="_blank">聚类算法初探（六）OPTICS</a>
* <a href="https://en.wikipedia.org/wiki/OPTICS_algorithm" target="_blank">OPTICS algorithm</a>
