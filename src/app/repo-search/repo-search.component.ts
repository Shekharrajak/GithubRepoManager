import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from '../github.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.css']
})
export class RepoSearchComponent implements OnInit {

  constructor(
    private githubService: GithubService,    
    private route: ActivatedRoute,
    ) { }
  repo_search_url:string;
  @Input() repo_keyword:string;
  repo_list:any;
  total_count:number;
  ngOnInit() {

    console.log('from init: ');
    console.log(this.repo_list);

    this.route.params.subscribe(
      params => {
        this.repo_keyword = params['repo_keyword'];
        console.log(this.repo_keyword); // this consoles the correct true/false value
      }
    );

    this.extarct_repo_list();
  }

  extarct_repo_list():void{

    this.githubService.search_repo_by_keyword(this.repo_keyword)
    .subscribe(res => {
      this.repo_list = res.json().items;
      this.total_count = res.json().total_count;
       console.log(res.json().items);});
  }

}
