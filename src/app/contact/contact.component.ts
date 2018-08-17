import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';

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
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [this.subjects[0] || '', Validators.required],
      message: ['', Validators.required],
    });
  }

  submitForm() {
    // console.log(this.contactForm);
    // console.log(this.contactForm.value);


    // const headers = new HttpHeaders()
    //   .append('Content-Type', 'application/x-www-form-urlencoded');
    // const params = new HttpParams();


    // params.set('name', this.contactForm.value.name);
    // params.set('email', this.contactForm.value.email);
    // params.set('subject', this.contactForm.value.subject);
    // params.set('message', this.contactForm.value.message);
    const body = `name=${this.contactForm.value.name}&email=${this.contactForm.value.email}&subject=${this.contactForm.value.subject}&message=${this.contactForm.value.message}`;
    this.http.post('/success', body)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.error(err);
        }
      );
  }

}
