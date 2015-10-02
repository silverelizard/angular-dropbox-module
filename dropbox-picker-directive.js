(function DBDirectiveModule() {
  'use strict';

  angular.module("dropbox-picker", [])
    .provider("DropBoxSettings", function() {
      this.linkType = 'preview';
      this.multiselect = false;
      this.extensions = ['.pdf', '.doc', '.docx'];
      this.$get = function() {
        return {
          linkType: this.linkType,
          multiselect: this.multiselect,
          extensions: this.extensions
        }
      };
      this.configure = function(e) {
        for (var key in e) this[key] = e[key]
      };
    })
    .controller('dbController', DBController)
    .directive("dropBoxPicker", ["DropBoxSettings",
      function(DropBoxSettings) {
        return {
          restrict: "A",
          scope: {
            dbpickerFiles: "="
          },
          bindToController: true,
          controller: 'dbController',
          controllerAs: 'vm',
          link: function(scope, element, attrs) {
            element.bind("click", function() {
              scope.vm.instantiate()
            })
          }
        }
      }
    ]);

  DBController.$inject = ['$scope', 'DropBoxSettings'];

  function DBController($scope, dropBoxSettings) {
    var vm = this;
    vm.instantiate = instantiate;
    vm.dropboxSuccess = dropboxSuccess;

    vm.dropboxOptions = {
      success: vm.dropboxSuccess,
      cancel: function() {},
      linkType : dropBoxSettings.linkType,
      multiselect: dropBoxSettings.multiselect,
      extensions : dropBoxSettings.extensions
    };

    function dropboxSuccess(files){
      $scope.$apply(function() {
        for (var i = 0; i < files.length; i++) {
          vm.dbpickerFiles = [];
          vm.dbpickerFiles.push(files[i]);
        }
      });
    }

    function instantiate() {
      Dropbox.choose(vm.dropboxOptions);
    }
  }
})();