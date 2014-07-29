function getName() {
    if (event.keyCode == 13) {
        var name = document.getElementById("name").value;

        $('#name').blur();

        //alert(name);
    } else {
        setTimeout(function() {
            $('#name').blur();
        }, 20000);
    }
}