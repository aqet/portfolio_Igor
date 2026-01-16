import { Component, Inject } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { DOCUMENT, NgFor, NgIf } from '@angular/common';

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
  imports: [NgFor, NgIf]
})
export class ProjectsComponent {

  constructor(@Inject(DOCUMENT) private document: Document){}

  projects = [
    {
      title: 'Task Management frontend',
      desc: 'Application de gestion de tâches collaborative avec système de notifications en temps réel.',
      img: 'todo-image-front.png',
      features: ['Authentification', 'Gestion de Profil', 'Notifications', 'Drag & Drop'],
      technologies: ['Angular', 'TypeScript'],
      status: 'completed',
      statusLabel: 'Terminé',
      date: 'janvier 2026',
      demoUrl: '',
      codeUrl: 'https://github.com/aqet/todo-app-angular'
    },
    {
      title: 'Task Management frontend',
      desc: 'API REST Todo App développée avec NestJS, MongoDB et authentification JWT, incluant un système de gestion de tâches par colonnes avec notifications email automatiques.',
      img: 'todo-image-back.png',
      features: ['Authentification JWT', 'Notifications Email', 'Architecture NestJS', 'Sécurité & Configuration'],
      technologies: ['nestjs', 'mongoseDB', 'nodemailer'],
      status: 'completed',
      statusLabel: 'Terminé',
      date: 'janvier 2026',
      demoUrl: '',
      codeUrl: 'https://github.com/aqet/todo-app-nestjs'
    },
    {
      title: 'Portfolio Website',
      desc: 'Site portfolio moderne et responsive avec animations fluides et design professionnel.',
      img: 'projet.png',
      features: ['Animations CSS', 'SEO optimisé', 'Contact form', 'Blog intégré'],
      technologies: ['Angular', 'SCSS', 'TypeScript', 'Firebase'],
      status: 'in-progress',
      statusLabel: 'En cours',
      date: 'Janvier 2025',
      demoUrl: '',
      codeUrl: '#'
    },
    {
      title: 'Weather Dashboard',
      desc: 'Dashboard météo interactif avec prévisions détaillées et géolocalisation.',
      img: 'projet.png',
      features: ['API météo', 'Géolocalisation', 'Graphiques', 'Prévisions 7j'],
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'CSS3'],
      status: 'completed',
      statusLabel: 'Terminé',
      date: 'Octobre 2024',
      demoUrl: '',
      codeUrl: '#'
    }
  ];

  scrollTo(sectionId: string): void {
    const el = this.document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
