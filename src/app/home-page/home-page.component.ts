import { Component, OnInit, ViewChild, HostListener, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

    @ViewChild('word') word;
    push;
    constructor(
        @Inject(DOCUMENT) private document: Document,
        public el: ElementRef,
    ) { }

    ngOnInit() {

        this.drawCanvas();
    }

    @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
        const scrollPosition = window.pageYOffset;
        this.push = scrollPosition;
      }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.drawCanvas();
    }

    drawCanvas() {
        var canvas = <HTMLCanvasElement>document.getElementById("canvas");
        console.log(canvas);
        var ctx = canvas.getContext("2d");

        //Lets make the canvas occupy the full page
        var W = window.innerWidth, H = window.innerHeight;
        canvas.width = W;
        canvas.height = 681;

        ctx.fillStyle = "#9ea7b8";
        ctx.fillRect(0, 0, W, 681);
        canvas.style.opacity = '0.2';

        //Lets make some particles
        var particles = [];
        for (var i = 0; i < 7; i++) {
            particles.push(new particle());
        }

        function particle() {
            //location on the canvas
            this.location = { x: Math.random() * W, y: Math.random() * H };
            //radius - lets make this 0
            this.radius = 0;
            //speed
            this.speed = 3;
            //steering angle in degrees range = 0 to 360
            this.angle = Math.random() * 360;
            //colors
            var r = Math.round(Math.random() * 255);
            var g = Math.round(Math.random() * 255);
            var b = Math.round(Math.random() * 255);
            var a = Math.random();
            this.rgba = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
        }

        //Lets draw the particles
        function draw() {
            //re-paint the BG
            //Lets fill the canvas black
            //reduce opacity of bg fill.
            //blending time
            ctx.globalCompositeOperation = "source-over";
            ctx.fillStyle = "rgba(0, 0, 0, 0.02)";
            ctx.fillRect(0, 0, W, H);
            ctx.globalCompositeOperation = "lighter";

            for (var i = 0; i < particles.length; i++) {
                var p = particles[i];
                ctx.fillStyle = "white";
                ctx.fillRect(p.location.x, p.location.y, p.radius, p.radius);

                //Lets move the particles
                //So we basically created a set of particles moving in random direction
                //at the same speed
                //Time to add ribbon effect
                for (var n = 0; n < particles.length; n++) {
                    var p2 = particles[n];
                    //calculating distance of particle with all other particles
                    var yd = p2.location.y - p.location.y;
                    var xd = p2.location.x - p.location.x;
                    var distance = Math.sqrt(xd * xd + yd * yd);
                    //draw a line between both particles if they are in 200px range
                    if (distance < 200) {
                        ctx.beginPath();
                        ctx.lineWidth = 1;
                        ctx.moveTo(p.location.x, p.location.y);
                        ctx.lineTo(p2.location.x, p2.location.y);
                        ctx.strokeStyle = p.rgba;
                        ctx.stroke();
                        //The ribbons appear now.
                    }
                }

                //We are using simple vectors here
                //New x = old x + speed * cos(angle)
                p.location.x = p.location.x + p.speed * Math.cos(p.angle * Math.PI / 180);
                //New y = old y + speed * sin(angle)
                p.location.y = p.location.y + p.speed * Math.sin(p.angle * Math.PI / 180);
                //You can read about vectors here:
                //http://physics.about.com/od/mathematics/a/VectorMath.htm

                if (p.location.x < 0) p.location.x = W;
                if (p.location.x > W) p.location.x = 0;
                if (p.location.y < 0) p.location.y = H;
                if (p.location.y > H) p.location.y = 0;
            }
        }

        setInterval(draw, 30);
    }

}
