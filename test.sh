#!/bin/sh

# only run this after cd in the repo home. 
now=$(echo $(date)| cut -d' ' -f 2,3,4)

# if argument suppled use as commit message. 
if [ -n "$1" ]
  then
  	echo "${1} site updated at $now"
    commit_msg="${1} site updated at $now"
   else
   	echo "site updated  $now"
   	commit_msg="site updated  $now"
fi

echo $commit_msg