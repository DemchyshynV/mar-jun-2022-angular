import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.dialog.closeAll();
    })
  }
}
