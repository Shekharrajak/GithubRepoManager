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
import { RepoSearchComponent } from './repo-search/repo-search.component';
import { SavedReposComponent } from './saved-repos/saved-repos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavHeadComponent,
    UserOrgDetailComponent,
    CustomCssComponent,
    HomeComponent,
    ReposComponent,
    RepoSearchComponent,
    SavedReposComponent
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
        path:'saved_details',
        component: SavedReposComponent 
      },
      {
        path: 'user/:username',
        component: UserOrgDetailComponent
      },
      {
        path: 'repo_search/:repo_keyword',
        component: RepoSearchComponent
      }
    ])
  ],
  providers: [GithubService],
  bootstrap: [AppComponent, NavHeadComponent, CustomCssComponent]
})
export class AppModule { }
