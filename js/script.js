
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
            onStringTyped: function () {
                anime({
                    targets: '.fa-github',
                    opacity: 1,
                    duration: 1000,
                    complete: function() {
                        anime({
                            targets: '.fa-envelope-open-text',
                            opacity: 1,
                            duration: 1000,
                        });
                    }
                });
            }
        });
    }
});
