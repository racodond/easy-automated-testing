#!/bin/bash

set -euo pipefail

cd /data

echo "Installing sample project dependencies..."
npm install
echo "Sample project dependencies installed."

echo "Running end-to-end tests on all-docker-chrome realm..."
npx etaf run --realm='all-docker-chrome'
echo "End-to-end tests run on all-docker-chrome realm."

echo "Running end-to-end tests on all-docker-firefox realm..."
npx etaf run --realm='all-docker-firefox'
echo "End-to-end tests run on all-docker-firefox realm."
