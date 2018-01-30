<?php

/**
 * Subscription Form Processing
 *
 * Send subscriber email to your mailchimp mailing list
 *
 *
 */

// MailChimp Configuration
$api_key = "YOUR_API_KEY_HERE"; // ENTER YOUR API KEY HERE
$list_id = "YOUR_LIST_ID_HERE"; // ENTER YOUR LIST ID HERE
require('MailChimp.php');
use \DrewM\MailChimp\MailChimp;

// test_input function
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
 
if(!empty($_POST)){
	
	// Validate email and proceed
	if(isset($_POST["email"])) {
		$email = test_input($_POST["email"]);
	} else {
		echo json_encode(array('error' => true, 'message' => 'It is not a valid email address'));
	   exit;
	}
	
	if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		echo json_encode(array('error' => true, 'message' => 'It is not a valid email address'));
	   exit;
	} else {
		$MailChimp = new MailChimp($api_key);
		$result = $MailChimp->post('lists/' .$list_id. '/members', array(
            		 	'email_address'     => $email,
             		 	'status'            => 'subscribed'
       		 	 ));
      if($result['status'] == 'subscribed') {
      	echo json_encode(array('error' => false, 'message' => 'Thanks for subscribing with us'));
      	exit;
      } else {
      	echo json_encode(array('error' => true, 'message' => $result['title']));
      	exit;
      }

	}
}
?>