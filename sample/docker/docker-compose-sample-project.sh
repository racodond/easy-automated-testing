#!/bin/bash

set -euo pipefail

export RUN_AS_UID=$(id -u)

docker-compose up --build --exit-code-from sample-project
docker-compose down
