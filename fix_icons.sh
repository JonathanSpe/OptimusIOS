#!/bin/bash
# Fix lucide-react-native icon props: color -> stroke

cd /home/user/OptimusIOS/components/native

for file in *.tsx; do
  # Replace color= with stroke= in icon components
  sed -i 's/color="/stroke="/g' "$file"
  sed -i "s/color='/stroke='/g" "$file"
  sed -i 's/color={/stroke={/g' "$file"
  echo "Fixed: $file"
done

echo "All native component icons fixed!"
