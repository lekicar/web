#!/bin/sh

# if [ -z "$1" ]
# then
#   echo "Which folder do you want to deploy to GitHub Pages?"
#   exit 1
# fi
# git subtree push --prefix $1 origin gh-pages


cp ../CNAME ../dist
git subtree push --prefix dist origin gh-pages
echo "./dist deploy to GitHub Pages succeed!"
