import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppSharedDataService } from 'src/app/app-shared-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  isPasswordVisible = false;
  version = environment.versionPkg;

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private fb: FormBuilder,
    private appSharedDataService: AppSharedDataService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.fb.group({
      emailCpf: [''],
      password: ['']
    });
  }

  submit() {
    this.appSharedDataService.setLogin(true);
    this.router.navigate(['dashboard']);
  }


  onEmailCpfInput(event: any) {
    const input = event.target;
    let value = input.value.replace(/\D/g, '');

    if (/^\d+$/.test(value)) {
      if (value.length > 11) {
        value = value.slice(0, 11);
      }

      let maskedValue = value;
      if (value.length > 3) {
        maskedValue = value.slice(0, 3) + '.' + value.slice(3);
      }
      if (value.length > 6) {
        maskedValue = maskedValue.slice(0, 7) + '.' + value.slice(6);
      }
      if (value.length > 9) {
        maskedValue = maskedValue.slice(0, 11) + '-' + value.slice(9);
      }

      input.value = maskedValue;
      this.loginForm.get('emailCpf')?.setValue(maskedValue, { emitEvent: false });
    } else {
      this.loginForm.get('emailCpf')?.setValue(input.value, { emitEvent: false });
    }
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  hasValue(controlName: string): boolean {
    return this.loginForm.get(controlName)?.value?.length > 0;
  }
}
