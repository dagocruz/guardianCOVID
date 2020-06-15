import { Component, OnInit } from '@angular/core';

import { AuthService } from "../../services/auth.service";
import { Storage } from "@ionic/storage";


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  data = '';

  constructor(private authService: AuthService, private storage: Storage) { }

  ngOnInit() {
    this.authService.getSpecialData().subscribe(res => {
      console.log(res);
      this.data = res['msg'];
    });
  }

}
