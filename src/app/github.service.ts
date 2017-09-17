import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GithubService {

  constructor(private http: Http) { }

  private git_user_api = 'https:///api.github.com/users';
  get_user_data(username: string):any{
    const url = `${this.git_user_api}/${username}`;
    console.log(url);
    return this.http.get(url);
  }
}
