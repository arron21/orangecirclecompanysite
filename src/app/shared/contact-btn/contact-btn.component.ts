import { Component, OnInit, Input, ElementRef, Renderer2 } from "@angular/core";
import { Router } from "../../../../node_modules/@angular/router";

@Component({
  selector: "app-contact-btn",
  templateUrl: "./contact-btn.component.html",
  styleUrls: ["./contact-btn.component.scss"]
})
export class ContactBtnComponent implements OnInit {
  @Input("color") color;
  constructor(
    private router: Router,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    if (this.color) {
      console.log(this.color);
      console.log(this.el)
      this.renderer.setStyle(this.el.nativeElement.children[0], 'background', this.color);
    }
  }

  submit() {
    console.log("contact");
    this.router.navigate(["/contact"]);
  }
}
