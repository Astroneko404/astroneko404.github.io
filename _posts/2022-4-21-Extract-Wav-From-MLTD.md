---
title: Extract Wav Files from MLTD
layout: post
tags: Game Idolmaster
permalink: /posts/:title/
date: 2022-4-21
---

Using existing tools only.

## Download Unity Assets
First get the <a href="https://github.com/OpenMLTD/MLTDTools/" target="_blank">MLTDTools</a>, and run "ManifestTools.exe".
Then click "File" -> "Open" -> "Remote".

<center>
<img src="../../assets/img/misc/20220421184255.png" width="500px"/>
</center>

<br/>
After retrieving the asset list, slide down to assets starting with "song3".

<center>
<img src="../../assets/img/misc/20220421185443.png" width="500px">
</center>

Some songs only have one file, such as Fermata in Rapsodia in the image above. (It is weird since the off-vocal version is in the in-game sound player)

Some songs contain more than one files, those are for "一部歌い分け".
Usually there are:
* One preview version;
* Different vocal parts;
* One off-vocal version.

<br/>
After right click on assets and add them to the Pending Downloads list, go to the "Action" -> "Download Selected Assets".

## Unity3d ACB Assets to WAV
To convert acb.unity3d files to acb files, there is an "ExtractAcb.exe" in the MLTDTools folder.
Just drag acb.unity3d files on it.

<br/>
After converted those acb.unity3d files to acb files, we need to decrypt them to obtain the WAV files.

<a href="https://github.com/Rieksee/acbDecrypter" target="_blank">https://github.com/Rieksee/acbDecrypter</a>

Run "acbDecrypter.exe" in CMD and follow the instruction, those ACB files will be converted to WAV files.

<br/>
*Note: The "hcaToWav/復号鍵リスト.txt" file contains a decrypt key for MLTD, and I could confirm that it works in April, 2022.
