import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'TE Connectivity : ITEA (IT Equipement Attributer)',
      technologies: 'Angular, Angular Material, ASP.NET ,MySQL',
      description: [
        'Worked as a Data Scientist to create an adquate database for efficently tracking borrowed IT equipements',
        'Built multiple dashboards to capture and analyse the repartition of the equipements',
        'Developped a full Frontend+Backend intranet Webapp for digitalizing the process',
      ],
    },
    {
      title: 'Fiverr : developpement of multiple websites',
      technologies: 'Angular, Angular Material, ASP.NET ,PHP ,Javascript ,MySQL',
      description: [
        'Worked on multiple backends with interactive databases',
        'Worked on multiple frontends with using javasccript for dynamic designs',
   
      ],
    },
  
  ];
  projectsU: Project[] = [
   
    {
      title: 'Creation of interactive websites',
      technologies: 'HTML ,PHP ,CSS ,MySQL',
      description: [
        'worked in teams and in solo to develop interactive Web Apps',
        'worked on creating CRUD (create ,read ,update ,delete) websites for Sql data management'
      ],
    },
    {
      title: 'Realization of OOP programs',
      technologies: 'JAVAFX , JAVA Swing',
      description: [
        'worked in teams and in solo to develop advanced software applications',
        'developped multiple softwares for generating dashboards '
      ],
    },
    {
      title: 'Creation, supply and management of databases',
      technologies: 'MySQL , PostgreSQL',
      description: [
        'worked on modelizing and creating complex databases with multiple contraints',
        
      ],
    },
    {
      title: 'Developement of Android dynamic applications',
      technologies: 'Android studio , JAVA ',
      description: [
        'worked on developing fully functioning android APK applications '
      ],
    },
    {
      title: 'Realization of 2D video games',
      technologies: 'JAVA , C++ ,Processing , PHP ',
      description: [
        'Created simple 2D games to adapt and gain skills in multiple programming languages'
      ],
    },
  
  ];
  projectsP: Project[] = [
   
    {
      title: 'Bank Credit Simulator',
      technologies: 'Python (anacconda), Power BI, CSV',
      description: [
        'This project involved the creation of a bank credit simulator.',
        ' The process began with cleaning an open-source CSV database. An exploratory analysis was then conducted using mpl and seaborn, resulting in the creation of dashboards using power BI that defined profiles eligible for credit.'
      ],
    },
    {
      title: 'Virtual Company Sales Analysis',
      technologies: 'Python (anacconda), Power BI, CSV',
      description: [
        'This project involved analyzing the sales of a virtual company. The process began with cleaning a database using Python and Anaconda.',
        ' An exploratory analysis was then conducted using mpl and seaborn, resulting in the creation of dashboards that provided visibility into sales statistics, best sales combinations, and top customers.'
      ],
    }
    
  
  ];
  constructor() {}

  ngOnInit(): void {}
}
