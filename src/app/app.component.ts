import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Category, projects } from './projects';
import { english } from './translations';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  private readonly document = inject(DOCUMENT);
  readonly language = signal<'it' | 'en'>(new URL(this.document.location.href).searchParams.get('lang') === 'en' ? 'en' : 'it');

  constructor() {
    this.updateMetadata();
  }

  t(text: string): string {
    return this.language() === 'en' ? english[text] ?? text : text;
  }

  sectionLink(id: string): string {
    return `${this.language() === 'en' ? '?lang=en' : ''}#${id}`;
  }

  setLanguage(language: 'it' | 'en'): void {
    this.language.set(language);
    const url = new URL(this.document.location.href);
    if (language === 'en') url.searchParams.set('lang', 'en');
    else url.searchParams.delete('lang');
    this.document.defaultView?.history.replaceState(null, '', url);
    this.updateMetadata();
  }

  private updateMetadata(): void {
    this.document.documentElement.lang = this.language();
    const description = this.language() === 'en'
      ? 'Nicola Pasa, Full Stack Developer. Over twenty years of web development experience for businesses and public organisations. Explore projects, skills and contact details.'
      : 'Nicola Pasa, Full Stack Developer. Oltre vent’anni di esperienza nello sviluppo web per aziende e pubblica amministrazione. Scopri progetti, competenze e contatti.';
    this.document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    this.document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
  }
  readonly year = new Date().getFullYear();
  readonly categories: Category[] = ['Tutti', 'Gestionali', 'E-commerce', 'Web & blog'];
  readonly category = signal<Category>('Tutti');
  readonly menuOpen = signal(false);
  readonly filteredProjects = computed(() => projects.filter(p => this.category() === 'Tutti' || p.category === this.category()));
  readonly skills = [
    { title: 'Frontend', text: 'Angular · React · Vue.js · HTML · CSS' },
    { title: 'Backend', text: 'PHP · Laravel · Django · Node.js · Express.js · Zend' },
    { title: 'Linguaggi', text: 'JavaScript · Python · PHP · COBOL' },
    { title: 'Database & strumenti', text: 'MySQL · MongoDB · Git · GitHub · AWS' }
  ];
  readonly experience = [
    { date: 'Dal 2024', company: 'WebGo', role: 'Sviluppo web · contributo a oltre 20 progetti' },
    { date: '2013 — 2023', company: 'SrlSolutions', role: 'Programmatore web PHP · oltre 100 progetti sviluppati' },
    { date: '2012 — 2013', company: 'Sviluppo Toscana SpA', role: 'Programmatore web PHP' },
    { date: '2008 — 2010', company: 'Computer Shop', role: 'Tecnico informatico e programmatore web' },
    { date: '2002 — 2008', company: 'Freelance', role: 'Programmatore web PHP' },
    { date: '1999 — 2001', company: 'Infoser', role: 'Programmatore COBOL' }
  ];
}
