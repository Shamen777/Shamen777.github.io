'use strict'


let imgShouldMoved = document.querySelector('.about_img');
let textSholudMoved = document.querySelector('.about_teaxt_block');
let screenWidth = document.documentElement.scrollWidth

if(screenWidth > 650){
    document.addEventListener('mousemove', (e) =>{
        imgShouldMoved.style.transform = 'translate(' + e.pageX/2 + 'px,' + e.pageY/80 + 'px)';
        textSholudMoved.style.transform = 'translate(-' + e.pageX/2 + 'px,' + -e.pageY/80 + 'px)';
    })
}
//animation of canvas
let skillRingsAnimation = () =>{
    let cnvMas = document.querySelectorAll('canvas');
    for(let i = 0; i < cnvMas.length; i++){
    const cnv = document.querySelectorAll('canvas')[i],
          ctx = cnv.getContext('2d'),
          numberOfRings = 3;
          const ringRadiusOffset = 7,
                ringRadius    = 100,
                waveOffset = 15;

    let colors = [`#ed30ba`, `#be459e`, `#8b2470`];
        
        let startAngle = 0;
        function updateRings(){
            for(let i = 0; i < numberOfRings; i++){
                let radius = i * ringRadiusOffset + ringRadius;
                let offsetAngle = i * waveOffset * Math.PI / 180
                drawRing(radius, colors[i], offsetAngle);
            }

            startAngle >= 360? startAngle = 0 : startAngle++;
        }

        let centerX = cnv.width / 2;
        let centerY = cnv.height / 2;

        let maxWaveAmplitude = 7,
              numberOfWaves = 10;
                 

         function drawRing(radius, color, offsetAngle){
            ctx.strokeStyle = color;
            ctx.lineWidth = 3;

            ctx.beginPath();
            

            for(let j = -180; j < 180; j++){

                let currentAngle = (j + startAngle) * Math.PI / 180;
                let displacement = 0;
                let now = Math.abs(j);

                if(now > 70) {
                    displacement = (now - 70) / 70;
                }

                if(displacement >= 1){
                    displacement = 1;
                }

                let waveAmplitude = radius + displacement * Math.sin((currentAngle + offsetAngle) * numberOfWaves) * maxWaveAmplitude;
                let x = centerX + Math.cos(currentAngle) * waveAmplitude;
                let y = centerY + Math.sin(currentAngle) * waveAmplitude;
                j > -180? ctx.lineTo(x,y) : ctx.moveTo(x, y);
            }
            
            ctx.closePath();
            ctx.stroke();
        }

        function loop(){
            cnv.width |= 0;
            updateRings();
            requestAnimationFrame(loop);
        }
        loop();
    }
}

skillRingsAnimation();

//progress animation

const circles = document.querySelectorAll('.circle');
const circle1 = document.querySelector('.circle1');
const circle2 = document.querySelector('.circle2');
const circle3 = document.querySelector('.circleJS');
const circle4 = document.querySelector('.circle4');
const radius = circle1.r.baseVal.value;
const circumference = 2 * Math.PI * radius;//длина окружности

circles.forEach(elem =>{
    elem.style.strokeDasharray = `${circumference} ${circumference}`;
    elem.style.strokeDashoffset = circumference;
})


let setProgress = (circle, percent) =>{
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}

setProgress(circle1, 80);
setProgress(circle2, 70);
setProgress(circle3, 50);
setProgress(circle4, 40);



//skillBar span animation
let canvas = document.querySelectorAll('canvas');
let nameOfSkill = document.querySelectorAll('.nameOfSkill');
let percentOfSkill = document.querySelectorAll('.percentOfSkill');
let percent1 = document.querySelectorAll('.percent1');


for(let i = 0; i < canvas.length; i++){
    canvas[i].addEventListener('mouseover',()=>{
        nameOfSkill[i].style.transform = 'translateY(3em)';
        nameOfSkill[i].style.opacity = '0';
        percentOfSkill[i].style.opacity = '1';
        percentOfSkill[i].style.transform = 'translateY(0)';
    });
    canvas[i].addEventListener('mouseleave',()=>{
        nameOfSkill[i].style.transform = 'translateY(0)';
        nameOfSkill[i].style.opacity = '1';
        percentOfSkill[i].style.opacity = '0';
        percentOfSkill[i].style.transform = 'translateY(-3em)'
    });
}
