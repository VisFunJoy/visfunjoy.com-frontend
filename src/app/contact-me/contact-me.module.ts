import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMeComponent } from './contact-me.component';
import { ContactFormModule } from './contact-form/contact-form.module';


@NgModule({
  declarations: [ContactMeComponent],
  imports: [
    CommonModule,
    ContactFormModule
  ],
  exports: [ContactMeComponent]
})
export class ContactMeModule { }
