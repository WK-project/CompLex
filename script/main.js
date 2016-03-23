$('.brand .brands .jogtar').on('click', function () {
	var contentHeight = 0;
	var dropdownTop = -255;
	dropdownTimer = setInterval(function () {
		contentHeight++;
		dropdownTop++;
		$('.brand-content #brand-wrapper').css('height', contentHeight);
		$('.brand-content #dropdown-1').css('top', dropdownTop);
	}, 10)
})
