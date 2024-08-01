var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Front-End Developer Jr.')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Software Engineering Student')
    .pauseFor(2000)
    .start();