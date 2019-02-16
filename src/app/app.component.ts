import { Component } from '@angular/core';
import { UserService } from './shared/user-service/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private userService: UserService, private http: HttpClient, private router: Router) {
    this.userService.authenticate(undefined, undefined);

  }

  logout(){
    this.http.post('logout', {}).pipe(finalize( () => {
          this.userService.authenticated = false;
          this.router.navigateByUrl('/login');
    }
      )).subscribe();
  }

}
