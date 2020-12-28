import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private router: ActivatedRoute, private userService: UserService) {
  }

  id: string;
  isActivated = false;

  ngOnInit(): void {
    this.router.params.subscribe((param) => {
      this.id = param.id;
    });

    this.userService.isActiveSubject.subscribe((state) => {
      this.isActivated = state;
    });
  }

}
