#!/bin/bash

if [ ! -z $ENABLE_CRON ] && [ "$ENABLE_CRON" = "1" ]; then

	while true
	do
		sleep 5
		/var/www/console.php run_cron
	done

else
	
	echo "Cron is disabled"
	
fi