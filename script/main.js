/***********
// Slides //
***********/

var activeSlide = 1; //aktiv slide
$('#button-' + activeSlide).css('color', '#ee014c'); // elso button piros színezi

function MoveSlide(slideId)	{ // aktív slideot eltuntni, megadott slidet megjeleniti, illetve also buttonokat is allitja
	$('.slides .slide-' + activeSlide).fadeOut(1000);
	$('#button-' + activeSlide).css('color', '#b9b9b9');
	activeSlide = slideId;
	$('.slides .slide-' + activeSlide).fadeIn(1000);
	$('#button-' + activeSlide).css('color', '#ee014c');
}

function MoveSlideLeft()	{ // aktív slideot eltuntni, tole balra levot slidet megjeleniti, illetve also buttonokat is allitja
	$('.slides .slide-' + activeSlide).fadeOut(1000);
	$('#button-' + activeSlide).css('color', '#b9b9b9');
	activeSlide--;
	if (activeSlide == 0) activeSlide = 4;
	$('.slides .slide-' + activeSlide).fadeIn(1000);
	$('#button-' + activeSlide).css('color', '#ee014c');
}

function MoveSlideRight()	{
	$('.slides .slide-' + activeSlide).fadeOut(1000);
	$('#button-' + activeSlide).css('color', '#b9b9b9');
	activeSlide++;
	if (activeSlide == 5) activeSlide = 1;
	$('.slides .slide-' + activeSlide).fadeIn();
	$('#button-' + activeSlide).css('color', '#ee014c');
}

$('.nav-buttons .left').on('click', function () {
	MoveSlideLeft();
})

$('.nav-buttons .right').on('click', function () {
	MoveSlideRight();
})


// also gomb esemenykezelese
$('#button-1').on('click', function () {
	MoveSlide(1);
})
$('#button-2').on('click', function () {
	MoveSlide(2);
})
$('#button-3').on('click', function () {
	MoveSlide(3);
})
$('#button-4').on('click', function () {
	MoveSlide(4);
})


/***********
// DropDown //
***********/


var dropdownIsOpen = 0;
var clickEnableds = [0,true,true,true,true];
var contentHeights = [0,255,255,255,255];		// nullást nem használjuk

// melyik brand mozogjon
function Mover(dropdownId)	{
	if (dropdownIsOpen == dropdownId)  { // sajat magat csukja be
		$('.brand-content #brand-wrapper').animate({'height': 0}, 1000);
		$('.brand-content #dropdown-' + dropdownIsOpen).animate({'top': -contentHeights[dropdownIsOpen]}, 1000, "swing");
		dropdownIsOpen = 0;
		clickEnableds[dropdownId] = true;
		return;
	}

	if (dropdownIsOpen)  { // ha masik brand nyitva van, akkor masikat csukja be
		$('.brand-content #brand-wrapper').animate({'height': 0}, 1000);
		$('.brand-content #dropdown-' + dropdownIsOpen).animate({'top': -contentHeights[dropdownIsOpen]}, 1000, "swing", function () { Opener(dropdownId); })
	} else { // senki nincs nyitva, akit kertek nyissa ki
		Opener(dropdownId);
	}
}

function Opener(dropdownId)	{ // megnyitja akit kertek
	$('.brand-content #brand-wrapper').animate({'height': contentHeights[dropdownId]}, 1000);
	$('.brand-content #dropdown-' + dropdownId).animate({'top': 0}, 1000, "swing");
	dropdownIsOpen = dropdownId;
	clickEnableds[dropdownIsOpen] = true;
}

// gomb esemenyek
$('.brand .brands .jogtar').on('click', function () {
	if (!clickEnableds[1]) return;
	clickEnableds[1] = false;
	Mover(1);
})
$('.brand .brands .ceginfo').on('click', function () {
	if (!clickEnableds[2]) return;
	clickEnableds[2] = false;
	Mover(2);
})
$('.brand .brands .adoonline').on('click', function () {
	if (!clickEnableds[3]) return;
	clickEnableds[3] = false;
	Mover(3);
})
$('.brand .brands .rodin').on('click', function () {
	if (!clickEnableds[4]) return;
	clickEnableds[4] = false;
	Mover(4);
})
