HTML_FILE_PATH="index.html"
CSS_FILE_PATH="style.css"
JS_FILE_PATH="app.js"

html-minifier --collapse-whitespace $HTML_FILE_PATH -o dist/$HTML_FILE_PATH
html-minifier --collapse-whitespace 404.html -o dist/404.html
echo "$HTML_FILE_PATH minified"

postcss styles/$CSS_FILE_PATH > dist/styles/$CSS_FILE_PATH
echo "$CSS_FILE_PATH minified"

uglifyjs --compress --mangle -o dist/scripts/$JS_FILE_PATH -- scripts/$JS_FILE_PATH
echo "$JS_FILE_PATH minified"

echo "Minification complete!"