# includes
require "sass-globbing"

# path to source files
project_path = "application"

# no path added to assets by default
http_path = "./"

# have to match gulp-compass settings
sass_dir = "sass"
css_dir  = "build/styles"

# options that don't get used by gulp-compass
comments = false
output_style = :expanded
relative_assets = false