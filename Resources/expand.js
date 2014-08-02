function toggleHeight(e, maxHeight) {

    var other;
    var id;

    if (e === "delivery") {
        e = document.getElementById("delivery");
        id = "dButton";
        other = false;
    } else if (e === "interview") {
        e = document.getElementById("interview");
        id = "iButton";
        other = false;
    } else {
        e = document.getElementById("other");
        id = "oButton";
        other = true;
    }

    var o = document.getElementById("startText");

    e.style.height = maxHeight + 'px';
    o.style.height = '0px';

    disableButtons();
    addSelected(id);

    if (other) {
        setTimeout(function() {

            e.style.height = '0px';
            o.style.height = '100px';

            $('#name').blur();
            enableButtons();
            removeSelected(id);
            destroyCheck();
            document.getElementById("name").value = "";

        }, 30000);
    } else {
        setTimeout(function() {

            e.style.height = '0px';
            o.style.height = '100px';

            enableButtons();
            removeSelected(id);

        }, 10000);
    }
}

function disableButtons() {
    var list = document.getElementsByClassName("HButton");
    for (var i = 0; i < list.length; i++) {
        list[i].disabled = true;
    }
}

function enableButtons() {
    var list = document.getElementsByClassName("HButton");
    for (var i = 0; i < list.length; i++) {
        list[i].disabled = false;
    }
}

function addSelected(id) {
    var el = document.getElementById(id);
    var others = getOthers(id);
    // el.style.color = '#F87620';
    el.style.color = '#B3B3B3';
    el.style.opacity = '1';

    for (var i = 0; i < others.length; i++) {
        var oel = document.getElementById(others[i]);
        oel.style.opacity = '0.5';
    }
}

function removeSelected(id) {
    var el = document.getElementById(id);
    var others = getOthers(id);
    el.style.color = '#000000';
    el.style.opacity = '1';

    for (var i = 0; i < others.length; i++) {
        var oel = document.getElementById(others[i]);
        oel.style.opacity = '1';
    }
}

function getOthers(id) {
    var others;
    if (id === "dButton") {
        others = ["iButton", "oButton"];
    } else if (id === "iButton") {
        others = ["dButton", "oButton"];
    } else {
        others = ["dButton", "iButton"];
    }

    return others;
}

function getName() {
    var isEnterButton = false;
    if (event.keyCode == 13) {
        isEnterButton = true;
        console.log("GETNAME");
        var name = document.getElementById("name").value;
        $('#name').blur();

        displayCheck();
        waitForTimeout(name, isEnterButton);
    }
}

function displayCheck() {
    $('#name').css('backgroundImage', 'url("/check.png")');
    console.log("displayCheck");
}

function destroyCheck() {
    $('#name').css('backgroundImage', 'none');
    console.log('destroyCheck');
}

function waitForTimeout(name, isEnterButton) {
    console.log(name);
    otherClicked(name, isEnterButton);
}

$(document).ready(function() {
    $("#dx").click(function() {
        var id = "dButton";
        var o = document.getElementById("startText");
        var e = document.getElementById("delivery");

        e.style.height = '0px';
        o.style.height = '100px';

        enableButtons();
        removeSelected(id);
    });

    $("#ix").click(function() {
        var id = "iButton";
        var o = document.getElementById("startText");
        var e = document.getElementById("interview");

        e.style.height = '0px';
        o.style.height = '100px';

        enableButtons();
        removeSelected(id);
    });

    $("#ox").click(function() {
        var id = "oButton";
        var o = document.getElementById("startText");
        var e = document.getElementById("other");

        e.style.height = '0px';
        o.style.height = '100px';

        $('#name').blur();
        enableButtons();
        removeSelected(id);
        destroyCheck();
        document.getElementById("name").value = "";
    });
});