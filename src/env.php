<?php

$env = getenv();

/* App mode */
$env["APP_MODE"] = "dev";
// $env["APP_MODE"] = "prod";

/* Enable metrika */
$env["METRIKA"] = false;

/* Set route prefix */
$env["X-ROUTE-PREFIX"] = isset($_SERVER["HTTP_X_ROUTE_PREFIX"]) ? $_SERVER["HTTP_X_ROUTE_PREFIX"] : "";
$env["X-LAYER-ID"] = isset($_SERVER["HTTP_X_LAYER_ID"]) ? $_SERVER["HTTP_X_LAYER_ID"] : "";
$env["X-LAYER-UID"] = isset($_SERVER["HTTP_X_LAYER_UID"]) ? $_SERVER["HTTP_X_LAYER_UID"] : "";
$env["X-SPACE-ID"] = isset($_SERVER["HTTP_X_SPACE_ID"]) ? $_SERVER["HTTP_X_SPACE_ID"] : "";

/* Set auth params */
$env["AUTH_PRIVATE_KEY"] = file_get_contents("/run/secrets/AUTH_PRIVATE_KEY");
$env["AUTH_PUBLIC_KEY"] = file_get_contents("/run/secrets/AUTH_PUBLIC_KEY");

return $env;