// This is the main application configuration file.  It is a Grunt
// configuration file, which you can learn more about here:
// https://github.com/cowboy/grunt/blob/master/docs/configuring.md
//
module.exports = function(grunt) {

  var pkg = require('./package.json'),
      version = pkg.version,
      name = pkg.name,
      author = pkg.author;


  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-stylus');

  grunt.initConfig({

    meta: {
      name: name,
      author: author,
      version: version,
      banner: '// <%= meta.name %>, v<%= meta.version %>\n' +
        '// Copyright (c)<%= grunt.template.today("yyyy") %> <%= meta.author %>.\n\n',
      bannerCSS: '/*! ' +
        ' * \n' +
        ' * <%= meta.name %>, v<%= meta.version %>\n' +
        ' * Copyright (c)<%= grunt.template.today("yyyy") %> <%= meta.author %>.\n' +
        ' */\n\n'
    },

    clean: ['client/templates/', 'client/css/'],

    stylus: {
      // options: {
      //   'import': ['nib'],
      //   'define': { 'url': stylus.url({ paths: [__dirname + '/client/assets/img'] }) }
      // },
      files: {
        dest: 'client/css/main.css', src: [
          'client/stylus/main.styl'
        ]
      }
    },

    jade: {
      compile: {
        options: { data: { version: version, name: name, debug: true } },
        files: [
          { expand: true, cwd: 'client/views/', src: ['**/*.jade'], dest: 'client/templates/', ext: '.html' }
        ]
      }
    }

  });


  grunt.registerTask('default', ['clean', 'stylus', 'jade']);

};
