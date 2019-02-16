import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user-service/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Demo';
  greeting = {};

  constructor(private userService: UserService, private http: HttpClient) {
    http.get('resource').subscribe(data => this.greeting = data);
  }

  ngOnInit()
  {

  }

  authenticated() { return this.userService.authenticated; }

}
