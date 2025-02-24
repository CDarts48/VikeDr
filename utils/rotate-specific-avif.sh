#!/bin/bash

# Define the source directory
SOURCE_DIR="../public/workpics"

# Define the rotation angle (90 degrees to the right)
ROTATION_ANGLE=90

# List of specific AVIF files to rotate
FILES_TO_ROTATE=(
  "$SOURCE_DIR.rotated-90 {
  transform: rotate(90deg);
  transform-origin: center center;
}
)

# Rotate each specified AVIF file
for file in "${FILES_TO_ROTATE[@]}"; do
  if [ -f "$file" ]; then
    # Get the file name without extension
    filename=$(basename "$file")
    # Get the directory of the file
    dir=$(dirname "$file")
    # Define the intermediate PNG file path
    intermediate_file="$dir/${filename%.*}.png"
    # Define the output AVIF file path
    output_file="$dir/${filename%.*}_rotated.avif"
    # Decode the AVIF file to PNG format
    avifdec "$file" "$intermediate_file"
    echo "Decoded $file to $intermediate_file"
    # Rotate the PNG file
    convert "$intermediate_file" -rotate $ROTATION_ANGLE "$intermediate_file"
    echo "Rotated $intermediate_file"
    # Encode the rotated PNG file back to AVIF format
    avifenc "$intermediate_file" "$output_file"
    echo "Encoded $intermediate_file to $output_file"
    # Delete the intermediate PNG file
    rm "$intermediate_file"
    echo "Deleted intermediate file $intermediate_file"
    # Replace the original file with the rotated file
    mv "$output_file" "$file"
    echo "Replaced original file with rotated file $file"
  else
    echo "File $file does not exist, skipping"
  fi
done