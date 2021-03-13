#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# custom domain
echo 'www.foster-douglas.com' > CNAME

git init
git add -A

# rename index to deal with Vue Router / history mode / GitHub Pages etc
git mv index.html 404.html

git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:fosterdouglas/foster-douglas.git master:gh-pages

cd -