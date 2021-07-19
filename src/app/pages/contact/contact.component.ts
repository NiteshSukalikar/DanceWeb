import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';
import{ init } from 'emailjs-com';
init("user_DxTX2CUlyR3jLBCdCR7xG");

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private toastr: ToastrService) {}

  ngOnInit() {
    this.init();
  }
  init() {
    this.contactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      contact: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
    this.toastr.success('Submitted Sucessfully');
    var data = {
      service_id: 'service_pd3ub26',
      template_id: 'template_ac9y63v',
      user_id: 'user_DxTX2CUlyR3jLBCdCR7xG',
      template_params: {
          'subject': 'Enquiry',
          'name': this.contactForm.value.name,
          'from': this.contactForm.value.email,
          'contact': this.contactForm.value.contact,
          'message': this.contactForm.value.message
      }
  };
   
  $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json'
  }).done(function() {
      alert('Your mail is sent!');
  }).fail(function(error) {
      alert('Oops... ' + JSON.stringify(error));
  });
    this.contactForm.reset();


  }
}
