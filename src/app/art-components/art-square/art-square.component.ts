import {Component, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import * as anime from 'animejs';
@Component({
  selector: 'app-art-square',
  // templateUrl: './art-square.component.html',
    template: `
        <div class="art-square-container" [style.height.px]="biggest" [style.width.px]="biggest">
            <div class="front">{{artTitle}}</div>
            <div class="square"></div>
            <div class="back">{{artDescription}}</div>
        </div>
        
    `,
  styleUrls: ['./art-square.component.scss']
})
export class ArtSquareComponent implements OnInit {

  @Input() artTitle: String;
  @Input() artDescription: String;
  parentHeight: Number;
  parentWidth: Number;
  biggest: Number;
  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    console.log(this.artTitle)
    console.log(this.artDescription)
      // console.log(this.templateRef)
      var a = this.el.nativeElement.parentElement.clientHeight;
      var b = this.el.nativeElement.parentElement.clientWidth;
      var biggest = this.whatsBigger(a, b);
      this.el.nativeElement.style.height = biggest;
      this.el.nativeElement.style.width = biggest;
      this.el.nativeElement.attributes.width = biggest;
      this.el.nativeElement.attributes.height = biggest;
      console.log(this.el.nativeElement.style);
      console.log(biggest)
      this.biggest = biggest * .6;
      console.log(a, b)

  }

  ngAfterViewInit(): void {
      var aniSquare = anime({
          targets: this.el,
          translateX: 2500
      });
  }

  whatsBigger(a, b) {
    if(a > b) {
      return a;
    } else {
      return b;
    }
  }

}
