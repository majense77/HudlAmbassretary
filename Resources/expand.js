function toggleHeight(e, maxHeight) {

	var other;

	if (e === "delivery") {
		e = document.getElementById("delivery");
		other = false;
	} else if (e === "interview"){
		e = document.getElementById("interview");
		other = false;
	} else {
		e = document.getElementById("other");
		other = true;
	}

	var o = document.getElementById("startText");
    
    if(e.style.height != '0px') {
        e.style.height = '0px';
        o.style.height = '100px';
    } else {
        e.style.height = maxHeight + 'px';
        o.style.height = '0px';
    }

    disableButtons();

    if (other) {
		setTimeout(function() {
			if(e.style.height != '0px') {
				e.style.height = '0px';
				o.style.height = '100px';
			} else {
				e.style.height = maxHeight + 'px';
				o.style.height = '0px';
			}

			enableButtons();
			document.getElementById("name").value="";

		}, 30000) 
	} else {
		setTimeout(function() {
			if(e.style.height != '0px') {
				e.style.height = '0px';
				o.style.height = '100px';
			} else {
				e.style.height = maxHeight + 'px';
				o.style.height = '0px';
			}

		enableButtons();
			
		}, 10000)
	}
}

function disableButtons() {
	var list = document.getElementsByClassName("HButton");
	for (var i = 0; i < list.length; i++) {
		list[i].disabled=true;
	};
}

function enableButtons() {
	var list = document.getElementsByClassName("HButton");
	for (var i = 0; i < list.length; i++) {
		list[i].disabled=false;
	};
}