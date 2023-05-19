<?php
// this PHP file is used to check if the username is already taken

if (isset($_POST['username'])) {
	$string = "user admin dbuser Barbara Claudio Peter Fritz Hans Oliver Kurt";
	$un = htmlspecialchars($_POST['username']);
	if (stripos($string, $un) == true)
		echo trim("false");
	else
		echo trim("true");
} else
	die
		?>