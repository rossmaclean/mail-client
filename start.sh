#!/bin/bash
set -eu

echo "Starting Mail Client"

exec /usr/local/bin/gosu cloudron:cloudron node /app/code/api/index.js
