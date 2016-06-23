Toast'em is a simple and very basic toast notification tool created with JavaScript and jQuery.

How to use?
First, you need jQuery.js, toastem.js scripts and toastem.css in your project.
<link href="toastem.css">
<script src="jquery.min.js"><script>
<script src="toastem.js"><script>

Then, you need to set: <div id="toastem"></div> to your project. This is where your notifications will render.

Next, create a script in your document, depending on which alert you want to use and it's content: <script>toastem.normal("Content of the normal alert").</script>
The 3 existing alerts are:
toastem.normal()
toastem.success()
toastem.error()

To trigger the alert you must call it from any element with the correct id.
id="normal-alert"
id="success-alert"
id="error-alert"

You can also click on the triggered alert to dismiss it.
