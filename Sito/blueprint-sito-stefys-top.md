# Blueprint del sito web — Stefy's Top

Documento di riferimento per progettare (non ancora costruire) il sito web della pizzeria. Non contiene codice: è pensato per essere seguito da chi realizzerà il sito, che sia tu, tuo fratello con un builder no-code, o un developer esterno.

\---

## 1\. Obiettivo del sito

* Vetrina online semplice e sempre aggiornata: menù facile da consultare, orari, contatti, novità
* Far scoprire facilmente pizze, burger e il resto del menù a chi cerca la pizzeria online (il sito resta puramente informativo, non gestisce ordini)
* Rafforzare il brand "Stefy's Top" e la sua linea "Stefy's Burger Queen", con il bassotto come mascotte riconoscibile
* Migliorare la visibilità locale su Google per ricerche tipo "pizzeria Genova centro" o "hamburger Genova sera"

\---

## 2\. Identità visiva

### Palette colori

Ispirata al materiale già in uso (volantini/menù):

|Uso|Colore|Hex indicativo|
|-|-|-|
|Sfondo principale|Arancio caldo|`#F6B754`|
|Logo, accenti, pulsanti principali|Rosso brand|`#C62F22`|
|Superfici chiare, header, card|Crema|`#FFF6E4`|
|Testo, footer|Marrone scuro|`#3A2A18`|

Sono valori indicativi: chi realizzerà il sito può campionarli direttamente dai file del menù per un match perfetto con la grafica esistente.

### Tipografia

* Logo e titoli principali: font corsivo/script, coerente con la scritta "Stefy's Top" già in uso
* Testo e voci del menù: sans-serif pulito, leggibile bene anche su schermi piccoli

### La mascotte: il bassotto

* Va trattato come un vero personaggio del brand, non solo un'immagine sui cartoni
* Presenze consigliate: logo/favicon, header del sito, pagina "Chi siamo", eventuali illustrazioni di sezione (es. "il bassotto consiglia"), social
* Consiglio pratico: commissionare un'illustrazione vettoriale professionale del bassotto in 2-3 pose (che saluta, che regge una pizza, con il cappello da chef) da riusare ovunque, per coerenza visiva

### Tono di voce

* Diretto, informale, "di quartiere" — coerente con lo stile colorato e giocoso già presente nei volantini attuali

\---

## 3\. Struttura del sito (sitemap)

**Home**

* Sezione hero con headline, orari, pulsante "Vedi il menù"
* Anteprima delle categorie del menù (pizze, burger, hot dog, piadine, crepes, panini)
* Galleria foto veloce
* Footer con indirizzo, telefono, social

**Menù**

* Diviso per categoria: Pizze, Stefy's Burger Queen, Hot Dog, Piadine, Crepes, Panini
* Filtro/tab per categoria
* Ogni voce: nome, ingredienti, prezzo
* Badge tipo "Novità" per le voci segnalate come "New Entry" nei volantini attuali

**Chi siamo**

* Storia della pizzeria, di Stefy e del bassotto
* Foto del team/locale

**Galleria**

* Foto dei piatti, con lo stesso stile di food photography già usato nei materiali attuali

**Dove siamo / Contatti**

* Mappa incorporata (Via Laviosa 83-85r, Genova)
* Telefono, orari, eventuale form di contatto
* Link ai social (Instagram/Facebook)
* Facoltativo: una semplice riga di testo/link "Ci trovi anche su JustEat" verso il profilo JustEat esistente — non un vero pulsante di ordinazione, solo un rimando

\---

## 4\. Funzionalità consigliate

* Menù filtrabile per categoria (basta poco JavaScript, non serve un backend)
* Mappa Google Maps incorporata
* Design mobile-first: la maggior parte delle consultazioni arriva da smartphone
* Google Business Profile collegato, per recensioni e orari sempre aggiornati anche fuori dal sito
* Cookie banner conforme GDPR (obbligatorio in Italia)

