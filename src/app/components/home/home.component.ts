import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from 'domain/user';
import { UserService } from 'services/user/user.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;

  constructor(private userService: UserService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
     
  }

}
