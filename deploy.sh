#!/bin/sh

# only run this after cd in the repo home. 

#delete _site
bundle exec jekyll clean 

# clone master in _site
git clone -b master https://github.com/animesh-garg/animesh-garg.github.io.git ./_site


# build into _site folder 
bundle exec jekyll build

# move to site 
cd _site

# initiate a new repo and add all files in _site 
# add new commmit
git add .
now=$(date)
git commit -m "site updated at $now"

git push

# clean up
cd ..
bundle exec jekyll clean 

