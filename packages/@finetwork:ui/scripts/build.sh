#!/bin/bash

./node_modules/.bin/rimraf dist
echo "Building library and generating types"
./node_modules/.bin/npm-run-all build-types build-lib
cp ../../README.md ./dist/README.md
echo "Library built in dist folder!"
