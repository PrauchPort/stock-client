import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user-service/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  credentials = {username: '', password: ''};

  constructor(private userService: UserService, private http: HttpClient, private router: Router) {
  }

  login() {
    
    let url = 'http://localhost:8080/login';
    let result = this.http.post<Observable<Boolean>>(url, this.credentials)
    .subscribe( isValid => {
      if(isValid){
        sessionStorage.setItem(
          'token',
          btoa(this.credentials.username + ':' + this.credentials.password)
        );
        this.router.navigate(['']);
      }
      else
      {
        alert("Authentication failed");
      }
    })

  }

}