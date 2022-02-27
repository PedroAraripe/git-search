#!/usr/bin/env sh

set -e

npm run build

cd dist

git init 
git add -A
git commit -m  'Novo deploy'
git push -f git@github.com:PedroAraripe/git-search.git master:gh-pages

cd -
