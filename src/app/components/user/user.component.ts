import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {IUser} from '../../interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUser;

  @Output()
  liftUser = new EventEmitter<IUser>()

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  lift(): void {
    this.liftUser.emit(this.user)
  }

  getDetails(): void {
    this.router.navigate([this.user.id], {
      relativeTo: this.activatedRoute,
      state: {user: this.user}
    })
  }
}
