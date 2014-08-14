#!/bin/bash

echo -e "\nGenerating ODTs..."

for file in ./src/*.markdown; do 
  if [ -e "$file" ]; then
    echo "Converting $(basename "$file") to $(basename ${file%.*}).odt"

    pandoc -S src/$(basename "$file") \
      --reference-odt reference.odt \
      --template leadsheet-template.opendocument \
      -o odt/$(basename ${file%.*}).odt
  fi
done

echo -e "\nGenerating PDFs..."

for file in ./odt/*.odt; do
  echo "Converting $(basename "$file") to $(basename ${file%.*}).pdf"

  if [ -e "$file" ]; then
    unoconv -f pdf -o pdf/ odt/$(basename "$file")
  fi
done

echo -e "\n---\nConversion finished"
