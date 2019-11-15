import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GradeService {
items: any
  constructor() {
this.items= [{
  id: 'g9',
  grade: 'Grade 9',
  imgSrc: 'grade9.png'
},
{
  id: 'g10',
  grade: 'Grade 10',
  imgSrc: 'grade10.png'
},
{
  id: 'g11',
  grade: 'Grade 11',
  imgSrc: 'grade11.png'
},
{
  id: 'g12',
  grade: 'Grade 12',
  imgSrc: 'grade12.png'
}]
  }
}
