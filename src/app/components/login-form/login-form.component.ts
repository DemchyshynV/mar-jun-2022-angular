import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;
  error = false;

  constructor(
    private authService: AuthService,
    private dialogRef: MatDialogRef<LoginFormComponent>,
    private router: Router
  ) {
    this._initForm()
  }

  ngOnInit(): void {
  }

  _initForm(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  login(): void {
    this.authService.login(this.form.value).subscribe({
      next: () => {
        this.error = false;
        this.router.navigate(['/cars'])
        this.dialogRef.close()
      },
      error: () => {
        this.error = true
      }
    })
  }
}
