Package.describe({
  summary: "A wrapper around the blueimp-file-upload package for Meteor."
});

Package.on_use(function (api) {
  api.use(["jquery", "jqueryui", "blueimp-tmpl"], "client");

  api.add_files([
    "./lib/blueimp-file-upload/css/jquery.fileupload.css",
    "./lib/blueimp-file-upload/js/jquery.fileupload.js"
  ], "client");

});
