function deliveryClicked() {
    toggleHeight('delivery', 200);

    $.get('/api/delivery', function(data) {
        console.log(data);
    });
}

function interviewClicked() {
    toggleHeight('interview', 200);

    $.get('/api/interview', function(data) {
        console.log(data);
    });
}

function otherClicked(name, isEnterButton) {
    // toggleHeight('other', 280);  Height is toggled on click in index.html
    if (isEnterButton === true) {
        var otherPath = '/api/other/' + name;
        $.get(otherPath, function(data) {
            console.log(data);
        });
    } else {

    }
}