import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  subject;
  subjects: any = [
      'General Question',
      'Coding',
      'Copywriting',
      'Artwork',
      'SEO',
      'AdWords',
      'Websites'
  ];


  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.createForm();
  }

  ngOnInit() {

  }

  createForm() {
      this.contactForm = this.fb.group({
          name: ['', Validators.required  ],
          email: ['', [Validators.required, Validators.email]  ],
          subject: [this.subjects[0] || '', Validators.required  ],
          message: ['', Validators.required  ],
      });
  }

  submitForm() {
    // console.log(this.contactForm);
    // console.log(this.contactForm.value);

    this.http.post('/', { 'form-name': 'contact', ...this.contactForm.value }).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

}
