var app = require('../app');

angular.module('mainModule').controller('mainCtrl', mainCtrlFn);
mainCtrlFn.$inject = ['dataService', '$location'];

function mainCtrlFn(dataService, $location) {
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
		mv.changeValAnim = false;
	};

	mv.getPrevItem =function () {
		mv.changeValAnim = true;
		mv.selectItemIndex = --mv.selectItemIndex ;
		var returnData = dataService.getPrevItem(mv.selectItemIndex);
		mv.selectItem = returnData.item;
		mv.selectItemIndex =returnData.index;
		mv.isViewDetalis = false;
		mv.changeValAnim = false;
		
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
