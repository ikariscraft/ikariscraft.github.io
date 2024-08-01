var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Front-End Developer Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Software Engineering Student')
    .pauseFor(2500)
    .start();