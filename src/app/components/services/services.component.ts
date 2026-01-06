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
      icon: '💻',
      title: 'Website Development',
      desc: 'Sites vitrines, dashboards et applications SPA performantes en Angular / React.'
    },
    {
      icon: '📱',
      title: 'App Development',
      desc: 'Applications web & mobiles avec API sécurisées, authentification et déploiement cloud.'
    },
    {
      icon: '☁️',
      title: 'Website Hosting',
      desc: 'Mise en production, CI/CD, monitoring et optimisation des performances.'
    }
  ];
}
