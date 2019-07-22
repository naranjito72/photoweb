import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  /*afegir username! */
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {

    this.registerForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        confirmPassword: ['']
      });

    }

  onSubmit() {
     console.log(this.registerForm);
     return this.authService.registerUser$(this.email.value, this.password.value).subscribe(
       data => {
       const token = data.accessToken; // recollida
       this.authService.setToken(token); // implantacio
       this.router.navigate(['users/login']);

     });


  }

  ngOnInit() {
  }

}
