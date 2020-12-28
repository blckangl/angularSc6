import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {User} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isActiveSubject = new Subject<boolean>();
  currentUserSubject = new Subject<User>();
  currentUser = new User('ali0', 'ali@hotmail.com');

  getUser(): User {
    return this.currentUser;
  }

  updateUser(user: User): void {
    this.currentUser = user;
    this.currentUserSubject.next(this.currentUser);
  }


}
