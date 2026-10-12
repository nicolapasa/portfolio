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
  { name: 'Next.js Blog', category: 'Web & blog', image: 'pro8.webp', description: 'Un progetto blog che unisce frontend React e gestione dei contenuti con MongoDB.', tags: ['Next.js', 'TypeScript', 'MongoDB'], url: 'https://bright-speculoos-69e7b7.netlify.app/' },
  { name: 'Marco Angelini Blog', category: 'Web & blog', image: 'pro7.webp', description: 'Un blog realizzato con architettura MVC e un database relazionale.', tags: ['PHP', 'MVC', 'MySQL'], url: 'https://www.marcoangelini.eu/public/' },
  { name: 'BookLovers', category: 'Web & blog', image: 'pro4.webp', description: 'Un’applicazione web dedicata agli appassionati di libri.', tags: ['React', 'Express', 'MongoDB'], url: 'https://incandescent-clafoutis-28610e.netlify.app/' },
  { name: 'Vet App', category: 'Gestionali', image: 'pro2.webp', description: 'Un progetto full stack per il settore veterinario, con interfaccia React e backend Express.', tags: ['React', 'Express', 'MongoDB'], url: 'https://vetappwecare.netlify.app' },
  { name: 'Rental Car App', category: 'Gestionali', image: 'pro3.webp', description: 'Un’applicazione per il noleggio auto, sviluppata con Express e MongoDB.', tags: ['Node.js', 'Express', 'MongoDB'], url: 'https://saubincars.adaptable.app/cars' },
  { name: 'Blog personale', category: 'Web & blog', image: 'pro5.webp', description: 'Un blog con backend PHP strutturato secondo il pattern MVC.', tags: ['PHP', 'MVC'], url: 'https://nicolapasa.com/' },
  { name: 'Breakout Clone', category: 'Giochi', image: 'pro1.webp', description: 'Una rivisitazione del classico arcade, giocabile direttamente nel browser.', tags: ['JavaScript', 'Browser game'], url: 'https://nicolapasa.github.io/breakout/' },
  { name: 'Space Invaders Clone', category: 'Giochi', image: 'pro6.webp', description: 'Un classico dello spazio ricreato in JavaScript per il browser.', tags: ['JavaScript', 'Browser game'], url: 'https://nicolapasa.github.io/spaceinvaders/' }
];
