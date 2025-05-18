import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // Define a new variable without const/var/let
  // You can access this variable from inside the templateUrls above
  // You have two ways to access this field:
  // 1. String interpolation wiht the {{  }}
  // 2. Property Binding
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // The get keyword actually exposes a proeprty not a function
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  // Add click event listener
  // Called as normal functions
  onSelectedUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
