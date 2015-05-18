<?php  

$access_token = '197654490.c33c483.d357d7e57c8d4f5da00145376c958a05';

$userID = "self";
$url1 = "https://api.instagram.com/v1/users/$userID/?access_token=$access_token";
$url2 = "https://api.instagram.com/v1/users/$userID/media/recent/?access_token=$access_token";

//$content = file_get_contents($url2);

//echo $content;
//echo file_get_contents($url1);
echo file_get_contents($url2);

