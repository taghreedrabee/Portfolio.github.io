This folder contains a sample toolbar button images. These images are not intended for real replacement of built-in ones. They are just a demo of possibility of customization.
(Actually, most of the icons are just copies of built-in ones, except Open Local Registry and Remote Registry which are copies of Windows 10 built-in icons.)

To make Registry Finder use images from this folder, do the following:
- For portable mode, just rename the folder to "res".
- For normal installation mode, move/copy the folder to %APPDATA%\RegistryFinder and rename it to "res".

If someone can draw or find existing nice icons that other people may want to use, please send them to me and I will share them with other users.
(Please send a whole set, not individual icons.)

Registry Finder supports images in ICO and SVG formats.
It is recommended to use SVG, because it can be smoothly resized to any size to accommodate to various display settings.
For ICO images, individual icons may contain several images of different size. It is up to you which sizes to add to the icon set. However, please bear in mind the following.

Image size
==========

Registry Finder selects image size based on two factors: the button size specified by user (in the toolbar context menu) and Windows display settings, specifically, the scale (in Windows 10, right-click on the desktop, select Display settings. See the Scale and Layout section.)

When the scale is 100%, the image size is as follows:
Small buttons: 16x16
Medium buttons: 24x24
Large buttons: 32x32
Increasing the scale increases the size accordingly. E.g. if the scale is 200%, the image size for Small buttons is 32x32.

For ICO images, if the icon set does not have desired size, the closest smaller size is used instead. Say, the icon set has the following sizes: 16x16, 32x32, 48x48.
If the scale is 250%, desired size is 40x40 (Small buttons assumed). Then Registry Finder will use 32x32 icons.

So, in order your icon set can be used on wide variety of display settings, I recommend to add images for the following scales: 100, 125, 150, 200, 300, 400 percents. That is:
100%: 16x16, 24x24, 32x32
125%: 20x20, 30x30, 40x40
150%: 24x24, 36x36, 48x48
200%: 32x32, 48x48, 64x64
300%: 48x48, 72x72, 96x96
400%: 64x64, 96x96, 128x128
