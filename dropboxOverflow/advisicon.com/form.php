<?php
// IMPORTANT: THIS FORM MUST BE SAVED AS A PHP FILE - USUALLY WITH A .php extension.


/*
Script:  Secure Contact Form Script (FREE Version)
Version: 3.5 FREE
Date:    August 2008
Author:  Stuart Cochrane
URL:     www.freecontactform.com

-- License start --

Copyright (c) 2008 Stuart Cochrane <stuartc1@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software with little restriction, including the rights to use, copy, 
modify, merge, convey and publish the Software, subject to the following conditions:

A. The copyright, permission and conditional notices shall be included in
   all copies or substantial portions of the Software.

B. You will not convey the software (in any form) at a monetary cost (you can't sell it).
	 This includes any derived or merged works which contain any part of this software.

C. If you convey/distribute this software, in any form, you must include the source code.

D. Any derived or merged works must support this license.

E. You will link to the Authors website (www.freecontactform.com) from 
   all interface screens (forms). Links must be standard HTML and link directly.
   You may use any of the following as the link anchor text:
   Contact Form, Website Form, Spam Prevention, Free Contact Form, FreeContactForm.com,
   Email Form, Email Contact Form. Please contact the Author if you wish to remove the
   link.
   
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


-- License end --

NOTE: 
 We now offer Professional Version (suitable for Professional/Commercial websites).
 Professional version license holders gain more features, more support and more updates.
 Visit: www.freecontactform.com for details.
*/

// you MUST include the config.php file before your form
include 'config.php';


// You can edit the form fields below if you like
// but you must leave intact all parts which are indicated
// with comments
?>
<!-- if you want to use basic JavaScript validation, keep the JS file call below -->
<script src="validation.js"></script>
<script>
// SPECIFY ALL REQUIRED FIELDS AND
// SEE validation.js for other options
required.add('fullname', 'NOT_EMPTY');
required.add('email', 'EMAIL');
required.add('comments', 'NOT_EMPTY');
required.add('answer_out', 'NUMERIC');
</script>
<link rel="stylesheet" type="text/css" href="form_style.css" />


<form name="fcform2" method="post" action="process_form.php" onsubmit="return validate.check()">
<div id="fcf2">
<h3>Contact Us Form</h3>
<p>All fields marked with <em>*</em> are required.</p>

<div class="r">
<label for="fullname" class="req">Full Name: <em>*</em></label>
<span class="f">
<input type="text" name="fullname" size="40" id="fullname" onBlur="trim('fullname')">
</span>
</div>

<div class="r">
<label for="email" class="req">Email Address: <em>*</em></label>
<span class="f">
<input type="text" name="email" size="40" id="email" onBlur="trim('email')">
</span>
</div>

<div class="r">
<label for="phone">Telephone: </label>
<span class="f">
<input type="text" name="phone" size="40" id="phone" onBlur="trim('phone')">
</span>
</div>

<div class="r">
<label for="comments" class="req">Comments: <em>*</em></label>
<span class="f">
<textarea cols="30" rows="8" name="comments" id="comments" onBlur="trim('comments')"></textarea>
</span>
</div>

<!-- the section below MUST remain for the magic to work -->
<!-- although feel free to change the style / layout -->
<div class="r">
<label for="quest" class="req"><?php echo $question; ?> <em>*</em></label>
<span class="f">
<input type="text" name="answer_out" size="6" id="answer_out" onBlur="trim('answer_out')"> &nbsp;

<!-- the link below MUST remain if you have not purchased a license -->
Spam prevention <a href="http://www.freecontactform.com/" target="_blank" title="Email Form Script">Email Form</a>.
<!-- link above MUST remain if you have not purchased a license -->

</span>
</div>
<!-- section above must remain -->


<div class="sp">&nbsp;</div>

<?php
if(isset($_GET['done'])) {
    echo '<div align="center" style="color:red;font-weight:bold">'.$confirmation_message.'</div><br />';
}
?>
<p align="center">
<input type="submit" value="Submit">
<br />
</p>
</div>

<!-- the 2 hidden fields below must REMAIN for the magic to work -->
        <input type="hidden" name="answer_p" value="<?php echo $answer_pass; ?>">
        <input type="hidden" name="enc" value="<?php echo $enc; ?>">
<!-- above 2 hidden fields MUST remain -->

</form>