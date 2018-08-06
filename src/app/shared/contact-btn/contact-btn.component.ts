import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-contact-btn',
  templateUrl: './contact-btn.component.html',
  styleUrls: ['./contact-btn.component.scss']
})
export class ContactBtnComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  submit() {
    console.log('contact');
    this.router.navigate(['/contact']);
  }

}
