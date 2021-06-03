import { Injectable } from '@angular/core';
import { ApiService } from '@services/api.service';
import { UserLogin, UserSession } from '@models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userSession: UserSession;

  constructor(private apiService: ApiService) { }

  async login(userLogin: UserLogin): Promise<UserSession> {

    this.apiService.processRequest('get', 'users', null).then(
      res => console.log(res)
    )
    .catch(err => {
      console.log(err);
    });

    if(userLogin.login === 'admin') {


      if(userLogin.password === 'admin') {
        this.userSession = {
          token: 'token'
        };
      }
    }

    return this.userSession;
  }
}
