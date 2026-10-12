# Nicola Pasa — Portfolio Angular

Portfolio statico Angular 22, senza backend, database o API a runtime. Componenti standalone, signals e change detection OnPush. Contenuti in italiano aggiornati dallo showcase, con cinque progetti: Vetlab, NEXORA, Nautica, Marco Angelini Blog e Blog personale.

## Sviluppo

Richiede Node.js 24.15 o successivo della serie 24 (oppure 22.22.3+ della serie 22).

```sh
npm ci
npm start
```

Aprire http://localhost:4200. `npm run check` controlla TypeScript; `npm run build` compila anche i template Angular e verifica i budget. Output statico: `dist/portfolio/browser/`.

## GitHub Pages

In GitHub, selezionare **Settings → Pages → Source → GitHub Actions**. Il workflow `.github/workflows/deploy.yml` compila e pubblica a ogni push su `main` o `master`, o manualmente da Actions. Il percorso base viene ricavato dalla configurazione Pages, anche per domini personalizzati. Per una build manuale su `nicolapasa.github.io/portfolio/` usare `npm run build:pages`.

La navigazione usa ancore della stessa pagina: non servono backend, router o fallback 404. Immagini e CV hanno percorsi relativi compatibili con le sottocartelle di Pages. Il vecchio index.html e la cartella css sono conservati come riferimento: il workflow pubblica esclusivamente l'output Angular.

## Aggiornare i contenuti

- Progetti: `src/app/projects.ts`.
- Profilo, competenze e percorso: `src/app/app.component.ts` e relativo template.
- Stile e responsive: `src/styles.css`.
- Traduzioni inglesi: `src/app/translations.ts`. Il selettore IT/EN aggiorna l'intera pagina e i metadati; `?lang=en` permette di condividere la versione inglese e mantenerla al refresh. Il PDF CV è quello fornito dall'utente, comune alle due lingue.
- Immagini ottimizzate e CV: `public/images/`.

I nuovi contenuti provengono da https://sviluppodev.eu/site/dist/. La scheda Nautica nello showcase è identificata come gestionale Laravel, ma il suo dialog contiene ancora un concept chiamato Altrove: qui viene usato il testo visibile di Nautica, con collegamento alla presentazione e senza inventare una demo. I link dei progetti storici sono conservati; la disponibilità dei servizi esterni va controllata dai rispettivi proprietari. Il CV scaricabile è aggiornato al file Nicola_Pasa_CV_ATS_Portfolio.pdf fornito il 12 ottobre 2026.

## Prestazioni e accessibilità

Immagini WebP ridimensionate, caricamento lazy delle anteprime, dimensioni dichiarate e priorità al ritratto. Font di sistema e nessuna libreria di icone, analytics o CDN a runtime. CSS responsive, navigazione mobile, focus visibile, link salta-contenuto, filtri con stato accessibile e supporto alle preferenze di movimento ridotto. I miglioramenti sulle risorse non equivalgono a un punteggio Lighthouse misurato; Angular aggiunge JavaScript rispetto all'HTML originale.
