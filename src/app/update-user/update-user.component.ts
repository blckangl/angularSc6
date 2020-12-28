import {Component, OnInit} from '@angular/core';
import {User} from '../user.model';
import {UserService} from '../user.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {


  currentUser: User;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.currentUser = this.userService.getUser();
  }

  updateUser(form: NgForm) {

    const user = new User(form.value.username, form.value.email);

    console.log(user);

    this.userService.updateUser(user);

  };
}
