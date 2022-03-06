import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { SingleBlogModule } from '../single-blog/single-blog.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    SingleBlogModule,
    RouterModule
  ],
  exports: [BlogComponent]
})
export class BlogModule { }
