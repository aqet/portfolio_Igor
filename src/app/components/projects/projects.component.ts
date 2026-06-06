import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
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
        animate('700ms ease-out'),
      ]),
    ]),
  ],
  imports: [NgFor, NgIf],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  selectedImages: Record<number, string> = {};
  previewImage: string | null = null;
  private autoRotateTimers: number[] = [];

  projects = [
    {
      title: 'TaskFlow Frontend',
      shortDesc:
        'Une interface moderne pour organiser, prioriser et suivre ses tâches en toute simplicité.',
      longDescription:
        'Ce projet met en avant l’expérience utilisateur avec une interface claire, rapide et responsive. Il permet de gérer des tâches, de suivre leur avancement et d’avoir une vision globale de l’activité quotidienne.',
      whyItMatters:
        'Je l’ai conçu pour montrer comment une application de productivité peut être à la fois utile, agréable à utiliser et facile à comprendre.',
      gallery: ['todo-image-front.png', 'todo-image-auth.png', 'todo-image-profil.png'],
      features: [
        'Authentification',
        'Gestion de profil',
        'Notifications',
        'Drag & Drop',
      ],
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      status: 'completed',
      statusLabel: 'Terminé',
      date: 'janvier 2026',
      demoUrl: '',
      codeUrlF: 'https://github.com/aqet/todo-app-angular',
      codeUrlB: '',
      siteUrl: '',
    },
    {
      title: 'TaskFlow Backend',
      shortDesc:
        'Une API robuste pour gérer les tâches, sécuriser les accès et automatiser les notifications.',
      longDescription:
        'Ce backend centralise la logique métier, l’authentification JWT, la persistance des données et les communications email. Il sert de colonne vertébrale à l’application et garantit une structure propre et évolutive.',
      whyItMatters:
        'Il illustre ma façon de concevoir des services fiables, sécurisés et prêts à évoluer en production.',
      gallery: ['todo-image-back.png'],
      features: [
        'Authentification JWT',
        'Notifications email',
        'Architecture NestJS',
        'Sécurité & config',
      ],
      technologies: ['NestJS', 'MongoDB', 'Nodemailer'],
      status: 'completed',
      statusLabel: 'Terminé',
      date: 'janvier 2026',
      demoUrl: '',
      codeUrlF: '',
      codeUrlB: 'https://github.com/aqet/todo-app-nestjs',
      siteUrl: '',
    },
    {
      title: 'Alert Proche',
      shortDesc:
        'Une plateforme citoyenne moderne pour signaler et suivre les alertes liées à la protection des mineurs au Cameroun.',
      longDescription:
        'Alert Proche est une solution complète qui combine une interface utilisateur fluide et une logique métier robuste pour faciliter la gestion des alertes, l’accès sécurisé aux comptes et le suivi des signalements. Ce projet illustre une application pensée pour être utile, fiable et évolutive dans un contexte réel.',
      whyItMatters:
        'Il montre une capacité à concevoir une application complète, moderne et orientée utilisateur, avec une structure claire et une expérience cohérente.',
      gallery: [
        'alertproche-home.png',
        'alertproche-detaille-post.png',
        'alertproche-home-post.png',
        'alertproche-mon-espace.png',
        'alertproche-avis.png',
      ],
      features: [
        'Signalement suivi des alertes',
        'Authentification sécurisée',
        'Interface responsive',
        'Tableau de bord utilisateur',
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'NestJS',
        'MongoDB',
        'cloudinary'
      ],
      status: 'completed',
      statusLabel: 'Terminé',
      date: 'mai 2026',
      demoUrl: '',
      codeUrlF: 'https://github.com/aqet/AlertProche',
      codeUrlB: 'https://github.com/aqet/AlertProche-api',
      siteUrl: 'https://alert-proche.vercel.app/',
    },
  ];

  ngOnInit(): void {
    this.projects.forEach((project, index) => {
      this.selectedImages[index] = project.gallery[0];
      this.autoRotateTimers[index] = window.setInterval(() => {
        this.rotateGallery(index);
      }, 3500);
    });
  }

  ngOnDestroy(): void {
    this.autoRotateTimers.forEach((timer) => window.clearInterval(timer));
  }

  setMainImage(index: number, image: string): void {
    this.selectedImages[index] = image;
  }

  openPreview(image: string): void {
    this.previewImage = image;
  }

  closePreview(): void {
    this.previewImage = null;
  }

  private rotateGallery(index: number): void {
    const gallery = this.projects[index]?.gallery ?? [];
    if (gallery.length < 2) {
      return;
    }

    const current = this.selectedImages[index] ?? gallery[0];
    const nextIndex = (gallery.indexOf(current) + 1) % gallery.length;
    this.selectedImages[index] = gallery[nextIndex];
  }

  scrollTo(sectionId: string): void {
    const el = this.document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
