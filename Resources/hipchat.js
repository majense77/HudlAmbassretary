
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

function otherClicked(name, isEnterButton) {
	//toggleHeight('other', 240);
	if (isEnterButton == true) {
		var otherPath = '/' + name;
		$.get(otherPath, function (data) {
			console.log(data);
		});
	}else{

	}
}