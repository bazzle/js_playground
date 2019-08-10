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
    }
  });


  grunt.registerTask("dev", ["browserSync", "watch"]);
};