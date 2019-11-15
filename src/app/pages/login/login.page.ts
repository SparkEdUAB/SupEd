import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';
import { Storage } from '@ionic/storage';
import { MenuController } from '@ionic/angular'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userInfo = [];
  constructor(public menuCtrl: MenuController, private storage: Storage, private authService: AuthenticationService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.menuCtrl.enable(false);
  }
  login(form) {
     this.authService.login();

     this.userInfo.push(form.value);
     this.storage.set('UserInfo', this.userInfo)
     console.log(this.userInfo);
   }
   selectChange(){
    // console.log(value)
   }
}
