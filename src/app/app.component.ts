import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./components/hero/hero.component";
import { ServicesComponent } from "./components/services/services.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";

type Stat = { label: string; value: string; hint: string };
type Project = { title: string; desc: string; tags: string[] };
type Block = { title: string; desc: string; cta: string };

@Component({
  selector: 'app-root',
  imports: [CommonModule, HeroComponent, ServicesComponent, ProjectsComponent, AboutComponent, ContactComponent,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(14px)' }),
        animate('520ms cubic-bezier(.2,.8,.2,1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerIn', [
      transition(':enter', [
        query(':scope > *', [
          style({ opacity: 0, transform: 'translateY(18px)' }),
          stagger(80, animate('520ms cubic-bezier(.2,.8,.2,1)', style({ opacity: 1, transform: 'translateY(0)' })))
        ], { optional: true })
      ])
    ])
  ]
})
export class AppComponent {
  // ======= DATA =======
  hero = {
    name: 'Jensen Omega',
    role: 'Software Developer',
    tagline: 'Hello. I’m Jensen — I build clean, fast and friendly web apps.'
  };

  stats: Stat[] = [
    { label: 'Projects', value: '120+', hint: 'Delivered & shipped' },
    { label: 'Happy Clients', value: '95%', hint: 'Repeat rate' },
    { label: 'Years', value: '10+', hint: 'Building digitally' }
  ];

  projects: Project[] = [
    { title: 'Battleship', desc: 'A clean UI + game logic with smooth state updates (Angular).', tags: ['Angular', 'UX', 'State'] },
    { title: 'Movie Titles API', desc: 'Search + details with caching and loading states (REST).', tags: ['API', 'Caching', 'UI'] },
    { title: 'JavaScript Calculator', desc: 'Fast input handling and stable evaluation for complex expressions.', tags: ['JS', 'Parsing'] },
    { title: 'SaaS Landing Page', desc: 'Conversion-first layout with responsive sections and micro-interactions.', tags: ['Design', 'Performance'] }
  ];

  blocks: Block[] = [
    { title: 'What I do', desc: 'Frontend, UX, and clean architecture — with a focus on performance and clarity.', cta: 'See my work' },
    { title: 'What I care about', desc: 'Fast loading, accessibility, and a delightful experience on every device.', cta: 'Talk with me' }
  ];

  // ======= UI STATE =======
  isNavOpen = false;

  // ======= HANDLERS =======
  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  // optional: close mobile menu on resize (nice UX)
  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth >= 800) this.isNavOpen = false;
  }

  onPrimaryClick() {
    // placeholder : à connecter à ton routing (ex: /contact) si besoin
    console.log('Primary CTA clicked');
  }

  onSecondaryClick() {
    console.log('Secondary CTA clicked');
  }
}
