import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentialsForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      username: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit(){
    this.authService.login(this.credentialsForm.value).subscribe();
  }

  signUp(){
    this.authService.register(this.credentialsForm.value).subscribe(res => {
      //Llama a Login para automáticamente hacer login con el nuevo usuario
      this.authService.login(this.credentialsForm.value).subscribe();
    })
  }

}
