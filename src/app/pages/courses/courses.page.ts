import {OnInit } from '@angular/core';

import {ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { UnitService  } from './../../services/unit.service';
import { Platform } from '@ionic/angular';
// import { File } from '@ionic-native/file/ngx';
import { Component } from '@angular/core';
// import { FileOpener } from '@ionic-native/file-opener/ngx';
// import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
// import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FormControl } from '@angular/forms';
// import { Device } from '@ionic-native/device/ngx';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {
 val:any;
 items = [];
 resource = [];
 listCourses = [];
 unitResource = [];
 searchTerm: string = '';
 searchControl: FormControl;
 title:string;
  constructor(private router: Router, private platform: Platform, private route: ActivatedRoute, private unitService: UnitService,
     // private file: File,
     //  private ft: FileTransfer,
     //  private fileOpener: FileOpener,
     //  private document: DocumentViewer,
    ) { }

  ngOnInit() {
   this.val  =  this.route.snapshot.paramMap.get('id');
   this.loadCourses();
  //  console.log('Device UUID is: ' + this.device.uuid);
  }

  loadCourses(){
    switch(this.val){
      case 'Grade Nine':
      this.items = this.unitService.items;
      // this.listCourses = this.gradeNine.course;
      this.title = 'Grade 9'
      // let value = this.items
      // for (let key in value){
      //   this.resource.push(this.items[key])
      // }
      console.log(this.items)
      break;
      // case 'gradeTen':
      // this.items = this.grade1.maths;
      // this.title = '1ይ ክፍሊ ሒሳብ'
      // break;
      // case 'scie':
      // this.items = this.grade1.Science;
      // this.title = '1ይ ክፍሊ ከባቢያዊ ሳይንስ '
      // break;

  }
  }

  // openPdf(src) {
  //   let filePath = this.file.applicationDirectory + 'www/assets';
  //
  //  if (this.platform.is('android')) {
  //    let fakeName = Date.now();
  //    this.file.copyFile(filePath, 'bio-Grade9-Unit2.pdf', this.file.dataDirectory, `${fakeName}.pdf`).then(result => {
  //      this.fileOpener.open(result.nativeURL, 'application/pdf')
  //        .then(() => console.log('File is opened'))
  //        .catch(e => console.log('Error opening file', e));
  //    })
  //  } else {
  //    // Use Document viewer for iOS for a better UI
  //    const options: DocumentViewerOptions = {
  //      title: 'My PDF'
  //    }
  //    this.document.viewDocument(`${filePath}/5-tools.pdf`, 'application/pdf', options);
  //  }
  //
  // }
  openUnits(id, cour){
    // this.unitResource.push(cour)
    this.unitResource.push(this.items[id].data),
    console.log(this.unitResource);
    let navigationExtras: NavigationExtras = {
      state: {

        units: this.unitResource[0],
        displyTitle: cour
      }
    };
    this.router.navigate(['unit'], navigationExtras);
    // switch(this.val){
    //   case 'Grade Nine':
    //   // this.items = this.gradeNine.Biology;
    //   console.log(this.items)
    //
    //   break;
    // }

  }
  openVideo(vSrc){

    let i = vSrc-1;
    let j = this.items[i].video.length;
    this.resource = [];
    this.resource.push(this.items[i].url)
    for(let k=0;k<j;k++){
      this.resource.push(this.items[i].video[k])

    }
    let navigationExtras: NavigationExtras = {
      state: {

        user: this.resource
      }
    };
    this.router.navigate(['video'], navigationExtras);
  }
    // this.router.navigate(['video', { data:this.resource }])



}
