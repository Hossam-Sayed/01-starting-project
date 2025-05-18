import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  Output,
  signal,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // Add input decorator
  // Receive the ID as input
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  // Event
  // Store the value of the event in 'select'
  // Add explicit event generic type for extra type safety
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  // Pass the ID back to the parent component when it is clicked
  onSelectedUser() {
    this.select.emit(this.id);
  }

  // Event flow is as follows:

  // 1. You have access to the user's ID via the above Input id field

  // 2. You bind the user click with emitting a new event in the
  // UserComponent via the above onSelectedUser function

  // 3. You bind the select event emitting with the onUserSelect
  // funciton defined in the AppComponent wich receives the user's ID and logs it
}
