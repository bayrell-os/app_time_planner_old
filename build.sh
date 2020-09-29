#!/bin/bash

SCRIPT=$(readlink -f $0)
SCRIPT_PATH=`dirname $SCRIPT`
BASE_PATH=`dirname $SCRIPT_PATH`

RETVAL=0
TAG=`date '+%Y%m%d_%H%M%S'`

case "$1" in
	
	time_planner)
		docker build ./ -t bayrell/time_planner:$TAG --file docker/time_planner.dockerfile
		docker tag bayrell/time_planner:$TAG bayrell/time_planner:latest
		cd ..
	;;
	
	*)
		echo "Usage: $0 {time_planner}"
		RETVAL=1

esac

exit $RETVAL