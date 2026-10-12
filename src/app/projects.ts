export type Category = 'Tutti' | 'Gestionali' | 'E-commerce' | 'Web & blog' | 'Giochi';
export interface Project {
  name: string;
  category: Exclude<Category, 'Tutti'>;
  description: string;
  tags: string[];
  image?: string;
  url?: string;
  featured?: boolean;
  note?: string;
}

// Informazioni dei nuovi progetti: https://sviluppodev.eu/site/dist/
export const projects: Project[] = [
  { name: 'Vetlab', category: 'Gestionali', featured: true, image: 'vetlab.webp',
    description: 'Il laboratorio veterinario in un unico spazio. Dalle richieste di esami ai referti, fino alla fatturazione e alle statistiche.',
    tags: ['Richieste', 'Referti', 'Fatturazione'], url: 'https://sviluppodev.eu/demo_lab/', note: 'La demo apre la pagina di accesso; le funzioni richiedono un account.' },
  { name: 'NEXORA', category: 'E-commerce', featured: true, image: 'nexora.webp',
    description: 'Un e-commerce dimostrativo dedicato alla tecnologia, con catalogo, ricerca, schede prodotto, carrello e area clienti.',
    tags: ['Catalogo', 'Carrello', 'Account'], url: 'https://sviluppodev.eu/ecommerce/', note: 'Brand e prodotti sono fittizi.' },
  { name: 'Nautica', category: 'Gestionali', featured: true,
    description: 'Pratiche, clienti e imbarcazioni in un unico gestionale. Un’applicazione web per organizzare le attività del settore nautico.',
    tags: ['Laravel', 'Pratiche', 'Imbarcazioni'], note: 'Presentazione disponibile nello showcase; nessuna demo pubblica indicata.', url: 'https://sviluppodev.eu/site/dist/#progetti' },
  { name: 'Marco Angelini Blog', category: 'Web & blog', image: 'pro7.webp', description: 'Un blog realizzato con architettura MVC e un database relazionale.', tags: ['PHP', 'MVC', 'MySQL'], url: 'https://www.marcoangelini.eu/public/' },
  { name: 'Blog personale', category: 'Web & blog', image: 'pro5.webp', description: 'Un blog con backend PHP strutturato secondo il pattern MVC.', tags: ['PHP', 'MVC'], url: 'https://nicolapasa.com/' },
];
