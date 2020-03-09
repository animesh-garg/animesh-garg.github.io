#!/bin/sh

# only run this after cd in the repo home. 

#delete _site
bundle exec jekyll clean 
echo "--------build folder: _site cleaned------------"

# clone master in _site
git clone -b master https://github.com/animesh-garg/animesh-garg.github.io.git ./_site
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
now=$(date)
git commit -m "site updated at $now"
echo "--------Commits staged------------"
echo "commit message: site updated at $now"

git push
echo "--------Commits pushed------------"

# clean up
cd ..
bundle exec jekyll clean 
echo "--------build folder: _site cleaned------------"
