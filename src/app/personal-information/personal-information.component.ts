import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'El Horri Adam'],
    ['DOB', '18/06/2001'],
    ['Education', 'ESIEA Engineering school'],
    ['Interests', ' Artificial intelligence , Videography'],
  ];

  aboutMe: string[] = [
    `Hi, I'm Adam El Horri, a Bachelor of Computer Science graduate from the University of Le Havre.`,
    'Passionate about data science and eager to contribute to the industry.',
    'I have recently completed my studies and I am excited to start my career in the Data field.',
    'Throughout my professional and academic journey, I gained a solid foundation in data management principles and acquired practical skills in various programming languages, technologies and softwares.',
    'I am a quick learner and always open to exploring new technologies and expanding my knowledge.',
  ];

  constructor() {}

  ngOnInit(): void {}
}
