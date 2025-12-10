#!/bin/bash

SCRIPT_PATH=$(readlink -f "$0")
SCRIPT_DIR=$(dirname "$SCRIPT_PATH")
SCRIPT_DIR2=$SCRIPT_DIR'/'
echo "script directory: $SCRIPT_DIR2"

python3 -m http.server --cgi 8001 -d $SCRIPT_DIR2
