Package.describe({
  name: 'bdunnette:sharp',
  version: '0.11.0',
  // Brief, one-line summary of the package.
  summary: 'Adds bindings to the libvips image processing library',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/bdunnette/meteor-sharp.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "sharp": "0.11.0"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('sharp.js', 'server');
  api.export('sharp');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('bdunnette:sharp');
  api.addFiles('sharp-tests.js');
});
