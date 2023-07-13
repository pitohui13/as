import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPageForm } from './login.page.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  form!: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) { }
  
  /*public form = {
    Username: "",
    Password: ""
  }*/

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();
    }
  login() {
    this.router.navigate(['dashboard']);
  }
  login2() {
    this.router.navigate(['dashboard2']);
  }
  /*print() {
    console.log(this.form);
  }*/
}
