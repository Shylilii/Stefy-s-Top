/* ==========================================================================
   STEFY'S TOP - Pizzeria Website JavaScript
   ==========================================================================
   
   ISTRUZIONI PER MODIFICARE IL MENU:
   -----------------------------------
   Il menu è contenuto nell'oggetto "menuData" qui sotto.
   
   Per AGGIUNGERE un elemento:
   Trova la categoria desiderata e aggiungi un oggetto con questa struttura:
   { "name": "Nome Pizza", "description": "ingredienti", "price": "7.00" }
   
   Per RIMUOVERE un elemento:
   Trova l'elemento nella categoria e cancella l'intera riga (oggetto).
   
   Per MODIFICARE un prezzo:
   Trova l'elemento e cambia il valore di "price".
   
   Per AGGIUNGERE una nuova categoria:
   Aggiungi un nuovo oggetto alla lista "categories" con questa struttura:
   { "name": "Nome Categoria", "items": [ ... ] }
   
   ========================================================================== */

// ============================================================================
// DATI DEL MENU - Modifica qui per aggiornare il menu del sito
// ============================================================================
const menuData = {
  "categories": [
    {
      "name": "Pizze",
      "items": [
        { "name": "Marinara", "description": "pomodoro, aglio, origano", "price": "4.00" },
        { "name": "Margherita", "description": "pomodoro, mozzarella, basilico", "price": "5.50" },
        { "name": "Pugliese", "description": "pomodoro, mozzarella, cipolle", "price": "6.00" },
        { "name": "Rucola", "description": "pomodoro, mozzarella, rucola", "price": "6.00" },
        { "name": "Nunu", "description": "pomodoro, mozzarella, patatine", "price": "7.00" },
        { "name": "Napoli", "description": "pomodoro, mozzarella, acciughe, capperi, origano", "price": "6.50" },
        { "name": "Cotto", "description": "pomodoro, mozzarella, prosciutto cotto", "price": "6.50" },
        { "name": "Wurstel", "description": "pomodoro, mozzarella, wurstel", "price": "6.50" },
        { "name": "Americana", "description": "pomodoro, mozzarella, wurstel, patatine", "price": "8.00" },
        { "name": "Tonno", "description": "pomodoro, mozzarella, tonno", "price": "6.50" },
        { "name": "Biancaneve", "description": "mozzarella, stracchino", "price": "6.00" },
        { "name": "Gorgo", "description": "pomodoro, mozzarella, gorgonzola", "price": "6.00" },
        { "name": "Romana", "description": "pomodoro, mozzarella, acciughe, capperi, olive", "price": "7.00" },
        { "name": "Diavola", "description": "pomodoro, mozzarella, salame piccante", "price": "6.50" },
        { "name": "Pioggia", "description": "pomodoro, doppia mozzarella", "price": "6.50" },
        { "name": "Salsiccia", "description": "pomodoro, mozzarella, salsiccia", "price": "6.50" },
        { "name": "Sant'Olcese", "description": "pomodoro, mozzarella, salame Sant'Olcese", "price": "7.00" },
        { "name": "4 Formaggi", "description": "pomodoro, mozzarella, gorgonzola, stracchino, fontina", "price": "7.00" },
        { "name": "Tonno e Cipolla", "description": "pomodoro, mozzarella, tonno, cipolla", "price": "7.50" },
        { "name": "4 Stagioni", "description": "pomodoro, mozzarella, carciofi, prosciutto cotto, funghi, olive", "price": "7.50" },
        { "name": "Capricciosa", "description": "pomodoro, mozzarella, prosciutto cotto, carciofi, funghi, olive", "price": "7.50" },
        { "name": "Carbonara", "description": "pomodoro, mozzarella, scamorza affumicata, pancetta", "price": "7.50" },
        { "name": "Genovese", "description": "mozzarella, stracchino, pesto", "price": "7.00" },
        { "name": "Crudo", "description": "pomodoro, mozzarella, prosciutto crudo", "price": "7.00" },
        { "name": "Prosciutto e Funghi", "description": "pomodoro, mozzarella, prosciutto cotto, funghi", "price": "7.00" },
        { "name": "Bismarck", "description": "pomodoro, mozzarella, prosciutto cotto, uovo", "price": "7.50" },
        { "name": "Bufala", "description": "pomodoro, mozzarella, mozzarella di bufala", "price": "7.00" },
        { "name": "Panna e Speck", "description": "panna, speck", "price": "7.00" },
        { "name": "Ortolana", "description": "pomodoro, mozzarella, zucchine, melanzane, peperoni", "price": "7.00" },
        { "name": "Delicata", "description": "pomodoro, mozzarella, brie, pomodorini", "price": "7.50" },
        { "name": "Salsiccia e Cipolla", "description": "pomodoro, mozzarella, salsiccia, cipolla", "price": "7.50" },
        { "name": "Costa's", "description": "mozzarella, stracchino, pancetta affumicata, cipolla, grana a scaglie", "price": "8.50" },
        { "name": "Bufalina", "description": "mozzarella, mozzarella di bufala, pomodorini, basilico", "price": "8.00" },
        { "name": "Tremenda", "description": "pomodoro, mozzarella, gorgonzola, salsiccia, wurstel", "price": "7.50" },
        { "name": "Messicana", "description": "pomodoro, mozzarella, fagioli, tonno, salame piccante", "price": "8.00" },
        { "name": "Stefy's", "description": "pomodoro, mozzarella, taleggio, speck, funghi", "price": "8.50" },
        { "name": "Vesa", "description": "mozzarella, mozzarella di bufala, pomodorini, rucola", "price": "8.00" },
        { "name": "Poppi", "description": "mozzarella, stracchino, origano, tonno, olive, pomodorini", "price": "7.50" },
        { "name": "Special", "description": "pomodoro, mozzarella, stracchino, prosciutto crudo, funghi", "price": "8.50" },
        { "name": "Simpson", "description": "pomodoro, mozzarella, gorgonzola, cipolle, melanzane", "price": "7.50" },
        { "name": "Saporita", "description": "pomodoro, mozzarella, gorgonzola, salsiccia, salame piccante", "price": "7.50" },
        { "name": "Marina", "description": "pomodoro, mozzarella, gorgonzola, speck, rucola", "price": "7.50" },
        { "name": "Speck e Brie", "description": "mozzarella, speck, brie", "price": "7.50" },
        { "name": "Sportiva", "description": "pomodoro, mozzarella, bresaola, rucola, grana", "price": "8.50" },
        { "name": "Brutale", "description": "pomodoro, mozzarella, gorgonzola, peperoni, salame piccante", "price": "8.00" },
        { "name": "Sfiziosa", "description": "pomodoro, mozzarella, mozzarella di bufala, prosciutto cotto", "price": "8.00" },
        { "name": "Variant", "description": "mozzarella, gorgonzola, rucola, speck", "price": "7.50" },
        { "name": "Bomba", "description": "pomodoro, mozzarella, gorgonzola, peperoni, salame piccante, wurstel, funghi, salsiccia", "price": "9.00" },
        { "name": "Caldesi", "description": "pomodoro, mozzarella, gorgonzola, prosciutto cotto", "price": "7.50" },
        { "name": "Giulia's", "description": "pomodoro, mozzarella, prosciutto cotto, olive, patatine", "price": "8.00" },
        { "name": "Portofino", "description": "pomodoro, panna, pesto", "price": "7.00" },
        { "name": "Contadino", "description": "panna, speck, gorgonzola, cipolle", "price": "8.00" },
        { "name": "Scarpanto", "description": "pomodoro, mozzarella, wurstel, peperoni, funghi", "price": "7.50" },
        { "name": "Laviosa", "description": "pomodoro, mozzarella, stracchino, gorgonzola, salsa di noci, speck", "price": "8.50" },
        { "name": "Rizzo", "description": "pomodoro, mozzarella, prosciutto cotto, cipolle, rucola, grana", "price": "7.50" },
        { "name": "Gavino", "description": "pomodoro, mozzarella, gorgonzola, prosciutto cotto, carciofi, cipolle", "price": "7.50" },
        { "name": "Salgari", "description": "mozzarella, stracchino, funghi porcini, prosciutto crudo, rucola", "price": "8.50" },
        { "name": "Bobbi", "description": "pomodoro, mozzarella, gorgonzola, salsiccia, mais", "price": "7.50" },
        { "name": "Ungaretti", "description": "pomodoro, mozzarella, tonno, mais", "price": "7.00" },
        { "name": "Strong", "description": "pomodoro, mozzarella, gorgonzola, cipolle, salame piccante", "price": "7.50" },
        { "name": "Loano", "description": "panna, salsiccia, mais", "price": "7.00" },
        { "name": "Frutti di Mare", "description": "pomodoro, insalata di mare", "price": "10.00" },
        { "name": "Sporting", "description": "pomodoro, mozzarella, peperoni, gamberetti, pesto", "price": "8.00" },
        { "name": "Maona", "description": "pomodoro, melanzane, prosciutto cotto, grana", "price": "7.50" },
        { "name": "Garelli", "description": "pomodoro, mozzarella, brie, speck, funghi porcini", "price": "9.00" },
        { "name": "Baryle", "description": "mozzarella, stracchino, prosciutto cotto, peperoni, funghi porcini, olio all'aglio", "price": "9.50" },
        { "name": "Zuga", "description": "panna, zucchine, gamberetti", "price": "8.00" },
        { "name": "Tortellino", "description": "panna, prosciutto cotto, piselli", "price": "7.00" },
        { "name": "4 Stagioni Sbagliata", "description": "pomodoro, mozzarella, prosciutto crudo, porcini, carciofi, olive", "price": "8.00" },
        { "name": "Perché No", "description": "pomodoro, mozzarella, prosciutto crudo, trevigiana", "price": "8.00" },
        { "name": "Si Salvi Chi Può", "description": "pomodoro, mozzarella, prosciutto cotto, salsiccia, 'nduja, olive", "price": "8.00" },
        { "name": "Cento all'Ora", "description": "pomodoro, mozzarella, 'nduja", "price": "7.00" },
        { "name": "Stasera Mi Butto", "description": "panna, speck, salsa di noci", "price": "7.50" },
        { "name": "Calafrica", "description": "mozzarella, mozzarella di bufala, friarielli, acciughe, aglio", "price": "9.00" },
        { "name": "Dammi del Tu", "description": "pomodoro, mozzarella, salsiccia, friarielli", "price": "8.00" },
        { "name": "Hakuna Matata", "description": "pomodoro, mozzarella, kebab, patatine, salse", "price": "9.00" },
        { "name": "Me La Mangio Tutta", "description": "pomodoro, mozzarella, asparagi, uovo, pancetta", "price": "8.00" },
        { "name": "Stammi alla Larga", "description": "pomodoro, mozzarella, taleggio, salsiccia, cipolle", "price": "8.00" },
        { "name": "Amici Come Prima", "description": "pomodoro, mozzarella, mozzarella di bufala, prosciutto cotto, rucola, grana", "price": "8.50" },
        { "name": "Regina Gorgonzola", "description": "mozzarella, gorgonzola, aglio, pomodorini", "price": "7.00" },
        { "name": "Pizza Ci Ova", "description": "pomodoro, mozzarella, prosciutto cotto, cipolle, uovo, origano", "price": "8.00" },
        { "name": "Old Monteleone", "description": "pomodoro, gorgonzola, stracchino, salsiccia, peperoni, wurstel, patatine", "price": "9.00" },
        { "name": "Napulé", "description": "doppio impasto, pomodoro, bufala a metà cottura, pomodorini, basilico", "price": "8.50" },
        { "name": "Grinch", "description": "pomodoro, mozzarella, tonno, piselli, cipolle", "price": "7.50" },
        { "name": "Senza Parole", "description": "pomodoro, mozzarella, tonno, peperoni, fagioli, mais, cipolle", "price": "8.00" },
        { "name": "Fumé", "description": "pomodoro, mozzarella, aglio, scamorza, prosciutto crudo di Praga, grana", "price": "9.00" },
        { "name": "Zorba", "description": "pomodoro, mozzarella, feta, olive, cipolle, pomodorini, origano", "price": "8.00" },
        { "name": "Burratina", "description": "pomodoro, burrata, acciughe a metà cottura", "price": "9.00" },
        { "name": "Milla", "description": "mozzarella, mozzarella di bufala, gorgonzola, prosciutto crudo, grana", "price": "9.00" },
        { "name": "Morelli", "description": "pomodoro, mozzarella, prosciutto cotto, patatine, uovo", "price": "8.50" },
        { "name": "Laba", "description": "pomodoro, mozzarella, scamorza affumicata, cipolle, bacon, grana", "price": "9.00" },
        { "name": "Giulio", "description": "pomodoro, mozzarella, tonno, cipolle, nduja", "price": "8.00" },
        { "name": "Gina", "description": "mozzarella, salame dolce, funghi, stracchino, rucola", "price": "8.00" },
        { "name": "Lucky", "description": "pomodoro, mozzarella, salame dolce, peperoni, wurstel", "price": "8.00" },
        { "name": "Hulk", "description": "pomodoro, mozzarella, pancetta, piselli, cipolle", "price": "8.00" },
        { "name": "Smackdown", "description": "mozzarella, salsiccia, peperoni, stracchino, olio piccante", "price": "8.00" },
        { "name": "Patrizia", "description": "pomodoro, prosciutto cotto in uscita, stracciatella, pesto, grana", "price": "9.00" },
        { "name": "Sorella di Andre", "description": "pomodoro, salsiccia in uscita, stracciatella, rucola, grana", "price": "9.00" },
        { "name": "Taz", "description": "mozzarella, brie, cipolle, salsiccia, tartufo", "price": "9.00" },
        { "name": "Deca", "description": "pomodoro, mozzarella, salame piccante, nduja, salsiccia in uscita", "price": "8.50" },
        { "name": "Puddu", "description": "pomodoro, mozzarella, prosciutto cotto, funghi, mozzarella di bufala, patatine", "price": "9.00" },
        { "name": "Mentanella", "description": "mozzarella, tonno, pepe nero, aglio, limone, foglioline di menta", "price": "7.50" },
        { "name": "Rosa", "description": "mozzarella, mozzarella di bufala, prosciutto cotto in uscita, crema di tartufo, grana, basilico", "price": "10.00" },
        { "name": "Gnam!", "description": "pomodoro, mozzarella, cheddar, hamburger, bacon, uovo", "price": "9.50" },
        { "name": "All In", "description": "pomodoro, mozzarella, prosciutto cotto, salame piccante, salsiccia, cipolle, peperoni", "price": "9.00" },
        { "name": "Desiderio", "description": "pomodoro, mozzarella, panna, cipolle, gorgonzola, salame piccante", "price": "9.00" }
      ]
    },
    {
      "name": "Impasti disponibili",
      "items": [
        { "name": "Integrale", "description": "supplemento", "price": "+1.00" },
        { "name": "Senza glutine", "description": "supplemento", "price": "+3.50" },
        { "name": "5 cereali", "description": "supplemento", "price": "+3.50" },
        { "name": "Impasto pinsa", "description": "supplemento", "price": "+2.00" }
      ]
    },
    {
      "name": "Pinse",
      "items": [
        { "name": "Caparezza", "description": "pomodoro, mozzarella, salame piccante, salsiccia, cipolla", "price": "8.50" },
        { "name": "Alessandra Amoroso", "description": "pomodoro, pancetta, caprino, pepe nero", "price": "8.00" },
        { "name": "Tiziano Ferro", "description": "pomodoro, stracchino, gorgonzola, salsa di noci, speck", "price": "8.50" },
        { "name": "Vasco Rossi", "description": "stracchino, gorgonzola, salame piccante, nduja, rucola, grana, aglio", "price": "8.50" },
        { "name": "Renato Zero", "description": "pomodoro, mozzarella, salsiccia, melanzane, peperoni, cipolla, olio piccante, nduja", "price": "8.50" },
        { "name": "Budi Pesto", "description": "mozzarella, stracchino, pesto", "price": "7.50" },
        { "name": "Mina", "description": "pomodoro, mozzarella di bufala, prosciutto crudo, pomodorini", "price": "8.50" },
        { "name": "Eros Ramazzotti", "description": "pomodoro, mozzarella, ricotta, porcini, prosciutto cotto, paté di olive", "price": "9.00" },
        { "name": "Gianni Morandi", "description": "pomodoro, mozzarella, prosciutto cotto, prosciutto crudo, salame dolce, salame piccante, pancetta", "price": "9.00" },
        { "name": "Jovanotti", "description": "mozzarella, stracchino, pomodorini, peperoni, olive, acciughe, capperi, cipolle, origano", "price": "8.00" },
        { "name": "Mengoni", "description": "pomodoro, mozzarella, mozzarella di bufala, salsiccia, friarielli", "price": "8.50" },
        { "name": "J-Ax", "description": "pomodoro, mozzarella, gorgonzola, stracchino, fontina, brie, scamorza, grana", "price": "8.00" },
        { "name": "Giorgia", "description": "pomodoro, mozzarella, stracchino, pancetta, cipolle, grana", "price": "8.00" },
        { "name": "Emma Marrone", "description": "pomodoro, mozzarella, gorgonzola, salame piccante, peperoni", "price": "8.00" },
        { "name": "Elisa", "description": "pomodoro, mozzarella, taleggio, speck, funghi", "price": "8.00" },
        { "name": "Ultimo", "description": "pomodoro, mozzarella, origano, cotto, cipolle, gorgonzola", "price": "8.00" },
        { "name": "Fabri Fibra", "description": "pomodoro, mozzarella, bacon, scamorza, cipolle", "price": "8.00" }
      ]
    },
    {
      "name": "Hamburger",
      "items": [
        { "name": "Hamburger", "description": "carne, salsa a scelta", "price": "5.50" },
        { "name": "Cheeseburger", "description": "carne, cheddar, salsa a scelta", "price": "6.50" },
        { "name": "Classic", "description": "carne, lattuga, pomodoro, cheddar, salsa a scelta", "price": "6.50" },
        { "name": "Mr. Onion", "description": "carne, cheddar, cipolle, salsa a scelta", "price": "7.00" },
        { "name": "Mr. Bacon", "description": "carne, cheddar, bacon, salsa a scelta", "price": "7.50" },
        { "name": "Mr. Egg", "description": "carne, cheddar, uovo, salsa a scelta", "price": "7.00" },
        { "name": "Mr. Survival", "description": "carne, cheddar, uovo, bacon, cipolle, salsa a scelta", "price": "8.50" },
        { "name": "Miss Potato", "description": "carne, cheddar, patatine al forno, salsa a scelta", "price": "7.00" },
        { "name": "Texano", "description": "carne, cheddar, fagioli, cipolle, mais, tabasco", "price": "8.00" },
        { "name": "Mr. Buffalo", "description": "carne, mozzarella di bufala, speck, cipolle, paté di porcini", "price": "10.00" },
        { "name": "Mr. Diet", "description": "carne, cheddar, lattuga, grana, salsa a scelta", "price": "6.50" },
        { "name": "Mr. Diavel", "description": "carne, scamorza, nduja, tabasco", "price": "8.50" },
        { "name": "Mr. Smell", "description": "carne, sottiletta, gorgonzola, nduja, melanzane, cipolle", "price": "9.00" },
        { "name": "Camilla Burger", "description": "carne, mozzarella di bufala, bacon, granella di pistacchio, maionese", "price": "9.00" },
        { "name": "Mr. Nano", "description": "carne, cipolle crude, bacon, grana, harissa", "price": "8.50" },
        { "name": "Mr. Peanut", "description": "carne, cheddar, bacon, patatine fritte, burro d'arachidi", "price": "9.00" },
        { "name": "Mr. Orto", "description": "carne, sottiletta, melanzane, peperoni, zucchine, cipolle", "price": "8.00" },
        { "name": "Mr. Alito", "description": "carne, gorgonzola, rucola, aglio, nduja", "price": "8.50" },
        { "name": "Mr. Genova", "description": "carne, sottiletta, bacon, pesto, pomodorini secchi", "price": "9.00" },
        { "name": "Burger Queen", "description": "carne, taleggio, speck, funghi, maionese tartufata", "price": "10.00" },
        { "name": "Mr. Michele", "description": "carne, cheddar, wurstel, bacon, cipolle, peperoni", "price": "8.50" },
        { "name": "Burger King", "description": "doppia carne, scamorza, bacon, pomodori secchi, trevigiana", "price": "10.00" },
        { "name": "Mr. Roma", "description": "carne, pecorino romano, pancetta, uovo, pepe nero", "price": "9.50" },
        { "name": "Mr. Goat", "description": "carne, caprino, cipolle crude, pepe nero, pomodoro", "price": "7.50" },
        { "name": "Mr. Hide", "description": "carne, gorgonzola, lardo, noci, miele", "price": "9.00" }
      ]
    },
    {
      "name": "Extra Hamburger",
      "items": [
        { "name": "Carne Angus", "description": "supplemento carne Angus", "price": "+2.00" },
        { "name": "Carne Chianina", "description": "supplemento carne Chianina", "price": "+2.00" },
        { "name": "Doppia carne", "description": "supplemento doppia carne", "price": "+2.00" },
        { "name": "Patatine fritte piccole", "description": "porzione piccola", "price": "2.50" },
        { "name": "Patatine fritte grandi", "description": "porzione grande", "price": "3.50" }
      ],
      "note": "Salse disponibili: ketchup, maionese, senape, salsa cheddar, salsa rosa, salsa BBQ, salsa burger, tabasco."
    },
    {
      "name": "Crepes Salate",
      "items": [
        { "name": "Schumacher", "description": "prosciutto cotto, mozzarella", "price": "5.50" },
        { "name": "Verstappen", "description": "prosciutto crudo, mozzarella", "price": "6.00" },
        { "name": "Lauda", "description": "philadelphia, prosciutto cotto", "price": "5.50" },
        { "name": "Raikkonen", "description": "philadelphia, prosciutto crudo", "price": "6.00" },
        { "name": "Vettel", "description": "speck, brie", "price": "6.00" },
        { "name": "Hamilton", "description": "speck, gorgonzola, noci", "price": "6.50" },
        { "name": "Alonso", "description": "bresaola, caprino, pepe nero, grana, succo di limone", "price": "7.50" }
      ]
    },
    {
      "name": "Piadine",
      "items": [
        { "name": "Topogigio", "description": "prosciutto cotto, mozzarella", "price": "5.50" },
        { "name": "Lupin", "description": "prosciutto crudo, mozzarella", "price": "6.00" },
        { "name": "Gadget", "description": "philadelphia, prosciutto cotto", "price": "5.50" },
        { "name": "Sailor Moon", "description": "philadelphia, prosciutto crudo", "price": "6.00" },
        { "name": "McQueen", "description": "speck, brie", "price": "6.00" },
        { "name": "Pikachu", "description": "bresaola, caprino, pepe nero, grana, succo di limone", "price": "7.50" },
        { "name": "Goku", "description": "Nutella", "price": "5.00" }
      ]
    },
    {
      "name": "Toast",
      "items": [
        { "name": "Cotto", "description": "prosciutto cotto, formaggio", "price": "5.00" },
        { "name": "Crudo", "description": "prosciutto crudo, formaggio", "price": "6.00" },
        { "name": "Salame Dolce", "description": "salame dolce, formaggio", "price": "6.00" },
        { "name": "Speck e Brie", "description": "speck, brie", "price": "6.00" }
      ]
    },
    {
      "name": "Hot Dog",
      "items": [
        { "name": "Hot Dog", "description": "wurstel, formaggio, salsa a scelta", "price": "5.00" },
        { "name": "Hot Dog Farcito", "description": "wurstel, formaggio, crauti, salsa a scelta", "price": "6.00" },
        { "name": "Hot Dog Super", "description": "wurstel, formaggio, bacon", "price": "6.00" }
      ]
    },
    {
      "name": "Panini",
      "items": [
        { "name": "Quagliarella", "description": "porchetta, friarielli, scamorza, tabasco", "price": "8.00" },
        { "name": "Totti", "description": "tonno, mozzarella, pomodoro, lattuga, maionese", "price": "6.00" },
        { "name": "Baggio", "description": "prosciutto cotto, brie, lattuga, maionese", "price": "6.50" },
        { "name": "Mertens", "description": "prosciutto cotto, formaggio, salsa a scelta", "price": "6.00" },
        { "name": "Crispi", "description": "stracchino, prosciutto crudo", "price": "6.50" },
        { "name": "Messi", "description": "bresaola, scamorza, grana, rucola", "price": "8.00" },
        { "name": "Del Piero", "description": "speck, brie, pomodoro, lattuga", "price": "7.00" },
        { "name": "Icardi", "description": "salsiccia, cipolle, peperoni, salsa a scelta", "price": "8.00" },
        { "name": "Ronaldo", "description": "bresaola, caprino, pomodoro, pepe nero", "price": "8.00" },
        { "name": "Dibala", "description": "prosciutto crudo, mozzarella di bufala, lattuga, pomodoro, salsa a scelta", "price": "7.50" }
      ]
    },
    {
      "name": "Crepes Dolci",
      "items": [
        { "name": "Valentino Rossi", "description": "Nutella, zucchero a velo", "price": "5.00" },
        { "name": "Marquez", "description": "Nutella, amaretti, zucchero a velo", "price": "6.00" },
        { "name": "Dovizioso", "description": "Nutella, noci, zucchero a velo", "price": "6.00" },
        { "name": "Morbidelli", "description": "Nutella, banana, zucchero a velo", "price": "6.00" },
        { "name": "Petrucci", "description": "marmellata ai frutti di bosco, zucchero a velo", "price": "5.00" },
        { "name": "Stoner", "description": "marmellata alla fragola, zucchero a velo", "price": "5.00" },
        { "name": "Iannone", "description": "marmellata all'albicocca, zucchero a velo", "price": "5.00" },
        { "name": "Salvadori", "description": "crema di pistacchio, zucchero a velo", "price": "7.00" },
        { "name": "Bastianini", "description": "burro d'arachidi, marmellata di fragola", "price": "7.50" }
      ]
    },
    {
      "name": "Semifreddi",
      "items": [
        { "name": "Cheesecake al caramello salato", "description": "", "price": "5.00" },
        { "name": "Cheesecake al cioccolato", "description": "", "price": "5.00" },
        { "name": "Tris di cioccolati", "description": "", "price": "5.00" },
        { "name": "Lemon Tart", "description": "", "price": "5.00" },
        { "name": "Mascarpone al cioccolato", "description": "", "price": "5.00" },
        { "name": "Tiramisù", "description": "", "price": "5.00" },
        { "name": "Crema catalana", "description": "", "price": "5.00" },
        { "name": "Meringata", "description": "con topping al caramello, cioccolato o frutti di bosco", "price": "5.00" },
        { "name": "Panna cotta", "description": "con topping al caramello, cioccolato o frutti di bosco", "price": "5.00" }
      ]
    },
    {
      "name": "Bevande",
      "items": [
        { "name": "Bibite in lattina", "description": "Coca-Cola, Coca-Cola Zero, Fanta, Sprite, Estathé pesca/limone", "price": "2.50" },
        { "name": "Bibite in bottiglia", "description": "Coca-Cola, Fanta, Sprite, Estathé pesca/limone", "price": "3.50" },
        { "name": "Birre da 33 cl", "description": "Moretti, Beck's, Heineken, Peroni", "price": "2.50" },
        { "name": "Birre da 66 cl", "description": "Moretti, Beck's, Heineken, Ichnusa", "price": "3.50" },
        { "name": "Birre da 33 cl premium", "description": "Tennent's, Ceres, Corona", "price": "3.50" },
        { "name": "Acqua naturale o frizzante", "description": "", "price": "1.00" },
        { "name": "Consegna", "description": "costo di consegna a domicilio", "price": "1.00" }
      ]
    }
  ]
};

