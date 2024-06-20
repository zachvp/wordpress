#!/bin/bash

ROOT_PATH="$1"
PLUGIN_NAME="$2"

INPUT_PATH="$ROOT_PATH/$PLUGIN_NAME"
OUTPUT_PATH="$INPUT_PATH.zip"

echo "building: $INPUT_PATH to $OUTPUT_PATH"

echo "remove current build: {$OUTPUT_PATH}"
rm $OUTPUT_PATH

echo "zip given plugin {$PLUGIN_NAME}"
cd $ROOT_PATH
zip -r "$PLUGIN_NAME.zip" $PLUGIN_NAME --exclude \*.DS_Store

echo "done"
exit 0