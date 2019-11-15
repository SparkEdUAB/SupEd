import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-euee',
  templateUrl: './euee.page.html',
  styleUrls: ['./euee.page.scss'],
})
export class EUEEPage implements OnInit {
  // @ViewChild('inputValue', { read: ElementRef}) inputValue: ElementRef;
items = [];
radioValue;
correctAns = [];
  constructor(private router: Router, private route: ActivatedRoute,) {
    this.route.queryParams.subscribe(params => {
     if (this.router.getCurrentNavigation().extras.state) {
       this.items = this.router.getCurrentNavigation().extras.state.euee;

       // this.items.shift();
       console.log(this.items)

     }
   });
  }
  checkAnswer(event, id){
    // document.getElementById(id).style.backgroundColor = '#32aa14';

    // document.getElementById('A').style.backgroundColor = '#32aa14';
       this.correctAns = this.items.filter(items => items.id == id);
        console.log(this.correctAns);
        let correct = this.correctAns[0].correctAns;
        if(correct == event.detail.value){
          document.getElementById(id).style.backgroundColor = '#32aa14';
          console.log('correct')
        }else{
          console.log('incorrect')
        }


    console.log(id);

  }

  ngOnInit() {
  }

}
