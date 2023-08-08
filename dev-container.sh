#!/bin/bash

# grab envs
export $(cat .env | xargs)

# run the docker container
NODE=18
docker run --rm -it \
  --user $UID:$UID \
  -p 8000:5173 \
  -p 8001:3000 \
  -v $(pwd):/opt/apps \
  -w /opt/apps \
  --name node-${NODE}-sprinkler \
  node:${NODE} bash
