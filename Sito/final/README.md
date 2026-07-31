# 🍕 Stefy's Top - Sito Web Pizzeria

## Descrizione

Sito web interattivo per la pizzeria **Stefy's Top** di Genova. Il sito presenta il menu completo, una funzione "Sorprendimi" per suggerimenti casuali, e un link diretto per ordinare su Just Eat.

---

## 📁 Struttura dei File

```
final/
├── index.html          # Pagina principale del sito
├── style.css           # Foglio di stile (colori, layout, animazioni)
├── script.js           # JavaScript (dati menu, funzione Sorprendimi)
├── images/
│   └── mascot.png      # Immagine mascotte (bassotto con cappello da chef)
└── README.md           # Questo file di istruzioni
```

---

## 🚀 Come Aprire il Sito

Basta aprire il file `index.html` con un qualsiasi browser web (Chrome, Firefox, Safari, Edge). Non serve un server web, il sito funziona anche in locale.

---

## 📝 Come Aggiornare il Menu

### Dove si trovano i dati del menu

I dati del menu sono in **due posti** che vanno aggiornati insieme:

1. **`script.js`** — L'oggetto `menuData` contiene tutti i dati per la funzione "Sorprendimi"
2. **`index.html`** — Le sezioni HTML contengono le card visibili del menu

### Aggiungere un nuovo elemento al menu

#### 1. In `script.js`:
Trova la categoria desiderata nell'oggetto `menuData` e aggiungi un nuovo elemento:

```javascript
{ "name": "Nome Pizza", "description": "ingrediente1, ingrediente2", "price": "7.50" }
```

**Nota:** Ricorda la virgola dopo l'elemento precedente!

#### 2. In `index.html`:
Trova la sezione corrispondente e aggiungi una nuova card:

```html
<div class="menu-card">
    <div class="item-header">
        <span class="item-name">Nome Pizza</span>
        <span class="item-price">€ 7,50</span>
    </div>
    <p class="item-desc">ingrediente1, ingrediente2</p>
</div>
```

### Rimuovere un elemento dal menu

1. In `script.js`: Cancella l'intera riga dell'elemento (l'oggetto tra `{ }`)
2. In `index.html`: Cancella l'intero blocco `<div class="menu-card">...</div>`

### Modificare un prezzo

1. In `script.js`: Trova l'elemento e cambia il valore di `"price"`
2. In `index.html`: Trova la card e cambia il testo dentro `<span class="item-price">`

**Formato prezzi:**
- Prezzi normali: `€ 7,50` (nell'HTML) / `"7.50"` (nel JS, con il punto)
- Supplementi: `+2,00 €` (nell'HTML) / `"+2.00"` (nel JS)

---

## 📂 Come Aggiungere una Nuova Categoria

### 1. In `script.js`:
Aggiungi un nuovo oggetto alla lista `categories`:

```javascript
{
    "name": "Nome Categoria",
    "items": [
        { "name": "Elemento 1", "description": "descrizione", "price": "6.00" },
        { "name": "Elemento 2", "description": "descrizione", "price": "7.00" }
    ]
}
```

### 2. In `index.html`:

#### a) Aggiungi il link nella navigazione:
```html
<a href="#id-categoria">🍽️ Nome Categoria</a>
```

#### b) Aggiungi la sezione del menu:
```html
<section class="menu-section" id="id-categoria">
    <h2>🍽️ Nome Categoria</h2>
    <div class="section-divider"></div>
    <div class="menu-grid">
        <!-- Aggiungi le card qui -->
    </div>
</section>
```

#### c) Aggiungi l'opzione nel dropdown "Sorprendimi":
```html
<option value="Nome Categoria">🍽️ Nome Categoria</option>
```

---

## 🐶 Come Cambiare l'Immagine della Mascotte

1. Prepara la nuova immagine (consigliato: formato PNG, dimensione quadrata, almeno 300x300px)
2. Rinomina il file in `mascot.png`
3. Sostituisci il file in `images/mascot.png`

Se vuoi usare un nome diverso, modifica il tag `<img>` nell'header di `index.html`:
```html
<img src="images/nuovo-nome.png" alt="Descrizione mascotte" class="mascot-img">
```

---

## 🏪 Come Modificare le Informazioni del Ristorante

Le informazioni si trovano nel **footer** di `index.html` (in fondo al file):

```html
<footer class="footer">
    <h3>🐶 Stefy's Top</h3>
    <p>📍 Via Laviosa 83-85r, Genova</p>
    <p>📞 010 6962295</p>
    <p class="footer-hours">🕕 Aperti tutti i giorni dalle 18:30 alle 22:30</p>
</footer>
```

Modifica semplicemente il testo tra i tag `<p>`.

---

## 🔗 Come Cambiare il Link Just Eat

Il link a Just Eat appare in due punti di `index.html`:
1. Nella sezione in alto (dopo la navigazione)
2. Nel footer

Cerca `https://www.justeat.it/restaurants-stefystoppizzeria/menu` e sostituiscilo con il nuovo URL.

---

## 🎨 Come Modificare i Colori

I colori principali sono definiti in `style.css` all'inizio del file:

| Colore | Codice | Uso |
|--------|--------|-----|
| Arancione | `#FF6B35` | Colore principale, header |
| Rosso | `#D32F2F` | Bottoni, prezzi |
| Giallo | `#FFC107` | Evidenziazioni, hover |
| Crema | `#FFF8F0` | Sfondo pagina |
| Marrone scuro | `#3E2723` | Testo, navigazione |

Per cambiare un colore, usa "Trova e Sostituisci" nel tuo editor di testo.

---

## 🎲 Come Funziona "Sorprendimi"

La funzione "Sorprendimi" è implementata in `script.js`:
1. L'utente seleziona una categoria dal dropdown (o "Tutte le categorie")
2. Cliccando il bottone, viene selezionato un elemento casuale
3. L'elemento viene mostrato con un'animazione divertente

Le categorie escluse dal "Sorprendimi" (quando si sceglie "Tutte") sono:
- Impasti disponibili (sono supplementi, non piatti)
- Extra Hamburger (sono supplementi)
- Bevande (non sono piatti principali)

---

## 💡 Note Tecniche

- Il sito usa **Google Fonts** (Fredoka One e Nunito) — serve connessione internet per caricarle
- Il design è **responsive** e si adatta a smartphone, tablet e desktop
- Non sono necessari server o database — tutto è contenuto nei file
- Il sito è scritto in HTML5, CSS3 e JavaScript vanilla (nessuna libreria esterna)

---

## 📞 Contatti Ristorante

- **Nome:** Stefy's Top
- **Indirizzo:** Via Laviosa 83-85r, Genova
- **Telefono:** 010 6962295
- **Orari:** Tutti i giorni dalle 18:30 alle 22:30
- **Just Eat:** https://www.justeat.it/restaurants-stefystoppizzeria/menu
