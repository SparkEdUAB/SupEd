import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { EUEEService } from './../../services/euee.service';
import { UnitService } from './../../services/unit.service';


@Component({
  selector: 'app-unit',
  templateUrl: './unit.page.html',
  styleUrls: ['./unit.page.scss'],
})
export class UnitPage implements OnInit {
  items = [];
  resource = [];
  title: string;
  euee = [];
  constructor(private router: Router, private route: ActivatedRoute, private eue: EUEEService, private uni: UnitService) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.items = this.uni.filterItems('g9b');
        this.title = this.router.getCurrentNavigation().extras.state.displyTitle;
        // this.items.shift();
        console.log(this.items)

      }
    });
  }

  ngOnInit() {
    this.euee = this.eue.euee;
    console.log(this.uni.filterItems('g9b'));
  }

  openVideo(vSrc) {

    let i = vSrc - 1;
    let j = this.items[i].video.length;
    this.resource = [];
    this.resource.push(this.items[i].url)
    for (let k = 0; k < j; k++) {
      this.resource.push(this.items[i].video[k])

    }
    let navigationExtras: NavigationExtras = {
      state: {

        user: this.resource
      }
    };
    this.router.navigate(['video'], navigationExtras);
  }

  openEuee() {
    let navigationExtras: NavigationExtras = {
      state: {

        euee: this.euee
      }
    };
    this.router.navigate(['euee'], navigationExtras);

  }
  openPdf(textbookUrl){
    console.log(textbookUrl);
  }

}
