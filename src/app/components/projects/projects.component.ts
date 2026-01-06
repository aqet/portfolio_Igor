import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('700ms ease-out')
      ])
    ])
  ],
  imports: [NgFor]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Battleship',
      desc: 'Jeu de bataille navale codé en Javascript.',
      img: '/assets/battleship.jpg'
    },
    {
      title: 'Movie Title API',
      desc: 'API permettant de rechercher des films par titre.',
      img: '/assets/movie-api.jpg'
    },
    {
      title: 'Calculator',
      desc: 'Calculatrice Javascript responsive.',
      img: '/assets/calculator.jpg'
    }
  ];
}
