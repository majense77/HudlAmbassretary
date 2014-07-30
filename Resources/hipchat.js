function deliveryClicked() {
	toggleHeight('delivery', 170);

	$.get('/api/delivery', function (data) {
		console.log(data);
	});
}

function interviewClicked() {
	toggleHeight('interview', 180);

	$.get('/api/interview', function (data) {
		console.log(data);
	});
}

function otherClicked() {
	toggleHeight('other', 240);

	$.get('/api/other', function (data) {
		console.log(data);
	});
}