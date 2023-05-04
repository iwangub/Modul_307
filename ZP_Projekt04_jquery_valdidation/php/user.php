<?php 
if(isset($_POST['username'])){
	$string = "user admin dbuser Barbara Claudio Peter Fritz Hans Oliver Kurt";
	$un = htmlspecialchars($_POST['username']);
	if(stripos($string,$un)==true) echo trim("false");
		else echo trim("true");
}
else die
?>
