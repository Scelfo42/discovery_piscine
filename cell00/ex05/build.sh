#!/bin/bash

if [ $# = 0 ]; then
	echo "No arguments supplied";
fi
while [ -n "$1" ]
do
	if [ ! -d ex$1 ]
	then
		mkdir ex$1
	fi
	shift
done
