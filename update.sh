# Remove old files
rm -rf index.html
rm -rf favicon.png
rm -rf assets
rm -rf main.dart.js
rm -rf flutter_service_worker.js
rm -rf main.dart.js.map
rm -rf icons

# Copy over new files
cp -r build/web/assets .
cp -r build/web/favicon.png .
cp -r build/web/flutter_service_worker.js .
cp -r build/web/index.html .
cp -r build/web/main.dart.js .
cp -r build/web/main.dart.js.map .