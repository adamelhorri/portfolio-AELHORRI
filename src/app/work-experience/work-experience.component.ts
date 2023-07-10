import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Data digitalization and web developpement Internship ',
      company: "TE connetivity TFZ ",
      duration: 'Apr 2023 - Jul 2023',
      description: [
        'Creation and Management of Databases ',
        'Digitalizing of lending and tracking process of IT equipement',
        'Data Analisis and elaboration of Dynamic Dashboards'
      ],
    },
    {
      role: 'Micro entrepreneur',
      company: 'Student Pop',
      duration: '2021-2023',
      description: [
        'Managing of points of sale.',
        'Customer contact.',
        'Brand activation.',
      ],
    },
    {
      role: 'Freelance developer',
      company: "Fiverr platform",
      duration: '2021-2023',
      description: [
        'Worked on Web and Data developpement missions in teams or in solo',
        'Worked on Software developpement missions ',
      ],
    },
   
    
  ];
  constructor() {}

  ngOnInit(): void {}
}
