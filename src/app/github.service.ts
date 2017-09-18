import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GithubService {

  constructor(private http: Http) { }

  private git_user_api = 'https:///api.github.com/users';
  private git_search = 'https://api.github.com/search';
  private users = 'users';
  private  repositories = 'repositories?q=';

  // To get the userdata of github profile
  // returns the observable.
  get_user_data_without_promise(username: string):any{
    const url = `${this.git_user_api}/${username}`;
    console.log(url);
    return this.http.get(url);
  }

  get_user_data(username: string):any{
    const url = `${this.git_user_api}/${username}`;
    console.log(url);
    return this.http.get(url)
      .toPromise()
      .catch(this.handleError);;
  }

  // TODO:
  // refer : https://developer.github.com/v3/search/#search-users
  get_user_data_from_id(id: number){
    const url = `${this.git_search}/${this.users}`
    console.log(url);
    return 
  }

  get_repos(user_repo_url:string):any{
    return this.http.get(user_repo_url);
  }

  get_search_repo_url(repo_keyword:string):string{
    const url = `${this.git_search}/${this.repositories}${repo_keyword}`;
    console.log(url);
    console.log(this.git_search + (this.repositories) + (repo_keyword));
    console.log(repo_keyword);
    return url;

  }

  search_repo_by_keyword(repo_keyword: string):any{
    const url = this.get_search_repo_url(repo_keyword);
    return this.http.get(url);  
  }

  private handleError(error: any): Promise<any>{
    console.error('An error occured', error);// for demo error
    return Promise.reject(error.message || error);
  }

  put_rqst():void{
    console.log(JSON.stringify({a: 112}));
    this.http.post('http://192.168.43.234:8080/a.json',JSON.stringify( '{a: 112}'));//,headers:{'Content-Type': 'application/json'});
    this.http.get('http://192.168.43.234:8080/a.json').subscribe(res=> {console.log(res)})
  }
}
