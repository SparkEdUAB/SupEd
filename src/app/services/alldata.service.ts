import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlldataService {
items: any;
  constructor() {
    this.items = [
      {  id: '9b1',
         episode:1,
         title:'The Microscope Part I',
         src:'bio-unit2-Eps1'
      },
      {
         id: '9b2',
         episode:1,
         title:'The Microscope Part I',
         src:'bio-unit2-Eps1'

      },
      {
         id: '9b3',
         episode:2,
         title:'The Microscope part II',
         src:'bio-unit2-Eps2'
      },
      {  id: '9b4',
         episode:3,
         title:'Basic Techniques of a Microscope',
         src:'bio-unit2-Eps3'
      },
      {
         id: '9b5',
         episode:5,
         title:'Cell Type, size and shape',
         src:'bio-unit2-Eps5'
      },
      {
         id: '9b6',
         episode:9,
         title:'Comparing plant and Animal Cells',
         src:'bio-unit2-Eps9'
      },
      {
         id: '9b7',
         episode:11,
         title:'Permeability of the Cell Membrane',
         src:'bio-unit2-Eps11'
      },
      {
         id: '9b8',
         episode:12,
         title:'Diffusion',
         src:'bio-unit2-Eps12'
      },
      {
         id: '9b9',
         episode:13,
         title:'Osmosis',
         src:'bio-unit2-Eps13'
      },
      {
         id: '9b10',
         episode:14,
         title:'Isotonic,Hypotonic and Hypertonic Conditions',
         src:'bio-unit2-Eps14'
      },
      {
         id: '9b11',
         episode:15,
         title:'Isotonic,Hypotonic and Hypertonic Conditions',
         src:'bio-unit2-Eps15'
      }
    ]

   }
   filterItems(searchTerm){
     return this.items.filter((item) => {
       const searchFields:string[] = ['title'];
       if (searchFields.some((field) => {
         return item[field].toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
       })) {
         return 'Not found';
       }

     });
   }
   getFavorites(searchTer){

     return this.items.filter((item) => {
       const searchFields:string[] = ['id'];
       if (searchFields.some((field) => {
         return item[field].toLowerCase().indexOf(searchTer.toLowerCase()) > -1;
       })) {
         return 'Not found';
       }

     });

   }
}
