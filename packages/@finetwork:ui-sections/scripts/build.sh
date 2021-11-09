#!/bin/bash

./node_modules/.bin/rimraf dist
echo "Building library and generating types..."
./node_modules/.bin/npm-run-all build-types build-lib
echo "Copying README..."
cp ../../README.md ./dist/README.md
echo "Copying package.json..."
cp ./package.json ./dist/package.json
echo "Library built in dist folder!"
