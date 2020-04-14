#!/bin/sh

# only run this after cd in the repo home. 

#delete _site
bundle exec jekyll clean 
echo "--------build folder: _site cleaned------------"

# build into _site folder 
echo "--------Site built------------"
bundle exec jekyll serve --watch --incremental

# clean up
bundle exec jekyll clean 
echo "--------build folder: _site cleaned------------"
