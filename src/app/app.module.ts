import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HomeComponent } from './home/home.component';
import { NavbarModule } from './navbar/navbar.module';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { FooterModule } from './footer/footer.module';
import { HomeModule } from './home/home.module';
import { ContactFormModule } from './contact-me/contact-form/contact-form.module';
import { ContactMeModule } from './contact-me/contact-me.module';
import { AboutModule } from './about/about.module';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { BlogModule } from './blog/blog.module';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'single-blog', component: SingleBlogComponent },
  { path: 'contact-me', component: ContactMeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarModule,
    FooterModule,
    HomeModule,
    BlogModule,
    ContactMeModule,
    ContactFormModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
