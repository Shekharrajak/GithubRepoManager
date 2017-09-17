import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() username:string;
  userdata:any;

  constructor(private githubService: GithubService){}

  fetch_user_data():void{
    this.githubService.get_user_data(this.username)
      .subscribe(res => {this.userdata = res.json(); console.log(res.json());})
  }
  ngOnInit() {
  }

  put_rqst():void{
    this.githubService.put_rqst();
  }

}