// ============================================================================
// FUNZIONE SORPRENDIMI - Suggerisce un elemento casuale dal menu
// ============================================================================

/**
 * Funzione principale "Sorprendimi"
 * Seleziona un elemento casuale dalla categoria scelta dall'utente
 * e lo mostra con un'animazione divertente.
 */
function sorprendimi() {
    const select = document.getElementById('sorprendimi-category');
    const categoryName = select.value;

    // Trova la categoria selezionata
    let category;
    if (categoryName === 'tutte') {
        // Se "tutte" è selezionato, prendi da tutte le categorie (esclusi impasti e extra)
        const allItems = [];
        menuData.categories.forEach(cat => {
            if (cat.name !== 'Impasti disponibili' && cat.name !== 'Extra Hamburger' && cat.name !== 'Bevande') {
                cat.items.forEach(item => {
                    allItems.push({ ...item, category: cat.name });
                });
            }
        });
        const randomItem = allItems[Math.floor(Math.random() * allItems.length)];
        showResult(randomItem, randomItem.category);
        return;
    }

    category = menuData.categories.find(cat => cat.name === categoryName);
    if (!category) return;

    // Seleziona un elemento casuale
    const randomIndex = Math.floor(Math.random() * category.items.length);
    const randomItem = category.items[randomIndex];

    showResult(randomItem, category.name);
}

