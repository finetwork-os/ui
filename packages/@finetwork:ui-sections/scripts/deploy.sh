#!/bin/bash

echo "Deploying library..."
rm -rf ./.npmrc
echo "Generating .npmrc file..."
echo "//registry.npmjs.org/:_authToken=$1" >> ./.npmrc
echo "always-auth=true" >> ./.npmrc
echo "registry=https://registry.npmjs.org/" >> ./.npmrc
echo "Reading .npmrc file..."
echo "------- START -------" 
cat ./.npmrc
echo "------- END -------" 
echo "Publishing to npm..."
npm publish ./dist --access public 
echo "Library published!"
echo "Removing dist folder..."
rm -rf ./dist
echo "Dist folder removed!"
echo "Library deployed..."
