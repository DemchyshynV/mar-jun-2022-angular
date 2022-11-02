import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string | null;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.getUserName().subscribe(value => this.username = value)
  }

}
