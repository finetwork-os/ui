#!/bin/bash

rm -rf ./dist
echo "Building library..."
./node_modules/.bin/rollup -c
cp ../../README.md ./dist/README.md
echo "Library built in dist folder!"
