#!/bin/bash

rm -rf ./dist
echo "Building library..."
./node_modules/.bin/rollup -c
echo "Library built in dist folder!"
