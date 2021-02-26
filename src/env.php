<?php

$auth_public_key = "";
$route_prefix = "";
$virtual_space = "default";

return [
	"APP_MODE" => "dev",
	"METRIKA" => false,
	"X-ROUTE-PREFIX" => $route_prefix,
	"X-VIRTUAL-SPACE" => $virtual_space,
	"MYSQL_HOST" => getenv("MYSQL_HOST"),
	"MYSQL_USER" => getenv("MYSQL_USER"),
	"MYSQL_PASSWORD" => getenv("MYSQL_PASSWORD"),
	"MYSQL_DATABASE" => getenv("MYSQL_DATABASE"),
	"AUTH_PUBLIC_KEY" => $auth_public_key,
];
