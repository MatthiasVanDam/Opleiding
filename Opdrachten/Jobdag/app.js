//Code by Arno De Koninck

$("#sunIcon, #moonIcon").on("click", function() {
    console.log($(this).attr("id"));
    if ($(this).attr("id") == "moonIcon") {
        $(":root").attr("data-theme", "dark");
        $("#logo").addClass("dark");
    } else {
        $(":root").removeAttr("data-theme");
        $("#logo").removeClass("dark");
    }
    if ($(this).hasClass("selectedThemeIcon") == false) {
        $("#sunIcon, #moonIcon").removeClass("selectedThemeIcon");
        $(this).toggleClass("selectedThemeIcon");
    }
});


document.getElementById('cursBtn').onclick = function() {
    var el = document.getElementById('cursistenContainer');
    if (el.style.display != 'block') {
        el.style.display = 'block';
    } else {
        el.style.display = 'none';
    };
};