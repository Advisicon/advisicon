#!/bin/bash

echo "Generating ODT"

pandoc -S src/Loewen.markdown \
  --reference-odt reference.odt \
  --template leadsheet-template.opendocument \
  -o odt/Lowen.odt

open odt/Lowen.odt
