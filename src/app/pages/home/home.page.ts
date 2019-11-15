                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlldataService } from './../../services/alldata.service';
import { GradeService } from './../../services/grade.service';
import { FormControl } from '@angular/forms';
import { MenuController } from '@ionic/angular'

// import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
// import { Uid } from '@ionic-native/uid/ngx';
// import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
// import { AppUpdate } from '@ionic-native/app-update/ngx';
// import 'rxjs/add/operator/debounceTime';

// import { Device } from '@ionic-native/device/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  searchTerm: string = '';
  searchControl: FormControl;
  items = [];
  UniqueDeviceID:string;
  constructor(
    // private uniqueDeviceID: UniqueDeviceID,
    //  private uid: Uid,
    //  private androidPermissions: AndroidPermissions,
     public menuCtrl: MenuController,
     private grade:GradeService,
     private alldata:AlldataService, private router: Router, public navCtr: NavController) {
    // console.log('Device UUID is: ' + this.device.uuid);
   //  const updateUrl = 'http://172.16.0.24/update.xml';
   // this.appUpdate.checkAppUpdate(updateUrl).then(() => { console.log('Update available') });
  this.searchControl = new FormControl();
  // this.getPermission();
  }

ngOnInit(){
  // this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
  //
  //   this.setFilteredItems();
  //
  // });
  console.log(this.grade.items)



}
ionViewWillEnter(){
  this.menuCtrl.enable(true);
}
  gradeNine(id){
  this.router.navigate(['courses', { id:id }])
  }
  setFilteredItems() {
   this.items = this.alldata.filterItems(this.searchTerm);
   console.log(this.items);
  }
  // getUniqueDeviceID() {
  //     this.uniqueDeviceID.get()
  //       .then((uuid: any) => {
  //         console.log(uuid);
  //         this.UniqueDeviceID = uuid;
  //       })
  //       .catch((error: any) => {
  //         console.log(error);
  //         this.UniqueDeviceID = "Error! ${error}";
  //       });
  //   }


    // getID_UID(type){
    //   if(type == "IMEI"){
    //     return this.uid.IMEI;
    //   }else if(type == "ICCID"){
    //     return this.uid.ICCID;
    //   }else if(type == "IMSI"){
    //     return this.uid.IMSI;
    //   }else if(type == "MAC"){
    //     return this.uid.MAC;
    //   }else if(type == "UUID"){
    //     return this.uid.UUID;
    //   }
    // }


    // getPermission(){
    //   this.androidPermissions.checkPermission(
    //     this.androidPermissions.PERMISSION.READ_PHONE_STATE
    //   ).then(res => {
    //     if(res.hasPermission){
    //
    //     }else{
    //       this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE).then(res => {
    //         alert("Persmission Granted Please Restart App!");
    //       }).catch(error => {
    //         alert("Error! "+error);
    //       });
    //     }
    //   }).catch(error => {
    //     alert("Error! "+error);
    //   });
    // }
}
