(function () {

    let hero = Snap('#hero');
    let c = 120;
    let animation = hero.group();
    let logo = hero.group();
    

    let face = hero.circle('50%', '50%', 120).attr({
        fill: '#FFF',
        stroke: '#222',
        strokeWidth: 20
    });

    let leftEye = hero.circle('50%', '50%', 20).attr({
        fill: '#222',
        transform: 'translate(-50, 0)'
    });

    let rightEye = hero.circle('50%', '50%', 20).attr({
        fill: '#222',
        transform: 'translate(50, 0)'
    });


    logo.add(face, leftEye, rightEye);


    function drawCircle() {

        let hue = c % 360;
        let color = Snap.hsl(hue, 100, 40);
        c = c + 15;
        
        let myCircle = hero.circle('50%', '50%', 20).attr({
            fill: color
        });

        animation.add(myCircle);

        let vw = window.innerWidth;
        let vh = window.innerHeight;

        let radius = Math.floor(Math.sqrt((vw ** 2) + (vh ** 2)) / 2) + 100;

        myCircle.animate({r: radius}, 6000, function () {
            this.remove();
        });

    }

    setInterval(drawCircle, 600);

})();