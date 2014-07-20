smoth-parallax
==============

Smooth Parallax is a quick plugin I designed primarily for use on smaller parallax spacers however could be modified for full backgrounds, etc. Check out the example at <a href=’www.kyleschneiderman.com/examples/parallax/index.php’>’www.kyleschneiderman.com/examples/parallax/index.php</a>. I plan on making this plugin more easily customizable and add some cool new features. To install simply include the CSS (or at least the section labeled “Spacer” if you already have your own style sheet + resets), include the included parallax.js and include your images. Currently the spacer background image is pointing to “./images/backgrounds/spacer.png”. This option can be changed in the style sheet. 

The html is pretty straight forward, simply make a block element with a class of spacer and place anything you want inside of it. The example page is as follows:

```HTML
<section class="spacer">
  <h1>"Your quote here" </h1>
  <h4>― "name here"</h4>
</section>
```

Lastly there are a couple of dependencies for the smooth scroll function, Jquery-migrate for browser detection and Jquery-ui for easing. I plan on creating a work around in the near future that will remove these requirements, but for now you can easily include them by adding the following code to your project:

```
<script src="http://code.jquery.com/jquery-migrate-1.2.1.js"></script>
<script src="http://code.jquery.com/ui/1.11.0/jquery-ui.min.js"></script>
```
Thanks for checking out this project and feel free to alter it as you see fit!

