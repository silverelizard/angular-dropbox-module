(function DemoAppModule() {
angular
  .module('app', ['dropbox-picker'])
  .config(['DropBoxSettingsProvider', function(DropBoxSettingsProvider) {
    DropBoxSettingsProvider.configure({
      linkType: 'direct',
      multiselect: false,
      extensions: ['.pdf', '.doc', '.docx', '.txt', '.odt', '.rtf']
    });
  }])
})();