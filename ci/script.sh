#!/usr/bin/env sh

# 打包
cd web-git-repo/hello-web
npm i
npm run build
cd ../../

# 输出
rm -rf web-image
mkdir web-image
cp -R ./web-git-repo/ci ./web-image/
cp -R ./web-git-repo/hello-web/build ./web-image/
cp ./web-git-repo/Dockerfile ./web-image/

