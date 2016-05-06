
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
