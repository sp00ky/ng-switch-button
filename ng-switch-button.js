app.directive('ngSwitchButton', function () {
    return {
        restrict: 'EA',
        template: '\
        <div class="btn-group"> \
            <button type="button" class="btn btn-default" ng-class="trueClass" ng-click="toggleValue()"> \
                Yes \
            </button> \
            <button type="button" class="btn btn-default" ng-class="falseClass" ng-click="toggleValue()"> \
                No \
            </button> \
        </div>',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelController) {
            scope.trueClass = '';
            scope.falseClass = 'active btn-primary';

            ngModelController.$render = function () {
                updateUi();
            };

            scope.toggleValue = function () {
                ngModelController.$setViewValue(!ngModelController.$viewValue)
                updateUi();
            }

            function updateUi() {
                if (ngModelController.$viewValue) {
                    scope.trueClass = 'active btn-primary';
                    scope.falseClass = '';
                }
                else {
                    scope.trueClass = '';
                    scope.falseClass = 'active btn-primary';
                }
            }
        }

    }
})
