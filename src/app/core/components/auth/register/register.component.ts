import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;
  public submitted: boolean;

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private router: Router
  ) {
    this.submitted = false;
  }

  ngOnInit(): void {
    this.registerForm = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this._authService.register(this.registerForm.value).subscribe((res) => {
        console.log(res.token);
        this.router.navigateByUrl("/login");
      });
    }
  }
}
