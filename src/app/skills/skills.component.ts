import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'MySql',
      level: 'Advanced',
      rating: 80,
    },
    {
      name: 'PostgreSQL',
      level: 'Advanced',
      rating: 80,
    },
    {
      name: 'Python',
      level: 'Advanced',
      rating: 70,
    },
    {
      name: 'R language',
      level: 'Intermediate',
      rating: 70,
    },

    {
      name: 'JAVA',
      level: 'Advanced',
      rating: 80,
    },
    {
      name: 'Anaconda',
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'Advanced Mathematics (Algebra, Analysis, Probabilities)',
      level: 'Intermediate',
      rating: 70,
    },

    {
      name: 'Angular, Angular Material',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'ASP.NET Core, EF Core',
      level: 'Intermidiate',
      rating: 70,
    },
   
    

   
    {
      name: 'HTML, CSS, JS',
      level: 'Expert',
      rating: 90,
    },
   
    {
      name: 'C++',
      level: 'Intermidiate',
      rating: 70,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
