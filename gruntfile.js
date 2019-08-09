module.exports = function(grunt) {
  require("jit-grunt")(grunt);

  grunt.initConfig({
    sass: {
      options: {
        style: "expanded"
      },
      files: {
        src: "assets/css/input/main.scss",
        dest: "_site/assets/css/style.css"
      }
    },
    postcss: {
      prod: {
        options: {
          processors: [
            require("pixrem")(), // add fallbacks for rem units
            require("autoprefixer")(),
            require("cssnano")() // minify the result
          ]
        },
        src: "dist/assets/css/style.css",
        dest: "dist/assets/css/style.css"
      }
    },
    svgstore: {
      options: {
        prefix: "icon-",
        includedemo: true
      },
      dev: {
        files: {
          "assets/icons/icons.svg": ["assets/icons/input/*.svg"]
        }
      },
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ["@babel/preset-env"]
      },
      dist: {
        files: {
          "dist/assets/js/scripts.js": "dist/assets/js/scripts.js"
        }
      }
    },
    imagemin: {
      default: {
        files: [
          {
            expand: true,
            cwd: 'assets/images/',
            src: ["**/*.{png,jpg,gif}"],
            dest: "dist/assets/images/"
          }
        ]
      }
    },
    browserSync: {
      bsFiles: {
        src: ["_site/assets/css/style.css", "_site/*.html", "_site/assets/js/*.js"]
      },
      options: {
        watchTask: true,
        proxy: "localhost:4000"
      }
    },
    watch: {
      css: {
        files: ["assets/css/input/*.scss"],
        tasks: ["sass"]
      },
      svg: {
        files: ["assets/icons/input/*.svg"],
        tasks: ["svgstore:dev"]
      }
    }
  });


  grunt.registerTask("dev", ["browserSync", "watch"]);
  grunt.registerTask("build", ["imagemin", "postcss", "babel"]);
};