#!/bin/bash

# epub compressing commands thanks to 
# http://ebookconverting.com/zip-up-an-epub-on-a-mac

echo "Removing old epub"

rm new.epub

echo "Adding mimetype"

zip -X new.epub mimetype

echo "Adding META-INF"

zip -rg new.epub META-INF -x \*.DS_Store \*~

echo "Adding OPS"

zip -rg new.epub OPS -x \*.DS_Store \*~

echo "Opening epub"

open new.epub
