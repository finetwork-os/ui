#!/bin/bash

rm -rf ./dist
echo "Building library..."
rollup -c
echo "Library built in dist folder!"
