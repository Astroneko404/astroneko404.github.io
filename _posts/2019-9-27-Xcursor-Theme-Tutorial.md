---
title: XCURSOR THEME TUTORIAL v1.0
layout: post
category: Misc
date: 2019-9-27
---

Original post: <br/>
[https://gist.github.com/Astroneko404/0a29775a02d79b46f4b36df05634f0fb#file-xcursor-theme-tutorial-v1-1-md](https://gist.github.com/Astroneko404/0a29775a02d79b46f4b36df05634f0fb#file-xcursor-theme-tutorial-v1-1-md)
<br/><br/>

======== Updates ========<br/>
-- v1.1 The installation steps are modified<br/>

Before starting this tutorial, thanks the txt guide from [sole](https://gist.github.com/sole/571812) and the video guide from [MrGondol90](https://www.youtube.com/watch?v=cH1zij5yM9I&t=157s). It is my first time to create a xcursor theme and these guides helped me a lot.<br/><br/>

#### 1) Config files
Suppose that we've already finished our design of cursors and saved them as .PNG files, then we need config files to hold their information such as size, frames, etc.
The format of a config file looks like this:
```
[size] [x_cordinate_cursor] [y_cordinate_cursor] [path_to_image_file] [refresh_rate_of_cursor]
```
As a result, for a single-frame cursor:
```
32 5 6 image/pointer_1.png 1000
```
and for a multi-frame cursor:
```
32 5 6 image/pointer_1.png 300
32 5 6 image/pointer_2.png 300
32 5 6 image/pointer_3.png 300
```
I felt that 300 is good for a cursor that has 2 frames, but you may need a lower value of the refresh rate if your cursor has more frames. After creating config files for your image files, let's move to the next step.

#### 2) xcursorgen
We need to create xcursor files using our config files.<br/>
The command line for generating xcursor files looks like this:
```
xcursorgen [config_file] [destination_of_xcursor]
```
Example:
```
xcursorgen config.in cursors/arrow
```
"arrow" is just one cursor in the xcursor list. For a list of reference, run this (take DMZ-White as an example):
```
cd /usr/share/icons/DMZ-White/cursors/
ls -l
```
and here is the result:
```
total 1728
lrwxrwxrwx 1 root root     14 Aug 27 11:55 00008160000006810000408080010102 -> v_double_arrow
lrwxrwxrwx 1 root root     14 Aug 27 11:55 028006030e0e7ebffc7f7070c0600140 -> h_double_arrow
lrwxrwxrwx 1 root root     14 Aug 27 11:55 03b6e0fcb3499374a867c041f52298f0 -> crossed_circle
lrwxrwxrwx 1 root root     14 Aug 27 11:55 08e8e1c95fe2fc01f976f1e063a24ccd -> left_ptr_watch
lrwxrwxrwx 1 root root      4 Aug 27 11:55 1081e37283d90000800003c07f3ef6bf -> copy
lrwxrwxrwx 1 root root     17 Aug 27 11:55 14fef782d02440884392942c11205230 -> sb_h_double_arrow
lrwxrwxrwx 1 root root     17 Aug 27 11:55 2870a09082c103050810ffdffffe0204 -> sb_v_double_arrow
lrwxrwxrwx 1 root root      4 Aug 27 11:55 3085a0e285430894940527032f8b26df -> link
lrwxrwxrwx 1 root root     14 Aug 27 11:55 3ecb610c1bf2410f44200f48c40d3599 -> left_ptr_watch
lrwxrwxrwx 1 root root      4 Aug 27 11:55 4498f0e0c1937ffe01fd06f973665830 -> move
lrwxrwxrwx 1 root root     14 Aug 27 11:55 5c6cd98b3f3ebcb1f9c7f1c204630408 -> question_arrow
lrwxrwxrwx 1 root root      4 Aug 27 11:55 6407b0e94181790501fd1e167b474872 -> copy
lrwxrwxrwx 1 root root      4 Aug 27 11:55 640fb0e74195791501fd1ed57b41487f -> link
lrwxrwxrwx 1 root root      4 Aug 27 11:55 9081237383d90e509aa00f00170e968f -> move
lrwxrwxrwx 1 root root      5 Aug 27 11:55 9d800788f1b08800ae810202380a0822 -> hand2
lrwxrwxrwx 1 root root      8 Aug 27 11:55 arrow -> left_ptr
-rw-r--r-- 1 root root  15776 Dec 24  2017 bd_double_arrow
-rw-r--r-- 1 root root  15776 Dec 24  2017 bottom_left_corner
-rw-r--r-- 1 root root  15776 Dec 24  2017 bottom_right_corner
-rw-r--r-- 1 root root  15776 Dec 24  2017 bottom_side
-rw-r--r-- 1 root root  15776 Dec 24  2017 bottom_tee
lrwxrwxrwx 1 root root     15 Aug 27 11:55 c7088f0f3e6c8088236ef8e1e3e70000 -> bd_double_arrow
-rw-r--r-- 1 root root  15776 Dec 24  2017 circle
-rw-r--r-- 1 root root  15776 Dec 24  2017 color-picker
-rw-r--r-- 1 root root  15680 Dec 24  2017 copy
-rw-r--r-- 1 root root  15776 Dec 24  2017 cross
-rw-r--r-- 1 root root  15776 Dec 24  2017 crossed_circle
-rw-r--r-- 1 root root  15776 Dec 24  2017 crosshair
lrwxrwxrwx 1 root root      5 Aug 27 11:55 cross_reverse -> cross
lrwxrwxrwx 1 root root     14 Aug 27 11:55 d9ce0ab605698f320427677b458ad60b -> question_arrow
lrwxrwxrwx 1 root root      5 Aug 27 11:55 diamond_cross -> cross
-rw-r--r-- 1 root root  15776 Dec 24  2017 dnd-ask
-rw-r--r-- 1 root root  15776 Dec 24  2017 dnd-copy
-rw-r--r-- 1 root root  15776 Dec 24  2017 dnd-link
-rw-r--r-- 1 root root  15776 Dec 24  2017 dnd-move
-rw-r--r-- 1 root root  15776 Dec 24  2017 dnd-none
-rw-r--r-- 1 root root  15776 Dec 24  2017 dotbox
lrwxrwxrwx 1 root root      6 Aug 27 11:55 dot_box_mask -> dotbox
lrwxrwxrwx 1 root root     17 Aug 27 11:55 double_arrow -> sb_v_double_arrow
lrwxrwxrwx 1 root root      9 Aug 27 11:55 draft_large -> right_ptr
lrwxrwxrwx 1 root root      9 Aug 27 11:55 draft_small -> right_ptr
lrwxrwxrwx 1 root root      6 Aug 27 11:55 draped_box -> dotbox
lrwxrwxrwx 1 root root      5 Aug 27 11:55 e29285e634086352946a0e7090d73106 -> hand2
lrwxrwxrwx 1 root root     15 Aug 27 11:55 fcf1c3c7cd4491d801f1e1c78f100000 -> fd_double_arrow
-rw-r--r-- 1 root root  15776 Dec 24  2017 fd_double_arrow
lrwxrwxrwx 1 root root      8 Aug 27 11:55 fleur -> grabbing
-rw-r--r-- 1 root root  15776 Dec 24  2017 grabbing
lrwxrwxrwx 1 root root      5 Aug 27 11:55 hand -> hand2
lrwxrwxrwx 1 root root      5 Aug 27 11:55 hand1 -> hand2
-rw-r--r-- 1 root root  15776 Dec 24  2017 hand2
lrwxrwxrwx 1 root root     17 Aug 27 11:55 h_double_arrow -> sb_h_double_arrow
lrwxrwxrwx 1 root root     14 Aug 27 11:55 help -> question_arrow
lrwxrwxrwx 1 root root      6 Aug 27 11:55 icon -> dotbox
-rw-r--r-- 1 root root  15776 Dec 24  2017 left_ptr
lrwxrwxrwx 1 root root     14 Aug 27 11:55 left_ptr_help -> question_arrow
-rw-r--r-- 1 root root 488576 Dec 24  2017 left_ptr_watch
-rw-r--r-- 1 root root  15776 Dec 24  2017 left_side
-rw-r--r-- 1 root root  15776 Dec 24  2017 left_tee
-rw-r--r-- 1 root root  15776 Dec 24  2017 link
-rw-r--r-- 1 root root  15776 Dec 24  2017 ll_angle
-rw-r--r-- 1 root root  15776 Dec 24  2017 lr_angle
-rw-r--r-- 1 root root  15776 Dec 24  2017 move
-rw-r--r-- 1 root root  15776 Dec 24  2017 pencil
lrwxrwxrwx 1 root root      8 Aug 27 11:55 pirate -> X_cursor
-rw-r--r-- 1 root root  15776 Dec 24  2017 plus
-rw-r--r-- 1 root root  15776 Dec 24  2017 question_arrow
-rw-r--r-- 1 root root  15776 Dec 24  2017 right_ptr
-rw-r--r-- 1 root root  15776 Dec 24  2017 right_side
-rw-r--r-- 1 root root  15776 Dec 24  2017 right_tee
-rw-r--r-- 1 root root  15776 Dec 24  2017 sb_down_arrow
-rw-r--r-- 1 root root  15776 Dec 24  2017 sb_h_double_arrow
-rw-r--r-- 1 root root  15776 Dec 24  2017 sb_left_arrow
-rw-r--r-- 1 root root  15776 Dec 24  2017 sb_right_arrow
-rw-r--r-- 1 root root  15776 Dec 24  2017 sb_up_arrow
-rw-r--r-- 1 root root  15776 Dec 24  2017 sb_v_double_arrow
lrwxrwxrwx 1 root root      6 Aug 27 11:55 target -> dotbox
-rw-r--r-- 1 root root  15776 Dec 24  2017 tcross
lrwxrwxrwx 1 root root      8 Aug 27 11:55 top_left_arrow -> left_ptr
-rw-r--r-- 1 root root  15680 Dec 24  2017 top_left_corner
-rw-r--r-- 1 root root  15776 Dec 24  2017 top_right_corner
-rw-r--r-- 1 root root  15776 Dec 24  2017 top_side
-rw-r--r-- 1 root root  15776 Dec 24  2017 top_tee
-rw-r--r-- 1 root root  15776 Dec 24  2017 ul_angle
-rw-r--r-- 1 root root  15776 Dec 24  2017 ur_angle
lrwxrwxrwx 1 root root     17 Aug 27 11:55 v_double_arrow -> sb_v_double_arrow
-rw-r--r-- 1 root root 488576 Dec 24  2017 watch
-rw-r--r-- 1 root root  15776 Dec 24  2017 X_cursor
-rw-r--r-- 1 root root  15776 Dec 24  2017 xterm
```
Since there are lots of files, I recommend using shell scripts to generate xcursor files.<br/>
Notice that some cursor files have a hash name, like `9081237383d90e509aa00f00170e968f`.
This is because that some programs may have their custom cursors.
In order to let our cursor theme work in these programs, we also need to create xcursor files for them.<br/>
For example:
```
xcursorgen config.in cursors/move
xcursorgen config.in cursors/9081237383d90e509aa00f00170e968f
```
`9081237383d90e509aa00f00170e968f` has the same function as `move`, so we use the same config file on both of them.<br/><br/>
For more information, this site might be helpful:<br/>
https://wiki.archlinux.org/index.php/Cursor_themes#Troubleshooting

#### 3) index.theme
In the main folder of our theme, create a file named `index.theme`.<br/>
The folder structure should look like this:
```
my_theme
  |
  --- config
  |
  --- cursors
  |
  --- images
  |
  --- index.theme
```
Inside `index.theme`, add following lines:
```
[Cursor Theme]
Name=my_theme
Comment=
```
#### 4) Testing
To test that if the cursor theme works, use this site:<br/>
http://elektronotdienst-nuernberg.de/bugs/cursor.html

#### 5) Install
Notes: Some tweak tools such as GNOME Tweaks might be useful.<br/>
1. Install GNOME Tweaks either from command line or Ubuntu Software
```
$ sudo add-apt-repository universe
$ sudo apt install gnome-tweak-tool
```
2. Copy the whole folder of our theme in `~/.icons`. If there is no such a folder, we could create one using `mkdir` or install another theme using `apt-get`.
3. \[Optional(?)\] For user-specific configuration, put the `index.theme` in `~/.icons/default/`; for system-wide configuration, put the `index.theme` in `/usr/share/icons/default/`.
4. Log out and re-login, and the theme could be seen in GNOME Tweaks.
