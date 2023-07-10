import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
 
  
    {
      institute: 'University of Montpellier',
      course: "Master's degree in Artificial intelligence and Data science",
      duration: '2023-2025',
      score: '',
    }, 
     
    {
      institute: 'Le Havre Normandy University',
      course: "Bachelor's degree in Computer science",
      duration: '2019-2023',
      score: '',
    }, 
    {
      institute: "Emile Anouar",
      course: 'Baccalaureate with high honours in Mathematical and engineering sciences',
      duration: '2018-2019',
      score: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
