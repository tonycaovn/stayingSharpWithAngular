angular.module('NoteWrangler')
.directive('nwNav', function() {
  return {
    restrict: 'E',
    controller: function($scope) {
      $scope.activeNav = 'Notes';
      this.getActiveNav = function( ){
        return $scope.activeNav;
      };
      this.setActiveNav = function(navItem){
        $scope.activeNav = navItem;
      };
      return this;
    }
  };
});
