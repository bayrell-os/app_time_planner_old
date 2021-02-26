#!/usr/bin/php
<?php

define ('ROOT_PATH', __DIR__);
ini_set('display_errors', 'on');
ini_set('html_errors', 'on');
set_time_limit(600);

// Include vendor
// require ROOT_PATH . "/vendor/autoload.php";

/* Include loader */
include ROOT_PATH . "/lib/Runtime/php/Loader.php";

/* Include enviroments */
$env = include ROOT_PATH . "/env.php";

/* Run app */
$loader = ( new \Runtime\Loader() )
	->addIncludePath( ROOT_PATH . "/app" )
	->addIncludePath( ROOT_PATH . "/lib" )
;


$res = \Runtime\rtl::json_decode(null, '{"y":2021,"m":2,"d":26,"h":11,"i":51,"s":8,"ms":0,"tz":"UTC","__class_name__":"Runtime.DateTime"}');

//var_dump($value);
var_dump($res);