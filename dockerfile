FROM node:10-alpine as base

WORKDIR /usr/src/app

copy package*.json ./
copy . . 

from node:10-alpine as build

WORKDIR /usr/src/app

copy --from=base /usr/src/app /usr/src/app

run npm install

from node:10-alpine as release

WORKDIR /usr/src/app

copy --from=build /usr/src/app /usr/src/app

cmd ["npm","start"]
