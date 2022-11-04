import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services';
import {MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  form: FormGroup;
  error = false;

  constructor(
    private authService: AuthService,
    private dialogRef: MatDialogRef<RegisterFormComponent>,
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


  register():void {
    this.authService.register(this.form.value).subscribe({
      next:()=>{
        this.router.navigate(['/login'])
      },
      error:()=>this.error = true
    })
  }
}
