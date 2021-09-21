#!/bin/sh

# only run this after cd in the repo home. 

#delete _site
bundle exec jekyll clean 
echo "--------build folder: _site cleaned------------"

# clone master in _site
git clone -b master git@github.com:animesh-garg/animesh-garg.github.io.git ./_site
# git clone -b master https://github.com/animesh-garg/animesh-garg.github.io.git ./_site
#http clones are not working with github. 
echo "--------Master cloned------------"

# build into _site folder 
bundle exec jekyll build
echo "--------Site built------------"

# move to site 
cd _site

# git status
git status
echo "--------Site Diffs------------"

# add new commmit
git add .

# now=$(date)
# now : mmm dd hh:mm:ss
now=$(echo $(date)| cut -d' ' -f 2,3,4)

# if argument suppled use as commit message. 
if [ -n "$1" ]
  then
    commit_msg="$1, site updated at $now"
   else
   	commit_msg="site updated at $now"
fi

git commit -m "$commit_msg"
echo "--------Commits staged------------"
echo "--------commit message: site updated at $now--------"

git push
echo "--------Commits pushed------------"

# clean up
cd ..
bundle exec jekyll clean 
echo "--------build folder: _site cleaned------------"
