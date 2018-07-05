module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    copy: {
      ghosthunter: {
        src: "src/ghosthunter.js",
        dest: "dist/jquery.ghosthunter.js",
        options: {
          process: function(content, path) {
            var levenshtein = grunt.file.read('./src/levenshtein.js');
            content = content.replace(/\/\*\s+levenshtein\s+\*\//i, levenshtein);
            return grunt.template.process(content)
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['copy']);
};
