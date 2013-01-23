TriplePulse Static Pages
===========

These pages are designed to integrate with the current structure of triplepulse.com/11/

Static pages that are ready to upload are in /deploy/

Final pages are generated using Hyde (http://hyde.github.com/). Once you have Hyde set up, set this repo as your Hyde directory. Use "hyde -g" to regenerate /deploy after you change content, and you can use "hyde -w" to start a light-weight webserver for testing.

Templates are stored in /layout/. text.html is the template for blog posts and plain text pages. skeleton/_base.html sets the general look and feel for all pages.

Uncompressed JS, CSS, and image content is in /media/. This is automatically compressed when hyde generates /deploy/.

All endpoints for forms and APIs are relative URLs set assuming you keep the current structure of triplepulse.com/11/ and that deployed files are stored in the root (/11/ in your current situation). The assumption is also that the "posts" endpoint is the same directory.

If you have questions, don't hesitate to message to me.