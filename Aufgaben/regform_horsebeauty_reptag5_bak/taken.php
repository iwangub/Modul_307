<?php 
if(isset($_POST['username'])){
	$string = "usernames narcisa admin dbuser";
	$un = htmlspecialchars($_POST['username']);
	if(stripos($string,$un)==true) echo trim("false");
		else echo trim("true");
}
else die
?>
