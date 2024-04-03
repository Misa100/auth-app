import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email : any;
  password : any;

  constructor(private authService: AuthService){}

  onLogin(){
    const obj = {
      email :  this.email,
      password : this.password
    }
    console.log(obj)
    this.authService.login(obj).subscribe(data => {})
  }
}
