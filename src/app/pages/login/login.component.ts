import { Component, OnInit, inject } from '@angular/core';
import { BG_IMG_URL, LOGO_URL } from '../../constants/config';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    imports: [CommonModule, FormsModule, HeaderComponent]
})
export class LoginComponent implements OnInit {
  
  bgUrl = BG_IMG_URL;

  email!: string;
  password!: string;
  loginService = inject(LoginService);
  toasterService = inject(ToastrService);
  router = inject(Router);
  constructor() {}

  ngOnInit() {
    if (this.loginService.isLoggedIn) this.router.navigateByUrl('/browser');
  }

  onSubmit() {
    //validate email and pasword
    if (!this.email || !this.password) {
      this.toasterService.error('invalid email or password');
      return;
    }
    this.loginService.login(this.email, this.password);
    this.toasterService.success('logged in sucessfully');
    this.router.navigateByUrl('/browser');
  }
}
