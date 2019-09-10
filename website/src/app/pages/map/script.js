var myAppName = angular.module('myApp', []);

myAppName.directive('iframeNanny', function($q, $http, $compile, $sce) {
  return {
    restrict: 'E',
    scope: {
      desiredUri: '=',
      errorImageUri: '='
    },
    link: function(scope, element, attrs) {
      var loadedUri = '';
       
      function isURLReal(fullyQualifiedURL) {
        var URL = encodeURIComponent(fullyQualifiedURL);
        var dfd = $q.defer();
        var yqlUri = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22' + URL + '%22&callback=JSON_CALLBACK';
        
        $http.jsonp(yqlUri)
          .success(function(data, status) {
            console.log(data.results.length);
            if (data.results.length) {
              console.log('success!')
              dfd.resolve(true);
            } else {
              dfd.reject(false);
            }
          }).error(function(data, status) {
            dfd.reject('failed');
          });

        return dfd.promise;
      }

      scope.$watch('desiredUri', function(uri) {
        if (loadedUri !== uri) {
          
          isURLReal(uri).then(function() { 
            console.log('directive: uri valid');
            loadedUri = uri;
            
            scope.trustedUri = $sce.trustAsResourceUrl(scope.desiredUri);
            
            var iFrameHtml = '<iframe src="{{trustedUri}}" frameborder="0" width="100%" height="1100px" scrolling="auto"></iframe>';
            
            var markup = $compile(iFrameHtml)(scope);
            element.empty();
            element.append(markup);
          }).catch(function() {
            console.log('directive: uri invalid');
            var badRequestImgHtml = '<img src="{{errorImageUri}}">';
            
            var markup = $compile(badRequestImgHtml)(scope);
            
            console.log(scope.errorImageUri);
            element.empty();
            element.append(markup);
          });
        }
      });
    }
  };
});

myAppName.controller("myAppController", function($scope, $sce) {
  $scope.desiredFrameSource = 'http://www.w3schools.com/test';
  $scope.errorImageSrc = 'https://cdn2.iconfinder.com/data/icons/contact-flat-buttons/512/thumb_down-512.png';
});