#!/bin/sh
printf "//registry.npmjs.org/:_authToken=${NPM_TOKEN}\nscope=habx\nloglevel=info" > ~/.npmrc
