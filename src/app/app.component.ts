import { Component, Input, OnInit } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @Input() username: string;
  userdata: any;

  constructor(private githubService: GithubService) { }

  fetch_user_data(): void {
    this.githubService.get_user_data(this.username)
      .subscribe(res => {this.userdata = res.json(); console.log(res.json()); }
    );
  }
}
