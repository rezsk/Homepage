
function showContactInfo() {
    anime({
        targets: 'section#contactInfo',
        duration: 2500,
        opacity: 1
    });
}

function typeDescription() {
    var typed_description = new Typed('.description', {
        startDelay: 10,
        showCursor: false,
        strings: [
            "Full-stack web developer and linux enthusiast."
        ],
        typeSpeed: 100,
        onStringTyped: () => showContactInfo()
    });
}

function typeName() {
    var typed_name = new Typed('.name', {
        showCursor: false,
        strings: ["Reza Askari"],
        typeSpeed: 130,
        onStringTyped: () => typeDescription()
    });
}

function fadeInMainCard() {
    anime({
        delay: 1000,
        targets: 'main.card',
        duration: 1500,
        opacity: 1,
        complete: () => typeName()
    });
}

//fadeInMainCard();

