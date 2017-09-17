import { Component, OnInit, Input } from '@angular/core';

import { GithubService } from '../github.service';

@Component({
  selector: 'repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  constructor(private githubService: GithubService) { }

  @Input() user_repo_url:string;
  repos: any[];
  ngOnInit() {
    this.get_list_of_repos();
  }

  get_list_of_repos():void{
    this.githubService.get_repos(this.user_repo_url)
      .subscribe(res => {this.repos = res.json(); console.log(res.json())});
  }
}
