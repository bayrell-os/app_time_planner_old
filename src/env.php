<?php

global $ENV;

$env = getenv();
if (isset($ENV) && gettype($ENV) == "array")
{
	$env = array_merge($env, $ENV);
}

/* App mode */
if (!isset($env["APP_MODE"])) $env["APP_MODE"] = "dev";

/* Enable metrika */
if (!isset($env["METRIKA"])) $env["METRIKA"] = false;

/* Set route prefix */
if (!isset($env["X-ROUTE-PREFIX"]))
	$env["X-ROUTE-PREFIX"] = isset($_SERVER["HTTP_X_ROUTE_PREFIX"]) ? $_SERVER["HTTP_X_ROUTE_PREFIX"] : "";

if (!isset($env["X-LAYER-UID"])) 
	$env["X-LAYER-UID"] = isset($_SERVER["HTTP_X_LAYER_UID"]) ? $_SERVER["HTTP_X_LAYER_UID"] : "";

/* Set auth params */
if (!isset($env["AUTH_PRIVATE_KEY"])) $env["AUTH_PRIVATE_KEY"] = file_get_contents("/run/secrets/AUTH_PRIVATE_KEY");
if (!isset($env["AUTH_PUBLIC_KEY"])) $env["AUTH_PUBLIC_KEY"] = file_get_contents("/run/secrets/AUTH_PUBLIC_KEY");

return $env;