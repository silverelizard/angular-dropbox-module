# angular-dropbox-module
A simple Angular module and directive for implementing the [Dropbox Chooser API](https://www.dropbox.com/developers/chooser). This directive uses `bindToController` in the directive definition, which requires the use of Angular 1.3+.

In order to use the code, include the script in your page using your desired method. Once done, you can access the following settings on the `DropBoxSettingsProvider`:

- `linkType`: accepts 'preview' or 'direct' (default is 'preview')
- `multiselect`: accepts *true* or *false* (default is *false*)
- `extensions`: accepts array of string file extension (default is `['.pdf', '.doc', '.docx']`)

Example Usage:

```JavaScript
angular
    .module('app', [dropbox-picker'])
    .config(['DropBoxSettingsProvider', function(DropBoxSettingsProvider) {
      DropBoxSettingsProvider.configure({
        linkType: 'direct',
        multiselect: false,
        extensions: ['.pdf', '.doc', '.docx', '.txt', '.odt', '.rtf']
      });
    }]);
```
