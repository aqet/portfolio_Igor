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
  expandedCards: Record<number, boolean> = {};
  private autoRotateTimers: number[] = [];

  projects = [
    {
      title: 'TaskFlow - Frontend',
      shortDesc:
        'Interface moderne pour organiser, prioriser et suivre ses tâches au quotidien.',
      longDescription:
        "Une application de productivité pensée pour l'expérience utilisateur : interface claire, rapide et responsive. Gestion des tâches par statut, drag & drop, notifications en temps réel et espace profil complet.",
      whyItMatters:
        "Montre comment une app de productivité peut être à la fois utile, agréable et techniquement propre - avec une architecture Angular standalone et des composants réutilisables.",
      gallery: ['todo-image-front.png', 'todo-image-auth.png', 'todo-image-profil.png'],
      features: [
        'Authentification sécurisée',
        'Gestion de profil utilisateur',
        'Notifications en temps réel',
        'Drag & Drop des tâches',
        'Interface responsive mobile-first',
      ],
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      status: 'completed',
      statusLabel: 'Terminé',
      demoUrl: '',
      codeUrlF: 'https://github.com/aqet/todo-app-angular',
      codeUrlB: '',
      siteUrl: '',
    },
    {
      title: 'TaskFlow - Backend',
      shortDesc:
        'API robuste pour gérer les tâches, sécuriser les accès et automatiser les notifications.',
      longDescription:
        "Ce backend centralise la logique métier, l'authentification JWT, la persistance des données et les emails transactionnels. Architecture modulaire NestJS, prête à évoluer en production.",
      whyItMatters:
        "Illustre ma façon de concevoir des APIs fiables, sécurisées et maintenables - séparation claire des responsabilités, gestion robuste des erreurs.",
      gallery: ['todo-image-back.png'],
      features: [
        'Authentification JWT',
        "Envoi d'emails (Nodemailer)",
        'Architecture NestJS modulaire',
        'Validation des données (class-validator)',
        "Variables d'environnement sécurisées",
      ],
      technologies: ['NestJS', 'MongoDB', 'Nodemailer', 'TypeScript'],
      status: 'completed',
      statusLabel: 'Terminé',
      demoUrl: '',
      codeUrlF: '',
      codeUrlB: 'https://github.com/aqet/todo-app-nestjs',
      siteUrl: '',
    },
    {
      title: 'Alert Proche',
      shortDesc:
        'PWA citoyenne pour signaler disparitions, abus et urgences impliquant des enfants au Cameroun - SOS géolocalisé en temps réel.',
      longDescription:
        "AlertProche combine un système de signalement communautaire, un feed social et un SOS d'urgence avec géolocalisation en temps réel. Les utilisateurs publient des cas (disparition, abus, prévention), reçoivent des alertes de proximité dans un rayon d'1km, et envoient leur position GPS à leurs contacts de confiance. La recherche par image via embeddings vectoriels Gemini permet de retrouver des publications similaires à une photo uploadée.",
      whyItMatters:
        "Ce projet illustre ma capacité à concevoir une application fullstack complexe et socialement utile : double stack notifications (FCM + Web Push VAPID), upload atomique avec rollback Cloudinary, modération IA, recherche vectorielle, et PWA installable avec Service Worker custom.",
      gallery: [
        'alertproche-home.png',
        'alertproche-detaille-post.png',
        'alertproche-home-post.png',
        'alertproche-mon-espace.png',
        'alertproche-avis.png',
      ],
      features: [
        'SOS géolocalisé avec appui long et décompte annulable',
        'Alertes push de proximité (rayon 1km)',
        'Recherche par image (embeddings Gemini + MongoDB Atlas Vector Search)',
        'Double stack notifications : FCM Android + Web Push VAPID',
        'Feed social : médias mixtes, likes, commentaires, scroll infini',
        "Upload atomique avec rollback Cloudinary en cas d'échec",
        'Modération de contenu assistée par Gemini AI',
        'PWA installable avec Service Worker custom et mode hors-ligne',
      ],
      technologies: [
        'Angular 18',
        'TypeScript',
        'NestJS',
        'MongoDB Atlas',
        'Cloudinary',
        'Gemini AI',
        'Firebase FCM',
        'Web Push VAPID',
        'PWA',
      ],
      status: 'completed',
      statusLabel: 'En production',
      demoUrl: '',
      codeUrlF: 'https://github.com/aqet/AlertProche',
      codeUrlB: 'https://github.com/aqet/AlertProche-api',
      siteUrl: 'https://alert-proche.vercel.app/',
    },
  ];

  ngOnInit(): void {
    this.projects.forEach((_, index) => {
      this.selectedImages[index] = this.projects[index].gallery[0];
      this.expandedCards[index] = false;
      this.autoRotateTimers[index] = window.setInterval(() => {
        this.rotateGallery(index);
      }, 3500);
    });
  }

  ngOnDestroy(): void {
    this.autoRotateTimers.forEach((t) => window.clearInterval(t));
  }

  setMainImage(index: number, image: string): void {
    this.selectedImages[index] = image;
  }

  toggleCard(index: number): void {
    this.expandedCards[index] = !this.expandedCards[index];
  }

  openPreview(image: string): void {
    this.previewImage = image;
  }

  closePreview(): void {
    this.previewImage = null;
  }

  private rotateGallery(index: number): void {
    const gallery = this.projects[index]?.gallery ?? [];
    if (gallery.length < 2) return;
    const current = this.selectedImages[index] ?? gallery[0];
    const next = (gallery.indexOf(current) + 1) % gallery.length;
    this.selectedImages[index] = gallery[next];
  }

  scrollTo(id: string): void {
    this.document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
