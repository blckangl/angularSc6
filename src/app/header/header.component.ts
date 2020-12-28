import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private toggleValue = false;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }


  toggleActivateUser(): void {
    this.toggleValue = !this.toggleValue;
    this.userService.isActiveSubject.next(this.toggleValue);
  }

}
