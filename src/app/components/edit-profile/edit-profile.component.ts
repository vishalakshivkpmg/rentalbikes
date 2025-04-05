
import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../service/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-edit-profile',
  imports:[ CommonModule, FormsModule,HeaderComponent],
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user: Partial<User> = {};
  confirmPassword: string = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.userService.getUserById(+userId).subscribe(data => {
        this.user = data;
      });
    }
  }

  updateUser(): void {
    if (this.user.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.userService.updateUser(+userId, this.user).subscribe(() => {
        alert('User updated successfully');
        this.router.navigate(['user/profile']);
      });
    }
  }
}

