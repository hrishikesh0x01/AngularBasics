import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

///////////////////////////////////////////////////////////////////
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  public submitted: boolean;

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private router: Router
  ) {
    this.submitted = false;
  }

  ngOnInit(): void {
    this._authService.checkAuth().subscribe((res) => {
      console.log(res);
    }, (error) => {
      console.log("oookkk", error);
    });

    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  public onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this._authService.login(this.loginForm.value).subscribe((res) => {
        console.log(res.token);
        this._authService.setToken(res.token);
        this.router.navigateByUrl("/data-binding");
      });
    }
  }
}