/**
 * Mostra il risultato con animazione
 */
function showResult(item, categoryName) {
    const resultDiv = document.getElementById('sorprendimi-result');

    // Rimuovi la classe per resettare l'animazione
    resultDiv.classList.remove('visible', 'bounce-in');

    // Piccolo ritardo per permettere il reset dell'animazione
    setTimeout(() => {
        // Costruisci il contenuto del risultato
        const priceDisplay = item.price.startsWith('+') ? item.price + ' €' : '€ ' + item.price;
        
        resultDiv.innerHTML = `
            <div class="result-category">📂 ${categoryName}</div>
            <div class="result-name">🎉 ${item.name}</div>
            ${item.description ? `<div class="result-desc">${item.description}</div>` : ''}
            <div class="result-price">${priceDisplay}</div>
        `;

        // Mostra con animazione
        resultDiv.classList.add('visible', 'bounce-in');
    }, 100);
}

// ============================================================================
// NAVIGAZIONE SMOOTH SCROLL
// ============================================================================

/**
 * Aggiunge smooth scrolling a tutti i link di navigazione
 */
function initSmoothScroll() {
    document.querySelectorAll('.nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight - 10;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================================================
// ANIMAZIONE MASCOTTE (wiggle al hover)
// ============================================================================

function initMascotAnimation() {
    const mascot = document.querySelector('.mascot-img');
    if (mascot) {
        mascot.addEventListener('mouseenter', () => {
            mascot.classList.add('wiggle');
        });
        mascot.addEventListener('animationend', () => {
            mascot.classList.remove('wiggle');
        });
    }
}

// ============================================================================
// INIZIALIZZAZIONE
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initMascotAnimation();

    // Collega il bottone Sorprendimi
    const sorprendimiBtn = document.getElementById('sorprendimi-btn');
    if (sorprendimiBtn) {
        sorprendimiBtn.addEventListener('click', sorprendimi);
    }
});
