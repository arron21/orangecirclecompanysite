import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';
import swal from 'sweetalert2';

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
    const body = `form-name=contact&name=${this.contactForm.value.name}&email=${this.contactForm.value.email}&subject=${this.contactForm.value.subject}&message=${this.contactForm.value.message}`;
    this.http.post('/', body, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
      .subscribe(
        res => {
          console.log(res);
          swal({
            title: 'Sent!',
            text: 'We have recieved your message.',
            type: 'success',
            confirmButtonText: 'Cool'
          });

          this.contactForm.reset();
        },
        err => {
          console.error(err);
          swal({
            title: 'Uh Oh!',
            text: 'Something wen\'t wrong.',
            type: 'error',
            confirmButtonText: 'Close'
          });
        }
      );
  }

}
