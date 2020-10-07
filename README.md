kegs.js
=========

A Kegerator Interface!
Use this to display the contents of your kegerator and also semi-track the keg volume by recording the amounts of your pours. Kinda ghetto sure, but you don't need a raspberry Pi and flow meters or scales or whatever. It's responsive so you can bring it up in an old tablet or phone mounted by the kegerator.



Notes
------------------------
Written with Vue and uses php to record the keg pulls to the json file.




Todo
------------------------
Write a backend interface to more easily update new beers coming on so you don't have to manually edit the json file.

Make it easily skinnable for other homebrewers to change for their fake brand.

Update IBU section with hop graphics.

Update graphics to use generated/layered SVGs, which means I gotta find the source graphic images...

I'm incredibly bad at estimating the size of my pours, maybe create a glass type option to select a known volume or just simplify it by making all pours 16oz (or more, it's better to think a keg is low when it's not vs thinking it has more than it actually does).
