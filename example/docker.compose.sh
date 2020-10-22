#!/bin/bash

docker stack deploy -c $1.yaml dev --with-registry-auth
