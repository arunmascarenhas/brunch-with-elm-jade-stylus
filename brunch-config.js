module.exports = {
  config: {
    paths: {
      watched: ['app']
    },
    files: {
      javascripts: {
        joinTo: {
          'javascripts/app.js': /^app/,
          'javascripts/vendor.js': /^vendor/,
          'test/javascripts/test.js': /^test(\/|\\)(?!vendor)/,
          'test/javascripts/test-vendor.js': /^test(\/|\\)(?=vendor)/
        },
        order: {
          before: []
        }
      },
      stylesheets: {
        joinTo: {
          'stylesheets/app.css': /^(app|vendor)/,
          'test/stylesheets/test.css': /^test/
        },
        order: {
          before: [],
          after: []
        }
      },
      templates: {
        joinTo: 'javascripts/template.js'
      }
    },
    plugins: {
      elmBrunch: {
        mainModules: ['app/elm/ElmModule.elm'],
        outputFolder: 'public/javascripts/'
      },
      static_jade: {
        extension: '.static.jade'
      },
      stylus: {
        paths: [
          './app/assets/images'
        ]
      },
      eslint: {
        pattern: /^app\/.*\.js?$/
      }
    },
    modules: {
      nameCleaner: (path) => {
        path.replace(/^app\//, ''); 
        path.replace(/^javascripts\//, ''); 
      }
    }
  }
}
