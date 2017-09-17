import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GithubService {

  constructor(private http: Http) { }

  private git_user_api = 'https:///api.github.com/users';
  private git_search = 'https://api.github.com/search';
  private users = 'users'
  get_user_data(username: string):any{
    const url = `${this.git_user_api}/${username}`;
    console.log(url);
    return this.http.get(url);
  }

  // TODO:
  // refer : https://developer.github.com/v3/search/#search-users
  get_user_data_from_id(id: number){
    const url = `${this.git_search}/${this.users}`
    console.log(url);
    return 
  }
}
