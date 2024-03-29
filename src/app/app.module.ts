import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile.service';
import { from } from 'rxjs';
// import { GithubFormComponent } from './github-form/github-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DateCountPipe } from './date-count.pipe';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { AboutComponent } from './about/about.component';
// import { GithubComponent } from './github/github.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    // GithubFormComponent,
    NavbarComponent,
    DateCountPipe,
    ProfileDetailComponent,
    AboutComponent,
    // GithubComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
