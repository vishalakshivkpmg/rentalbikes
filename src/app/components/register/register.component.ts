import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name: string='';
  email: string='';
  password: string='';
  phone: string='';
  address: string='';

  constructor(private http: HttpClient,
    private router: Router){}

  onRegister(){
    const user ={
      name:this.name,
      email:this.email,
      password:this.password,
      phone:this.phone,
      address:this.address    
    };

  this.http.post('http://localhost:8084/users/register',user).subscribe(
    (response) => {
      console.log('User registered',response);
      alert('Registeration successful! Please login in.');
      this.router.navigate(['user/login']);
    },(error)=> {
      console.error('Registeration error:',error);
      alert('Registeration failed, Please try again');
    }
  );
  }
  

}
