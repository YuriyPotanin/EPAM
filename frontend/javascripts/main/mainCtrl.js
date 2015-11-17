var app = require('../app');

angular.module('mainModule').controller('mainCtrl', mainCtrlFn);
mainCtrlFn.$inject = ['dataService', '$location','$timeout'];

function mainCtrlFn(dataService, $location, $timeout) {
	var mv = this;
	mv.isViewDetalis = false;

	mv.selectItemIndex = 0;
	mv.selectItem = dataService.getFirstItem();


	mv.getNextItem = function () {
		mv.changeValAnim = true;
		mv.selectItemIndex = ++mv.selectItemIndex; 
		var returnData = dataService.getNextItem(mv.selectItemIndex);
		mv. selectItem = returnData.item;
		mv.selectItemIndex =returnData.index;
		mv.isViewDetalis = false;
		
		$timeout(function(){
			mv.changeValAnim = false;
		}, 400);

	};

	mv.getPrevItem =function () {
		mv.changeValAnim = true;
		mv.selectItemIndex = --mv.selectItemIndex ;
		var returnData = dataService.getPrevItem(mv.selectItemIndex);
		mv.selectItem = returnData.item;
		mv.selectItemIndex =returnData.index;
		mv.isViewDetalis = false;
		
		$timeout(function(){
			mv.changeValAnim = false;
		}, 400);

		
	};
	mv.viewDetalis = function () {
		if(mv.isViewDetalis){
			mv.isViewDetalis = false;
		}else{
			mv.isViewDetalis = true;
		}
	};
	mv.goStory = function (path) {
		$location.path(path);
	};
}
