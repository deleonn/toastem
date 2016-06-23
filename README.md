Toast'em is a simple and very basic toast notification tool created with JavaScript and jQuery.
Every notification has a fadeout output of 4 seconds after triggered automatically.

How to use?
First, you need jQuery.js and toastem.js scripts in your project.

<script src="jquery.min.js"><script>

<script src="toastem.js"><script>

Then, you need to set: <div id="toastem"></div> to your project. This is where your notifications will render.

Next, create a script in your document, depending on which alert you want to use and it's content: <script>toastem.normal_alert("Content of the normal alert").</script>

The 3 existing alerts are:

toastem.normal_alert()

toastem.success_alert()

toastem.error_alert()


You can also click on the triggered alert to dismiss it.
