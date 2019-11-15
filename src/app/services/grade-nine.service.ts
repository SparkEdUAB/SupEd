import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GradeNineService {
course:any;
nine:any;
  constructor() {
    this.course =[{id:0,
                   course:'Biology',
                   img:'assets/imgs/biology.png'},
                   {id:1,
                   course:'Chemistry',
                   img:'assets/imgs/chemistry.png'},
                   {course:'Mathematics',
                   img:'assets/imgs/mathematics.png'},
                   {course:'Physics',
                   img:'assets/imgs/physics.png'},
                   {course:'English',
                   img:'assets/imgs/english.png'},
                   {course:'Geography',
                   img:'assets/imgs/geography.png'},
                   {course:'Civics',
                   img:'assets/imgs/civics.png'},
                   {course:'ICT',
                   img:'assets/imgs/ICT.png'},
                   {course:'አማርኛ',
                   img:'assets/imgs/አማርኛ.png'},
                 ],

    this.nine =[
      { data: [{
      unit:1,
      title:'Biology and Technology',
      descrption:'Schistosomiasis (also Known as bilharziasis)is a common parsitic diease.It affects 200-300 million people in Africa(including Ethiopia),South America,Asia and parts of the Caribbean',
      textbook:'bio-Grade9-unit1',
      url:'grade9/Biology/resources/bio_un2/',
      video:[
         {  id: '9b1',
            episode:1,
            title:'The Microscope Part I',
            src:'bio-unit2-Eps1'
         },


      ]
   },
      {
         unit:2,
         title:'Cell Biology',
         descrption:'Biologists use different tools to help them study living organisms.One of the most important is the microscoope.Many important organisms are very small and biologists need to be able to see them.',
         textbook:'bio-Grade9-unit1',
         url:'grade9/Biology/resources/bio_un2/',
         video:[
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
            },

         ]
      },
      {
         unit:3,
         title:'Human Biology and health',
         descrption:'Food is the source of nutrients and energy for the body.It usually comes from an imals or plants and is taken in to the body where it is broken down to provide the nutrients needed by the body.',
         textbook:'bio-Grade9-unit1',
         video:[
            {
               episode:1,
               title:'The Microscope Part I',
               src:'bio-unit2-Eps1'
            },
            {
               episode:2,
               title:'The Microscope part II',
               src:'bio-unit2-Eps1'
            },
            {
               episode:3,
               title:'Basic Techniques of a Microscope',
               src:'bio-unit3-Eps1'
            },
            {
               episode:5,
               title:'Cell Type, size and shape',
               src:'bio-unit2-Eps1'
            },

         ]
      },
      {
         unit:4,
         title:'Micro-organisms and disease',
         descrption:'Micro-organisms are tiny living organisms that are usually too small to be seen with the naked eye.To see them we need to use a microscope.In fact the definition of micro-organism is an organism that can only be seen with the aid of a microscope.',
         textbook:'bio-Grade9-unit1',
         video:[
            {
               episode:1,
               title:'The Microscope Part I',
               src:'bio-unit2-Eps1'
            },
            {
               episode:2,
               title:'The Microscope part II',
               src:'bio-unit2-Eps1'
            },
            {
               episode:3,
               title:'Basic Techniques of a Microscope',
               src:'bio-unit3-Eps1'
            },
            {
               episode:5,
               title:'Cell Type, size and shape',
               src:'bio-unit2-Eps1'
            },
            {
               episode:1,
               title:'The Microscope Part I',
               src:'bio-unit2-Eps1'
            },
            {
               episode:2,
               title:'The Microscope part II',
               src:'bio-unit2-Eps1'
            },
            {
               episode:3,
               title:'Basic Techniques of a Microscope',
               src:'bio-unit3-Eps1'
            },
            {
               episode:5,
               title:'Cell Type, size and shape',
               src:'bio-unit2-Eps1'
            },
            {
               episode:1,
               title:'The Microscope Part I',
               src:'bio-unit2-Eps1'
            },
            {
               episode:2,
               title:'The Microscope part II',
               src:'bio-unit2-Eps1'
            },
            {
               episode:3,
               title:'Basic Techniques of a Microscope',
               src:'bio-unit3-Eps1'
            },
            {
               episode:5,
               title:'Cell Type, size and shape',
               src:'bio-unit2-Eps1'
            },
            {
               episode:1,
               title:'The Microscope Part I',
               src:'bio-unit2-Eps1'
            },
            {
               episode:2,
               title:'The Microscope part II',
               src:'bio-unit2-Eps1'
            },
            {
               episode:3,
               title:'Basic Techniques of a Microscope',
               src:'bio-unit3-Eps1'
            },
            {
               episode:5,
               title:'Cell Type, size and shape',
               src:'bio-unit2-Eps1'
            },

         ]
      },
      {
         unit:5,
         title:'Classification',
         descrption:'Classifying living organisms is central to understanding the variety of life of Earth.Scientists group organisms together in different ways, as you will see shortly.But the most important unit of classification is the species.',
         textbook:'bio-Grade9-unit1',
         video:[
            {
               episode:1,
               title:'The Microscope Part I',
               src:'bio-unit2-Eps1'
            },
            {
               episode:2,
               title:'The Microscope part II',
               src:'bio-unit2-Eps1'
            },
            {
               episode:3,
               title:'Basic Techniques of a Microscope',
               src:'bio-unit3-Eps1'
            },
            {
               episode:5,
               title:'Cell Type, size and shape',
               src:'bio-unit2-Eps1'
            },
          ]
        },
        {
           unit:6,
           title:'Environment',
           descrption:'The abiotic components or factors are the non-living elements of an ecosystem.The climate and weather produce several important abiotic components.They include the amount of sunlight and the amount of rainfall.',
           textbook:'bio-Grade9-unit1',
           video:[
              {
                 episode:1,
                 title:'The Microscope Part I',
                 src:'bio-unit2-Eps1'
              },
              {
                 episode:2,
                 title:'The Microscope part II',
                 src:'bio-unit2-Eps1'
              },
              {
                 episode:3,
                 title:'Basic Techniques of a Microscope',
                 src:'bio-unit3-Eps1'
              },
              {
                 episode:5,
                 title:'Cell Type, size and shape',
                 src:'bio-unit2-Eps1'
              },
            ]
          }
         ]
      }

   ]
  }

  // filterItems(searchTerm){
  //   return this.items.filter((item[].) => {
  //     const searchFields:string[] = ['engtitle', 'tgretitle','id'];
  //     if (searchFields.some((field) => {
  //       return item[field].toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  //     })) {
  //       return 'Not found';
  //     }
  //
  //   });
  // }
}
