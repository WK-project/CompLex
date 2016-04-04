/*
var dropdownIsOpen = 0;
var clickEnableds = [0,true,true,true,true];
var contentHeights = [0,255,200,200,255];		// nullást nem használjuk


function Mover(dropdownId)	{

}
*/


var dropdownIsOpen1 = false;
var clickEnabled1 = true;
var dropdownIsOpen4 = false;
var clickEnabled4 = true;


$('.brand .brands .jogtar').on('click', function () {
	if (!clickEnabled1) return;
	clickEnabled1 = false;
	var contentHeight = 255;
	if (dropdownIsOpen1) {
		$('.brand-content #brand-wrapper').animate({'height': 0}, 1000);
		$('.brand-content #dropdown-1').animate({'top': -contentHeight}, 1000, "swing", AnimationDone1);
		dropdownIsOpen1 = false;
	} else {
		$('.brand-content #brand-wrapper').animate({'height': contentHeight}, 1000);
		$('.brand-content #dropdown-1').animate({'top': 0}, 1000, "swing", AnimationDone1);
		dropdownIsOpen1 = true;
	}
})

$('.brand .brands .rodin').on('click', function () {
	if (!clickEnabled4) return;
	clickEnabled4 = false;
	var contentHeight = 255;
	if (dropdownIsOpen4) {
		$('.brand-content #brand-wrapper').animate({'height': 0}, 1000);
		$('.brand-content #dropdown-4').animate({'top': -contentHeight}, 1000, "swing", AnimationDone4);
		dropdownIsOpen4 = false;
	} else {
		$('.brand-content #brand-wrapper').animate({'height': contentHeight}, 1000);
		$('.brand-content #dropdown-4').animate({'top': 0}, 1000, "swing", AnimationDone4);
		dropdownIsOpen4 = true;
	}
})


function AnimationDone1()	{
	clickEnabled1 = true;
}

function AnimationDone4()	{
	clickEnabled4 = true;
}
