import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user-service/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  credentials = {username: '', password: ''};

  constructor(private userService: UserService, private http: HttpClient, private router: Router) {
  }

  login() {
    this.userService.authenticate(this.credentials, () => {
        this.router.navigateByUrl('/');
    });
    return false;
  }

}