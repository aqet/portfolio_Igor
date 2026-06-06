import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  imports: [NgFor]
})
export class ServicesComponent {
  services = [
    {
      icon: 'fas fa-laptop-code',
      title: 'Développement Web',
      desc: 'Création d\'applications web modernes et responsives avec les dernières technologies.',
      features: ['Sites vitrines', 'Applications SPA', 'E-commerce', 'Dashboards'],
      technologies: ['React', 'Angular', 'TypeScript', 'CSS3']
    },
    {
      icon: 'fas fa-server',
      title: 'API & Backend',
      desc: 'Développement d\'APIs robustes et d\'architectures backend scalables.',
      features: ['API REST', 'Base de données', 'Authentification', 'Sécurité'],
      technologies: ['NestJs', 'Node.js', 'MongoDB', 'PostgreSQL']
    },
    {
      icon: 'fas fa-cloud-arrow-up',
      title: 'Déploiement Cloud',
      desc: 'Mise en production et hébergement sur les plateformes cloud modernes.',
      features: ['CI/CD', 'Monitoring', 'Optimisation', 'Maintenance'],
      technologies: ['AWS', 'Docker', 'Git', 'Nginx']
    }
  ];
}
