import { Component, HostListener, Inject } from '@angular/core';
import {
  trigger, transition, style, animate
} from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('800ms ease-out')
      ])
    ])
  ],
  imports: [NgIf]
})
export class HeroComponent {
  isScrolled = false;
  currentTheme: 'dark' | 'light' = 'dark';
  isMenuOpen = false;
  isMobile = false;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.setTheme('dark');
    this.checkScreenSize();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 40;
  }

  @HostListener('window:resize')
  onResize(): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 800;
    if (!this.isMobile) {
      this.isMenuOpen = false;
    }
  }

  scrollTo(sectionId: string): void {
    const el = this.document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  toggleTheme(): void {
    this.setTheme(this.currentTheme === 'dark' ? 'light' : 'dark');
  }

  private setTheme(theme: 'dark' | 'light'): void {
    this.currentTheme = theme;
    const body = this.document.body;
    body.classList.remove('dark-theme', 'light-theme');
    body.classList.add(theme === 'dark' ? 'dark-theme' : 'light-theme');
  }
}
