=== Simple File Downloader ===
Contributors: eugenealegiojo
Donate link: http://phplugins.softanalyzer.com/simple-file-downloader
Tags: simple, file, library, downloader, downloads, media, digital, download
Requires at least: 3.0
Tested up to: 3.8.1
Stable tag: 1.0.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Simplest way to add download links into your posts/pages.

== Description ==

The plugin that will let admin user to add download links to any posts/pages in simplest way and hassle free.
Allows all your site visitors to download any files from your website without any user restriction.

= Features =

* Downloader button is available in your admin content editor
* Insert download links via shortcode [media-downloader] to any posts/pageas
* Allow users to directly download in all file formats for free
* No file size limit for downloads.
For more information please check the [Simple File Downloader](http://phplugins.softanalyzer.com/simple-file-downloader/) documentation page

= Embedding / generated Shortcodes =

Create a new post/page and click the 'Add Download' button from the content editor, then generate the shortcode below:

`[media-downloader media_id="9" texts="Download Now!"]`

Media id is automatically added from your media library.

Here are the all the available parameters when generating shortcode for file download:

**texts**

If you choose to leave the texts parameter empty, then it be defaulted to 'Download File'.

**image_url**

You can also use image/button as your download link. If you supplied this parameter, then **texts** parameter will be replaced by this image.

`[media-downloader media_id="9" image_url="http://domain.com/wp-content/themes/images/button.png"]`

**class**

You can add class to your download link either a texts or image button. This is useful if you want to apply your own style.

`[media-downloader media_id="9" texts="Download PDF" class="download-pdf"]`

**display_filesize**

You also have an option to display the size of the file. Just set it to 'yes'

`[media-downloader media_id="9" texts="Download PDF" display_filesize="yes"]`

== Installation ==

You can install this plugin directly from your WordPress dashboard:

 1. Go to the *Plugins* menu and click *Add New*.
 2. Search for *Simple File Downloader*.
 3. Click *Install Now* next to the *Simple File Downloader* plugin.
 4. Activate the plugin.

== Frequently Asked Questions ==

= Can this plugin be used to offer free downloads to my users? =

Yes.

= Can this plugin be used to embed free download buttons on my site? =

Yes.


== Screenshots ==

* After you installed the plugin, button 'Add Download' is automatically added to the content editor. 
* Click the button as shown in this screenshot http://screencast.com/t/pEtpwGlYTzW.
* Select the file you want for download http://screencast.com/t/eCZc040LqLE.
* Download shortcode will be generated automatically http://screencast.com/t/WNtBrjJZNo.

== Upgrade Notice ==
none

== Changelog ==

= 1.0.0 =
* Initial release
