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
      icon: 'fa-solid fa-display',
      title: 'Développement Frontend',
      desc: "Interfaces modernes, rapides et accessibles - SPA, PWA, dark mode, animations soignées.",
      features: ['Applications SPA / PWA', 'Responsive mobile-first', 'Animations & micro-interactions', 'Performance & Core Web Vitals'],
      technologies: ['Angular 18', 'React', 'TypeScript', 'SCSS']
    },
    {
      icon: 'fa-solid fa-server',
      title: 'API & Backend',
      desc: "APIs RESTful robustes, authentification sécurisée, et bases de données optimisées.",
      features: ['API REST sécurisée (JWT)', 'Architecture NestJS modulaire', 'MongoDB / MySQL', 'Emails transactionnels'],
      technologies: ['NestJS', 'Node.js', 'MongoDB', 'Nodemailer']
    },
    {
      icon: 'fa-solid fa-rocket',
      title: 'Déploiement & Cloud',
      desc: "Mise en production rapide, CI/CD, monitoring et maintenance de vos applications.",
      features: ['Déploiement Vercel / Railway', 'Variables d\'environnement sécurisées', 'Cloudinary (images/vidéos)', 'Optimisation des performances'],
      technologies: ['Vercel', 'Cloudinary', 'Firebase', 'Git']
    }
  ];

  process = [
    { title: 'Analyse', desc: 'Étude de vos besoins et objectifs' },
    { title: 'Design', desc: 'Maquettes et architecture technique' },
    { title: 'Développement', desc: 'Codage propre et testé' },
    { title: 'Livraison', desc: 'Déploiement et suivi' },
  ];
}
