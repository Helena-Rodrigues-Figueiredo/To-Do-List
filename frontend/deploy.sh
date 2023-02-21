#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f github.com/Helena-Rodrigues-Figueiredo/To-Do-List.git main:gh-pages

cd -