import { Component, OnInit, Input } from '@angular/core';

// routing part
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Params } from '@angular/router';

// githubService
import { GithubService } from '../github.service';

@Component({
  selector: 'app-user-org-detail',
  templateUrl: './user-org-detail.component.html',
  styleUrls: ['./user-org-detail.component.css']
})
export class UserOrgDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService
  ) { }
  @Input() userdata: any;
  username: string;
  // without promise
  extract_user_data(): void {
        // this.route.params
    // .switchMap((params: Params) => this.username=params['username']);

    this.githubService
    .get_user_data(this.username)
    .subscribe(data => {this.userdata = data.json(); } );
    // console.log(this.userdata);
  }

  // getting return promise
  extract_user_data_using_promise(): void {
    // this.route.params
    // .switchMap((params: Params) => this.username=params['username']);

    this.githubService
    .get_user_data(this.username)
    .then(data => {this.userdata = data.json(); } );

    // console.log(this.userdata);
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.username = params['username'];
        console.log(this.username); // this consoles the correct true/false value
      }
    );

    // using promise
    this.extract_user_data_using_promise();
    // without promise
    // this.extract_user_data();
  }

}
