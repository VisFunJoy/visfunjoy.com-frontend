import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleBlogComponent } from './single-blog.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SingleBlogComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SingleBlogComponent]
})
export class SingleBlogModule { }
