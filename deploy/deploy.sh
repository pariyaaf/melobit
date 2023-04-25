#!/bin/bash

DEPLOY_SERVER=193.151.153.210
SERVER_FOLDER="html-folder-in-server"

# Building React output
yarn install
yarn run build

echo "Deploying to ${DEPLOY_SERVER}"
scp -r build/ root@${DEPLOY_SERVER}:/var/www/html/${SERVER_FOLDER}/

echo "Finished copying the build files"