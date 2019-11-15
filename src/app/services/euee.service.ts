import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EUEEService {
  euee: any;
  constructor() {

    this.euee = [{
      id: '1',
      uid: 'g9bu1',
      question: 'A renowned Ethiopian biomedical scientist and a long serving professor at Addis Ababa University is',
      A: 'Professor Beyene Petros',
      B: 'Professor Gabissa Ejeta',
      C: 'Professor Yalemtsehay Mekonnen',
      D: 'Professor Sebsebe Demissew',
      correctAns: 'A',
      description: 'Beyene Petros is a former professor of Biology at Addis Ababa University and biomedical Scientist'
    },
    {
      id: '2',
      uid: 'g9bu1',
      question: 'A renowned Ethiopian biomedical scientist and a long serving professor at Addis Ababa University is',
      A: 'Professor Beyene Petros',
      B: 'Professor Gabissa Ejeta',
      C: 'Professor Yalemtsehay Mekonnen',
      D: 'Professor Sebsebe Demissew',
      correctAns: 'B',
      description: 'Beyene Petros is a former professor of Biology at Addis Ababa University and biomedical Scientist'
    }, {
      id: '3',
      uid: 'g9bu1',
      question: 'A renowned Ethiopian biomedical scientist and a long serving professor at Addis Ababa University is',
      A: 'Professor Beyene Petros',
      B: 'Professor Gabissa Ejeta',
      C: 'Professor Yalemtsehay Mekonnen',
      D: 'Professor Sebsebe Demissew',
      correctAns: 'C',
      description: 'Beyene Petros is a former professor of Biology at Addis Ababa University and biomedical Scientist'
    }, {
      id: '4',
      uid: 'g9bu1',
      question: 'A renowned Ethiopian biomedical scientist and a long serving professor at Addis Ababa University is',
      A: 'Professor Beyene Petros',
      B: 'Professor Gabissa Ejeta',
      C: 'Professor Yalemtsehay Mekonnen',
      D: 'Professor Sebsebe Demissew',
      correctAns: 'D',
      description: 'Beyene Petros is a former professor of Biology at Addis Ababa University and biomedical Scientist'
    },
    ]
  }
}
