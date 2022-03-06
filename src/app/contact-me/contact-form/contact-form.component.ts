import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ApiService } from './../../api.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  
  constructor(public rest:ApiService, private snackBar: MatSnackBar) { }
  matConfig = new MatSnackBarConfig;

  ngOnInit(): void {
  }

    contactForm = new FormGroup({
    projectTitle: new FormControl('', [Validators.required]),
    fullName: new FormControl('', [Validators.required]),
    emailAddress: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required])
  });

  get fc(){
    return this.contactForm.controls;
  }
  
  submit(){
      if(this.contactForm.status === 'VALID'){
        this.createContactMessage(this.contactForm.value);
      } 
      else {
        this.matConfig.verticalPosition = "top";
        this.matConfig.duration = 5000;
        let snackBarRef = this.snackBar.open("Form is invalid.", 'close', this.matConfig);
        snackBarRef.onAction().subscribe(()=> this.snackBar.dismiss());
      }

  }

  createContactMessage(contactFormValues) {
      this.rest.addContact(contactFormValues).subscribe((data: {}) => {
        // console.log(data);
        if (data) {
          this.matConfig.verticalPosition = "top";
          this.matConfig.duration = 5000;
          let snackBarRef = this.snackBar.open("Form submitted properly.", 'close', this.matConfig);
          snackBarRef.onAction().subscribe(()=> this.snackBar.dismiss());
          this.contactForm.reset();
        }
      });
    }
}
