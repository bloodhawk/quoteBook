app.controller('mainController', function($scope, mainService){
	$scope.quoteAddShow = false;
	$scope.quoteRemoveShow = false;
	$scope.quoteFilterShow = false;
	$scope.filterText;
	$scope.showAddQuote = function(){
		$scope.quoteAddShow = !($scope.quoteAddShow);
	};
	$scope.showRemoveQuote = function(){
		$scope.quoteRemoveShow = !($scope.quoteRemoveShow);
	};
	$scope.showFilterQuote = function(){
		$scope.quoteFilterShow = !($scope.quoteFilterShow);
	};
	$scope.addQuote = function(){
		if($scope.quote === undefined){
			return;
		}
		if($scope.author === undefined){
			$scope.author = 'anonymous';
		}
		$scope.showAddQuote();
		mainService.addQuote({quote: $scope.quote, author: $scope.author});
		$scope.quote = undefined;
		$scope.author = undefined;
	};
	$scope.removeQuote = function(){
		$scope.showRemoveQuote();
		mainService.removeQuote($scope.quoteToRemove);
		$scope.quoteToRemove = '';
	};

	$scope.quoteList = mainService.getQuoteList();

});