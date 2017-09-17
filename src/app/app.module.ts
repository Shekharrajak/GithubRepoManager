import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GithubService} from './github.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NavHeadComponent } from './nav-head/nav-head.component';
import { UserOrgDetailComponent } from './user-org-detail/user-org-detail.component';
import { CustomCssComponent } from './custom-css/custom-css.component';
// for routing 
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReposComponent } from './repos/repos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavHeadComponent,
    UserOrgDetailComponent,
    CustomCssComponent,
    HomeComponent,
    ReposComponent
  ],
  imports: [
    BrowserModule, 
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent 
      },
      {
        path:'',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'user/:username',
        component: UserOrgDetailComponent
      }
    ])
  ],
  providers: [GithubService],
  bootstrap: [AppComponent, NavHeadComponent, CustomCssComponent]
})
export class AppModule { }
