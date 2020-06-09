<?php 
	$event = $_POST['event'];
	$name = $_POST['name'];
	$lastname = $_POST['lastname'];
	$groupnumber = $_POST['groupnumber'];
	$phone = $_POST['phone'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	function IsInjected($str)
	{
	    $injections = array('(\n+)',
	           '(\r+)',
	           '(\t+)',
	           '(%0A+)',
	           '(%0D+)',
	           '(%08+)',
	           '(%09+)'
	           );
	               
	    $inject = join('|', $injections);
	    $inject = "/$inject/i";
	    
	    if(preg_match($inject,$str))
	    {
	      return true;
	    }
	    else
	    {
	      return false;
	    }
	}

	if(IsInjected($email))
	{
	    echo "Bad email value!";
	    exit;
	}

	$to = "foriaa@gmail.com";
	//$to = "info@keepmovingbcn.com";

	$email_subject = "New Form Contact";

	$email_body = "New reservation request:\n EVENT:$event.\n NAME:$name.\n LAST-NAME:$lastname.\n GROUP SIZE:$groupnumber.\n PHONE:$phone.\n EMAIL:$email.\n MESSAGE:\n $message".

	$headers = "From: noreply@keepmovingbcn.com \r\n";

	mail($to,$email_subject,$email_body,$headers);

	echo "Gracias, en breve recibirás un correo de confirmación con las indicaciones para completar tu reserva.";
	sleep(3);
	header("Location: http://keepmovingbcn.com/"); 

?>