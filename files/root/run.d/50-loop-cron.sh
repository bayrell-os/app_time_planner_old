
if [ ! -z $ENABLE_CRON ] && [ "$ENABLE_CRON" = "1" ]; then
	rm -f /etc/supervisor.d/nginx.ini
	rm -f /etc/supervisor.d/php-fpm.ini
else
	rm -f /etc/supervisor.d/loop_cron.ini
fi
