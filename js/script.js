
var typed_name = new Typed('.name', {
    showCursor: false,
    strings: ["Reza Askari"],
    typeSpeed: 130,
    onStringTyped: function () {
        var typed_description = new Typed('.description', {
            startDelay: 10,
            showCursor: false,
            strings: ["Full-stack web developer and linux enthusiast."],
            typeSpeed: 100,
        });
    }
});
