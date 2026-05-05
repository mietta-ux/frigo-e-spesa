export const recipes = [
  {
    id: 0,
    title: "Avocado Toast Semplice",
    description: "Un classico intramontabile per una colazione sana o un brunch veloce. Cremoso, croccante e nutriente.",
    ingredients: ["Pane", "Avocado", "Uova", "Sale", "Pepe", "Olio"],
    ingredientsDetails: [
      { name: "Pane (integrale o in cassetta)", qty: "2 fette" },
      { name: "Avocado maturo", qty: "1" },
      { name: "Uova", qty: "1 o 2" },
      { name: "Sale e Pepe", qty: "q.b." },
      { name: "Olio d'oliva", qty: "1 cucchiaino" }
    ],
    steps: [
      "Tosta le fette di pane finché non diventano ben dorate e croccanti.",
      "In una ciotolina, schiaccia la polpa dell'avocado con una forchetta aggiungendo sale, pepe e un filo d'olio.",
      "Cuoci l'uovo in padella (occhio di bue) o bollilo per 6 minuti per averlo cremoso.",
      "Spalma la crema di avocado sul pane tostato.",
      "Adagia l'uovo sopra l'avocado e finisci con un pizzico di pepe."
    ],
    tips: "Aggiungi un pizzico di peperoncino in scaglie o dei semi di sesamo per un tocco gourmet.",
    category: "Colazione",
    time: 10,
    difficulty: "Facile",
    servings: 1
  },
  {
    id: 1,
    title: "Pasta Aglio, Olio e Peperoncino",
    description: "La ricetta italiana per eccellenza quando si ha poco tempo ma tanta voglia di gusto. Semplice ma richiede precisione.",
    ingredients: ["Pasta", "Aglio", "Olio", "Peperoncino", "Prezzemolo"],
    ingredientsDetails: [
      { name: "Pasta (Spaghetti)", qty: "200g" },
      { name: "Aglio", qty: "2 spicchi" },
      { name: "Olio Extravergine", qty: "4 cucchiai" },
      { name: "Peperoncino fresco", qty: "1" },
      { name: "Prezzemolo", qty: "q.b." }
    ],
    steps: [
      "Metti a bollire l'acqua per la pasta in una pentola capiente.",
      "In una padella ampia, scalda l'oil con l'aglio a fettine e il peperoncino tritato. Non farlo bruciare!",
      "Cuoci la pasta molto al dente.",
      "Scola la pasta e saltala in padella con il condimento, aggiungendo un mestolo di acqua di cottura.",
      "Spegni il fuoco, aggiungi il prezzemolo fresco tritato e servi caldissimo."
    ],
    tips: "L'acqua di cottura è il segreto: crea un'emulsione con l'olio che rende la pasta cremosissima.",
    category: "Pasta",
    time: 15,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 2,
    title: "Frittata alle Erbe",
    description: "Una frittata soffice e profumata, perfetta come secondo piatto veloce o per un panino gourmet.",
    ingredients: ["Uova", "Olio", "Sale", "Pepe", "Parmigiano", "Erba Cipollina"],
    ingredientsDetails: [
      { name: "Uova fresche", qty: "4" },
      { name: "Parmigiano Reggiano", qty: "30g" },
      { name: "Erba cipollina o prezzemolo", qty: "1 mazzetto" },
      { name: "Olio d'oliva", qty: "2 cucchiai" },
      { name: "Sale e Pepe", qty: "q.b." }
    ],
    steps: [
      "In una ciotola, rompi le uova e sbattile leggermente con una forchetta.",
      "Aggiungi il parmigiano, le erbe tritate, sale e pepe.",
      "Scalda l'olio in una padella antiaderente media.",
      "Versa il composto e cuoci a fuoco medio-basso con il coperchio.",
      "Quando la base è solida, gira la frittata con l'aiuto del coperchio e cuoci per altri 2 minuti."
    ],
    tips: "Per una frittata più alta e soffice, aggiungi un cucchiaio di latte o un pizzico di bicarbonato alle uova.",
    category: "Secondi",
    time: 15,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 3,
    title: "Insalata di Pomodori e Cipolla",
    description: "Un contorno fresco e veloce, perfetto per l'estate. Usa pomodori ben maturi.",
    ingredients: ["Pomodoro", "Cipolla", "Olio", "Sale", "Basilico"],
    ingredientsDetails: [
      { name: "Pomodori ramati", qty: "4" },
      { name: "Cipolla rossa di Tropea", qty: "1/2" },
      { name: "Basilico fresco", qty: "5 foglie" },
      { name: "Olio EVO", qty: "2 cucchiai" },
      { name: "Sale", qty: "q.b." }
    ],
    steps: [
      "Taglia i pomodori a spicchi o a fette.",
      "Affetta la cipolla molto finemente.",
      "In una ciotola, unisci pomodori e cipolla.",
      "Condisci con olio e sale, mescolando bene.",
      "Aggiungi le foglie di basilico spezzettate a mano alla fine."
    ],
    tips: "Se la cipolla è troppo forte, lasciala in ammollo in acqua fredda e aceto per 10 minuti prima di usarla.",
    category: "Insalate",
    time: 5,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 4,
    title: "Pasta al Pomodoro",
    description: "Il pilastro della cucina italiana. Semplice, genuina e amata da tutti.",
    ingredients: ["Pasta", "Pomodoro", "Aglio", "Olio", "Basilico"],
    ingredientsDetails: [
      { name: "Pasta (Penne o Spaghetti)", qty: "200g" },
      { name: "Passata di pomodoro", qty: "250ml" },
      { name: "Aglio", qty: "1 spicchio" },
      { name: "Olio Extravergine", qty: "2 cucchiai" },
      { name: "Basilico", qty: "q.b." }
    ],
    steps: [
      "In una padella soffriggi l'aglio con l'olio.",
      "Aggiungi la passata di pomodoro e un pizzico di sale. Cuoci per 15 min a fuoco lento.",
      "Lessa la pasta in acqua salata.",
      "Scola la pasta e versala nel sugo, saltando per un minuto.",
      "Aggiungi basilico fresco prima di servire."
    ],
    tips: "Per un sugo meno acido, aggiungi un pizzico di zucchero durante la cottura.",
    category: "Pasta",
    time: 20,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 5,
    title: "Patate al Forno",
    description: "Croccanti fuori e morbide dentro, il contorno perfetto per ogni occasione.",
    ingredients: ["Patate", "Rosmarino", "Aglio", "Olio", "Sale"],
    ingredientsDetails: [
      { name: "Patate a pasta gialla", qty: "500g" },
      { name: "Rosmarino fresco", qty: "2 rametti" },
      { name: "Aglio", qty: "2 spicchi" },
      { name: "Olio EVO", qty: "3 cucchiai" },
      { name: "Sale grosso", qty: "q.b." }
    ],
    steps: [
      "Sbuccia le patate e tagliale a cubetti regolari.",
      "Sbollenta i cubetti in acqua bollente per 5 minuti (segreto per la croccantezza).",
      "Scola le patate e mettile in una teglia con olio, aglio schiacciato e rosmarino.",
      "Inforna a 200°C per circa 30-40 minuti.",
      "Mescola a metà cottura finché non sono ben dorate."
    ],
    tips: "Usa il sale grosso per una croccantezza extra sulla superficie.",
    category: "Contorni",
    time: 45,
    difficulty: "Media",
    servings: 3
  },
  {
    id: 6,
    title: "Riso in Bianco",
    description: "Un piatto semplice e confortevole, ideale per quando si vuole stare leggeri.",
    ingredients: ["Riso", "Burro", "Parmigiano", "Sale"],
    ingredientsDetails: [
      { name: "Riso Carnaroli o Arborio", qty: "160g" },
      { name: "Burro di qualità", qty: "20g" },
      { name: "Parmigiano Reggiano grattugiato", qty: "30g" },
      { name: "Sale", qty: "q.b." }
    ],
    steps: [
      "Lessa il riso in abbondante acqua salata.",
      "Scola il riso un minuto prima della cottura completa.",
      "Metti il riso in una ciotola calda.",
      "Aggiungi il burro e il parmigiano.",
      "Mescola energicamente finché il burro non è sciolto e cremoso."
    ],
    tips: "Conserva un po' di acqua di cottura per rendere la mantecatura ancora più fluida.",
    category: "Primi",
    time: 15,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 7,
    title: "Uova al Tegamino",
    description: "La cena dell'ultimo minuto più buona del mondo. Semplice e soddisfacente.",
    ingredients: ["Uova", "Burro", "Sale", "Pepe"],
    ingredientsDetails: [
      { name: "Uova grandi", qty: "2" },
      { name: "Burro", qty: "10g" },
      { name: "Sale", qty: "q.b." },
      { name: "Pepe nero", qty: "q.b." }
    ],
    steps: [
      "Sciogli il burro in un padellino antiaderente a fuoco basso.",
      "Rompi le uova delicatamente senza rompere il tuorlo.",
      "Cuoci finché l'albume non è bianco e solido, ma il tuorlo resta liquido.",
      "Condisci con sale e pepe solo sull'albume."
    ],
    tips: "Copri con un coperchio per 30 secondi se preferisci il tuorlo leggermente più cotto in superficie.",
    category: "Secondi",
    time: 10,
    difficulty: "Facile",
    servings: 1
  },
  {
    id: 8,
    title: "Bruschetta Classic",
    description: "L'antipasto italiano per eccellenza. Il segreto è la qualità del pane e dei pomodori.",
    ingredients: ["Pane", "Pomodoro", "Aglio", "Olio", "Basilico", "Sale"],
    ingredientsDetails: [
      { name: "Pane tipo Altamura o casereccio", qty: "4 fette" },
      { name: "Pomodorini ciliegino", qty: "10" },
      { name: "Aglio", qty: "1 spicchio" },
      { name: "Olio Extravergine", qty: "q.b." },
      { name: "Basilico", qty: "q.b." }
    ],
    steps: [
      "Tosta le fette di pane sulla griglia o in forno finché croccanti.",
      "Strofina lo spicchio d'aglio sulla superficie del pane caldo.",
      "Taglia i pomodorini a cubetti e condiscili con olio, sale e basilico.",
      "Distribuisci i pomodori sulle fette di pane.",
      "Finisci con un ultimo giro d'olio a crudo."
    ],
    tips: "Non strofinare troppo aglio, deve essere solo un profumo leggero.",
    category: "Antipasti",
    time: 10,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 9,
    title: "Vellutata di Patate",
    description: "Calda, avvolgente e cremosa. Un vero comfort food per le serate fredde.",
    ingredients: ["Patate", "Cipolla", "Olio", "Sale", "Brodo"],
    ingredientsDetails: [
      { name: "Patate", qty: "400g" },
      { name: "Cipolla bionda", qty: "1" },
      { name: "Brodo vegetale", qty: "500ml" },
      { name: "Olio EVO", qty: "2 cucchiai" },
      { name: "Sale", qty: "q.b." }
    ],
    steps: [
      "Affetta la cipolla e soffriggila in pentola con l'olio.",
      "Aggiungi le patate a cubetti piccoli e lascia insaporire.",
      "Copri con il brodo caldo e cuoci per 20-25 minuti.",
      "Una volta tenere, frulla tutto con un mixer ad immersione.",
      "Aggiusta di sale e servi con un filo d'olio a crudo."
    ],
    tips: "Aggiungi dei crostini di pane tostato per dare una nota croccante.",
    category: "Zuppe",
    time: 30,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 10,
    title: "Pasta Cacio e Pepe",
    description: "Una delle ricette più famose di Roma. Solo tre ingredienti per una cremosità incredibile.",
    ingredients: ["Pasta", "Pecorino", "Pepe", "Sale"],
    ingredientsDetails: [
      { name: "Spaghetti o Tonnarelli", qty: "200g" },
      { name: "Pecorino Romano DOP grattugiato", qty: "80g" },
      { name: "Pepe nero in grani da macinare", qty: "q.b." },
      { name: "Sale", qty: "q.b." }
    ],
    steps: [
      "Cuoci la pasta in poca acqua (per avere più amido).",
      "Tosta il pepe macinato grosso in una padella a secco.",
      "Prepara una crema mescolando il pecorino con un mestolo di acqua di cottura tiepida.",
      "Scola la pasta molto al dente nella padella con il pepe.",
      "Spegni il fuoco, unisci la crema di pecorino e manteca energicamente."
    ],
    tips: "Il segreto è la temperatura dell'acqua: se troppo calda, il pecorino fila; se troppo fredda, non si scioglie.",
    category: "Pasta",
    time: 15,
    difficulty: "Difficile",
    servings: 2
  },
  {
    id: 11,
    title: "Pancake Semplici",
    description: "Soffici e golosi, ideali per una colazione all'americana in famiglia.",
    ingredients: ["Farina", "Uova", "Latte", "Zucchero", "Burro"],
    ingredientsDetails: [
      { name: "Farina 00", qty: "150g" },
      { name: "Latte intero", qty: "200ml" },
      { name: "Uova", qty: "1" },
      { name: "Zucchero", qty: "2 cucchiai" },
      { name: "Burro fuso", qty: "30g" }
    ],
    steps: [
      "In una ciotola mescola farina e zucchero.",
      "Aggiungi l'uovo e il latte a filo, mescolando con una frusta.",
      "Unisci il burro fuso e amalgama finché non ci sono grumi.",
      "Scalda una padella antiaderente imburrata.",
      "Versa un mestolino di pastella e cuoci finché non appaiono le bollicine, poi gira."
    ],
    tips: "Servi con sciroppo d'acero, miele o frutta fresca di stagione.",
    category: "Dolci",
    time: 20,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 12,
    title: "Pollo alla Griglia",
    description: "Leggero e gustoso, la marinatura fa la differenza.",
    ingredients: ["Pollo", "Limone", "Olio", "Sale", "Rosmarino"],
    ingredientsDetails: [
      { name: "Petto di pollo a fette", qty: "300g" },
      { name: "Limone", qty: "1" },
      { name: "Olio EVO", qty: "2 cucchiai" },
      { name: "Rosmarino", qty: "1 rametto" },
      { name: "Sale", qty: "q.b." }
    ],
    steps: [
      "Prepara una marinatura con succo di limone, olio, sale e rosmarino.",
      "Immergi il pollo e lascia riposare per almeno 15 minuti.",
      "Scalda bene una piastra o una griglia.",
      "Cuoci il pollo per 3-4 minuti per lato finché non appaiono le classiche striature.",
      "Servi con una fetta di limone fresco."
    ],
    tips: "Non cuocere troppo il pollo o diventerà asciutto e stopposo.",
    category: "Secondi",
    time: 20,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 13,
    title: "Torta Salata Ricotta e Spinaci",
    description: "Un rustico classico, perfetto per pic-nic o cene veloci.",
    ingredients: ["Pasta Sfoglia", "Ricotta", "Spinaci", "Uova", "Parmigiano"],
    ingredientsDetails: [
      { name: "Rotolo di pasta sfoglia", qty: "1" },
      { name: "Ricotta vaccina", qty: "250g" },
      { name: "Spinaci cotti e strizzati", qty: "200g" },
      { name: "Uova", qty: "1" },
      { name: "Parmigiano", qty: "30g" }
    ],
    steps: [
      "In una ciotola unisci ricotta, spinaci tritati, uovo e parmigiano.",
      "Mescola bene e aggiusta di sale e pepe.",
      "Stendi la sfoglia in una teglia tonda.",
      "Buca il fondo con una forchetta e versa il ripieno.",
      "Inforna a 180°C per circa 25-30 minuti finché i bordi sono dorati."
    ],
    tips: "Strizza benissimo gli spinaci per evitare che la base della torta diventi molliccia.",
    category: "Torte Salate",
    time: 40,
    difficulty: "Facile",
    servings: 4
  },
  {
    id: 14,
    title: "Tonno e Cipolla",
    description: "Un'insalata rustica e saporita, pronta in pochissimi minuti.",
    ingredients: ["Tonno", "Cipolla", "Olio", "Fagioli"],
    ingredientsDetails: [
      { name: "Tonno sott'olio", qty: "160g" },
      { name: "Cipolla rossa", qty: "1/2" },
      { name: "Fagioli cannellini precotti", qty: "200g" },
      { name: "Olio Extravergine", qty: "1 cucchiaio" }
    ],
    steps: [
      "Sgocciola il tonno e spezzettalo con una forchetta.",
      "Affetta la cipolla a rondelle sottilissime.",
      "Sciacqua i fagioli dal liquido di governo.",
      "Unisci tutti gli ingredienti in una ciotola.",
      "Condisci con olio, sale e se piace un po' di pepe."
    ],
    tips: "Aggiungi un cucchiaio di aceto di vino bianco per sgrassare il palato.",
    category: "Insalate",
    time: 10,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 15,
    title: "Scaloppine al Limone",
    description: "Fettine tenere e profumate, un secondo piatto veloce ed elegante.",
    ingredients: ["Pollo", "Farina", "Limone", "Burro", "Sale"],
    ingredientsDetails: [
      { name: "Fettine di pollo o vitello", qty: "300g" },
      { name: "Farina 00", qty: "q.b." },
      { name: "Succo di 1 limone", qty: "q.b." },
      { name: "Burro", qty: "20g" },
      { name: "Sale", qty: "q.b." }
    ],
    steps: [
      "Infarina bene le fettine di carne, scrollando l'eccesso.",
      "Sciogli il burro in una padella ampia.",
      "Rosola la carne su entrambi i lati finché dorata.",
      "Versa il succo di limone e lascia restringere finché si forma una cremina.",
      "Aggiusta di sale e servi con prezzemolo fresco."
    ],
    tips: "Non far cuocere troppo la carne dopo aver aggiunto il limone o diventerà dura.",
    category: "Secondi",
    time: 15,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 16,
    title: "Pasta Carbonara",
    description: "La regina della cucina romana. Niente panna, solo uova e guanciale.",
    ingredients: ["Pasta", "Guanciale", "Uova", "Pecorino", "Pepe"],
    ingredientsDetails: [
      { name: "Spaghetti o Mezze Maniche", qty: "200g" },
      { name: "Guanciale", qty: "100g" },
      { name: "Tuorli d'uovo", qty: "3" },
      { name: "Pecorino Romano", qty: "50g" },
      { name: "Pepe nero", qty: "molto" }
    ],
    steps: [
      "Taglia il guanciale a listarelle e rosolalo in padella finché croccante.",
      "Sbatti i tuorli con il pecorino e tanto pepe fino a creare una crema densa.",
      "Cuoci la pasta e scolala al dente tenendo l'acqua.",
      "Salta la pasta nel grasso del guanciale.",
      "Spegni il fuoco, aggiungi la crema di uova e un po' d'acqua di cottura, mantecando finché cremosa."
    ],
    tips: "Il calore residuo della pasta è sufficiente per cuocere l'uovo senza farlo diventare frittata.",
    category: "Pasta",
    time: 20,
    difficulty: "Difficile",
    servings: 2
  },
  {
    id: 17,
    title: "Guacamole",
    description: "La salsa messicana più amata, perfetta con le tortillas o sul pane.",
    ingredients: ["Avocado", "Lime", "Cipolla", "Pomodoro", "Sale", "Coriandolo"],
    ingredientsDetails: [
      { name: "Avocado maturi", qty: "2" },
      { name: "Succo di lime", qty: "1" },
      { name: "Pomodoro a cubetti", qty: "1" },
      { name: "Cipollotto tritato", qty: "1" },
      { name: "Sale", qty: "q.b." }
    ],
    steps: [
      "Svuota gli avocado e schiaccia la polpa con una forchetta.",
      "Aggiungi immediatamente il succo di lime per non farlo annerire.",
      "Unisci la cipolla e il pomodoro tagliati a cubetti minuscoli.",
      "Aggiungi sale e coriandolo tritato.",
      "Mescola tutto delicatamente e servi freddo."
    ],
    tips: "Lascia il nocciolo dell'avocado dentro la salsa per preservarne il colore verde brillante.",
    category: "Antipasti",
    time: 15,
    difficulty: "Facile",
    servings: 4
  },
  {
    id: 18,
    title: "Shakshuka",
    description: "Uova in un mare di pomodoro e spezie, un piatto tipico mediorientale.",
    ingredients: ["Uova", "Pomodoro", "Peperoni", "Cipolla", "Aglio", "Olio", "Paprika"],
    ingredientsDetails: [
      { name: "Uova", qty: "4" },
      { name: "Polpa di pomodoro", qty: "400ml" },
      { name: "Peperone rosso", qty: "1" },
      { name: "Cipolla", qty: "1" },
      { name: "Spezie (Paprika, Cumino)", qty: "q.b." }
    ],
    steps: [
      "Soffriggi cipolla, aglio e peperone a strisce.",
      "Aggiungi il pomodoro e le spezie, cuocendo per 15 minuti.",
      "Crea dei piccoli fori nel sugo con un cucchiaio.",
      "Rompi un uovo in ogni foro.",
      "Copri e cuoci per 5-7 minuti finché l'albume è cotto ma il tuorlo è morbido."
    ],
    tips: "Servi con pane pita o crostoni di pane per fare la scarpetta.",
    category: "Secondi",
    time: 25,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 19,
    title: "Hummus di Ceci",
    description: "Una crema vellutata e nutriente, simbolo della cucina araba.",
    ingredients: ["Ceci", "Tahina", "Limone", "Aglio", "Olio", "Sale"],
    ingredientsDetails: [
      { name: "Ceci precotti", qty: "250g" },
      { name: "Tahina (crema di sesamo)", qty: "2 cucchiai" },
      { name: "Succo di limone", qty: "1/2" },
      { name: "Aglio", qty: "1/2 spicchio" },
      { name: "Olio di sesamo o EVO", qty: "2 cucchiai" }
    ],
    steps: [
      "Sciacqua bene i ceci.",
      "Mettili in un mixer con tahina, limone, aglio e sale.",
      "Frulla aggiungendo un po' d'acqua ghiacciata per renderlo spumoso.",
      "Continua finché non ottieni una crema liscissima.",
      "Servi con un pizzico di paprika e un filo d'olio sopra."
    ],
    tips: "L'acqua ghiacciata durante la frullata rende l'hummus bianco e molto cremoso.",
    category: "Antipasti",
    time: 10,
    difficulty: "Facile",
    servings: 3
  },
  {
    id: 20,
    title: "Riso alla Cantonese",
    description: "Il riso saltato più famoso, con un mix di sapori orientali.",
    ingredients: ["Riso", "Piselli", "Prosciutto", "Uova", "Olio", "Soia"],
    ingredientsDetails: [
      { name: "Riso Basmati bollito", qty: "200g" },
      { name: "Piselli piccoli", qty: "50g" },
      { name: "Prosciutto cotto a cubetti", qty: "50g" },
      { name: "Uova", qty: "2" },
      { name: "Salsa di soia", qty: "q.b." }
    ],
    steps: [
      "Prepara una frittatina sottile con le uova, tagliala a listarelle.",
      "In un wok o padella scalda l'olio.",
      "Aggiungi piselli e prosciutto e salta per 2 minuti.",
      "Unisci il riso bollito e freddo, saltando a fiamma alta.",
      "Aggiungi la frittatina e condisci con salsa di soia a piacere."
    ],
    tips: "Usa riso del giorno prima, è più asciutto e si salta meglio.",
    category: "Primi",
    time: 25,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 21,
    title: "Caesar Salad",
    description: "L'insalata internazionale per eccellenza, con pollo e salsa cremosa.",
    ingredients: ["Pollo", "Lattuga", "Pane", "Parmigiano", "Maionese", "Senape"],
    ingredientsDetails: [
      { name: "Petto di pollo", qty: "200g" },
      { name: "Lattuga romana", qty: "1" },
      { name: "Pane a cubetti", qty: "2 fette" },
      { name: "Parmigiano in scaglie", qty: "30g" },
      { name: "Salsa (Maionese, Senape, Acciughe)", qty: "q.b." }
    ],
    steps: [
      "Griglia il pollo e taglialo a striscioline.",
      "Tosta il pane in padella con olio finché croccante.",
      "Lava e taglia la lattuga.",
      "Prepara la salsa mescolando maionese, un goccio di senape e un'acciuga tritata.",
      "Unisci tutto in una ciotola e condisci generosamente."
    ],
    tips: "Aggiungi un pizzico di aglio in polvere ai crostini per più sapore.",
    category: "Insalate",
    time: 20,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 22,
    title: "Tacos Semplici",
    description: "Una festa messicana pronta in pochi minuti. Personalizzabili al massimo.",
    ingredients: ["Tortillas", "Carne Macinata", "Pomodoro", "Lattuga", "Formaggio"],
    ingredientsDetails: [
      { name: "Tortillas di mais", qty: "4" },
      { name: "Manzo macinato", qty: "200g" },
      { name: "Mix di spezie messicane", qty: "1 cucchiaino" },
      { name: "Formaggio cheddar grattugiato", qty: "q.b." },
      { name: "Pomodoro fresco", qty: "1" }
    ],
    steps: [
      "Cuoci la carne in padella con le spezie finché ben rosolata.",
      "Scalda le tortillas in un'altra padella.",
      "Taglia la lattuga e il pomodoro a pezzetti.",
      "Riempi le tortillas con carne, verdure e formaggio.",
      "Piega a metà e servi subito."
    ],
    tips: "Aggiungi panna acida o guacamole per completare l'esperienza.",
    category: "Secondi",
    time: 20,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 23,
    title: "Curry di Verdure",
    description: "Sano, speziato e nutriente. Perfetto con il riso basmati.",
    ingredients: ["Patate", "Carote", "Cipolla", "Latte di Cocco", "Curry", "Riso"],
    ingredientsDetails: [
      { name: "Patate", qty: "200g" },
      { name: "Carote", qty: "2" },
      { name: "Latte di cocco in lattina", qty: "250ml" },
      { name: "Pasta di curry o polvere", qty: "1 cucchiaio" },
      { name: "Riso Basmati", qty: "150g" }
    ],
    steps: [
      "Soffriggi la cipolla con il curry finché profuma.",
      "Aggiungi le verdure a cubetti e rosola brevemente.",
      "Versa il latte di cocco e cuoci per 20 minuti coperto.",
      "Intanto bolli il riso basmati.",
      "Servi il curry denso sopra il riso bianco bollente."
    ],
    tips: "Puoi aggiungere ceci o tofu per una quota proteica vegetale.",
    category: "Piatti Unici",
    time: 35,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 24,
    title: "Ratatouille",
    description: "Le verdure provenzali stufate, un piatto di una bontà antica.",
    ingredients: ["Zucchine", "Melanzane", "Peperoni", "Pomodoro", "Cipolla", "Olio"],
    ingredientsDetails: [
      { name: "Zucchina", qty: "1" },
      { name: "Melanzana", qty: "1" },
      { name: "Peperone", qty: "1" },
      { name: "Cipolla", qty: "1" },
      { name: "Passata di pomodoro", qty: "100ml" }
    ],
    steps: [
      "Taglia tutte le verdure a cubetti della stessa dimensione.",
      "Cuocile una ad una in padella con olio per sigillarle.",
      "Unisci tutte le verdure in una casseruola capiente.",
      "Aggiungi la passata, sale ed erbe di provenza.",
      "Cuoci a fuoco lentissimo per 30 minuti finché tutto è tenero."
    ],
    tips: "È ancora più buona il giorno dopo, servita tiepida con pane croccante.",
    category: "Contorni",
    time: 40,
    difficulty: "Media",
    servings: 3
  },
  {
    id: 25,
    title: "Fish and Chips Semplificato",
    description: "Il classico britannico in versione facile da fare a casa.",
    ingredients: ["Merluzzo", "Patate", "Farina", "Birra", "Olio"],
    ingredientsDetails: [
      { name: "Filetti di merluzzo", qty: "2" },
      { name: "Patate", qty: "2" },
      { name: "Farina 00", qty: "100g" },
      { name: "Birra bionda ghiacciata", qty: "150ml" },
      { name: "Olio per friggere", qty: "q.b." }
    ],
    steps: [
      "Taglia le patate a bastoncino e friggile in olio profondo.",
      "Prepara la pastella mescolando farina e birra finché liscia.",
      "Infarina il pesce, poi immergilo nella pastella.",
      "Friggi il pesce finché è dorato e croccante.",
      "Scola su carta assorbente e sala generosamente."
    ],
    tips: "Usa birra molto fredda per uno shock termico che rende la pastella croccante.",
    category: "Secondi",
    time: 30,
    difficulty: "Difficile",
    servings: 2
  },
  {
    id: 26,
    title: "Paella di Verdure",
    description: "Il sole della Spagna in una padella, ricca di colori e profumi.",
    ingredients: ["Riso", "Zafferano", "Peperoni", "Piselli", "Pomodoro", "Brodo"],
    ingredientsDetails: [
      { name: "Riso Bomba o Arborio", qty: "200g" },
      { name: "Peperone giallo e rosso", qty: "1/2 cad." },
      { name: "Piselli", qty: "50g" },
      { name: "Zafferano", qty: "1 bustina" },
      { name: "Brodo vegetale", qty: "500ml" }
    ],
    steps: [
      "Soffriggi i peperoni a listarelle in una padella larga (paella).",
      "Tosta il riso con le verdure.",
      "Sciogli lo zafferano nel brodo caldo.",
      "Versa il brodo sul riso e livella bene.",
      "Cuoci senza mescolare per 18 minuti finché il brodo è assorbito e si forma la crosticina sul fondo."
    ],
    tips: "Il 'socarrat' (la crosticina sul fondo) è la parte più pregiata della paella.",
    category: "Primi",
    time: 40,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 27,
    title: "Quesadillas",
    description: "Lo snack messicano veloce per eccellenza, filante e goloso.",
    ingredients: ["Tortillas", "Formaggio", "Pollo", "Cipolla"],
    ingredientsDetails: [
      { name: "Tortillas di farina", qty: "2" },
      { name: "Formaggio tipo Fontina o Edam", qty: "60g" },
      { name: "Avanzi di pollo cotto", qty: "50g" },
      { name: "Cipollotto fresco", qty: "1" }
    ],
    steps: [
      "Metti una tortilla in una padella calda.",
      "Copri con formaggio grattugiato e pollo sfilacciato.",
      "Chiudi con la seconda tortilla o piegala a metà.",
      "Cuoci 2 minuti per lato finché il formaggio è fuso.",
      "Taglia a spicchi e servi calda."
    ],
    tips: "Usa un formaggio che fonde bene per avere l'effetto 'stringy'.",
    category: "Antipasti",
    time: 15,
    difficulty: "Facile",
    servings: 1
  },
  {
    id: 28,
    title: "Cous Cous alle Verdure",
    description: "Leggero, veloce e salutare. Un piatto versatile per ogni stagione.",
    ingredients: ["Cous Cous", "Zucchine", "Carote", "Peperoni", "Olio"],
    ingredientsDetails: [
      { name: "Cous cous precotto", qty: "150g" },
      { name: "Verdure miste", qty: "200g" },
      { name: "Olio Extravergine", qty: "2 cucchiai" },
      { name: "Spezie (Curcuma, Menta)", qty: "q.b." }
    ],
    steps: [
      "Metti il cous cous in una ciotola con olio e sgrana con la forchetta.",
      "Copri con pari volume di acqua bollente salata e lascia riposare 5 min.",
      "Salta le verdure a cubetti piccoli in padella con le spezie.",
      "Sgrana il cous cous cotto con la forchetta.",
      "Unisci le verdure e mescola bene."
    ],
    tips: "Aggiungi mandorle tostate o pinoli per una nota croccante.",
    category: "Primi",
    time: 20,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 29,
    title: "Banana Bread",
    description: "Il dolce perfetto per recuperare le banane troppo mature. Profumatissimo.",
    ingredients: ["Banane", "Farina", "Uova", "Zucchero", "Burro", "Lievito"],
    ingredientsDetails: [
      { name: "Banane molto mature", qty: "3" },
      { name: "Farina 00", qty: "200g" },
      { name: "Burro fuso", qty: "80g" },
      { name: "Zucchero di canna", qty: "100g" },
      { name: "Uova", qty: "2" }
    ],
    steps: [
      "Schiaccia le banane con una forchetta fino a ridurle in purea.",
      "Unisci uova, burro fuso e zucchero, mescolando bene.",
      "Aggiungi farina e lievito setacciati.",
      "Versa in uno stampo da plumcake imburrato.",
      "Inforna a 180°C per circa 45-50 minuti."
    ],
    tips: "Aggiungi gocce di cioccolato o noci all'impasto per un tocco extra.",
    category: "Dolci",
    time: 60,
    difficulty: "Media",
    servings: 6
  },
  {
    id: 30,
    title: "Gaspacho",
    description: "La zuppa fredda spagnola, un'esplosione di freschezza e vitamine.",
    ingredients: ["Pomodoro", "Cetriolo", "Peperoni", "Pane", "Aglio", "Aceto"],
    ingredientsDetails: [
      { name: "Pomodori rossi maturi", qty: "500g" },
      { name: "Cetriolo", qty: "1/2" },
      { name: "Peperone verde", qty: "1/2" },
      { name: "Pane raffermo", qty: "1 fetta" },
      { name: "Aceto di Jerez o vino", qty: "1 cucchiaio" }
    ],
    steps: [
      "Ammolla il pane nell'aceto.",
      "Taglia tutte le verdure a pezzi grossolani.",
      "Metti tutto in un frullatore potente con sale e olio.",
      "Frulla finché non ottieni una consistenza liscissima.",
      "Passa al setaccio se vuoi una consistenza perfetta e raffredda in frigo 2 ore."
    ],
    tips: "Servi con cubetti di verdure croccanti e crostini sopra.",
    category: "Zuppe",
    time: 15,
    difficulty: "Facile",
    servings: 4
  },
  {
    id: 31,
    title: "Pasta alla Norma",
    description: "L'omaggio di Catania all'opera di Bellini. Melanzane e ricotta salata.",
    ingredients: ["Pasta", "Melanzane", "Pomodoro", "Ricotta Salata", "Basilico"],
    ingredientsDetails: [
      { name: "Pasta corta (Maccheroni)", qty: "200g" },
      { name: "Melanzana", qty: "1" },
      { name: "Passata di pomodoro", qty: "250ml" },
      { name: "Ricotta salata da grattugiare", qty: "50g" },
      { name: "Basilico", qty: "q.b." }
    ],
    steps: [
      "Taglia la melanzana a cubetti o fette e friggila in abbondante olio.",
      "Scola le melanzane su carta assorbente.",
      "Prepara un sugo semplice con aglio e pomodoro.",
      "Lessa la pasta e uniscila al sugo con le melanzane.",
      "Servi con una pioggia di ricotta salata e foglie di basilico."
    ],
    tips: "Usa ricotta salata stagionata, non quella fresca, per il gusto autentico.",
    category: "Pasta",
    time: 30,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 32,
    title: "Falafel",
    description: "Le polpette di ceci speziate mediorientali, croccanti e deliziose.",
    ingredients: ["Ceci", "Prezzemolo", "Aglio", "Cipolla", "Cumino", "Olio"],
    ingredientsDetails: [
      { name: "Ceci crudi ammollati (non cotti!)", qty: "250g" },
      { name: "Prezzemolo fresco", qty: "1 mazzetto" },
      { name: "Aglio", qty: "1 spicchio" },
      { name: "Cipolla piccola", qty: "1" },
      { name: "Olio per friggere", qty: "q.b." }
    ],
    steps: [
      "Frulla i ceci ammollati (da 24h) con prezzemolo, cipolla, aglio e spezie.",
      "Ottieni un composto granuloso ma compatto.",
      "Lascia riposare l'impasto in frigo per 1 ora.",
      "Forma delle palline o dischetti premendo bene.",
      "Friggi in olio bollente finché non sono scure e croccanti."
    ],
    tips: "Non usare mai ceci in scatola: i falafel si sfalderebbero in frittura.",
    category: "Secondi",
    time: 40,
    difficulty: "Difficile",
    servings: 3
  },
  {
    id: 33,
    title: "Club Sandwich",
    description: "Il sandwich a tre strati più famoso del mondo, un pasto completo.",
    ingredients: ["Pane", "Pollo", "Bacon", "Lattuga", "Pomodoro", "Maionese"],
    ingredientsDetails: [
      { name: "Pane in cassetta", qty: "3 fette" },
      { name: "Bacon", qty: "3 fette" },
      { name: "Pollo grigliato", qty: "50g" },
      { name: "Maionese", qty: "q.b." },
      { name: "Pomodoro e Lattuga", qty: "q.b." }
    ],
    steps: [
      "Tosta le tre fette di pane.",
      "Rendi croccante il bacon in padella senza olio.",
      "Spalma la maionese sul primo strato e aggiungi lattuga, pomodoro e pollo.",
      "Metti la seconda fetta di pane, altra maionese, bacon e altro pollo.",
      "Chiudi con la terza fetta, schiaccia bene e taglia a triangoli fermando con stuzzicadenti."
    ],
    tips: "Usa un pane robusto che non si inzuppi troppo con la maionese.",
    category: "Secondi",
    time: 25,
    difficulty: "Media",
    servings: 1
  },
  {
    id: 34,
    title: "Zuppa di Cipolle",
    description: "La famosa Soupe à l'Oignon francese, dolce e filante.",
    ingredients: ["Cipolla", "Pane", "Formaggio", "Brodo", "Burro"],
    ingredientsDetails: [
      { name: "Cipolle dorate", qty: "500g" },
      { name: "Burro", qty: "30g" },
      { name: "Gruyère o Emmental grattugiato", qty: "60g" },
      { name: "Pane baguette", qty: "4 fette" },
      { name: "Brodo di carne o vegetale", qty: "800ml" }
    ],
    steps: [
      "Affetta le cipolle e stufale nel burro a fuoco lentissimo per 30 minuti finché caramellate.",
      "Aggiungi il brodo e cuoci altri 20 minuti.",
      "Tosta il pane.",
      "Metti la zuppa in ciotole da forno, copri col pane e abbondante formaggio.",
      "Gratina in forno finché il formaggio non fa le bollicine dorate."
    ],
    tips: "La pazienza è tutto: le cipolle devono diventare marroni ma non bruciate.",
    category: "Zuppe",
    time: 50,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 35,
    title: "Pizza Margherita Semplice",
    description: "L'icona di Napoli. Semplice, saporita e perfetta nella sua essenzialità.",
    ingredients: ["Farina", "Lievito", "Acqua", "Pomodoro", "Mozzarella", "Olio"],
    ingredientsDetails: [
      { name: "Farina tipo 0", qty: "300g" },
      { name: "Acqua tiepida", qty: "200ml" },
      { name: "Lievito di birra secco", qty: "3g" },
      { name: "Mozzarella per pizza", qty: "150g" },
      { name: "Passata di pomodoro", qty: "100ml" }
    ],
    steps: [
      "Impasta farina, acqua e lievito finché liscio. Lievita 2-3 ore.",
      "Stendi l'impasto in una teglia unta.",
      "Distribuisci il pomodoro e un filo d'olio.",
      "Inforna al massimo della temperatura per 10 minuti.",
      "Aggiungi la mozzarella e cuoci altri 5 minuti finché sciolta."
    ],
    tips: "Usa mozzarella fior di latte ben asciutta per non allagare la pizza.",
    category: "Lievitati",
    time: 120,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 36,
    title: "Mousse al Cioccolato",
    description: "Un dessert raffinato e leggero come una nuvola.",
    ingredients: ["Cioccolato", "Uova", "Zucchero"],
    ingredientsDetails: [
      { name: "Cioccolato fondente 70%", qty: "100g" },
      { name: "Uova freschissime", qty: "3" },
      { name: "Zucchero a velo", qty: "1 cucchiaio" }
    ],
    steps: [
      "Sciogli il cioccolato a bagnomaria e lascialo intiepidire.",
      "Separa i tuorli dagli albumi.",
      "Unisci i tuorli al cioccolato uno alla volta.",
      "Monta gli albumi a neve fermissima con lo zucchero.",
      "Incorpora gli albumi al cioccolato con movimenti dal basso verso l'alto senza smontarli."
    ],
    tips: "Lascia riposare in frigo almeno 4 ore prima di servire.",
    category: "Dolci",
    time: 20,
    difficulty: "Media",
    servings: 3
  },
  {
    id: 37,
    title: "Spaghetti alla Puttanesca",
    description: "Un'esplosione di sapori mediterranei decisi e piccanti.",
    ingredients: ["Pasta", "Pomodoro", "Olive", "Capperi", "Acciughe", "Aglio"],
    ingredientsDetails: [
      { name: "Spaghetti", qty: "200g" },
      { name: "Pomodori pelati", qty: "200g" },
      { name: "Olive nere di Gaeta", qty: "50g" },
      { name: "Capperi sotto sale", qty: "1 cucchiaio" },
      { name: "Acciughe sott'olio", qty: "3 filetti" }
    ],
    steps: [
      "Soffriggi aglio, peperoncino e acciughe finché si sciolgono.",
      "Aggiungi olive e capperi dissalati.",
      "Versa i pomodori schiacciandoli con la forchetta.",
      "Cuoci il sugo per 15 minuti.",
      "Scola la pasta e saltala nel condimento con prezzemolo fresco."
    ],
    tips: "Non aggiungere sale all'acqua della pasta: capperi e acciughe sono già molto sapidi.",
    category: "Pasta",
    time: 20,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 38,
    title: "Insalata Niçoise",
    description: "La ricca insalata di Nizza, un piatto unico completo e colorato.",
    ingredients: ["Tonno", "Uova", "Fagiolini", "Patate", "Pomodoro", "Olive"],
    ingredientsDetails: [
      { name: "Tonno di qualità", qty: "120g" },
      { name: "Uova sode", qty: "2" },
      { name: "Fagiolini lessi", qty: "100g" },
      { name: "Patata lessa", qty: "1" },
      { name: "Olive nere e pomodori", qty: "q.b." }
    ],
    steps: [
      "Lessa patate, fagiolini e uova e lasciali raffreddare.",
      "Taglia le verdure a pezzi e le uova a spicchi.",
      "Disponi su un piatto le foglie di lattuga.",
      "Aggiungi tutti gli ingredienti in modo armonioso.",
      "Condisci con una vinaigrette di olio, limone, sale e un po' di senape."
    ],
    tips: "Servi con filetti di acciuga per un gusto ancora più autentico.",
    category: "Insalate",
    time: 35,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 39,
    title: "Tempura di Verdure",
    description: "La frittura giapponese: leggera, croccante e quasi trasparente.",
    ingredients: ["Zucchine", "Carote", "Farina", "Acqua Frizzante", "Olio"],
    ingredientsDetails: [
      { name: "Zucchine e Carote", qty: "200g" },
      { name: "Farina di riso o 00", qty: "100g" },
      { name: "Acqua frizzante ghiacciata", qty: "150ml" },
      { name: "Olio di semi", qty: "q.b." }
    ],
    steps: [
      "Taglia le verdure a bastoncini sottili.",
      "Mescola farina e acqua velocemente (non importa se restano grumi).",
      "Immergi le verdure nella pastella fredda.",
      "Friggi poche per volta in olio caldissimo (180°C).",
      "Scola subito quando sono dorate e servi con salsa di soia."
    ],
    tips: "La pastella deve essere usata subito e deve essere fredda di frigo.",
    category: "Antipasti",
    time: 25,
    difficulty: "Difficile",
    servings: 3
  },
  {
    id: 40,
    title: "Torta di Mele",
    description: "La torta della nonna per eccellenza, profumata e soffice.",
    ingredients: ["Mele", "Farina", "Uova", "Zucchero", "Burro", "Latte"],
    ingredientsDetails: [
      { name: "Mele Golden", qty: "3" },
      { name: "Farina 00", qty: "250g" },
      { name: "Zucchero", qty: "150g" },
      { name: "Uova", qty: "3" },
      { name: "Latte", qty: "100ml" }
    ],
    steps: [
      "Monta uova e zucchero finché spumosi.",
      "Aggiungi burro fuso e latte.",
      "Incorpora farina e lievito piano piano.",
      "Aggiungi due mele tagliate a cubetti nell'impasto.",
      "Metti in teglia, decora con l'ultima mela a fette e inforna a 180°C per 45 min."
    ],
    tips: "Cospargi la superficie con zucchero e cannella prima di infornare per una crosticina deliziosa.",
    category: "Dolci",
    time: 60,
    difficulty: "Media",
    servings: 6
  },
  {
    id: 41,
    title: "Salmone allo Zenzero",
    description: "Un piatto di pesce fusion, sano e ricchissimo di omega-3.",
    ingredients: ["Salmone", "Zenzero", "Soia", "Miele", "Limone"],
    ingredientsDetails: [
      { name: "Filetto di salmone", qty: "2" },
      { name: "Zenzero fresco grattugiato", qty: "1 cucchiaio" },
      { name: "Salsa di soia", qty: "2 cucchiai" },
      { name: "Miele", qty: "1 cucchiaino" }
    ],
    steps: [
      "Prepara una glassa mescolando soia, miele, zenzero e succo di limone.",
      "Spennella il salmone con la glassa.",
      "Metti in una teglia con carta forno.",
      "Inforna a 200°C per circa 12-15 minuti.",
      "Servi con riso basmati o verdure al vapore."
    ],
    tips: "Non stracuocere il salmone, l'interno deve rimanere di un rosa intenso.",
    category: "Secondi",
    time: 20,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 42,
    title: "Gnocchi alla Sorrentina",
    description: "Tutta la semplicità e il sapore di Sorrento in un piatto filante.",
    ingredients: ["Patate", "Farina", "Pomodoro", "Mozzarella", "Parmigiano"],
    ingredientsDetails: [
      { name: "Gnocchi di patate", qty: "400g" },
      { name: "Sugo di pomodoro semplice", qty: "300ml" },
      { name: "Mozzarella di bufala o fior di latte", qty: "150g" },
      { name: "Parmigiano Reggiano", qty: "30g" }
    ],
    steps: [
      "Lessa gli gnocchi e scola quando salgono a galla.",
      "Condiscili con il sugo di pomodoro bollente.",
      "Metti tutto in pirofile di terracotta.",
      "Aggiungi cubetti di mozzarella e parmigiano.",
      "Passa sotto il grill del forno per 5 minuti finché la mozzarella è fusa."
    ],
    tips: "Aggiungi abbondante basilico fresco prima di infornare per un profumo paradisiaco.",
    category: "Pasta",
    time: 45,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 43,
    title: "Chili con Carne",
    description: "Il piatto tex-mex per eccellenza, piccante e sostanzioso.",
    ingredients: ["Carne Macinata", "Fagioli", "Pomodoro", "Cipolla", "Peperoncino"],
    ingredientsDetails: [
      { name: "Manzo macinato", qty: "400g" },
      { name: "Fagioli neri o rossi", qty: "250g" },
      { name: "Pomodori pelati", qty: "400g" },
      { name: "Cipolla grande", qty: "1" },
      { name: "Spezie (Chili, Cumino, Paprika)", qty: "q.b." }
    ],
    steps: [
      "Rosola la cipolla con le spezie.",
      "Aggiungi la carne e falla brunire bene.",
      "Versa i pomodori e un po' d'acqua.",
      "Cuoci a fuoco dolce per almeno 1 ora.",
      "Aggiungi i fagioli alla fine e cuoci altri 15 minuti."
    ],
    tips: "Un quadratino di cioccolato fondente nel sugo dà una profondità incredibile al sapore.",
    category: "Piatti Unici",
    time: 90,
    difficulty: "Difficile",
    servings: 4
  },
  {
    id: 44,
    title: "Tiramisù",
    description: "Il dolce italiano più conosciuto al mondo. Il segreto è nella crema.",
    ingredients: ["Savoiardi", "Mascarpone", "Uova", "Caffè", "Zucchero", "Cacao"],
    ingredientsDetails: [
      { name: "Mascarpone", qty: "500g" },
      { name: "Uova freschissime", qty: "4" },
      { name: "Savoiardi", qty: "250g" },
      { name: "Zucchero", qty: "100g" },
      { name: "Caffè espresso freddo", qty: "q.b." }
    ],
    steps: [
      "Separa i tuorli e montali con lo zucchero, poi unisci il mascarpone.",
      "Monta gli albumi a neve e incorporali alla crema delicatamente.",
      "Inzuppa velocemente i savoiardi nel caffè.",
      "Alterna strati di savoiardi e crema in una pirofila.",
      "Spolvera abbondantemente di cacao amaro e lascia in frigo almeno 6 ore."
    ],
    tips: "Non bagnare troppo i savoiardi o il dolce diventerà troppo molle sul fondo.",
    category: "Dolci",
    time: 30,
    difficulty: "Media",
    servings: 6
  },
  {
    id: 45,
    title: "Agnello alle Erbe",
    description: "Un secondo piatto profumato, ideale per le grandi occasioni.",
    ingredients: ["Agnello", "Aglio", "Rosmarino", "Timo", "Vino Bianco"],
    ingredientsDetails: [
      { name: "Costolette d'agnello", qty: "400g" },
      { name: "Erbette (Rosmarino, Timo, Salvia)", qty: "q.b." },
      { name: "Vino bianco", qty: "1/2 bicchiere" },
      { name: "Aglio", qty: "2 spicchi" }
    ],
    steps: [
      "Marina l'agnello con erbe e aglio per 30 min.",
      "Scalda una padella e scotta la carne a fuoco vivo.",
      "Sfuma con il vino bianco.",
      "Abbassa la fiamma e cuoci per 10-15 minuti finché tenero.",
      "Servi con patate arrosto."
    ],
    tips: "Assicurati che la padella sia rovente prima di mettere la carne per sigillare i succhi.",
    category: "Secondi",
    time: 40,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 46,
    title: "Poke Bowl Fai-da-te",
    description: "Fresca, colorata e di gran moda. Una bowl completa di tutto.",
    ingredients: ["Riso", "Pesce Crudo", "Avocado", "Soia", "Cetriolo"],
    ingredientsDetails: [
      { name: "Riso per sushi", qty: "150g" },
      { name: "Salmone o Tonno abbattuto", qty: "150g" },
      { name: "Avocado", qty: "1/2" },
      { name: "Edamame e Cetriolo", qty: "q.b." },
      { name: "Salsa di soia e Sesamo", qty: "q.b." }
    ],
    steps: [
      "Cuoci il riso e condiscilo con un po' di aceto di riso e zucchero.",
      "Taglia il pesce a cubetti e marinalo con soia e olio di sesamo.",
      "Affetta l'avocado e il cetriolo.",
      "Componi la bowl mettendo il riso alla base e le guarnizioni sopra divise per colori.",
      "Finisci con semi di sesamo e alga nori a striscioline."
    ],
    tips: "Usa solo pesce di cui sei sicurissimo della freschezza e del trattamento per il consumo crudo.",
    category: "Piatti Unici",
    time: 20,
    difficulty: "Media",
    servings: 1
  },
  {
    id: 47,
    title: "Polpette al Sugo",
    description: "Il piatto che sa di casa e di domeniche in famiglia.",
    ingredients: ["Carne Macinata", "Pane", "Uova", "Parmigiano", "Pomodoro"],
    ingredientsDetails: [
      { name: "Macinato misto", qty: "300g" },
      { name: "Pane ammollato nel latte", qty: "50g" },
      { name: "Uova", qty: "1" },
      { name: "Parmigiano", qty: "40g" },
      { name: "Sugo di pomodoro", qty: "400ml" }
    ],
    steps: [
      "Impasta carne, uova, pane strizzato e parmigiano.",
      "Forma delle palline grandi come noci.",
      "Rosola le polpette in padella con un po' d'olio.",
      "Aggiungi il sugo di pomodoro e cuoci coperto per 30 minuti.",
      "Servi con tanto pane per la scarpetta."
    ],
    tips: "Aggiungi un pizzico di noce moscata all'impasto per un tocco vintage.",
    category: "Secondi",
    time: 45,
    difficulty: "Facile",
    servings: 3
  },
  {
    id: 48,
    title: "Risotto ai Funghi",
    description: "Elegante e saporito, il re dei primi autunnali.",
    ingredients: ["Riso", "Funghi", "Cipolla", "Vino Bianco", "Burro", "Parmigiano"],
    ingredientsDetails: [
      { name: "Riso Carnaroli", qty: "160g" },
      { name: "Funghi Porcini (freschi o secchi)", qty: "150g" },
      { name: "Brodo vegetale", qty: "700ml" },
      { name: "Burro", qty: "20g" },
      { name: "Parmigiano", qty: "30g" }
    ],
    steps: [
      "Soffriggi la cipolla tritata, unisci i funghi e rosola.",
      "Aggiungi il riso e tostalo finché diventa lucido.",
      "Sfuma col vino bianco.",
      "Cuoci aggiungendo brodo caldo un mestolo alla volta.",
      "A fine cottura manteca fuori dal fuoco con burro e parmigiano."
    ],
    tips: "Se usi funghi secchi, usa l'acqua dell'ammollo (filtrata) per cuocere il riso: sapore decuplicato!",
    category: "Primi",
    time: 35,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 49,
    title: "Crepes alla Nutella",
    description: "Il peccato di gola a cui nessuno sa resistere.",
    ingredients: ["Farina", "Latte", "Uova", "Burro", "Nutella"],
    ingredientsDetails: [
      { name: "Farina 00", qty: "125g" },
      { name: "Latte intero", qty: "250ml" },
      { name: "Uova", qty: "2" },
      { name: "Burro", qty: "20g" },
      { name: "Nutella", qty: "q.b." }
    ],
    steps: [
      "Mescola uova e farina, poi aggiungi il latte piano per non fare grumi.",
      "Lascia riposare la pastella 30 min.",
      "Scalda una padella piatta unta di burro.",
      "Versa un mestolo di pastella, stendi bene e cuoci 1 minuto per lato.",
      "Farcisci con Nutella calda, piega in quattro e servi con zucchero a velo."
    ],
    tips: "La padella deve essere calda ma non rovente, altrimenti la pastella si rapprende prima che tu possa stenderla.",
    category: "Dolci",
    time: 20,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 50,
    title: "Uova in Purgatorio",
    description: "Una ricetta napoletana povera ma ricchissima di gusto.",
    ingredients: ["Uova", "Pomodoro", "Aglio", "Olio", "Pepe"],
    ingredientsDetails: [
      { name: "Uova", qty: "4" },
      { name: "Passata di pomodoro", qty: "300ml" },
      { name: "Aglio", qty: "1 spicchio" },
      { name: "Olio EVO", qty: "2 cucchiai" }
    ],
    steps: [
      "Fai un sugo di pomodoro veloce con aglio e olio.",
      "Quando è ristretto, scava delle piccole 'fosse' nel sugo.",
      "Rompi le uova dentro le fosse.",
      "Copri con il coperchio e cuoci finché l'albume diventa bianco.",
      "Servi con tanto pane tostato e pepe nero."
    ],
    tips: "Non far cuocere troppo il tuorlo: deve rimanere liquido per mescolarsi con il pomodoro.",
    category: "Secondi",
    time: 20,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 51,
    title: "Minestrone di Verdure",
    description: "Un concentrato di salute e benessere, perfetto con un filo d'olio a crudo.",
    ingredients: ["Zucchine", "Carote", "Patate", "Sedano", "Fagioli", "Olio"],
    ingredientsDetails: [
      { name: "Mix di verdure fresche", qty: "500g" },
      { name: "Fagioli borlotti", qty: "100g" },
      { name: "Patata", qty: "1" },
      { name: "Crosta di parmigiano", qty: "1" }
    ],
    steps: [
      "Taglia tutte le verdure a cubetti piccoli.",
      "Mettile in una pentola capiente e copri con acqua fredda.",
      "Aggiungi la crosta di parmigiano (pulita) per dare sapore.",
      "Cuoci per circa 45 minuti a fuoco medio.",
      "Aggiungi sale alla fine e servi con un filo d'olio."
    ],
    tips: "Puoi cuocere della pasta piccola o del riso direttamente nel minestrone negli ultimi minuti.",
    category: "Zuppe",
    time: 60,
    difficulty: "Facile",
    servings: 4
  },
  {
    id: 52,
    title: "Sogliola alla Mugnaia",
    description: "Un piatto di pesce delicatissimo, ideale per i bambini e per chi ama i sapori puliti.",
    ingredients: ["Sogliola", "Farina", "Burro", "Limone", "Prezzemolo"],
    ingredientsDetails: [
      { name: "Sogliola pulita", qty: "1" },
      { name: "Farina 00", qty: "q.b." },
      { name: "Burro", qty: "30g" },
      { name: "Succo di 1/2 limone", qty: "q.b." }
    ],
    steps: [
      "Infarina la sogliola su entrambi i lati.",
      "Sciogli il burro in una padella finché non inizia a spumeggiare.",
      "Cuoci la sogliola 3 minuti per lato finché dorata.",
      "Irrora con il succo di limone e prezzemolo tritato.",
      "Servi subito con il fondo di cottura."
    ],
    tips: "Usa burro chiarificato se vuoi una cottura ancora più croccante senza bruciare il burro.",
    category: "Secondi",
    time: 15,
    difficulty: "Media",
    servings: 1
  },
  {
    id: 53,
    title: "Calamari Fritti",
    description: "Il classico della domenica al mare, croccanti e dorati.",
    ingredients: ["Calamari", "Farina", "Olio", "Limone", "Sale"],
    ingredientsDetails: [
      { name: "Calamari freschi", qty: "400g" },
      { name: "Farina di semola rimacinata", qty: "q.b." },
      { name: "Olio di semi di arachide", qty: "q.b." },
      { name: "Sale", qty: "q.b." }
    ],
    steps: [
      "Pulisci i calamari e tagliali ad anelli.",
      "Asciugali benissimo con carta da cucina.",
      "Passali nella farina di semola, togliendo l'eccesso.",
      "Friggi in olio bollente per non più di 2 minuti.",
      "Scola, sala e servi bollenti con limone."
    ],
    tips: "Usa la farina di semola invece della 00 per una frittura molto più croccante e asciutta.",
    category: "Secondi",
    time: 20,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 54,
    title: "Risi e Bisi",
    description: "La tradizionale minestra veneta di riso e piselli, densa e saporita.",
    ingredients: ["Riso", "Piselli", "Pancetta", "Cipolla", "Parmigiano"],
    ingredientsDetails: [
      { name: "Riso Vialone Nano", qty: "160g" },
      { name: "Piselli freschi o surgelati", qty: "200g" },
      { name: "Pancetta tesa", qty: "30g" },
      { name: "Cipolla piccola", qty: "1" }
    ],
    steps: [
      "Soffriggi cipolla e pancetta tritata.",
      "Aggiungi i piselli e un po' di brodo, cuocendo per 5 min.",
      "Unisci il riso e continua la cottura aggiungendo brodo man mano.",
      "Il risultato deve essere una via di mezzo tra un riso e una minestra.",
      "Manteca con burro e parmigiano alla fine."
    ],
    tips: "Usa anche i baccelli dei piselli freschi (bolliti e passati) per fare il brodo: è il segreto veneto!",
    category: "Primi",
    time: 30,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 55,
    title: "Uova alla Benedict",
    description: "Il re del brunch. Uovo in camicia su muffin con salsa olandese.",
    ingredients: ["Uova", "Pane", "Bacon", "Burro", "Limone"],
    ingredientsDetails: [
      { name: "Uova", qty: "2" },
      { name: "Pane tipo muffin inglese o brioche", qty: "1" },
      { name: "Bacon o prosciutto cotto", qty: "2 fette" },
      { name: "Salsa Olandese", qty: "q.b." }
    ],
    steps: [
      "Prepara l'uovo in camicia: bolli acqua con aceto e crea un vortice, poi versa l'uovo per 3 min.",
      "Tosta il pane e rosola il bacon.",
      "Disponi il bacon sul pane, poi l'uovo sopra.",
      "Copri generosamente con la salsa olandese tiepida.",
      "Finisci con un pizzico di pepe o erba cipollina."
    ],
    tips: "La salsa olandese si fa a bagnomaria con tuorli e burro chiarificato, montando come una maionese calda.",
    category: "Colazione",
    time: 30,
    difficulty: "Difficile",
    servings: 1
  },
  {
    id: 56,
    title: "Pasta con le Sarde",
    description: "Un capolavoro della cucina siciliana, equilibrio perfetto di mare e terra.",
    ingredients: ["Pasta", "Sarde", "Finocchietto", "Uvetta", "Pinoli", "Zafferano"],
    ingredientsDetails: [
      { name: "Pasta (Bucatini)", qty: "200g" },
      { name: "Sarde fresche pulite", qty: "150g" },
      { name: "Finocchietto selvatico", qty: "1 mazzetto" },
      { name: "Uvetta e Pinoli", qty: "q.b." }
    ],
    steps: [
      "Lessa il finocchietto in acqua salata, poi usa la stessa acqua per la pasta.",
      "Soffriggi cipolla, acciughe, uvetta e pinoli.",
      "Aggiungi le sarde e il finocchietto tritato.",
      "Sciogli lo zafferano in un po' d'acqua e aggiungilo al sugo.",
      "Scola la pasta e saltala col condimento profumato."
    ],
    tips: "Aggiungi della mollica di pane tostata in padella ('muddica atturrata') alla fine per il tocco finale.",
    category: "Pasta",
    time: 40,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 57,
    title: "Bibimbap Coreano",
    description: "Riso, verdure saltate, carne e uovo in una bowl iconica e saporita.",
    ingredients: ["Riso", "Manzo", "Carote", "Spinaci", "Uova", "Zucchine"],
    ingredientsDetails: [
      { name: "Riso Originario cotto", qty: "150g" },
      { name: "Manzo macinato o a strisce", qty: "100g" },
      { name: "Verdure miste (Carote, Zucchine, Spinaci)", qty: "q.b." },
      { name: "Uovo", qty: "1" }
    ],
    steps: [
      "Salta le verdure separatamente con un filo d'olio e sale.",
      "Cuoci la carne con un goccio di soia e zucchero.",
      "Prepara un uovo all'occhio di bue.",
      "Metti il riso nella bowl, disponi sopra le verdure a raggiera e la carne.",
      "Metti l'uovo al centro e servi con pasta di peperoncino (Gochujang)."
    ],
    tips: "Mescola tutto energicamente prima di mangiare per amalgamare i sapori.",
    category: "Piatti Unici",
    time: 30,
    difficulty: "Media",
    servings: 1
  },
  {
    id: 58,
    title: "Carpaccio di Manzo",
    description: "Fettine di carne cruda sottilissime, freschezza ed eleganza assoluta.",
    ingredients: ["Manzo", "Parmigiano", "Rucola", "Limone", "Olio"],
    ingredientsDetails: [
      { name: "Manzo per carpaccio", qty: "150g" },
      { name: "Parmigiano in scaglie", qty: "30g" },
      { name: "Rucola fresca", qty: "q.b." },
      { name: "Olio Extravergine e Limone", qty: "q.b." }
    ],
    steps: [
      "Disponi le fettine di carne su un piatto piano senza sovrapporle troppo.",
      "Crea un letto di rucola sopra la carne.",
      "Aggiungi le scaglie di parmigiano.",
      "Prepara un'emulsione di olio, limone e sale e irrora tutto.",
      "Servi immediatamente con pepe nero macinato fresco."
    ],
    tips: "La carne deve essere freschissima e tagliata al momento dal macellaio.",
    category: "Antipasti",
    time: 10,
    difficulty: "Facile",
    servings: 1
  },
  {
    id: 59,
    title: "Omelette ai Formaggi",
    description: "La classica frittata francese ripiegata, con cuore filante.",
    ingredients: ["Uova", "Burro", "Formaggio", "Sale", "Pepe"],
    ingredientsDetails: [
      { name: "Uova", qty: "3" },
      { name: "Burro", qty: "15g" },
      { name: "Mix di formaggi (Emmental, Fontina)", qty: "40g" }
    ],
    steps: [
      "Sbatti le uova leggermente, senza montarle.",
      "Sciogli il burro in padella a fuoco medio.",
      "Versa le uova e smuovile con una forchetta finché iniziano a rapprendersi.",
      "Metti il formaggio al centro.",
      "Ripiega l'omelette a metà o a tre e servila ancora morbida (baveuse)."
    ],
    tips: "L'omelette perfetta deve essere dorata fuori ma cremosa all'interno.",
    category: "Secondi",
    time: 10,
    difficulty: "Media",
    servings: 1
  },
  {
    id: 60,
    title: "Polenta e Funghi",
    description: "Un piatto rustico e montanaro, l'abbraccio dell'autunno.",
    ingredients: ["Polenta", "Funghi", "Aglio", "Olio", "Prezzemolo", "Burro"],
    ingredientsDetails: [
      { name: "Farina di mais per polenta", qty: "200g" },
      { name: "Funghi misti", qty: "300g" },
      { name: "Aglio", qty: "1 spicchio" },
      { name: "Burro e Parmigiano", qty: "q.b." }
    ],
    steps: [
      "Prepara la polenta cuocendola in acqua salata bollente secondo i tempi.",
      "Intanto in padella rosola l'aglio con l'olio e cuoci i funghi a fuoco vivo.",
      "Versa la polenta morbida nei piatti.",
      "Copri con una generosa cucchiaiata di funghi trifolati.",
      "Aggiungi un ricciolo di burro sopra se ti piace."
    ],
    tips: "Usa polenta a cottura rapida se hai poco tempo, ma quella taragna è più saporita.",
    category: "Piatti Unici",
    time: 40,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 61,
    title: "Sushi: Nigiri al Salmone",
    description: "L'arte del sushi a casa tua. Semplice ma richiede precisione.",
    ingredients: ["Riso", "Salmone", "Wasabi", "Soia", "Zenzero"],
    ingredientsDetails: [
      { name: "Riso per sushi cotto e condito", qty: "200g" },
      { name: "Salmone abbattuto freschissimo", qty: "100g" },
      { name: "Pasta wasabi", qty: "q.b." }
    ],
    steps: [
      "Prendi una piccola quantità di riso e forma un panetto ovale con le mani bagnate.",
      "Taglia il salmone a fettine sottili (neta).",
      "Metti una punta di wasabi sulla fettina di pesce.",
      "Adagia il pesce sul panetto di riso e premi delicatamente per farlo aderire.",
      "Servi con salsa di soia e zenzero marinato."
    ],
    tips: "Bagnati le mani con acqua e aceto di riso per evitare che il riso si attacchi alle dita.",
    category: "Etnico",
    time: 45,
    difficulty: "Difficile",
    servings: 2
  },
  {
    id: 62,
    title: "Pasta all'Arrabbiata",
    description: "Piccante, decisa e velocissima. Un classico romano.",
    ingredients: ["Pasta", "Pomodoro", "Peperoncino", "Aglio", "Olio", "Prezzemolo"],
    ingredientsDetails: [
      { name: "Pasta (Penne Rigate)", qty: "200g" },
      { name: "Pomodori pelati", qty: "250g" },
      { name: "Peperoncino secco o fresco", qty: "2" },
      { name: "Aglio", qty: "2 spicchi" }
    ],
    steps: [
      "Soffriggi aglio e tanto peperoncino in olio.",
      "Aggiungi i pomodori schiacciati e cuoci per 10 min.",
      "Lessa le penne al dente.",
      "Salta la pasta nel sugo piccante.",
      "Spegni il fuoco, aggiungi prezzemolo fresco e servi subito."
    ],
    tips: "Non aggiungere formaggio, l'arrabbiata si mangia così, pura e piccante.",
    category: "Pasta",
    time: 15,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 63,
    title: "Arrosto della Domenica",
    description: "La carne tenera e succosa cotta lentamente, con il suo sugo saporito.",
    ingredients: ["Manzo", "Carote", "Sedano", "Cipolla", "Vino Rosso", "Olio"],
    ingredientsDetails: [
      { name: "Girello o Magatello di manzo", qty: "800g" },
      { name: "Mix per soffritto (Carota, Sedano, Cipolla)", qty: "q.b." },
      { name: "Vino rosso", qty: "1 bicchiere" },
      { name: "Brodo di carne", qty: "q.b." }
    ],
    steps: [
      "Lega la carne e rosolala bene in olio su tutti i lati per sigillare i succhi.",
      "Aggiungi le verdure tritate e lascia soffriggere.",
      "Sfuma col vino rosso.",
      "Aggiungi brodo, copri e cuoci a fuoco basso per circa 1.5 ore.",
      "Affetta la carne fredda e servila col sugo frullato e caldo."
    ],
    tips: "Lascia riposare la carne mezz'ora prima di tagliarla, altrimenti si sfalderà.",
    category: "Secondi",
    time: 120,
    difficulty: "Media",
    servings: 4
  },
  {
    id: 64,
    title: "Muffin ai Mirtilli",
    description: "Soffici collinette dolci, perfette per la merenda o la colazione.",
    ingredients: ["Farina", "Zucchero", "Uova", "Mirtilli", "Yogurt", "Olio"],
    ingredientsDetails: [
      { name: "Farina 00", qty: "200g" },
      { name: "Mirtilli freschi", qty: "125g" },
      { name: "Yogurt bianco", qty: "1 vasetto" },
      { name: "Uova", qty: "2" },
      { name: "Zucchero", qty: "120g" }
    ],
    steps: [
      "In una ciotola mescola uova, yogurt e olio.",
      "In un'altra mescola farina, zucchero e lievito.",
      "Unisci i due composti senza mescolare troppo (devono restare grumi).",
      "Infine aggiungi i mirtilli infarinati.",
      "Versa nei pirottini e inforna a 180°C per 20 minuti."
    ],
    tips: "Infarinare i mirtilli impedisce loro di precipitare sul fondo del muffin.",
    category: "Dolci",
    time: 30,
    difficulty: "Facile",
    servings: 6
  },
  {
    id: 65,
    title: "Uova in Camicia su Spinaci",
    description: "Un piatto leggero e chic, ottimo per una cena leggera.",
    ingredients: ["Uova", "Spinaci", "Burro", "Aceto", "Sale"],
    ingredientsDetails: [
      { name: "Uova fresche", qty: "2" },
      { name: "Spinaci freschi", qty: "200g" },
      { name: "Burro", qty: "10g" },
      { name: "Aceto di vino bianco", qty: "1 cucchiaio" }
    ],
    steps: [
      "Salta gli spinaci in padella con una noce di burro finché appassiti.",
      "Prepara l'uovo in camicia in acqua bollente con aceto (3 min).",
      "Disponi gli spinaci a nido sul piatto.",
      "Adagia l'uovo al centro degli spinaci.",
      "Aggiungi un pizzico di sale e pepe."
    ],
    tips: "L'uovo deve essere freddo di frigo per riuscire meglio nella camicia.",
    category: "Secondi",
    time: 15,
    difficulty: "Media",
    servings: 1
  },
  {
    id: 66,
    title: "Pasta allo Scoglio",
    description: "Il profumo del mare in un piatto ricco e scenografico.",
    ingredients: ["Pasta", "Cozze", "Vongole", "Gamberi", "Pomodoro", "Aglio"],
    ingredientsDetails: [
      { name: "Spaghetti", qty: "200g" },
      { name: "Cozze e Vongole", qty: "300g" },
      { name: "Gamberi freschi", qty: "4" },
      { name: "Pomodorini ciliegino", qty: "5" }
    ],
    steps: [
      "Fai aprire cozze e vongole in padella con aglio e olio, poi filtra l'acqua.",
      "In un'altra padella scotta i gamberi.",
      "Aggiungi i pomodorini e l'acqua filtrata dei frutti di mare.",
      "Lessa la pasta molto al dente e finisci la cottura nel sugo di mare.",
      "Unisci i molluschi alla fine e servi con prezzemolo."
    ],
    tips: "Usa solo frutti di mare freschissimi per un sapore di mare autentico.",
    category: "Pasta",
    time: 30,
    difficulty: "Difficile",
    servings: 2
  },
  {
    id: 67,
    title: "Caponata Siciliana",
    description: "Un contorno agrodolce ricco e complesso, simbolo della Sicilia.",
    ingredients: ["Melanzane", "Sedano", "Cipolla", "Olive", "Capperi", "Aceto", "Zucchero"],
    ingredientsDetails: [
      { name: "Melanzane a cubetti", qty: "2" },
      { name: "Sedano a pezzi", qty: "1 costa" },
      { name: "Olive verdi e Capperi", qty: "q.b." },
      { name: "Aceto e Zucchero", qty: "2 cucchiai cad." }
    ],
    steps: [
      "Friggi le melanzane e mettile da parte.",
      "Soffriggi cipolla e sedano, aggiungi olive e capperi.",
      "Aggiungi un po' di pomodoro e cuoci 10 min.",
      "Unisci le melanzane e l'agrodolce (aceto + zucchero).",
      "Lascia sfumare e servi rigorosamente fredda o a temperatura ambiente."
    ],
    tips: "La caponata è molto più buona se preparata il giorno prima.",
    category: "Contorni",
    time: 50,
    difficulty: "Media",
    servings: 4
  },
  {
    id: 68,
    title: "Burrito di Pollo",
    description: "Pasto completo in una tortilla, saporito e divertente da mangiare.",
    ingredients: ["Tortillas", "Pollo", "Riso", "Fagioli", "Peperoni", "Panna Acida"],
    ingredientsDetails: [
      { name: "Tortillas grandi di farina", qty: "2" },
      { name: "Petto di pollo sfilacciato", qty: "150g" },
      { name: "Riso bollito", qty: "50g" },
      { name: "Fagioli neri precotti", qty: "50g" }
    ],
    steps: [
      "Scalda la tortilla.",
      "Metti al centro riso, pollo speziato, fagioli e peperoni saltati.",
      "Aggiungi un cucchiaio di panna acida.",
      "Piega i lati verso l'interno e arrotola stretto.",
      "Passa il burrito sulla piastra per sigillare la chiusura."
    ],
    tips: "Avvolgi il burrito nella carta stagnola per mangiarlo comodamente senza farlo sfaldare.",
    category: "Etnico",
    time: 25,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 69,
    title: "Ossobuco alla Milanese",
    description: "Carne tenerissima con midollo, servita col tipico 'gremolada'.",
    ingredients: ["Ossobuco", "Farina", "Vino Bianco", "Limone", "Aglio", "Prezzemolo"],
    ingredientsDetails: [
      { name: "Ossobuco di vitello", qty: "2" },
      { name: "Vino bianco", qty: "1/2 bicchiere" },
      { name: "Brodo", qty: "q.b." },
      { name: "Gremolada (Limone, Aglio, Prezzemolo tritati)", qty: "q.b." }
    ],
    steps: [
      "Infarina la carne e rosolala bene nel burro.",
      "Sfuma col vino bianco.",
      "Aggiungi brodo e cuoci coperto per 1.5 ore finché si stacca dall'osso.",
      "Alla fine aggiungi la gremolada sopra la carne calda.",
      "Servi con risotto allo zafferano."
    ],
    tips: "Incidi la membrana esterna della carne per non farla arricciare in cottura.",
    category: "Secondi",
    time: 100,
    difficulty: "Difficile",
    servings: 2
  },
  {
    id: 70,
    title: "Insalata Greca (Horiatiki)",
    description: "Il profumo dell'estate greca: feta, olive e verdure croccanti.",
    ingredients: ["Pomodoro", "Cetriolo", "Feta", "Olive", "Cipolla", "Origano"],
    ingredientsDetails: [
      { name: "Pomodori ramati", qty: "2" },
      { name: "Cetriolo", qty: "1" },
      { name: "Feta greca", qty: "100g" },
      { name: "Olive nere Kalamata", qty: "10" }
    ],
    steps: [
      "Taglia pomodori e cetrioli a pezzi grandi.",
      "Aggiungi la cipolla rossa a fettine e le olive.",
      "Metti il panetto di feta intero sopra le verdure.",
      "Condisci con abbondante olio d'oliva e origano secco.",
      "Aggiungi un goccio di aceto se gradito."
    ],
    tips: "La vera insalata greca non ha lattuga, solo verdure sode e croccanti.",
    category: "Insalate",
    time: 10,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 71,
    title: "Pasta al Pesto di Basilico",
    description: "Il profumo di Genova. Una crema verde smeraldo freschissima.",
    ingredients: ["Pasta", "Basilico", "Parmigiano", "Pinoli", "Aglio", "Olio"],
    ingredientsDetails: [
      { name: "Pasta (Trofi o Trenette)", qty: "200g" },
      { name: "Basilico fresco", qty: "50g" },
      { name: "Pinoli", qty: "15g" },
      { name: "Olio Extravergine ligure", qty: "50ml" }
    ],
    steps: [
      "Frulla (o usa il mortaio) basilico, aglio, pinoli e parmigiano con l'olio.",
      "Fai attenzione a non scaldare il composto o annerirà.",
      "Lessa la pasta con qualche cubetto di patata e fagiolino.",
      "Scola la pasta e condiscila a freddo in una ciotola con il pesto.",
      "Aggiungi un mestolo di acqua di cottura per diluire."
    ],
    tips: "Metti le lame del frullatore in frigo prima dell'uso per mantenere il verde brillante del basilico.",
    category: "Pasta",
    time: 15,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 72,
    title: "Strudel di Mele",
    description: "Il dolce tirolese avvolgente, ricco di cannella e uvetta.",
    ingredients: ["Pasta Sfoglia", "Mele", "Uvetta", "Pinoli", "Cannella", "Zucchero"],
    ingredientsDetails: [
      { name: "Mele Renetta", qty: "3" },
      { name: "Uvetta e Pinoli", qty: "50g cad." },
      { name: "Pane grattugiato tostato nel burro", qty: "50g" },
      { name: "Pasta sfoglia rettangolare", qty: "1" }
    ],
    steps: [
      "Taglia le mele a fette e condiscile con uvetta, pinoli, zucchero e cannella.",
      "Stendi la sfoglia e copri con il pangrattato tostato (per assorbire il succo).",
      "Metti le mele sulla sfoglia, arrotola e chiudi i bordi.",
      "Spennella con uovo o latte e pratica dei tagli sulla superficie.",
      "Inforna a 190°C per circa 30 minuti."
    ],
    tips: "Servi tiepido con una pallina di gelato alla vaniglia o salsa inglese.",
    category: "Dolci",
    time: 45,
    difficulty: "Media",
    servings: 6
  },
  {
    id: 73,
    title: "Gamberi all'Aglio (Gambas al Ajillo)",
    description: "Tapas spagnola irresistibile. L'olio aromatizzato è la parte migliore.",
    ingredients: ["Gamberi", "Aglio", "Olio", "Peperoncino", "Prezzemolo"],
    ingredientsDetails: [
      { name: "Gamberoni puliti", qty: "8" },
      { name: "Aglio affettato", qty: "4 spicchi" },
      { name: "Olio Extravergine", qty: "100ml" },
      { name: "Peperoncino", qty: "1" }
    ],
    steps: [
      "In un tegamino scalda abbondante olio con l'aglio e il peperoncino.",
      "Quando l'aglio inizia a dorare, aggiungi i gamberi.",
      "Cuoci solo 2 minuti per lato finché diventano rosa.",
      "Spegni il fuoco, aggiungi prezzemolo e servi mentre ancora sfrigola.",
      "Fondamentale avere pane fresco per l'intingolo."
    ],
    tips: "Non far bruciare l'aglio o l'olio diventerà amaro.",
    category: "Antipasti",
    time: 10,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 74,
    title: "Insalata di Ceci e Tonno",
    description: "Un pranzo proteico e veloce, ideale per l'ufficio o il post-palestra.",
    ingredients: ["Ceci", "Tonno", "Cipolla", "Olio", "Limone", "Rucola"],
    ingredientsDetails: [
      { name: "Ceci precotti", qty: "200g" },
      { name: "Tonno in scatola", qty: "160g" },
      { name: "Rucola", qty: "q.b." },
      { name: "Cipollotto", qty: "1" }
    ],
    steps: [
      "Sciacqua i ceci e mettili in una ciotola.",
      "Aggiungi il tonno sgocciolato e il cipollotto a rondelle.",
      "Unisci la rucola fresca.",
      "Condisci con olio, limone e sale.",
      "Mescola bene e lascia insaporire 5 min prima di mangiare."
    ],
    tips: "Aggiungi un po' di cumino se ti piacciono i sapori mediorientali.",
    category: "Insalate",
    time: 5,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 75,
    title: "Torta Caprese",
    description: "Il dolce di Capri. Senza farina, solo cioccolato e mandorle.",
    ingredients: ["Mandorle", "Cioccolato", "Burro", "Zucchero", "Uova"],
    ingredientsDetails: [
      { name: "Farina di mandorle", qty: "200g" },
      { name: "Cioccolato fondente", qty: "150g" },
      { name: "Burro", qty: "150g" },
      { name: "Zucchero", qty: "150g" },
      { name: "Uova", qty: "3" }
    ],
    steps: [
      "Sciogli cioccolato e burro a bagnomaria.",
      "Monta uova e zucchero finché bianchi.",
      "Unisci il cioccolato fuso e la farina di mandorle.",
      "Mescola con delicatezza dal basso verso l'alto.",
      "Inforna a 180°C per 35-40 min. Deve restare umida al centro."
    ],
    tips: "Spolvera generosamente di zucchero a velo solo quando è completamente fredda.",
    category: "Dolci",
    time: 50,
    difficulty: "Media",
    servings: 6
  },
  {
    id: 76,
    title: "Quiche Lorraine",
    description: "La famosa torta salata francese con bacon e crema di uova.",
    ingredients: ["Pasta Brisé", "Bacon", "Uova", "Panna", "Formaggio"],
    ingredientsDetails: [
      { name: "Rotolo di pasta brisé", qty: "1" },
      { name: "Pancetta affumicata", qty: "150g" },
      { name: "Uova", qty: "3" },
      { name: "Panna da cucina", qty: "200ml" }
    ],
    steps: [
      "Rosola la pancetta finché croccante e scola il grasso.",
      "In una ciotola sbatti uova, panna e un pizzico di noce moscata.",
      "Stendi la brisé nella teglia.",
      "Distribuisci la pancetta sul fondo e versa il composto liquido.",
      "Inforna a 190°C per circa 30 minuti finché gonfia e dorata."
    ],
    tips: "Usa pancetta affumicata di buona qualità per il sapore originale francese.",
    category: "Torte Salate",
    time: 45,
    difficulty: "Media",
    servings: 4
  },
  {
    id: 77,
    title: "Spaghetti con le Vongole",
    description: "Puro piacere mediterraneo. Semplice, raffinato e profumatissimo.",
    ingredients: ["Pasta", "Vongole", "Aglio", "Olio", "Peperoncino", "Prezzemolo"],
    ingredientsDetails: [
      { name: "Spaghetti", qty: "200g" },
      { name: "Vongole veraci", qty: "500g" },
      { name: "Vino bianco", qty: "1/2 bicchiere" },
      { name: "Aglio", qty: "2 spicchi" }
    ],
    steps: [
      "Fai spurgare le vongole in acqua salata per 2 ore.",
      "Falle aprire in padella a fiamma alta con olio e aglio, poi togli i gusci (lasciandone alcuni).",
      "Lessa gli spaghetti e scolali 3 minuti prima.",
      "Finisci la cottura in padella con l'acqua delle vongole filtrata.",
      "Aggiungi prezzemolo tritato e le vongole alla fine."
    ],
    tips: "Non usare formaggio! Il sapore del mare deve essere il protagonista assoluto.",
    category: "Pasta",
    time: 30,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 78,
    title: "Tagliata di Manzo al Rosmarino",
    description: "Carne di qualità cotta a puntino e servita a fette spesse.",
    ingredients: ["Manzo", "Rosmarino", "Aglio", "Olio", "Sale Grosso"],
    ingredientsDetails: [
      { name: "Controfiletto di manzo (fetta spessa 3cm)", qty: "400g" },
      { name: "Rosmarino", qty: "2 rametti" },
      { name: "Aglio", qty: "1 spicchio" },
      { name: "Sale grosso", qty: "q.b." }
    ],
    steps: [
      "Porta la carne a temperatura ambiente.",
      "Scalda una piastra finché fuma.",
      "Cuoci la carne 4 minuti per lato (per una cottura al sangue).",
      "Lascia riposare la carne 5 min avvolta nella stagnola.",
      "Taglia a fettine, condisci con olio aromatizzato all'aglio e rosmarino e sale grosso."
    ],
    tips: "Il riposo post-cottura è fondamentale per ridistribuire i succhi ed evitare che escano al taglio.",
    category: "Secondi",
    time: 20,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 79,
    title: "Insalata di Polpo e Patate",
    description: "Un classico intramontabile delle cene estive di pesce.",
    ingredients: ["Polpo", "Patate", "Prezzemolo", "Limone", "Olio"],
    ingredientsDetails: [
      { name: "Polpo fresco o surgelato", qty: "600g" },
      { name: "Patate", qty: "3" },
      { name: "Prezzemolo", qty: "q.b." },
      { name: "Olio Extravergine e Limone", qty: "q.b." }
    ],
    steps: [
      "Lessa il polpo per circa 40 minuti (deve essere tenero alla forchetta).",
      "Intanto lessa le patate a tocchetti.",
      "Taglia il polpo tiepido a pezzetti.",
      "Unisci polpo e patate in una ciotola.",
      "Condisci con citronette (olio, limone, sale) e abbondante prezzemolo."
    ],
    tips: "Aggiungi delle olive taggiasche o dei capperi per dare sapidità al piatto.",
    category: "Antipasti",
    time: 60,
    difficulty: "Media",
    servings: 3
  },
  {
    id: 80,
    title: "Taco Salad",
    description: "Tutto il sapore del taco in un'insalata croccante e ricca.",
    ingredients: ["Manzo Macinato", "Lattuga", "Mais", "Fagioli", "Tortillas", "Formaggio"],
    ingredientsDetails: [
      { name: "Manzo macinato speziato", qty: "150g" },
      { name: "Lattuga iceberg", qty: "1/2" },
      { name: "Tortilla chips sbriciolate", qty: "1 manciata" },
      { name: "Formaggio e Pomodoro", qty: "q.b." }
    ],
    steps: [
      "Cuoci la carne macinata con spezie chili.",
      "Taglia la lattuga e il pomodoro.",
      "In una bowl unisci verdure, carne calda e fagioli.",
      "Aggiungi il formaggio grattugiato che si scioglierà col calore della carne.",
      "Finisci con una manciata di chips croccanti sopra."
    ],
    tips: "Usa yogurt greco al posto della panna acida per una versione più leggera.",
    category: "Insalate",
    time: 20,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 81,
    title: "Spaghetti alla Gricia",
    description: "L'antenata della Carbonara. Solo guanciale e pecorino.",
    ingredients: ["Pasta", "Guanciale", "Pecorino", "Pepe"],
    ingredientsDetails: [
      { name: "Spaghetti", qty: "200g" },
      { name: "Guanciale", qty: "100g" },
      { name: "Pecorino Romano", qty: "60g" }
    ],
    steps: [
      "Rosola il guanciale in padella finché il grasso diventa trasparente e croccante.",
      "Cuoci la pasta molto al dente.",
      "Sposta la pasta nella padella col guanciale e aggiungi acqua di cottura.",
      "Spegni il fuoco e manteca col pecorino grattugiato finemente.",
      "Aggiungi abbondante pepe nero macinato al momento."
    ],
    tips: "La crema si deve formare solo con l'amido della pasta e il pecorino, senza aggiungere altro.",
    category: "Pasta",
    time: 15,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 82,
    title: "Insalata di Anguria e Feta",
    description: "L'abbinamento che non ti aspetti: freschezza dolce e salata.",
    ingredients: ["Anguria", "Feta", "Menta", "Cipolla", "Olio"],
    ingredientsDetails: [
      { name: "Anguria a cubetti", qty: "300g" },
      { name: "Feta greca", qty: "100g" },
      { name: "Menta fresca", qty: "q.b." },
      { name: "Cipolla rossa (opzionale)", qty: "poche fettine" }
    ],
    steps: [
      "Pulisci l'anguria dai semi e tagliala a cubetti freddi di frigo.",
      "Sbriciola la feta sopra l'anguria.",
      "Aggiungi le foglie di menta spezzettate a mano.",
      "Condisci con un filo sottile di olio EVO.",
      "Servi immediatamente per non perdere la croccantezza dell'anguria."
    ],
    tips: "Perfetta come antipasto rinfrescante in una serata caldissima.",
    category: "Insalate",
    time: 10,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 83,
    title: "Cotoletta alla Milanese",
    description: "La vera cotoletta: alta, con l'osso e fritta nel burro chiarificato.",
    ingredients: ["Vitello", "Uova", "Pane", "Burro", "Sale"],
    ingredientsDetails: [
      { name: "Costoletta di vitello con osso", qty: "1" },
      { name: "Pane grattugiato grossolano", qty: "q.b." },
      { name: "Uova", qty: "2" },
      { name: "Burro chiarificato", qty: "100g" }
    ],
    steps: [
      "Passa la carne nell'uovo sbattuto.",
      "Impanala bene nel pane grattugiato, premendo con le mani.",
      "Sciogli il burro in una padella larga.",
      "Cuoci la cotoletta finché è ben dorata su entrambi i lati.",
      "Scola su carta assorbente e sala solo alla fine."
    ],
    tips: "Non battere la carne! Deve restare alta e succosa all'interno.",
    category: "Secondi",
    time: 20,
    difficulty: "Media",
    servings: 1
  },
  {
    id: 84,
    title: "Pollo Tandoori Semplificato",
    description: "Il sapore intenso dell'India in una versione facile da forno.",
    ingredients: ["Pollo", "Yogurt", "Limone", "Spezie", "Aglio", "Zenzero"],
    ingredientsDetails: [
      { name: "Sovracosce di pollo", qty: "4" },
      { name: "Yogurt greco", qty: "150g" },
      { name: "Mix Tandoori (Paprika, Curcuma, Garam Masala)", qty: "2 cucchiai" }
    ],
    steps: [
      "In una ciotola crea una crema con yogurt e tutte le spezie.",
      "Incidi il pollo e massaggialo con la crema.",
      "Lascia marinare in frigo per almeno 4 ore (meglio tutta la notte).",
      "Inforna a 220°C per circa 25-30 minuti finché quasi bruciacchiato.",
      "Servi con riso basmati e pane naan."
    ],
    tips: "La marinatura lunga rende la carne incredibilmente tenera e aromatica.",
    category: "Etnico",
    time: 40,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 85,
    title: "Pasta con Panna e Prosciutto",
    description: "Il piatto preferito dai bambini, cremoso e rassicurante.",
    ingredients: ["Pasta", "Panna", "Prosciutto", "Parmigiano", "Burro"],
    ingredientsDetails: [
      { name: "Pasta corta (Penne)", qty: "200g" },
      { name: "Panna da cucina", qty: "150ml" },
      { name: "Prosciutto cotto a cubetti", qty: "100g" }
    ],
    steps: [
      "Sciogli il burro in padella e rosola il prosciutto.",
      "Aggiungi la panna e lascia scaldare senza bollire.",
      "Lessa la pasta al dente.",
      "Salta la pasta nella panna con un mestolo di acqua di cottura.",
      "Spegni e aggiungi abbondante parmigiano grattugiato."
    ],
    tips: "Aggiungi dei pisellini bolliti per dare un tocco di colore e dolcezza.",
    category: "Pasta",
    time: 15,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 86,
    title: "Guazzetto di Cozze",
    description: "Un antipasto o secondo piatto di mare verace e saporito.",
    ingredients: ["Cozze", "Pomodoro", "Aglio", "Peperoncino", "Vino Bianco", "Prezzemolo"],
    ingredientsDetails: [
      { name: "Cozze fresche", qty: "1kg" },
      { name: "Passata di pomodoro", qty: "200ml" },
      { name: "Vino bianco", qty: "1/2 bicchiere" },
      { name: "Pane tostato", qty: "q.b." }
    ],
    steps: [
      "In una pentola capiente rosola aglio e peperoncino.",
      "Versa le cozze pulite e sfuma col vino bianco.",
      "Appena aprono, aggiungi il pomodoro e cuoci altri 5 minuti.",
      "Spegni e cospargi di prezzemolo tritato.",
      "Servi con crostoni di pane per intingere nel sugo."
    ],
    tips: "Scarta le cozze che non si sono aperte durante la cottura.",
    category: "Antipasti",
    time: 25,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 87,
    title: "Torta Paradiso",
    description: "Soffice come una nuvola, il dolce perfetto per l'ora del tè.",
    ingredients: ["Fecola", "Farina", "Burro", "Zucchero", "Uova"],
    ingredientsDetails: [
      { name: "Burro morbido", qty: "200g" },
      { name: "Zucchero a velo", qty: "200g" },
      { name: "Fecola di patate", qty: "100g" },
      { name: "Farina 00", qty: "100g" },
      { name: "Uova", qty: "3" }
    ],
    steps: [
      "Lavora burro e zucchero a crema finché spumosissimi.",
      "Unisci i tuorli uno alla volta.",
      "Setaccia farina e fecola e aggiungile al composto.",
      "Infine incorpora gli albumi montati a neve ferma.",
      "Inforna a 170°C per circa 40 minuti."
    ],
    tips: "È una torta che richiede molta lavorazione del burro per essere soffice.",
    category: "Dolci",
    time: 55,
    difficulty: "Media",
    servings: 8
  },
  {
    id: 88,
    title: "Saltimbocca alla Romana",
    description: "Fettine di vitello veloci e profumate, un classico della capitale.",
    ingredients: ["Vitello", "Prosciutto Crudo", "Salvia", "Burro", "Vino Bianco"],
    ingredientsDetails: [
      { name: "Fettine di vitello", qty: "4" },
      { name: "Prosciutto crudo", qty: "4 fette" },
      { name: "Foglie di salvia", qty: "4" },
      { name: "Vino bianco", qty: "q.b." }
    ],
    steps: [
      "Adagia una fetta di prosciutto e una foglia di salvia sulla carne.",
      "Fissa tutto con uno stuzzicadenti.",
      "Rosola nel burro prima dal lato del prosciutto.",
      "Gira e cuoci un minuto, poi sfuma col vino bianco.",
      "Servi subito col loro sughetto profumato."
    ],
    tips: "Non salare la carne: il prosciutto rilascerà tutta la sapidità necessaria.",
    category: "Secondi",
    time: 15,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 89,
    title: "Insalata di Riso Classica",
    description: "Il piatto jolly dell'estate, fresco e pronto da portare ovunque.",
    ingredients: ["Riso", "Sottaceti", "Tonno", "Uova", "Piselli", "Mais"],
    ingredientsDetails: [
      { name: "Riso per insalate", qty: "200g" },
      { name: "Condiriso o sottaceti misti", qty: "150g" },
      { name: "Tonno sott'olio", qty: "160g" },
      { name: "Uova sode", qty: "2" }
    ],
    steps: [
      "Lessa il riso e scolalo molto al dente.",
      "Passalo sotto l'acqua fredda per fermare la cottura.",
      "In una ciotola capiente unisci tutti gli ingredienti sgocciolati.",
      "Aggiungi le uova sode a pezzetti.",
      "Condisci con olio, sale e lascia in frigo almeno un'ora."
    ],
    tips: "Aggiungi un po' di maionese se la preferisci più cremosa invece che sgranata.",
    category: "Primi",
    time: 30,
    difficulty: "Facile",
    servings: 4
  },
  {
    id: 90,
    title: "Uova alla Coque",
    description: "La colazione perfetta: tuorlo liquido e albume morbido da mangiare col cucchiaino.",
    ingredients: ["Uova", "Pane", "Sale", "Pepe"],
    ingredientsDetails: [
      { name: "Uova fresche a temp. ambiente", qty: "2" },
      { name: "Pane a listarelle (soldatini)", qty: "q.b." }
    ],
    steps: [
      "Porta a bollore dell'acqua in un pentolino.",
      "Immergi delicatamente le uova con un cucchiaio.",
      "Cuoci per esattamente 3 minuti.",
      "Scola e metti nel portauovo.",
      "Rompi la calotta superiore e intingi il pane nel tuorlo liquido."
    ],
    tips: "Usa uova bio e freschissime per il miglior sapore possibile.",
    category: "Colazione",
    time: 5,
    difficulty: "Facile",
    servings: 1
  },
  {
    id: 91,
    title: "Pasta con Zucchine e Zafferano",
    description: "Un primo piatto colorato, cremoso e profumato.",
    ingredients: ["Pasta", "Zucchine", "Zafferano", "Panna", "Cipolla"],
    ingredientsDetails: [
      { name: "Pasta corta (Fusilli)", qty: "200g" },
      { name: "Zucchine", qty: "2" },
      { name: "Zafferano", qty: "1 bustina" },
      { name: "Panna da cucina o latte", qty: "50ml" }
    ],
    steps: [
      "Taglia le zucchine a rondelle e soffriggile con la cipolla.",
      "Sciogli lo zafferano nella panna.",
      "Lessa la pasta al dente.",
      "Unisci la pasta alle zucchine e versa la panna allo zafferano.",
      "Salta tutto per un minuto finché la crema non avvolge la pasta."
    ],
    tips: "Aggiungi della pancetta croccante per un contrasto di sapidità.",
    category: "Pasta",
    time: 20,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 92,
    title: "Caprese Classica",
    description: "I colori dell'Italia nel piatto: pomodoro, mozzarella e basilico.",
    ingredients: ["Mozzarella", "Pomodoro", "Basilico", "Olio", "Origano"],
    ingredientsDetails: [
      { name: "Mozzarella di bufala", qty: "200g" },
      { name: "Pomodori grandi maturi", qty: "2" },
      { name: "Basilico fresco", qty: "q.b." },
      { name: "Olio EVO", qty: "q.b." }
    ],
    steps: [
      "Affetta i pomodori e la mozzarella regolarmente.",
      "Alterna le fette su un piatto da portata.",
      "Aggiungi una foglia di basilico su ogni fetta di mozzarella.",
      "Condisci con sale, un giro d'olio abbondante e origano.",
      "Servi fresca ma non gelata di frigo."
    ],
    tips: "Non usare mai la mozzarella fredda di frigo: perde tutto il sapore lattiginoso.",
    category: "Antipasti",
    time: 10,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 93,
    title: "Cotolette di Melanzane",
    description: "Un'alternativa vegetariana golosa alla classica cotoletta.",
    ingredients: ["Melanzane", "Uova", "Pane", "Formaggio", "Olio"],
    ingredientsDetails: [
      { name: "Melanzane tonde", qty: "1" },
      { name: "Uova", qty: "2" },
      { name: "Pane grattugiato", qty: "q.b." },
      { name: "Parmigiano", qty: "30g" }
    ],
    steps: [
      "Taglia le melanzane a fette spesse 1 cm.",
      "Passale nell'uovo sbattuto con parmigiano.",
      "Impana bene nel pangrattato.",
      "Friggi in padella con olio finché dorate e tenere.",
      "Scola su carta assorbente e sala."
    ],
    tips: "Metti le fette di melanzana sotto sale per 30 min prima di impanarle per togliere l'amaro.",
    category: "Contorni",
    time: 30,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 94,
    title: "Crema Pasticcera",
    description: "La base della pasticceria, vellutata e profumata alla vaniglia.",
    ingredients: ["Latte", "Uova", "Zucchero", "Farina", "Limone"],
    ingredientsDetails: [
      { name: "Latte intero", qty: "500ml" },
      { name: "Tuorli d'uovo", qty: "4" },
      { name: "Zucchero", qty: "100g" },
      { name: "Maizena o Farina", qty: "40g" }
    ],
    steps: [
      "Scalda il latte con una scorza di limone.",
      "Sbatti i tuorli con lo zucchero, poi unisci la farina.",
      "Versa il latte caldo sul composto filtrando la scorza.",
      "Riporta sul fuoco e mescola continuamente finché non si addensa.",
      "Copri con pellicola a contatto per non far fare la pellicina."
    ],
    tips: "Usa una bacca di vaniglia vera al posto del limone per un aroma più sofisticato.",
    category: "Dolci",
    time: 20,
    difficulty: "Media",
    servings: 4
  },
  {
    id: 95,
    title: "Frittata di Pasta",
    description: "L'arte del riciclo napoletana: la pasta del giorno prima diventa un capolavoro.",
    ingredients: ["Pasta", "Uova", "Parmigiano", "Salame", "Formaggio", "Olio"],
    ingredientsDetails: [
      { name: "Avanzi di pasta condita", qty: "300g" },
      { name: "Uova", qty: "4" },
      { name: "Parmigiano", qty: "40g" },
      { name: "Scamorza o Salame", qty: "50g" }
    ],
    steps: [
      "Sbatti le uova con parmigiano e pepe.",
      "Unisci la pasta fredda e i cubetti di formaggio/salame.",
      "Scalda l'olio in una padella ampia.",
      "Versa il composto e cuoci a fuoco medio finché la base è croccante.",
      "Gira con l'aiuto di un piatto e cuoci l'altro lato."
    ],
    tips: "Deve formarsi una crosticina dorata e croccante su entrambi i lati.",
    category: "Secondi",
    time: 20,
    difficulty: "Media",
    servings: 3
  },
  {
    id: 96,
    title: "Sauté di Cozze",
    description: "Semplicemente cozze aperte col vapore, aglio e limone.",
    ingredients: ["Cozze", "Aglio", "Olio", "Peperoncino", "Prezzemolo", "Limone"],
    ingredientsDetails: [
      { name: "Cozze fresche", qty: "1kg" },
      { name: "Aglio", qty: "2 spicchi" },
      { name: "Vino bianco", qty: "q.b." }
    ],
    steps: [
      "Pulisci bene le cozze.",
      "In una pentola capiente metti olio, aglio schiacciato e peperoncino.",
      "Aggiungi le cozze, copri subito e cuoci a fiamma viva per 5 minuti.",
      "Smuovi la pentola ogni tanto finché tutte sono aperte.",
      "Spremi mezzo limone, aggiungi prezzemolo e servi subito."
    ],
    tips: "Il 'sauté' significa letteralmente saltato, quindi la cottura deve essere velocissima.",
    category: "Antipasti",
    time: 15,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 97,
    title: "Arancini di Riso (Veloci)",
    description: "Versione semplificata delle famose palle di riso siciliane.",
    ingredients: ["Riso", "Pomodoro", "Uova", "Pane", "Formaggio", "Carne Macinata"],
    ingredientsDetails: [
      { name: "Riso bollito avanzato", qty: "300g" },
      { name: "Ragù di carne ristretto", qty: "100g" },
      { name: "Mozzarella", qty: "50g" },
      { name: "Uova e Pane grattugiato", qty: "q.b." }
    ],
    steps: [
      "Prendi un po' di riso nel palmo della mano.",
      "Metti al centro un cucchiaino di ragù e un cubetto di mozzarella.",
      "Chiudi con altro riso formando una palla o un cono.",
      "Passa nell'uovo e poi nel pangrattato.",
      "Friggi in abbondante olio finché dorati uniformemente."
    ],
    tips: "Usa riso con molto amido per far sì che le palle non si aprano in frittura.",
    category: "Antipasti",
    time: 45,
    difficulty: "Difficile",
    servings: 4
  },
  {
    id: 98,
    title: "Pasta con Crema di Peperoni",
    description: "Una salsa vellutata e dolciastra che conquista al primo boccone.",
    ingredients: ["Pasta", "Peperoni", "Panna", "Cipolla", "Olio"],
    ingredientsDetails: [
      { name: "Pasta (Gnocchetti)", qty: "200g" },
      { name: "Peperone rosso", qty: "1" },
      { name: "Formaggio spalmabile o panna", qty: "50g" },
      { name: "Mandorle tritate", qty: "q.b." }
    ],
    steps: [
      "Cuoci il peperone a pezzi in padella con la cipolla.",
      "Una volta tenero, frullalo con il formaggio cremoso.",
      "Lessa la pasta al dente.",
      "Condisci la pasta con la crema di peperoni in una ciotola.",
      "Guarnisci con granella di mandorle per il contrasto croccante."
    ],
    tips: "Se vuoi una crema più digeribile, pela i peperoni dopo averli arrostiti in forno.",
    category: "Pasta",
    time: 30,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 99,
    title: "Pesce Spada alla Messinese",
    description: "Un piatto siciliano di mare ricco di olive, capperi e pomodoro.",
    ingredients: ["Pesce Spada", "Pomodoro", "Olive", "Capperi", "Cipolla", "Vino Bianco"],
    ingredientsDetails: [
      { name: "Trancio di pesce spada", qty: "2" },
      { name: "Pomodorini", qty: "10" },
      { name: "Capperi dissalati", qty: "1 cucchiaio" },
      { name: "Olive bianche", qty: "10" }
    ],
    steps: [
      "Fai un soffritto con cipolla, olive e capperi.",
      "Aggiungi i pomodorini a metà e cuoci 5 min.",
      "Adagia il pesce spada sul sugo.",
      "Sfuma col vino bianco e cuoci 5 minuti per lato.",
      "Non cuocere troppo o il pesce diventerà secco."
    ],
    tips: "Aggiungi un pizzico di origano alla fine per un profumo tipicamente siciliano.",
    category: "Secondi",
    time: 25,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 100,
    title: "Cantucci e Vin Santo",
    description: "La fine del pasto toscana: biscotti secchi alle mandorle da inzuppare.",
    ingredients: ["Farina", "Mandorle", "Zucchero", "Uova", "Miele", "Burro"],
    ingredientsDetails: [
      { name: "Farina 00", qty: "250g" },
      { name: "Zucchero", qty: "150g" },
      { name: "Mandorle intere con la pelle", qty: "100g" },
      { name: "Uova", qty: "2" }
    ],
    steps: [
      "Impasta uova, zucchero, miele e farina. Unisci le mandorle intere.",
      "Forma dei filoncini lunghi e piatti su una teglia.",
      "Inforna a 180°C per 20 minuti.",
      "Sforna, taglia i filoncini in diagonale a fette di 1cm.",
      "Rimetti in forno a 160°C per 5-10 min per tostarli."
    ],
    tips: "I cantucci si conservano per settimane in una scatola di latta chiusa.",
    category: "Dolci",
    time: 40,
    difficulty: "Media",
    servings: 10
  },
  {
    id: 101,
    title: "Orecchiette alle Cime di Rapa",
    description: "Il sapore verace della Puglia. Amaro, piccante e sapido al punto giusto.",
    ingredients: ["Pasta", "Cime di Rapa", "Acciughe", "Aglio", "Peperoncino", "Olio"],
    ingredientsDetails: [
      { name: "Orecchiette fresche", qty: "200g" },
      { name: "Cime di rapa pulite", qty: "300g" },
      { name: "Acciughe sott'olio", qty: "3 filetti" },
      { name: "Peperoncino e Aglio", qty: "q.b." }
    ],
    steps: [
      "Lessa le cime di rapa in acqua salata.",
      "A metà cottura delle verdure, butta le orecchiette nella stessa acqua.",
      "Intanto soffriggi aglio, peperoncino e acciughe finché queste non si sciolgono.",
      "Scola pasta e verdure e saltale in padella con il condimento.",
      "Mescola bene affinché il sapore delle acciughe avvolga tutto."
    ],
    tips: "Usa orecchiette fatte a mano per una consistenza più rustica che trattiene meglio il sugo.",
    category: "Pasta",
    time: 20,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 102,
    title: "Pollo alle Mandorle",
    description: "Un classico della cucina cinese-italiana, cremoso e croccante.",
    ingredients: ["Pollo", "Mandorle", "Soia", "Zenzero", "Cipollotto", "Farina"],
    ingredientsDetails: [
      { name: "Petto di pollo a cubetti", qty: "300g" },
      { name: "Mandorle pelate tostate", qty: "50g" },
      { name: "Salsa di soia", qty: "3 cucchiai" },
      { name: "Zenzero fresco", qty: "q.b." }
    ],
    steps: [
      "Infarina i cubetti di pollo.",
      "Rosola il pollo in un wok con olio e zenzero.",
      "Aggiungi le mandorle e il cipollotto a rondelle.",
      "Sfumare con salsa di soia e un po' d'acqua o brodo.",
      "Cuoci finché si forma una cremina densa e lucida."
    ],
    tips: "Tosta le mandorle in padella prima di aggiungerle per massimizzarne il profumo.",
    category: "Etnico",
    time: 20,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 103,
    title: "Gazpacho di Fragole",
    description: "Una variante estiva e sofisticata della classica zuppa fredda.",
    ingredients: ["Fragole", "Pomodoro", "Cetriolo", "Aceto", "Olio", "Menta"],
    ingredientsDetails: [
      { name: "Fragole mature", qty: "200g" },
      { name: "Pomodori rossi", qty: "200g" },
      { name: "Peperone rosso", qty: "1/2" },
      { name: "Aceto balsamico", qty: "1 cucchiaino" }
    ],
    steps: [
      "Frulla fragole, pomodori, peperone e cetriolo.",
      "Aggiungi olio, sale e un tocco di aceto balsamico.",
      "Filtra il tutto per eliminare i semini.",
      "Lascia raffreddare in frigo per almeno 2 ore.",
      "Servi con una fogliolina di menta e fragole a pezzetti."
    ],
    tips: "Il contrasto tra il dolce delle fragole e l'acidità del pomodoro è sorprendentemente equilibrato.",
    category: "Zuppe",
    time: 15,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 104,
    title: "Tagliatelle ai Porcini",
    description: "L'eleganza del bosco in un piatto di pasta all'uovo.",
    ingredients: ["Pasta", "Funghi", "Aglio", "Burro", "Prezzemolo", "Parmigiano"],
    ingredientsDetails: [
      { name: "Tagliatelle all'uovo fresche", qty: "200g" },
      { name: "Funghi porcini freschi o surgelati", qty: "200g" },
      { name: "Burro", qty: "20g" },
      { name: "Prezzemolo tritato", qty: "q.b." }
    ],
    steps: [
      "Pulisci i porcini con un panno umido e tagliali a fette.",
      "Salta i funghi in padella con burro e uno spicchio d'aglio.",
      "Cuoci le tagliatelle molto velocemente.",
      "Scola la pasta e saltala coi funghi, aggiungendo acqua di cottura se serve.",
      "Finisci con prezzemolo fresco e parmigiano."
    ],
    tips: "Non lavare mai i porcini sotto l'acqua, assorbirebbero troppa umidità rovinando la consistenza.",
    category: "Pasta",
    time: 25,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 105,
    title: "Cous Cous di Pesce",
    description: "Un viaggio tra Sicilia e Nord Africa in una grana di semola profumata.",
    ingredients: ["Cous Cous", "Pesce misto", "Pomodoro", "Spezie", "Cipolla"],
    ingredientsDetails: [
      { name: "Cous cous", qty: "150g" },
      { name: "Filetti di pesce bianco e Gamberi", qty: "300g" },
      { name: "Zafferano e Cannella", qty: "pizzico" },
      { name: "Brodo di pesce", qty: "250ml" }
    ],
    steps: [
      "Prepara una zuppetta di pesce veloce con pomodoro e spezie.",
      "Cuoci il cous cous versandoci sopra il brodo di pesce bollente.",
      "Lascia riposare 5 min e sgrana con la forchetta.",
      "Disponi il pesce sopra il cous cous.",
      "Servi con il guazzetto a parte da versare a piacere."
    ],
    tips: "Più varietà di pesce usi per il brodo, più il cous cous risulterà saporito.",
    category: "Piatti Unici",
    time: 45,
    difficulty: "Difficile",
    servings: 2
  },
  {
    id: 106,
    title: "Insalata di Quinoa e Avocado",
    description: "Superfood bowl energetica e bilanciata.",
    ingredients: ["Quinoa", "Avocado", "Pomodorini", "Cetriolo", "Limone", "Olio"],
    ingredientsDetails: [
      { name: "Quinoa mista", qty: "100g" },
      { name: "Avocado maturo", qty: "1/2" },
      { name: "Pomodorini ciliegino", qty: "10" },
      { name: "Semi di zucca", qty: "1 cucchiaio" }
    ],
    steps: [
      "Sciacqua bene la quinoa e bollila per 15 min.",
      "Lasciala raffreddare completamente.",
      "Taglia avocado, pomodorini e cetrioli.",
      "Unisci tutto in una ciotola e condisci con limone e olio.",
      "Aggiungi i semi di zucca per la parte croccante."
    ],
    tips: "Cuoci la quinoa nel brodo vegetale invece che nell'acqua per un sapore più intenso.",
    category: "Insalate",
    time: 25,
    difficulty: "Facile",
    servings: 1
  },
  {
    id: 107,
    title: "Spiedini di Pollo Teriyaki",
    description: "Pollo tenero e lucido grazie alla salsa giapponese dolce-salata.",
    ingredients: ["Pollo", "Salsa Teriyaki", "Sesamo", "Cipollotto", "Miele"],
    ingredientsDetails: [
      { name: "Petto di pollo", qty: "300g" },
      { name: "Salsa Teriyaki", qty: "50ml" },
      { name: "Semi di sesamo", qty: "q.b." },
      { name: "Miele", qty: "1 cucchiaino" }
    ],
    steps: [
      "Taglia il pollo a cubetti e infilalo negli stecchi di legno.",
      "Spennella generosamente con il mix di teriyaki e miele.",
      "Griglia gli spiedini su una piastra rovente girandoli spesso.",
      "Continua a spennellare durante la cottura per caramellare.",
      "Servi con una pioggia di semi di sesamo."
    ],
    tips: "Ammolla gli stecchi di legno in acqua per 15 min prima dell'uso per non farli bruciare sulla griglia.",
    category: "Etnico",
    time: 20,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 108,
    title: "Zuppa di Lenticchie e Curcuma",
    description: "Proteine vegetali e spezie antinfiammatorie in un piatto caldo.",
    ingredients: ["Lenticchie", "Curcuma", "Carote", "Cipolla", "Sedano", "Brodo"],
    ingredientsDetails: [
      { name: "Lenticchie secche", qty: "150g" },
      { name: "Curcuma in polvere", qty: "1 cucchiaino" },
      { name: "Cipolla, carota, sedano", qty: "1 cad." },
      { name: "Olio EVO", qty: "2 cucchiai" }
    ],
    steps: [
      "Fai un soffritto classico con le verdure tritate.",
      "Aggiungi le lenticchie e la curcuma, tostando un minuto.",
      "Copri con brodo vegetale caldo.",
      "Cuoci per 30-40 minuti finché le lenticchie sono tenere.",
      "Frulla una piccola parte della zuppa per renderla più cremosa."
    ],
    tips: "Aggiungi un goccio di succo di limone a fine cottura per fissare il ferro delle lenticchie.",
    category: "Zuppe",
    time: 50,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 109,
    title: "Fiori di Zucca Fritti",
    description: "Uno scrigno croccante con cuore di mozzarella e acciuga.",
    ingredients: ["Fiori di Zucca", "Mozzarella", "Acciughe", "Farina", "Acqua Frizzante"],
    ingredientsDetails: [
      { name: "Fiori di zucca freschi", qty: "8" },
      { name: "Mozzarella ben asciutta", qty: "100g" },
      { name: "Acciughe sott'olio", qty: "8 filetti" },
      { name: "Farina 00", qty: "100g" }
    ],
    steps: [
      "Pulisci i fiori togliendo il pistillo.",
      "Farcisci ogni fiore con un pezzetto di mozzarella e un'acciuga.",
      "Prepara una pastella veloce con farina e acqua frizzante ghiacciata.",
      "Immergi i fiori nella pastella.",
      "Friggi in olio bollente finché dorati e gonfi."
    ],
    tips: "Usa mozzarella per pizza o lasciala scolare ore prima, altrimenti esploderà in frittura.",
    category: "Antipasti",
    time: 30,
    difficulty: "Difficile",
    servings: 4
  },
  {
    id: 110,
    title: "Risotto alla Zucca e Amaretti",
    description: "Il dolce della zucca e l'amaro dei biscotti in un risotto autunnale.",
    ingredients: ["Riso", "Zucca", "Amaretti", "Cipolla", "Burro", "Parmigiano"],
    ingredientsDetails: [
      { name: "Riso Arborio", qty: "160g" },
      { name: "Zucca pulita a cubetti", qty: "200g" },
      { name: "Amaretti sbriciolati", qty: "4" },
      { name: "Burro e Parmigiano", qty: "q.b." }
    ],
    steps: [
      "Cuoci la zucca in padella con cipolla finché non si disfa.",
      "Tosta il riso e sfuma con vino bianco.",
      "Aggiungi la zucca e continua la cottura col brodo.",
      "Manteca con burro e parmigiano.",
      "Servi cospargendo con la granella di amaretti sul piatto."
    ],
    tips: "Puoi aggiungere una grattugiata di noce moscata per esaltare il profumo della zucca.",
    category: "Primi",
    time: 40,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 111,
    title: "Fajitas di Manzo",
    description: "La cena conviviale messicana: carne sfrigolante e tortillas calde.",
    ingredients: ["Manzo", "Peperoni", "Cipolla", "Tortillas", "Spezie", "Lime"],
    ingredientsDetails: [
      { name: "Controfiletto di manzo a strisce", qty: "300g" },
      { name: "Peperoni rossi e verdi", qty: "1 cad." },
      { name: "Tortillas di farina", qty: "4" },
      { name: "Spezie Fajita (Chili, Paprika)", qty: "q.b." }
    ],
    steps: [
      "Marina il manzo con spezie, olio e succo di lime per 20 min.",
      "Salta peperoni e cipolle a fiammifero a fiamma alta.",
      "In un'altra padella scotta il manzo velocemente lasciandolo succoso.",
      "Unisci tutto e servi con tortillas calde a parte.",
      "Ogni commensale riempie la propria tortilla a piacere."
    ],
    tips: "Servi con una ciotolina di panna acida o salsa pico de gallo.",
    category: "Etnico",
    time: 30,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 112,
    title: "Pasta alla Checca",
    description: "La pasta fredda romana: pomodori crudi, mozzarella e basilico.",
    ingredients: ["Pasta", "Pomodoro", "Mozzarella", "Basilico", "Caciotta", "Olio"],
    ingredientsDetails: [
      { name: "Pasta corta (Penne o Sedani)", qty: "200g" },
      { name: "Pomodori a cubetti", qty: "2" },
      { name: "Mozzarella e Caciotta", qty: "100g misti" },
      { name: "Basilico fresco", qty: "q.b." }
    ],
    steps: [
      "Prepara il condimento tagliando tutto a cubetti in una ciotola grande.",
      "Condisci con olio, sale e pepe e lascia marinare 30 min.",
      "Lessa la pasta e scolala al dente.",
      "Versa la pasta bollente nella ciotola con il condimento freddo.",
      "Mescola velocemente: il calore della pasta ammorbidirà appena il formaggio."
    ],
    tips: "È una pasta che va mangiata tiepida o fredda, ideale per l'estate.",
    category: "Pasta",
    time: 15,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 113,
    title: "Salmone in Crosta di Pistacchi",
    description: "Un secondo di pesce elegante e croccante.",
    ingredients: ["Salmone", "Pistacchi", "Pane", "Olio", "Miele"],
    ingredientsDetails: [
      { name: "Filetti di salmone", qty: "2" },
      { name: "Granella di pistacchi", qty: "50g" },
      { name: "Pane grattugiato", qty: "20g" },
      { name: "Miele o Senape", qty: "1 cucchiaio" }
    ],
    steps: [
      "Mescola pistacchi e pangrattato con un filo d'olio.",
      "Spennella la parte superiore del salmone con miele o senape.",
      "Premi il filetto sul mix di pistacchi per creare la crosta.",
      "Inforna a 180°C per circa 15 minuti.",
      "La crosta deve essere dorata ma il salmone ancora morbido."
    ],
    tips: "Usa pistacchi non salati per avere un miglior controllo sulla sapidità del piatto.",
    category: "Secondi",
    time: 25,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 114,
    title: "Spaghetti di Zucchine al Pesto",
    description: "Una finta pasta, leggerissima e vegetariana.",
    ingredients: ["Zucchine", "Basilico", "Pinoli", "Parmigiano", "Olio", "Aglio"],
    ingredientsDetails: [
      { name: "Zucchine sode", qty: "3" },
      { name: "Pesto pronto o fresco", qty: "3 cucchiai" },
      { name: "Pomodorini", qty: "5" }
    ],
    steps: [
      "Usa uno spiralizzatore per creare spaghetti dalle zucchine.",
      "Salta gli spaghetti in padella con un filo d'olio per soli 2-3 minuti.",
      "Devono restare croccanti, non moli.",
      "Spegni il fuoco e condisci con il pesto e i pomodorini a metà.",
      "Servi immediatamente."
    ],
    tips: "Non salare le zucchine durante la cottura, altrimenti rilasceranno troppa acqua.",
    category: "Insalate",
    time: 15,
    difficulty: "Facile",
    servings: 1
  },
  {
    id: 115,
    title: "Pollo al Curry e Mele",
    description: "Una versione più dolce e aromatica del classico pollo al curry.",
    ingredients: ["Pollo", "Mele", "Curry", "Cipolla", "Panna", "Riso"],
    ingredientsDetails: [
      { name: "Petto di pollo a strisce", qty: "300g" },
      { name: "Mela Golden", qty: "1" },
      { name: "Polvere di curry", qty: "1 cucchiaio" },
      { name: "Panna liquida", qty: "100ml" }
    ],
    steps: [
      "Soffriggi la cipolla e aggiungi il pollo infarinato.",
      "Quando il pollo è dorato, aggiungi la mela a cubetti.",
      "Spolvera col curry e versa la panna.",
      "Cuoci finché le mele sono tenere e il sugo è denso.",
      "Servi con riso bianco pilaf."
    ],
    tips: "La mela si scioglierà parzialmente creando una salsa agrodolce deliziosa.",
    category: "Etnico",
    time: 30,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 116,
    title: "Torta Salata Porri e Taleggio",
    description: "Sapore deciso e cremosità avvolgente.",
    ingredients: ["Pasta Sfoglia", "Porri", "Taleggio", "Uova", "Panna"],
    ingredientsDetails: [
      { name: "Pasta sfoglia", qty: "1 rotolo" },
      { name: "Porri", qty: "2" },
      { name: "Taleggio", qty: "150g" },
      { name: "Uova", qty: "2" }
    ],
    steps: [
      "Affetta i porri e stufali con un po' di burro e acqua finché teneri.",
      "In una ciotola unisci uova e panna.",
      "Stendi la sfoglia e bucherella il fondo.",
      "Distribuisci i porri e i cubetti di taleggio.",
      "Versa il composto di uova e inforna a 180°C per 30 min."
    ],
    tips: "Il taleggio ha un odore forte ma un sapore dolcissimo una volta cotto.",
    category: "Torte Salate",
    time: 45,
    difficulty: "Media",
    servings: 4
  },
  {
    id: 117,
    title: "Pasta alla Carbonara di Mare",
    description: "Una variante raffinata con pesce spada o salmone affumicato.",
    ingredients: ["Pasta", "Uova", "Salmone Affumicato", "Pecorino", "Pepe", "Olio"],
    ingredientsDetails: [
      { name: "Spaghetti", qty: "200g" },
      { name: "Salmone affumicato", qty: "100g" },
      { name: "Tuorli d'uovo", qty: "2" },
      { name: "Pecorino o Parmigiano", qty: "40g" }
    ],
    steps: [
      "Taglia il salmone a listarelle e rosolalo brevemente in padella.",
      "Prepara la crema di tuorli e formaggio con pepe.",
      "Scola la pasta e saltala col salmone.",
      "Spegni il fuoco e unisci la crema di uova mantecando bene.",
      "Aggiungi un goccio d'acqua di cottura per la cremosità."
    ],
    tips: "Il sapore affumicato sostituisce egregiamente la sapidità del guanciale.",
    category: "Pasta",
    time: 20,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 118,
    title: "Insalata di Mele e Noci",
    description: "Fresca, croccante e perfetta per accompagnare arrosti o formaggi.",
    ingredients: ["Lattuga", "Mele", "Noci", "Parmigiano", "Olio", "Miele"],
    ingredientsDetails: [
      { name: "Misticanza o Lattuga", qty: "100g" },
      { name: "Mela Granny Smith", qty: "1" },
      { name: "Gherigli di noce", qty: "5" },
      { name: "Scaglie di parmigiano", qty: "q.b." }
    ],
    steps: [
      "Lava e asciuga l'insalata.",
      "Taglia la mela a fette sottilissime (con la buccia).",
      "Unisci insalata, mele, noci e parmigiano.",
      "Condisci con una vinaigrette di olio, limone e un filo di miele.",
      "Mescola e servi subito."
    ],
    tips: "La mela Granny Smith (verde) aggiunge un tocco di acidità ideale per questo abbinamento.",
    category: "Insalate",
    time: 10,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 119,
    title: "Uova al Pomodoro e Origano",
    description: "Semplici uova cotte direttamente nel sugo, profumate all'origano.",
    ingredients: ["Uova", "Pomodoro", "Origano", "Aglio", "Pane"],
    ingredientsDetails: [
      { name: "Uova", qty: "2" },
      { name: "Passata di pomodoro", qty: "200ml" },
      { name: "Origano secco", qty: "1 cucchiaino" }
    ],
    steps: [
      "Prepara un sugo veloce con aglio, olio e pomodoro.",
      "Quando bolle, aggiungi abbondante origano.",
      "Rompi le uova nel sugo senza romperle.",
      "Copri e cuoci 4-5 minuti.",
      "Servi col sugo e fette di pane abbrustolito."
    ],
    tips: "È la colazione dei campioni in molte zone rurali italiane.",
    category: "Secondi",
    time: 15,
    difficulty: "Facile",
    servings: 1
  },
  {
    id: 120,
    title: "Risotto allo Champagne (o Spumante)",
    description: "Il risotto delle grandi occasioni, delicato e lussuoso.",
    ingredients: ["Riso", "Vino", "Scalogno", "Burro", "Parmigiano", "Brodo"],
    ingredientsDetails: [
      { name: "Riso Carnaroli", qty: "160g" },
      { name: "Vino bianco frizzante o Champagne", qty: "1 bicchiere" },
      { name: "Scalogno", qty: "1" },
      { name: "Burro di alta qualità", qty: "30g" }
    ],
    steps: [
      "Soffriggi lo scalogno tritato finissimo nel burro.",
      "Tosta il riso e sfuma con lo spumante.",
      "Continua la cottura con brodo vegetale leggero.",
      "A fine cottura manteca con burro freddo e parmigiano.",
      "Il sapore deve essere acidulo e profumatissimo."
    ],
    tips: "Usa un vino che berresti volentieri a tavola per non rovinare il piatto.",
    category: "Primi",
    time: 35,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 121,
    title: "Panna Cotta alla Vaniglia",
    description: "Il dolce al cucchiaio più versatile, da guarnire con frutti di bosco o caramello.",
    ingredients: ["Panna", "Zucchero", "Colla di pesce", "Vaniglia"],
    ingredientsDetails: [
      { name: "Panna fresca", qty: "500ml" },
      { name: "Zucchero a velo", qty: "80g" },
      { name: "Fogli di gelatina (colla di pesce)", qty: "3" },
      { name: "Bacca di vaniglia", qty: "1" }
    ],
    steps: [
      "Ammolla la gelatina in acqua fredda.",
      "Scalda la panna con lo zucchero e i semi della vaniglia senza far bollire.",
      "Strizza la gelatina e scioglila nella panna calda.",
      "Versa negli stampini e lascia in frigo almeno 5 ore.",
      "Sforma e guarnisci a piacere."
    ],
    tips: "Per sformarla facilmente, immergi il fondo dello stampino in acqua bollente per 2 secondi.",
    category: "Dolci",
    time: 15,
    difficulty: "Media",
    servings: 4
  },
  {
    id: 122,
    title: "Tagliata di Pollo al Limone",
    description: "Un'alternativa leggera e profumata alla carne rossa.",
    ingredients: ["Pollo", "Limone", "Rucola", "Olio", "Sale"],
    ingredientsDetails: [
      { name: "Petto di pollo intero", qty: "400g" },
      { name: "Limoni", qty: "2" },
      { name: "Rucola", qty: "q.b." },
      { name: "Olio Extravergine", qty: "q.b." }
    ],
    steps: [
      "Griglia il petto di pollo intero finché cotto ma succoso.",
      "Lascialo riposare 5 min e poi taglialo a fette trasversali.",
      "Prepara una salsa con succo di limone, olio e scorza grattugiata.",
      "Disponi il pollo su un letto di rucola.",
      "Irrora abbondantemente con la salsa al limone."
    ],
    tips: "Usa limoni non trattati perché la scorza è essenziale per il profumo del piatto.",
    category: "Secondi",
    time: 25,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 123,
    title: "Pasta con Pesto di Pistacchi",
    description: "Un primo piatto siciliano ricco, cremoso e originale.",
    ingredients: ["Pasta", "Pistacchi", "Parmigiano", "Olio", "Aglio", "Pancetta"],
    ingredientsDetails: [
      { name: "Pasta corta (Mezze Maniche)", qty: "200g" },
      { name: "Pesto di pistacchi (80% pistacchio)", qty: "3 cucchiai" },
      { name: "Pancetta croccante", qty: "50g" }
    ],
    steps: [
      "Rosola la pancetta finché diventa trasparente e croccante.",
      "Lessa la pasta al dente.",
      "In una ciotola diluisci il pesto di pistacchi con un mestolo di acqua di cottura.",
      "Unisci la pasta e la pancetta croccante.",
      "Mescola bene e aggiungi granella di pistacchi sopra."
    ],
    tips: "Non cuocere il pesto sul fuoco, altrimenti perderà il suo colore verde brillante.",
    category: "Pasta",
    time: 20,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 124,
    title: "Insalata di Fagiolini e Patate",
    description: "Il contorno estivo per eccellenza, ottimo anche come piatto unico.",
    ingredients: ["Fagiolini", "Patate", "Aglio", "Olio", "Aceto", "Menta"],
    ingredientsDetails: [
      { name: "Fagiolini freschi", qty: "200g" },
      { name: "Patate medie", qty: "2" },
      { name: "Menta fresca", qty: "q.b." },
      { name: "Aglio", qty: "1 spicchio" }
    ],
    steps: [
      "Lessa i fagiolini e le patate a cubetti.",
      "Scola e lascia intiepidire.",
      "Condisci con un'emulsione di olio, aceto e sale.",
      "Aggiungi l'aglio tritato finemente e molta menta fresca.",
      "Lascia riposare un'ora prima di servire."
    ],
    tips: "L'aceto è fondamentale per bilanciare la dolcezza delle patate.",
    category: "Contorni",
    time: 30,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 125,
    title: "Schiacciata all'Olio",
    description: "La merenda toscana per eccellenza: croccante, unta e irresistibile.",
    ingredients: ["Farina", "Acqua", "Lievito", "Olio", "Sale Grosso"],
    ingredientsDetails: [
      { name: "Farina tipo 0", qty: "400g" },
      { name: "Acqua tiepida", qty: "250ml" },
      { name: "Olio EVO di qualità", qty: "100ml" },
      { name: "Sale grosso", qty: "q.b." }
    ],
    steps: [
      "Impasta farina, acqua e lievito. Lascia lievitare 3 ore.",
      "Stendi l'impasto in una teglia ben unta.",
      "Pratica dei buchi profondi con le dita sulla superficie.",
      "Versa un mix di acqua e olio sopra e spolvera di sale grosso.",
      "Inforna a 220°C per 20 minuti finché dorata e croccante."
    ],
    tips: "L'emulsione di acqua e olio sopra l'impasto serve a non far seccare la superficie e creare i tipici 'occhi'.",
    category: "Lievitati",
    time: 200,
    difficulty: "Media",
    servings: 6
  },
  {
    id: 126,
    title: "Uova al Tegamino con Tartufo",
    description: "Il lusso della semplicità. Pochi ingredienti per un risultato da chef.",
    ingredients: ["Uova", "Burro", "Tartufo Nero", "Sale", "Pepe"],
    ingredientsDetails: [
      { name: "Uova freschissime", qty: "2" },
      { name: "Burro", qty: "20g" },
      { name: "Tartufo nero o olio tartufato", qty: "q.b." }
    ],
    steps: [
      "Sciogli il burro in un padellino.",
      "Cuoci le uova mantenendo il tuorlo liquido.",
      "Spegni il fuoco.",
      "Grattugia il tartufo fresco sopra le uova calde.",
      "Aggiungi un pizzico di sale e servi immediatamente."
    ],
    tips: "Il calore delle uova sprigionerà tutto l'aroma del tartufo senza rovinarlo.",
    category: "Secondi",
    time: 10,
    difficulty: "Facile",
    servings: 1
  },
  {
    id: 127,
    title: "Risotto al Pomodoro e Burrata",
    description: "Un risotto cremosissimo con il contrasto del formaggio fresco.",
    ingredients: ["Riso", "Pomodoro", "Burrata", "Basilico", "Brodo", "Parmigiano"],
    ingredientsDetails: [
      { name: "Riso Arborio", qty: "160g" },
      { name: "Passata di pomodoro", qty: "200ml" },
      { name: "Burrata fresca", qty: "1" },
      { name: "Basilico", qty: "q.b." }
    ],
    steps: [
      "Tosta il riso e aggiungi la passata di pomodoro.",
      "Cuoci aggiungendo brodo vegetale caldo.",
      "Manteca con parmigiano e olio EVO alla fine.",
      "Disponi il riso nel piatto.",
      "Metti il cuore della burrata al centro del riso caldissimo."
    ],
    tips: "La burrata deve essere a temperatura ambiente per fondersi perfettamente col riso.",
    category: "Primi",
    time: 35,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 128,
    title: "Insalata di Tacchino e Olive",
    description: "Un piatto freddo saporito e povero di grassi.",
    ingredients: ["Tacchino", "Olive", "Peperoni Sott'aceto", "Olio", "Maionese"],
    ingredientsDetails: [
      { name: "Fesa di tacchino arrosto", qty: "200g" },
      { name: "Olive verdi e nere", qty: "1 manciata" },
      { name: "Peperoni sott'aceto", qty: "50g" },
      { name: "Maionese leggera", qty: "1 cucchiaio" }
    ],
    steps: [
      "Taglia il tacchino a striscioline o cubetti.",
      "Unisci olive a rondelle e peperoni a pezzetti.",
      "Condisci con olio e una punta di maionese per legare.",
      "Mescola bene e lascia riposare 15 min.",
      "Servi su foglie di lattuga croccante."
    ],
    tips: "Puoi usare gli avanzi del tacchino di Natale o di un arrosto della domenica.",
    category: "Insalate",
    time: 15,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 129,
    title: "Pollo alla Diavola",
    description: "Pollo piccante e croccante, aperto a libro e schiacciato in cottura.",
    ingredients: ["Pollo", "Peperoncino", "Olio", "Sale", "Pepe"],
    ingredientsDetails: [
      { name: "Polletto intero aperto a libro", qty: "1" },
      { name: "Peperoncino in polvere", qty: "1 cucchiaio" },
      { name: "Olio Extravergine", qty: "q.b." }
    ],
    steps: [
      "Massaggia il pollo con olio e tanto peperoncino.",
      "Mettilo in una padella pesante dal lato della pelle.",
      "Metti un peso sopra il pollo (una pentola o un sasso avvolto in stagnola).",
      "Cuoci a fuoco medio per 20 min, poi gira e cuoci altri 15 min.",
      "Deve essere croccante fuori e piccantissimo."
    ],
    tips: "Il peso serve a far aderire perfettamente la pelle alla padella per una croccantezza uniforme.",
    category: "Secondi",
    time: 45,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 130,
    title: "Pasta con Ragù di Lenticchie",
    description: "Una variante vegetariana del ragù, ricca di gusto e consistenza.",
    ingredients: ["Pasta", "Lenticchie", "Pomodoro", "Carote", "Sedano", "Cipolla"],
    ingredientsDetails: [
      { name: "Pasta corta", qty: "200g" },
      { name: "Lenticchie precotte", qty: "200g" },
      { name: "Passata di pomodoro", qty: "300ml" },
      { name: "Soffritto classico tritatissimo", qty: "q.b." }
    ],
    steps: [
      "Fai un soffritto molto curato con carota, sedano e cipolla.",
      "Aggiungi le lenticchie e la passata.",
      "Cuoci a fuoco basso per 20 minuti finché il sugo non è ristretto.",
      "Lessa la pasta e condiscila con il ragù vegetale.",
      "Aggiungi parmigiano o lievito alimentare se sei vegano."
    ],
    tips: "Usa lenticchie piccole (tipo Castelluccio) per una consistenza più simile alla carne macinata.",
    category: "Pasta",
    time: 30,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 131,
    title: "Sorbetto al Limone",
    description: "Il fine pasto rinfrescante e digestivo per eccellenza.",
    ingredients: ["Limone", "Acqua", "Zucchero", "Albume"],
    ingredientsDetails: [
      { name: "Succo di limone filtrato", qty: "200ml" },
      { name: "Acqua", qty: "300ml" },
      { name: "Zucchero", qty: "200g" },
      { name: "Albume montato a neve", qty: "1" }
    ],
    steps: [
      "Fai uno sciroppo bollendo acqua e zucchero per 5 min.",
      "Lascia raffreddare lo sciroppo e unisci il succo di limone.",
      "Metti in freezer per 30 min, poi unisci l'albume montato delicatamente.",
      "Rimetti in freezer e mescola ogni ora finché non è della consistenza giusta.",
      "Servi in calici freddi."
    ],
    tips: "L'albume serve a dare la consistenza soffice e spumosa tipica del sorbetto.",
    category: "Dolci",
    time: 20,
    difficulty: "Media",
    servings: 4
  },
  {
    id: 132,
    title: "Pasta alla Boscaiola",
    description: "Funghi, salsiccia e panna in un classico degli anni '80 sempre amato.",
    ingredients: ["Pasta", "Funghi", "Salsiccia", "Panna", "Cipolla", "Olio"],
    ingredientsDetails: [
      { name: "Pasta (Penne)", qty: "200g" },
      { name: "Funghi champignon", qty: "150g" },
      { name: "Salsiccia di maiale", qty: "100g" },
      { name: "Panna da cucina", qty: "100ml" }
    ],
    steps: [
      "Sgrana la salsiccia e rosolala con la cipolla.",
      "Aggiungi i funghi a fette e cuoci 10 min.",
      "Versa la panna e lascia addensare.",
      "Scola la pasta e saltala nel sugo cremoso.",
      "Aggiungi un pizzico di pepe nero."
    ],
    tips: "Usa funghi porcini secchi ammollati per un sapore più intenso.",
    category: "Pasta",
    time: 25,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 133,
    title: "Insalata di Pasta al Pesto e Pomodorini",
    description: "Fresca, veloce e perfetta per il mare.",
    ingredients: ["Pasta", "Pesto", "Pomodorini", "Mozzarella", "Olio"],
    ingredientsDetails: [
      { name: "Pasta (Fusilli)", qty: "200g" },
      { name: "Pesto alla genovese", qty: "3 cucchiai" },
      { name: "Pomodorini ciliegino", qty: "10" },
      { name: "Mozzarelline", qty: "1 confezione" }
    ],
    steps: [
      "Cuoci la pasta molto al dente e raffreddala sotto l'acqua.",
      "In una ciotola unisci pesto, pomodorini a metà e mozzarelline.",
      "Aggiungi la pasta e mescola bene.",
      "Lascia riposare in frigo 30 min.",
      "Servi con qualche foglia di basilico fresco."
    ],
    tips: "Non usare pasta con buchi (tipo penne) perché il pesto si accumula dentro in modo disomogeneo.",
    category: "Pasta",
    time: 15,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 134,
    title: "Uova al Curry",
    description: "Una ricetta speziata e insolita per cucinare le uova sode.",
    ingredients: ["Uova", "Latte di Cocco", "Curry", "Cipolla", "Zenzero", "Riso"],
    ingredientsDetails: [
      { name: "Uova sode", qty: "4" },
      { name: "Latte di cocco", qty: "200ml" },
      { name: "Polvere di curry", qty: "1 cucchiaio" },
      { name: "Riso Basmati", qty: "150g" }
    ],
    steps: [
      "Lessa le uova sode, sbucciale e tagliale a metà.",
      "Soffriggi cipolla e zenzero con il curry.",
      "Versa il latte di cocco e lascia addensare 5 min.",
      "Immergi le uova nel sugo caldo per 2 min.",
      "Servi sopra un letto di riso basmati bollito."
    ],
    tips: "Fai attenzione a non far bollire forte il latte di cocco o si separerà.",
    category: "Etnico",
    time: 30,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 135,
    title: "Insalata di Finocchi e Arance",
    description: "Un classico siciliano invernale: fresco, croccante e sgrassante.",
    ingredients: ["Finocchi", "Arance", "Olive Nere", "Olio", "Pepe"],
    ingredientsDetails: [
      { name: "Finocchi grandi", qty: "2" },
      { name: "Arance bionde", qty: "2" },
      { name: "Olive nere al forno", qty: "1 manciata" }
    ],
    steps: [
      "Affetta i finocchi molto finemente (meglio con una mandolina).",
      "Pela le arance a vivo e tagliale a fette o spicchi.",
      "Unisci tutto in un piatto da portata.",
      "Aggiungi le olive nere.",
      "Condisci con olio, sale e molto pepe nero."
    ],
    tips: "Lascia marinare l'insalata 15 min per far sì che il succo delle arance ammorbidisca i finocchi.",
    category: "Insalate",
    time: 15,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 136,
    title: "Pasta con i Broccoli (Triscia)",
    description: "Piatto povero siciliano dove il broccolo diventa una crema.",
    ingredients: ["Pasta", "Broccoli", "Acciughe", "Aglio", "Olio", "Pinoli"],
    ingredientsDetails: [
      { name: "Pasta corta (Orecchiette)", qty: "200g" },
      { name: "Broccolo siciliano", qty: "400g" },
      { name: "Acciughe sott'olio", qty: "2 filetti" }
    ],
    steps: [
      "Lessa il broccolo finché molto tenero.",
      "Nella stessa acqua cuoci la pasta.",
      "Soffriggi aglio e acciughe finché si sciolgono.",
      "Unisci pasta e broccoli e salta energicamente finché il broccolo diventa cremoso.",
      "Aggiungi pinoli e uvetta se vuoi la versione originale."
    ],
    tips: "Usa molta acqua di cottura per creare un'emulsione col broccolo disfatto.",
    category: "Pasta",
    time: 25,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 137,
    title: "Gamberi al Sale",
    description: "Il metodo più semplice per cuocere i gamberi mantenendo tutto il sapore.",
    ingredients: ["Gamberoni", "Sale Grosso", "Limone", "Olio"],
    ingredientsDetails: [
      { name: "Gamberoni interi freschi", qty: "10" },
      { name: "Sale grosso marino", qty: "500g" }
    ],
    steps: [
      "Crea uno strato di sale grosso in una padella o teglia.",
      "Adagia i gamberi sopra il sale.",
      "Copri con altro sale grosso.",
      "Cuoci in forno o sul fuoco coperto per soli 5-7 minuti.",
      "Pulisci dal sale e servi con un filo d'olio e limone."
    ],
    tips: "La crosta di sale funge da forno naturale, cuocendo i gamberi nei propri succhi.",
    category: "Secondi",
    time: 15,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 138,
    title: "Torta di Carote e Mandorle",
    description: "Umida, sana e profumatissima. Senza burro.",
    ingredients: ["Carote", "Mandorle", "Farina", "Zucchero", "Uova", "Olio"],
    ingredientsDetails: [
      { name: "Carote tritate finissime", qty: "300g" },
      { name: "Farina di mandorle", qty: "100g" },
      { name: "Farina 00", qty: "150g" },
      { name: "Zucchero", qty: "150g" }
    ],
    steps: [
      "Monta uova e zucchero.",
      "Aggiungi le carote tritate e l'olio di semi.",
      "Unisci le farine e il lievito mescolando piano.",
      "Versa in uno stampo imburrato.",
      "Inforna a 180°C per circa 45 minuti."
    ],
    tips: "Assicurati di strizzare le carote dopo averle tritate se sono troppo acquose.",
    category: "Dolci",
    time: 60,
    difficulty: "Media",
    servings: 8
  },
  {
    id: 139,
    title: "Pasta alla Gricia con Carciofi",
    description: "Una variante stagionale ricca di sapore della classica gricia.",
    ingredients: ["Pasta", "Guanciale", "Carciofi", "Pecorino", "Pepe", "Vino Bianco"],
    ingredientsDetails: [
      { name: "Mezze Maniche", qty: "200g" },
      { name: "Guanciale", qty: "80g" },
      { name: "Carciofi puliti", qty: "2" },
      { name: "Pecorino Romano", qty: "50g" }
    ],
    steps: [
      "Taglia i carciofi sottilissimi e rosolali col guanciale.",
      "Sfuma col vino bianco e cuoci finché i carciofi sono teneri.",
      "Cuoci la pasta molto al dente.",
      "Salta la pasta col condimento e acqua di cottura.",
      "Spegni e manteca col pecorino a pioggia."
    ],
    tips: "I carciofi devono essere tagliati quasi velati per cuocere nello stesso tempo del guanciale.",
    category: "Pasta",
    time: 30,
    difficulty: "Difficile",
    servings: 2
  },
  {
    id: 140,
    title: "Insalata di Mare Tiepida",
    description: "Calamari, seppie e gamberi cotti al vapore, morbidissimi.",
    ingredients: ["Calamari", "Seppie", "Gamberi", "Sedano", "Carote", "Olio", "Limone"],
    ingredientsDetails: [
      { name: "Mix di pesce da pulire", qty: "500g" },
      { name: "Sedano bianco", qty: "1 costa" },
      { name: "Olio EVO e Limone", qty: "q.b." }
    ],
    steps: [
      "Cuoci i pesci al vapore per tempi diversi (calamari 10 min, gamberi 3 min).",
      "Taglia tutto a pezzetti mentre è ancora tiepido.",
      "Aggiungi sedano e carota a fettine sottili.",
      "Condisci con olio, limone, sale e prezzemolo.",
      "Servi tiepido per esaltare la morbidezza del pesce."
    ],
    tips: "La cottura al vapore preserva la tenerezza del pesce meglio della bollitura.",
    category: "Secondi",
    time: 30,
    difficulty: "Media",
    servings: 3
  },
  {
    id: 141,
    title: "Pasta con Crema di Broccoli e Salsiccia",
    description: "Un contrasto perfetto tra la dolcezza del broccolo e il sapido della salsiccia.",
    ingredients: ["Pasta", "Broccoli", "Salsiccia", "Parmigiano", "Aglio", "Olio"],
    ingredientsDetails: [
      { name: "Pasta corta", qty: "200g" },
      { name: "Broccolo (cimette)", qty: "250g" },
      { name: "Salsiccia sgranata", qty: "100g" }
    ],
    steps: [
      "Bolli i broccoli finché teneri, poi frullali con un po' d'olio e acqua di cottura.",
      "Rosola la salsiccia in padella finché dorata.",
      "Cuoci la pasta.",
      "Unisci pasta, crema di broccoli e salsiccia in padella.",
      "Salta per amalgamare e servi con parmigiano."
    ],
    tips: "Aggiungi un pizzico di peperoncino alla salsiccia mentre rosola.",
    category: "Pasta",
    time: 25,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 142,
    title: "Frittata al Forno con Zucchine",
    description: "Più leggera e alta della classica frittata in padella.",
    ingredients: ["Uova", "Zucchine", "Cipolla", "Parmigiano", "Menta"],
    ingredientsDetails: [
      { name: "Uova", qty: "6" },
      { name: "Zucchine a rondelle", qty: "2" },
      { name: "Parmigiano Reggiano", qty: "40g" }
    ],
    steps: [
      "Salta le zucchine con la cipolla in padella finché tenere.",
      "Sbatti le uova con parmigiano, sale, pepe e menta.",
      "Unisci le zucchine alle uova.",
      "Versa il tutto in una teglia foderata di carta forno.",
      "Inforna a 180°C per 20-25 minuti finché gonfia e dorata."
    ],
    tips: "Ottima servita fredda a cubetti per un aperitivo o un buffet.",
    category: "Secondi",
    time: 35,
    difficulty: "Facile",
    servings: 4
  },
  {
    id: 143,
    title: "Risotto allo Zafferano e Salsiccia",
    description: "Una variante più rustica e saporita del classico risotto giallo.",
    ingredients: ["Riso", "Salsiccia", "Zafferano", "Brodo", "Cipolla", "Vino Bianco"],
    ingredientsDetails: [
      { name: "Riso Carnaroli", qty: "160g" },
      { name: "Salsiccia", qty: "100g" },
      { name: "Zafferano", qty: "1 bustina" },
      { name: "Burro e Parmigiano", qty: "q.b." }
    ],
    steps: [
      "Sgrana la salsiccia e rosolala bene.",
      "In un'altra pentola inizia il risotto tostando il riso col soffritto.",
      "A metà cottura unisci la salsiccia e lo zafferano sciolto nel brodo.",
      "Porta a cottura aggiungendo brodo.",
      "Manteca generosamente fuori dal fuoco."
    ],
    tips: "Lo zafferano va aggiunto sempre a metà cottura per non far evaporare tutto l'aroma.",
    category: "Primi",
    time: 35,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 144,
    title: "Insalata di Spinaci Crudi e Pere",
    description: "Elegante e raffinata, con il contrasto tra dolce e ferroso.",
    ingredients: ["Spinaci", "Pere", "Pecorino", "Noci", "Olio", "Miele"],
    ingredientsDetails: [
      { name: "Spinaci baby (freschi)", qty: "100g" },
      { name: "Pera Abate", qty: "1" },
      { name: "Scaglie di pecorino stagionato", qty: "q.b." },
      { name: "Gherigli di noce", qty: "4" }
    ],
    steps: [
      "Lava e asciuga bene gli spinacini.",
      "Taglia la pera a fettine sottili con la buccia.",
      "Unisci spinaci, pere, noci e scaglie di pecorino.",
      "Condisci con un'emulsione di olio, aceto balsamico e un goccio di miele.",
      "Servi immediatamente."
    ],
    tips: "Usa pere sode ma mature, non devono essere né troppo dure né farinose.",
    category: "Insalate",
    time: 10,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 145,
    title: "Uova al Tegamino con Pancetta",
    description: "La colazione salata internazionale, pronta in 5 minuti.",
    ingredients: ["Uova", "Pancetta", "Burro", "Pepe"],
    ingredientsDetails: [
      { name: "Uova", qty: "2" },
      { name: "Pancetta tesa a fette", qty: "3" },
      { name: "Burro", qty: "10g" }
    ],
    steps: [
      "Rosola la pancetta in padella finché croccante e metti da parte.",
      "Usa lo stesso grasso della pancetta (più un ricciolo di burro) per cuocere le uova.",
      "Rompi le uova senza rompere il tuorlo.",
      "Adagia la pancetta croccante sopra l'albume delle uova.",
      "Servi bollente con pane tostato."
    ],
    tips: "Il grasso della pancetta dà un sapore incredibile all'uovo.",
    category: "Colazione",
    time: 10,
    difficulty: "Facile",
    servings: 1
  },
  {
    id: 146,
    title: "Spaghetti Aglio, Olio e Bottarga",
    description: "Il lusso sardo in un piatto di pasta veloce e sapidissimo.",
    ingredients: ["Pasta", "Bottarga", "Aglio", "Olio", "Peperoncino", "Limone"],
    ingredientsDetails: [
      { name: "Spaghetti", qty: "200g" },
      { name: "Bottarga di muggine grattugiata", qty: "20g" },
      { name: "Aglio e Peperoncino", qty: "q.b." }
    ],
    steps: [
      "Soffriggi aglio e peperoncino in abbondante olio.",
      "Cuoci la pasta al dente.",
      "Sposta la pasta in padella con l'olio aromatizzato.",
      "Spegni il fuoco.",
      "Aggiungi la bottarga e un po' di scorza di limone, mantecando con acqua di cottura."
    ],
    tips: "Non cuocere mai la bottarga sul fuoco, diventerebbe amara e perderebbe l'aroma di mare.",
    category: "Pasta",
    time: 15,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 147,
    title: "Salmone allo Zafferano",
    description: "Un secondo piatto raffinato con una salsa gialla profumatissima.",
    ingredients: ["Salmone", "Zafferano", "Panna", "Scalogno", "Vino Bianco", "Burro"],
    ingredientsDetails: [
      { name: "Trancio di salmone", qty: "2" },
      { name: "Zafferano", qty: "1 bustina" },
      { name: "Panna da cucina", qty: "100ml" },
      { name: "Vino bianco", qty: "q.b." }
    ],
    steps: [
      "Rosola il salmone in padella con una noce di burro.",
      "Togli il salmone e nello stesso fondo soffriggi lo scalogno.",
      "Sfuma col vino e aggiungi la panna con lo zafferano sciolto.",
      "Rimetti il salmone nella salsa e lascia insaporire 2 min.",
      "Servi con riso basmati."
    ],
    tips: "La salsa allo zafferano è ottima anche per condire delle patate lesse di accompagnamento.",
    category: "Secondi",
    time: 20,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 148,
    title: "Insalata di Avocado e Gamberetti",
    description: "Un classico anni '80 rivisitato in chiave fresca.",
    ingredients: ["Avocado", "Gamberetti", "Maionese", "Limone", "Lattuga"],
    ingredientsDetails: [
      { name: "Avocado maturo", qty: "1" },
      { name: "Gamberetti bolliti", qty: "150g" },
      { name: "Maionese", qty: "1 cucchiaio" },
      { name: "Salsa Worcester (opzionale)", qty: "poche gocce" }
    ],
    steps: [
      "Svuota l'avocado e taglia la polpa a cubetti.",
      "In una ciotola mescola gamberetti, avocado, maionese e limone.",
      "Aggiungi un pizzico di paprika dolce.",
      "Riempi le bucce dell'avocado con il composto.",
      "Servi freddo su un letto di lattuga."
    ],
    tips: "Aggiungi del sedano tritato finissimo per dare una nota croccante alla crema.",
    category: "Antipasti",
    time: 15,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 149,
    title: "Pasta con Crema di Zucca e Speck",
    description: "Autunnale, dolce e sapida allo stesso tempo.",
    ingredients: ["Pasta", "Zucca", "Speck", "Cipolla", "Olio", "Parmigiano"],
    ingredientsDetails: [
      { name: "Pasta corta", qty: "200g" },
      { name: "Zucca cotta e frullata", qty: "250g" },
      { name: "Speck a listarelle", qty: "50g" }
    ],
    steps: [
      "Rendi croccante lo speck in una padella senza olio.",
      "Lessa la pasta al dente.",
      "In una padella unisci la crema di zucca (condita con sale e pepe) e la pasta.",
      "Mantecare col parmigiano.",
      "Aggiungi lo speck croccante alla fine su ogni piatto."
    ],
    tips: "Usa zucca mantovana o delica: sono meno acquose e più saporite.",
    category: "Pasta",
    time: 25,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 150,
    title: "Biscotti Morbidi al Limone",
    description: "Profumati, leggeri e perfetti per colazione o merenda.",
    ingredients: ["Farina", "Zucchero", "Uova", "Burro", "Limone", "Lievito"],
    ingredientsDetails: [
      { name: "Farina 00", qty: "250g" },
      { name: "Burro morbido", qty: "100g" },
      { name: "Zucchero", qty: "100g" },
      { name: "Succo e scorza di 1 limone", qty: "q.b." }
    ],
    steps: [
      "Lavora burro e zucchero, poi aggiungi uovo, succo e scorza di limone.",
      "Unisci farina e lievito e impasta velocemente.",
      "Forma delle palline e passale nello zucchero a velo.",
      "Disponi su una teglia distanziate.",
      "Inforna a 180°C per 12-15 minuti. Devono restare chiari."
    ],
    tips: "Lo zucchero a velo creerà delle deliziose crepe sulla superficie durante la cottura.",
    category: "Dolci",
    time: 30,
    difficulty: "Facile",
    servings: 12
  },
  {
    id: 151,
    title: "Paella de Marisco",
    description: "Il trionfo della Spagna: riso allo zafferano con crostacei e molluschi.",
    ingredients: ["Riso", "Gamberi", "Cozze", "Vongole", "Zafferano", "Peperoni"],
    ingredientsDetails: [
      { name: "Riso Bomba o Arborio", qty: "200g" },
      { name: "Gamberoni", qty: "4" },
      { name: "Cozze e Vongole", qty: "200g" },
      { name: "Zafferano", qty: "1 bustina" }
    ],
    steps: [
      "Soffriggi peperoni e fagiolini nella paella.",
      "Tosta il riso e aggiungi il brodo di pesce caldo con lo zafferano.",
      "Disponi i frutti di mare sopra il riso.",
      "Cuoci senza mescolare per 18-20 minuti.",
      "Lascia riposare 5 min coperto prima di servire."
    ],
    tips: "Il 'socarrat' (il riso bruciacchiato sul fondo) è il segno di una paella perfetta.",
    category: "Etnico",
    time: 50,
    difficulty: "Difficile",
    servings: 2
  },
  {
    id: 152,
    title: "Insalata Caprese di Pesce Spada",
    description: "Una variante gourmet del classico antipasto, con pesce spada affumicato.",
    ingredients: ["Pesce Spada Affumicato", "Pomodoro", "Mozzarella di Bufala", "Olio", "Basilico"],
    ingredientsDetails: [
      { name: "Pesce spada affumicato a fette", qty: "100g" },
      { name: "Pomodori grandi", qty: "2" },
      { name: "Mozzarella di bufala", qty: "150g" }
    ],
    steps: [
      "Alterna fette di pomodoro, mozzarella e pesce spada.",
      "Condisci con un filo d'olio EVO e pepe rosa.",
      "Guarnisci con foglie di basilico fresco.",
      "Servi con crostini di pane integrale."
    ],
    tips: "Il pepe rosa si sposa divinamente con l'affumicato del pesce spada.",
    category: "Antipasti",
    time: 15,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 153,
    title: "Pasta con Crema di Peperoni e Mandorle",
    description: "Salsa vellutata e dolce, bilanciata dalla croccantezza della frutta secca.",
    ingredients: ["Pasta", "Peperoni", "Mandorle", "Aglio", "Olio", "Pecorino"],
    ingredientsDetails: [
      { name: "Pasta corta", qty: "200g" },
      { name: "Peperoni rossi arrostiti", qty: "2" },
      { name: "Mandorle tostate", qty: "30g" }
    ],
    steps: [
      "Frulla i peperoni con le mandorle, olio e un po' di pecorino.",
      "Lessa la pasta al dente.",
      "Salta la pasta con la crema ottenuta, diluendo con acqua di cottura.",
      "Guarnisci con scaglie di mandorle."
    ],
    tips: "Arrostisci i peperoni in forno per pelarli facilmente e ottenere un sapore più dolce.",
    category: "Pasta",
    time: 40,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 154,
    title: "Uova Ripiene Classiche",
    description: "L'antipasto vintage per eccellenza, cremoso e saporito.",
    ingredients: ["Uova", "Tonno", "Maionese", "Capperi", "Acciughe"],
    ingredientsDetails: [
      { name: "Uova sode", qty: "4" },
      { name: "Tonno sott'olio", qty: "80g" },
      { name: "Maionese", qty: "2 cucchiai" }
    ],
    steps: [
      "Taglia le uova sode a metà e preleva i tuorli.",
      "Frulla i tuorli con tonno, maionese, capperi e acciughe.",
      "Riempi gli albumi con la crema ottenuta usando una sac-à-poche.",
      "Decora con un cappero o una fettina di oliva."
    ],
    tips: "Usa uova molto fresche per far sì che il tuorlo sia perfettamente al centro.",
    category: "Antipasti",
    time: 25,
    difficulty: "Facile",
    servings: 4
  },
  {
    id: 155,
    title: "Risotto ai Frutti di Bosco",
    description: "Un primo piatto insolito, raffinato e dal colore incredibile.",
    ingredients: ["Riso", "Frutti di Bosco", "Scalogno", "Burro", "Parmigiano", "Vino Rosso"],
    ingredientsDetails: [
      { name: "Riso Carnaroli", qty: "160g" },
      { name: "Mix di frutti di bosco (Lamponi, Mirtilli)", qty: "100g" },
      { name: "Vino rosso", qty: "1/2 bicchiere" }
    ],
    steps: [
      "Tosta il riso con lo scalogno e sfuma col vino rosso.",
      "A metà cottura aggiungi i frutti di bosco (tenendone alcuni per decorare).",
      "Prosegui col brodo vegetale.",
      "Manteca con burro freddo e parmigiano.",
      "L'acidità dei frutti bilancia perfettamente la grassezza della mantecatura."
    ],
    tips: "Usa un vino rosso fruttato per richiamare i sentori del bosco.",
    category: "Primi",
    time: 35,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 156,
    title: "Pollo alla Cacciatora",
    description: "Il pollo stufato con pomodoro, olive e aromi, come si faceva una volta.",
    ingredients: ["Pollo", "Pomodoro", "Olive", "Vino Rosso", "Rosmarino", "Aglio"],
    ingredientsDetails: [
      { name: "Pollo a pezzi", qty: "500g" },
      { name: "Polpa di pomodoro", qty: "300g" },
      { name: "Olive nere", qty: "50g" }
    ],
    steps: [
      "Rosola il pollo in padella con aglio e rosmarino.",
      "Sfuma col vino rosso.",
      "Aggiungi pomodoro e olive.",
      "Copri e cuoci a fuoco lento per 45 minuti finché la carne è tenerissima."
    ],
    tips: "Accompagna con polenta morbida per raccogliere tutto il sugo.",
    category: "Secondi",
    time: 60,
    difficulty: "Media",
    servings: 3
  },
  {
    id: 157,
    title: "Insalata di Patate alla Tedesca (Kartoffelsalat)",
    description: "Patate lesse condite con una salsa calda e saporita.",
    ingredients: ["Patate", "Pancetta", "Cipolla", "Brodo", "Aceto", "Senape"],
    ingredientsDetails: [
      { name: "Patate a pasta soda", qty: "400g" },
      { name: "Pancetta a cubetti", qty: "50g" },
      { name: "Aceto di mele", qty: "2 cucchiai" }
    ],
    steps: [
      "Lessa le patate e tagliale a fette ancora calde.",
      "Rosola pancetta e cipolla.",
      "Aggiungi brodo caldo, aceto e senape alla pancetta per creare la salsa.",
      "Versa la salsa calda sulle patate e lascia riposare finché assorbita."
    ],
    tips: "Le patate devono essere condite calde per assorbire meglio il condimento.",
    category: "Contorni",
    time: 40,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 158,
    title: "Zuppa di Cozze al Pepe (Impepata)",
    description: "Essenziale e verace. Solo cozze, pepe e limone.",
    ingredients: ["Cozze", "Pepe Nero", "Prezzemolo", "Limone"],
    ingredientsDetails: [
      { name: "Cozze fresche", qty: "1kg" },
      { name: "Pepe nero macinato grosso", qty: "abbondante" }
    ],
    steps: [
      "Metti le cozze pulite in una pentola capiente a fiamma alta.",
      "Copri e scuoti la pentola finché non sono tutte aperte.",
      "Aggiungi una dose generosa di pepe nero e prezzemolo.",
      "Servi col proprio liquido di cottura filtrato e fette di limone."
    ],
    tips: "Usa solo il pepe macinato al momento per un profumo pungente e fresco.",
    category: "Antipasti",
    time: 15,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 159,
    title: "Pancake alla Banana (Senza Farina)",
    description: "Solo due ingredienti per una colazione sana e proteica.",
    ingredients: ["Banane", "Uova", "Cannella"],
    ingredientsDetails: [
      { name: "Banana matura", qty: "1" },
      { name: "Uova", qty: "2" }
    ],
    steps: [
      "Schiaccia la banana finemente con la forchetta.",
      "Unisci le uova e sbatti bene il composto.",
      "Cuoci in un padellino antiaderente come dei normali pancake.",
      "Gira con delicatezza perché sono molto morbidi."
    ],
    tips: "Servi con burro d'arachidi o frutti di bosco freschi.",
    category: "Colazione",
    time: 10,
    difficulty: "Facile",
    servings: 1
  },
  {
    id: 160,
    title: "Pasta con Ragù di Salsiccia e Finocchietto",
    description: "Un profumo mediterraneo unico per un primo piatto sostanzioso.",
    ingredients: ["Pasta", "Salsiccia", "Finocchietto Selvatico", "Vino Bianco", "Olio"],
    ingredientsDetails: [
      { name: "Pasta corta", qty: "200g" },
      { name: "Salsiccia", qty: "150g" },
      { name: "Semi di finocchio o fresco", qty: "q.b." }
    ],
    steps: [
      "Sgrana la salsiccia e rosolala con i semi di finocchio.",
      "Sfuma col vino bianco.",
      "Cuoci la pasta e saltala col ragù bianco.",
      "Aggiungi pecorino grattugiato alla fine."
    ],
    tips: "Il finocchietto selvatico fresco è l'ideale, ma i semi sono un ottimo sostituto tutto l'anno.",
    category: "Pasta",
    time: 20,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 161,
    title: "Tom Yum Goong",
    description: "La famosa zuppa thailandese: agro, piccante e profumatissima.",
    ingredients: ["Gamberi", "Citronella", "Zenzero", "Lime", "Peperoncino", "Funghi"],
    ingredientsDetails: [
      { name: "Gamberi freschi", qty: "6" },
      { name: "Latte di cocco (opzionale)", qty: "100ml" },
      { name: "Zuppa di base (Brodo di pesce)", qty: "500ml" }
    ],
    steps: [
      "Fai bollire il brodo con citronella, galanga (o zenzero) e foglie di kaffir lime.",
      "Aggiungi i funghi e i gamberi.",
      "Condisci con salsa di pesce, succo di lime e pasta di peperoncino.",
      "Spegni appena i gamberi sono cotti."
    ],
    tips: "Non far bollire troppo dopo aver aggiunto il succo di lime o diventerà amaro.",
    category: "Etnico",
    time: 30,
    difficulty: "Difficile",
    servings: 2
  },
  {
    id: 162,
    title: "Carpaccio di Zucchine e Pinoli",
    description: "Un'alternativa vegetariana freschissima e croccante.",
    ingredients: ["Zucchine", "Pinoli", "Parmigiano", "Limone", "Olio", "Menta"],
    ingredientsDetails: [
      { name: "Zucchine sode e piccole", qty: "2" },
      { name: "Pinoli tostati", qty: "20g" },
      { name: "Scaglie di parmigiano", qty: "q.b." }
    ],
    steps: [
      "Taglia le zucchine crude a fettine velate con la mandolina.",
      "Disponile a raggiera sul piatto.",
      "Condisci con citronette al limone e menta.",
      "Guarnisci con pinoli e scaglie di parmigiano."
    ],
    tips: "Usa solo zucchine freschissime e croccanti per mangiarle crude.",
    category: "Antipasti",
    time: 15,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 163,
    title: "Pasta alla Puttanesca di Tonno",
    description: "Una variante di mare del classico condimento campano.",
    ingredients: ["Pasta", "Tonno", "Pomodoro", "Olive", "Capperi", "Acciughe"],
    ingredientsDetails: [
      { name: "Pasta corta", qty: "200g" },
      { name: "Tonno sott'olio di qualità", qty: "120g" },
      { name: "Passata di pomodoro", qty: "200ml" }
    ],
    steps: [
      "Soffriggi aglio, acciughe, capperi e olive.",
      "Aggiungi il pomodoro e cuoci 10 min.",
      "Unisci il tonno solo alla fine per non farlo seccare.",
      "Salta la pasta col sugo saporito."
    ],
    tips: "Non scuocere il tonno: deve restare a pezzetti morbidi.",
    category: "Pasta",
    time: 20,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 164,
    title: "Uova al Tegamino con Asparagi",
    description: "L'abbinamento perfetto della primavera.",
    ingredients: ["Uova", "Asparagi", "Burro", "Parmigiano", "Sale"],
    ingredientsDetails: [
      { name: "Uova", qty: "2" },
      { name: "Asparagi", qty: "1 mazzetto" },
      { name: "Parmigiano", qty: "q.b." }
    ],
    steps: [
      "Lessa gli asparagi tenendoli al dente.",
      "Passali in padella con una noce di burro.",
      "Crea uno spazio tra gli asparagi e rompi le uova.",
      "Copri con abbondante parmigiano grattugiato e cuoci finché l'uovo è pronto."
    ],
    tips: "Il parmigiano grattugiato sopra l'uovo crea una crosticina deliziosa.",
    category: "Secondi",
    time: 20,
    difficulty: "Facile",
    servings: 1
  },
  {
    id: 165,
    title: "Risotto allo Zenzero e Lime",
    description: "Fresco, esotico e pulito al palato. Ottimo con i crostacei.",
    ingredients: ["Riso", "Zenzero", "Lime", "Brodo Vegetale", "Burro", "Parmigiano"],
    ingredientsDetails: [
      { name: "Riso Carnaroli", qty: "160g" },
      { name: "Zenzero fresco", qty: "1 pezzetto" },
      { name: "Lime (buccia e succo)", qty: "1" }
    ],
    steps: [
      "Tosta il riso con lo zenzero grattugiato.",
      "Prosegui col brodo vegetale.",
      "A fine cottura aggiungi il succo di lime.",
      "Manteca con burro e una punta di parmigiano (non troppo per non coprire il lime).",
      "Decora con scorza di lime grattugiata."
    ],
    tips: "È il risotto perfetto per accompagnare dei gamberi saltati o del pesce crudo.",
    category: "Primi",
    time: 35,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 166,
    title: "Pollo ai Peperoni",
    description: "Un classico della cucina romana, saporito e colorato.",
    ingredients: ["Pollo", "Peperoni", "Pomodoro", "Cipolla", "Vino Bianco", "Olio"],
    ingredientsDetails: [
      { name: "Pollo a pezzi", qty: "500g" },
      { name: "Peperoni gialli e rossi", qty: "2" },
      { name: "Vino bianco", qty: "1/2 bicchiere" }
    ],
    steps: [
      "Rosola il pollo in padella.",
      "Aggiungi i peperoni a strisce e la cipolla.",
      "Sfuma col vino bianco.",
      "Unisci un po' di pomodoro e cuoci coperto per 40 minuti finché tutto è tenero."
    ],
    tips: "I peperoni devono quasi sfaldarsi per creare un sugo denso e delizioso.",
    category: "Secondi",
    time: 60,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 167,
    title: "Insalata di Ceci, Feta e Cetrioli",
    description: "Freschezza mediterranea in una bowl proteica.",
    ingredients: ["Ceci", "Feta", "Cetriolo", "Cipolla Rossa", "Olio", "Origano"],
    ingredientsDetails: [
      { name: "Ceci precotti", qty: "200g" },
      { name: "Feta sbriciolata", qty: "80g" },
      { name: "Cetriolo a cubetti", qty: "1" }
    ],
    steps: [
      "Unisci tutti gli ingredienti in una ciotola.",
      "Condisci con olio, limone e abbondante origano.",
      "Lascia insaporire 10 min prima di servire."
    ],
    tips: "Aggiungi delle olive nere per un tocco ancora più greco.",
    category: "Insalate",
    time: 10,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 168,
    title: "Zuppa di Pesce Veloce",
    description: "Tutto il sapore del mare in pochi minuti.",
    ingredients: ["Pesce Misto", "Pomodoro", "Aglio", "Olio", "Peperoncino", "Pane"],
    ingredientsDetails: [
      { name: "Filetti di pesce e Molluschi", qty: "400g" },
      { name: "Pomodorini", qty: "10" },
      { name: "Vino bianco", qty: "q.b." }
    ],
    steps: [
      "Fai un soffritto con aglio e peperoncino.",
      "Aggiungi i pomodorini e sfuma col vino bianco.",
      "Unisci il pesce (prima quello che richiede più cottura).",
      "Copri e cuoci 15 minuti.",
      "Servi con fette di pane strofinate d'aglio."
    ],
    tips: "Usa pesci diversi per dare complessità al brodo.",
    category: "Zuppe",
    time: 30,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 169,
    title: "Pancake Integrali al Miele",
    description: "Versione rustica e salutare del classico pancake.",
    ingredients: ["Farina Integrale", "Latte", "Uova", "Miele", "Lievito"],
    ingredientsDetails: [
      { name: "Farina integrale", qty: "150g" },
      { name: "Latte di mandorla o vaccino", qty: "200ml" },
      { name: "Miele", qty: "2 cucchiai" }
    ],
    steps: [
      "Mescola farina e lievito.",
      "Unisci latte, uovo e miele.",
      "Cuoci in padella calda unta leggermente.",
      "Servi con altro miele a filo sopra."
    ],
    tips: "La farina integrale rende i pancake più sazianti e ricchi di fibre.",
    category: "Colazione",
    time: 20,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 170,
    title: "Pasta con Crema di Zucchine e Gamberetti",
    description: "Delicata, colorata e amatissima nei menu estivi.",
    ingredients: ["Pasta", "Zucchine", "Gamberetti", "Zafferano", "Cipolla", "Olio"],
    ingredientsDetails: [
      { name: "Pasta corta", qty: "200g" },
      { name: "Zucchine grattugiate", qty: "2" },
      { name: "Gamberetti sgusciati", qty: "100g" }
    ],
    steps: [
      "Cuoci le zucchine grattugiate finché diventano una crema.",
      "Aggiungi i gamberetti per soli 2 minuti.",
      "Sciogli lo zafferano in poca acqua di cottura e uniscilo al condimento.",
      "Lessa la pasta e saltala con la crema gialla e verde."
    ],
    tips: "Grattugiare le zucchine invece di tagliarle a rondelle le fa cuocere in un attimo creando una crema naturale.",
    category: "Pasta",
    time: 20,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 171,
    title: "Samosa Vegetariani (Semplificati)",
    description: "Triangoli croccanti ripieni di patate e piselli speziati.",
    ingredients: ["Pasta Fillone o Sfoglia", "Patate", "Piselli", "Curry", "Cipolla"],
    ingredientsDetails: [
      { name: "Pasta fillo", qty: "1 confezione" },
      { name: "Patate lesse schiacciate", qty: "2" },
      { name: "Piselli bolliti", qty: "50g" }
    ],
    steps: [
      "Prepara il ripieno saltando patate e piselli con cipolla e molto curry.",
      "Taglia la pasta a strisce lunghe.",
      "Metti un cucchiaio di ripieno e piega a triangolo.",
      "Inforna a 200°C finché croccantissimi o friggi."
    ],
    tips: "La pasta fillo sovrapposta a strati spennellati di burro dà la tipica croccantezza sfogliata.",
    category: "Etnico",
    time: 40,
    difficulty: "Difficile",
    servings: 4
  },
  {
    id: 172,
    title: "Insalata di Rucola, Pere e Grana",
    description: "Equilibrio perfetto tra l'amaro della rucola e il dolce della pera.",
    ingredients: ["Rucola", "Pere", "Grana Padano", "Aceto Balsamico", "Olio", "Noci"],
    ingredientsDetails: [
      { name: "Rucola", qty: "1 sacchetto" },
      { name: "Pera Williams", qty: "1" },
      { name: "Grana in scaglie", qty: "q.b." }
    ],
    steps: [
      "Lava la rucola e asciugala bene.",
      "Taglia la pera a fette sottili.",
      "Unisci tutto e condisci con glassa di aceto balsamico, olio e sale.",
      "Aggiungi gherigli di noce spezzettati."
    ],
    tips: "Usa pere sode ma dolci per contrastare il piccante della rucola.",
    category: "Insalate",
    time: 10,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 173,
    title: "Pasta alla Gricia di Carciofi",
    description: "Versione stagionale della gricia, con il tocco croccante dei carciofi.",
    ingredients: ["Pasta", "Guanciale", "Carciofi", "Pecorino", "Pepe", "Vino Bianco"],
    ingredientsDetails: [
      { name: "Mezze Maniche", qty: "200g" },
      { name: "Guanciale", qty: "80g" },
      { name: "Carciofi puliti", qty: "2" }
    ],
    steps: [
      "Rosola il guanciale, poi aggiungi i carciofi a fette sottilissime.",
      "Cuoci finché i carciofi sono teneri.",
      "Cuoci la pasta molto al dente.",
      "Salta tutto insieme col pecorino e pepe nero."
    ],
    tips: "I carciofi devono essere tagliati quasi velati per cuocere velocemente.",
    category: "Pasta",
    time: 30,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 174,
    title: "Uova in Cocotte al Formaggio",
    description: "Cotte al forno in stampini individuali, cremose e chic.",
    ingredients: ["Uova", "Panna", "Formaggio", "Burro", "Sale", "Pepe"],
    ingredientsDetails: [
      { name: "Uova", qty: "2" },
      { name: "Panna da cucina", qty: "2 cucchiai" },
      { name: "Gorgonzola o Taleggio", qty: "30g" }
    ],
    steps: [
      "Imburra due stampini.",
      "Metti un cucchiaio di panna e cubetti di formaggio sul fondo.",
      "Rompi un uovo in ogni stampino stando attento al tuorlo.",
      "Inforna a bagnomaria a 180°C per 10-12 minuti."
    ],
    tips: "L'albume deve essere bianco e solido, ma il tuorlo deve restare liquido.",
    category: "Secondi",
    time: 20,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 175,
    title: "Risotto alle Fragole",
    description: "Piatto simbolo degli anni '80, fresco e dal gusto sorprendente.",
    ingredients: ["Riso", "Fragole", "Spumante", "Burro", "Parmigiano", "Brodo"],
    ingredientsDetails: [
      { name: "Riso Carnaroli", qty: "160g" },
      { name: "Fragole fresche", qty: "150g" },
      { name: "Spumante Brut", qty: "1 bicchiere" }
    ],
    steps: [
      "Tosta il riso e sfuma con lo spumante.",
      "A metà cottura aggiungi metà delle fragole a pezzetti.",
      "Prosegui col brodo vegetale leggero.",
      "Manteca con burro e parmigiano.",
      "Aggiungi le restanti fragole fresche solo alla fine nel piatto."
    ],
    tips: "Non temere l'abbinamento: l'acidità delle fragole pulisce benissimo il palato dal risotto grasso.",
    category: "Primi",
    time: 35,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 176,
    title: "Pollo fritto alla Coreana",
    description: "Extra croccante e ricoperto di una glassa dolce-piccante.",
    ingredients: ["Pollo", "Amido di Mais", "Zenzero", "Aglio", "Miele", "Soia"],
    ingredientsDetails: [
      { name: "Ali o Sovracosce di pollo", qty: "400g" },
      { name: "Amido di mais per impanare", qty: "q.b." },
      { name: "Salsa piccante Gochujang (opzionale)", qty: "q.b." }
    ],
    steps: [
      "Passa il pollo nell'amido di mais.",
      "Friggi il pollo due volte (doppia frittura per la croccantezza estrema).",
      "Prepara una glassa bollendo soia, miele, aglio e zenzero.",
      "Tuffa il pollo fritto nella glassa finché non è completamente ricoperto."
    ],
    tips: "La doppia frittura è il segreto del pollo coreano: la prima cuoce, la seconda rende croccante.",
    category: "Etnico",
    time: 40,
    difficulty: "Difficile",
    servings: 2
  },
  {
    id: 177,
    title: "Insalata di Farro Mediterranea",
    description: "Un'alternativa sana al riso, ricca di fibre e sapore.",
    ingredients: ["Farro", "Pomodorini", "Mozzarella", "Olive", "Pesto", "Pinoli"],
    ingredientsDetails: [
      { name: "Farro perlato", qty: "150g" },
      { name: "Pomodorini", qty: "10" },
      { name: "Mozzarelline", qty: "100g" }
    ],
    steps: [
      "Lessa il farro per circa 20 min.",
      "Lascialo raffreddare.",
      "Unisci pomodorini, mozzarelline e olive.",
      "Condisci con due cucchiai di pesto e pinoli tostati."
    ],
    tips: "Il farro rimane più sodo del riso e non scuoce mai.",
    category: "Piatti Unici",
    time: 30,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 178,
    title: "Zuppa di Cipolle Francese (Gratinata)",
    description: "Calda, avvolgente e con una crosticina di formaggio irresistibile.",
    ingredients: ["Cipolle", "Brodo di Carne", "Pane", "Formaggio", "Burro", "Vino Bianco"],
    ingredientsDetails: [
      { name: "Cipolle dorate", qty: "500g" },
      { name: "Brodo di carne", qty: "800ml" },
      { name: "Gruyère o Emmental", qty: "100g" }
    ],
    steps: [
      "Stufa le cipolle affettate nel burro per 30 min finché caramellate.",
      "Sfuma col vino e aggiungi il brodo.",
      "Cuoci altri 20 min.",
      "Metti in ciotole da forno, aggiungi fette di pane e formaggio.",
      "Gratina sotto il grill finché non fa le bollicine."
    ],
    tips: "Le cipolle devono diventare marroni ma non bruciate per dare il vero sapore alla zuppa.",
    category: "Zuppe",
    time: 60,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 179,
    title: "Pancake al Cioccolato",
    description: "La colazione più golosa possibile per i weekend di festa.",
    ingredients: ["Farina", "Cacao", "Uova", "Latte", "Zucchero", "Cioccolato"],
    ingredientsDetails: [
      { name: "Farina 00", qty: "150g" },
      { name: "Cacao amaro", qty: "30g" },
      { name: "Gocce di cioccolato", qty: "q.b." }
    ],
    steps: [
      "Mescola secchi (farina, cacao, zucchero, lievito).",
      "Unisci uova e latte.",
      "Aggiungi le gocce di cioccolato all'impasto.",
      "Cuoci in padella e servi con sciroppo al cioccolato."
    ],
    tips: "Non mescolare troppo l'impasto o i pancake non diventeranno soffici.",
    category: "Colazione",
    time: 20,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 180,
    title: "Pasta con Pesto di Noci e Gorgonzola",
    description: "Un'esplosione di sapore per gli amanti dei formaggi decisi.",
    ingredients: ["Pasta", "Gorgonzola", "Noci", "Panna", "Parmigiano", "Olio"],
    ingredientsDetails: [
      { name: "Pasta corta", qty: "200g" },
      { name: "Gorgonzola dolce", qty: "80g" },
      { name: "Gherigli di noce", qty: "50g" }
    ],
    steps: [
      "Frulla le noci con un po' di olio e parmigiano.",
      "Sciogli il gorgonzola con un po' di panna o latte in padella.",
      "Unisci il pesto di noci al gorgonzola fuso.",
      "Scola la pasta e saltala nel condimento cremoso."
    ],
    tips: "Il gorgonzola dolce è più cremoso e meno piccante, ideale per questo sugo.",
    category: "Pasta",
    time: 15,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 181,
    title: "Pad Thai (Semplificato)",
    description: "Noodles di riso saltati con gamberi, arachidi e sapori orientali.",
    ingredients: ["Noodles di Riso", "Gamberi", "Uova", "Arachidi", "Germogli di Soia", "Lime"],
    ingredientsDetails: [
      { name: "Noodles di riso larghi", qty: "150g" },
      { name: "Gamberi", qty: "100g" },
      { name: "Arachidi tritate", qty: "20g" }
    ],
    steps: [
      "Ammolla i noodles in acqua tiepida.",
      "Salta gamberi e uova nel wok.",
      "Aggiungi i noodles e la salsa (soia, zucchero di canna, lime).",
      "Unisci germogli di soia e arachidi alla fine per la parte croccante."
    ],
    tips: "La salsa deve avere l'equilibrio perfetto tra dolce, acido e salato.",
    category: "Etnico",
    time: 25,
    difficulty: "Difficile",
    servings: 2
  },
  {
    id: 182,
    title: "Insalata di Finocchi, Olive e Capperi",
    description: "Un contorno povero di calorie ma ricchissimo di sapore.",
    ingredients: ["Finocchi", "Olive Nere", "Capperi", "Olio", "Limone", "Pepe"],
    ingredientsDetails: [
      { name: "Finocchi", qty: "2" },
      { name: "Olive nere taggiasche", qty: "1 manciata" },
      { name: "Capperi sott'aceto", qty: "1 cucchiaino" }
    ],
    steps: [
      "Affetta i finocchi sottilissimi.",
      "Unisci olive e capperi dissalati.",
      "Condisci con olio, limone e pepe nero macinato grosso."
    ],
    tips: "Aggiungi delle arance a vivo se vuoi la versione classica siciliana.",
    category: "Insalate",
    time: 10,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 183,
    title: "Pasta alla Norma di Mare",
    description: "Sostituiamo le melanzane con cubetti di pesce spada fritto.",
    ingredients: ["Pasta", "Pesce Spada", "Pomodoro", "Ricotta Salata", "Basilico", "Olio"],
    ingredientsDetails: [
      { name: "Pasta corta", qty: "200g" },
      { name: "Pesce spada a cubetti", qty: "150g" },
      { name: "Passata di pomodoro", qty: "200ml" }
    ],
    steps: [
      "Friggi i cubetti di pesce spada in olio finché dorati.",
      "Prepara un sugo di pomodoro semplice.",
      "Lessa la pasta e uniscila al pomodoro e al pesce.",
      "Servi con una spolverata di ricotta salata e basilico."
    ],
    tips: "Il pesce spada fritto ricorda molto la consistenza della melanzana ma con sapore di mare.",
    category: "Pasta",
    time: 25,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 184,
    title: "Uova al Tegamino con Tartufo Bianco",
    description: "Il massimo della raffinatezza gastronomica con pochissimo sforzo.",
    ingredients: ["Uova", "Burro", "Tartufo Bianco", "Sale", "Pane Bianco"],
    ingredientsDetails: [
      { name: "Uova freschissime", qty: "2" },
      { name: "Burro di malga", qty: "20g" },
      { name: "Tartufo bianco", qty: "q.b." }
    ],
    steps: [
      "Sciogli il burro senza farlo soffriggere.",
      "Cuoci le uova mantenendo il tuorlo liquissimo.",
      "Grattugia il tartufo bianco a lamelle sottili direttamente nel piatto.",
      "Servi con pane bianco tostato caldissimo."
    ],
    tips: "Non usare mai olio tartufato con il tartufo vero, ne coprirebbe la fragranza naturale.",
    category: "Secondi",
    time: 10,
    difficulty: "Facile",
    servings: 1
  },
  {
    id: 185,
    title: "Risotto al Nero di Seppia",
    description: "Elegante, scenografico e dal sapore di mare profondo.",
    ingredients: ["Riso", "Seppie", "Nero di Seppia", "Scalogno", "Vino Bianco", "Brodo di Pesce"],
    ingredientsDetails: [
      { name: "Riso Carnaroli", qty: "160g" },
      { name: "Seppie pulite", qty: "200g" },
      { name: "Nero di seppia (sacche)", qty: "2" }
    ],
    steps: [
      "Taglia le seppie a pezzetti e rosolale con lo scalogno.",
      "Tosta il riso e sfuma col vino bianco.",
      "A metà cottura unisci il nero di seppia sciolto in un po' di brodo.",
      "Manteca con un filo d'olio EVO invece del burro per mantenere il sapore di mare."
    ],
    tips: "Il nero di seppia macchia moltissimo, maneggialo con cura!",
    category: "Primi",
    time: 40,
    difficulty: "Difficile",
    servings: 2
  },
  {
    id: 186,
    title: "Pollo alla Kiev",
    description: "Involtini di pollo ripieni di burro alle erbe, croccanti e filanti.",
    ingredients: ["Pollo", "Burro", "Aglio", "Prezzemolo", "Uova", "Pane"],
    ingredientsDetails: [
      { name: "Petti di pollo sottili", qty: "2" },
      { name: "Burro morbido", qty: "50g" },
      { name: "Aglio e Prezzemolo", qty: "q.b." }
    ],
    steps: [
      "Crea una pomata di burro, aglio e prezzemolo.",
      "Metti un panetto di burro al centro del pollo e arrotola stretto.",
      "Passa nell'uovo e nel pangrattato due volte (doppia impanatura).",
      "Friggi in abbondante olio finché dorato e il burro interno è sciolto."
    ],
    tips: "Assicurati di sigillare bene l'involtino altrimenti il burro uscirà in frittura.",
    category: "Secondi",
    time: 45,
    difficulty: "Difficile",
    servings: 2
  },
  {
    id: 187,
    title: "Insalata di Anguria e Cetrioli",
    description: "La freschezza suprema per le giornate di canicola estiva.",
    ingredients: ["Anguria", "Cetriolo", "Menta", "Lime", "Olio", "Peperoncino"],
    ingredientsDetails: [
      { name: "Anguria a cubetti", qty: "300g" },
      { name: "Cetriolo affettato", qty: "1" },
      { name: "Menta fresca", qty: "q.b." }
    ],
    steps: [
      "Unisci anguria e cetrioli freddissimi di frigo.",
      "Condisci con succo di lime, un pizzico di peperoncino e menta.",
      "Un filo d'olio a crudo completa il piatto."
    ],
    tips: "Il peperoncino esalta la dolcezza dell'anguria in modo inaspettato.",
    category: "Insalate",
    time: 10,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 188,
    title: "Zuppa di Pomodoro Arrostito",
    description: "Il sapore del pomodoro concentrato dal forno, densa e saporita.",
    ingredients: ["Pomodoro", "Aglio", "Cipolla", "Pane", "Brodo", "Basilico"],
    ingredientsDetails: [
      { name: "Pomodori ramati", qty: "1kg" },
      { name: "Aglio", qty: "3 spicchi" },
      { name: "Basilico fresco", qty: "q.b." }
    ],
    steps: [
      "Taglia i pomodori a metà e infornali con aglio e olio finché leggermente bruciacchiati.",
      "Frulla i pomodori arrostiti (senza buccia) con il loro sugo.",
      "Allunga con un po' di brodo e scalda in pentola.",
      "Servi con un giro d'olio e crostoni di pane."
    ],
    tips: "Arrostire i pomodori toglie l'acidità e regala un retrogusto di brace delizioso.",
    category: "Zuppe",
    time: 50,
    difficulty: "Media",
    servings: 4
  },
  {
    id: 189,
    title: "Pancake ai Mirtilli e Yogurt",
    description: "Soffici collinette con lo yogurt nell'impasto per una morbidezza extra.",
    ingredients: ["Farina", "Yogurt", "Uova", "Mirtilli", "Zucchero", "Lievito"],
    ingredientsDetails: [
      { name: "Farina 00", qty: "150g" },
      { name: "Yogurt bianco", qty: "125g" },
      { name: "Mirtilli freschi", qty: "100g" }
    ],
    steps: [
      "Mescola uovo, yogurt e zucchero.",
      "Unisci farina e lievito.",
      "Aggiungi i mirtilli interi alla fine.",
      "Cuoci in padella e servi con sciroppo d'acero."
    ],
    tips: "Usa yogurt greco se vuoi pancake ancora più alti e consistenti.",
    category: "Colazione",
    time: 20,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 190,
    title: "Pasta con Crema di Melanzane e Menta",
    description: "Un primo piatto leggero dal sapore tipicamente mediterraneo.",
    ingredients: ["Pasta", "Melanzane", "Menta", "Aglio", "Olio", "Ricotta Salata"],
    ingredientsDetails: [
      { name: "Pasta corta", qty: "200g" },
      { name: "Melanzana arrostita", qty: "1" },
      { name: "Menta fresca", qty: "q.b." }
    ],
    steps: [
      "Svuota la melanzana arrostita in forno.",
      "Frulla la polpa con aglio, olio e menta.",
      "Lessa la pasta e saltala con la crema di melanzana.",
      "Servi con una grattugiata di ricotta salata."
    ],
    tips: "La melanzana intera in forno per 40 min diventa morbidissima e pronta per essere scavata.",
    category: "Pasta",
    time: 45,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 191,
    title: "Sushi: Uramaki California Roll",
    description: "Il sushi roll più famoso, con il riso all'esterno.",
    ingredients: ["Riso Sushi", "Alga Nori", "Granchio (Surimi)", "Avocado", "Cetriolo", "Sesamo"],
    ingredientsDetails: [
      { name: "Riso condito", qty: "200g" },
      { name: "Alga nori", qty: "1 foglio" },
      { name: "Avocado e Surimi", qty: "q.b." }
    ],
    steps: [
      "Copri l'alga con il riso e cospargi di sesamo.",
      "Gira l'alga in modo che il riso sia a contatto con la stuoia.",
      "Metti avocado, cetriolo e granchio al centro.",
      "Arrotola stretto aiutandoti con la stuoia.",
      "Taglia in 8 pezzi con un coltello bagnato."
    ],
    tips: "Copri la stuoia di bambù con la pellicola trasparente per non far attaccare il riso esterno.",
    category: "Etnico",
    time: 50,
    difficulty: "Difficile",
    servings: 2
  },
  {
    id: 192,
    title: "Insalata di Lenticchie e Salmone",
    description: "Un piatto unico sano, proteico e molto saziante.",
    ingredients: ["Lenticchie", "Salmone", "Pomodorini", "Cipollotto", "Olio", "Limone"],
    ingredientsDetails: [
      { name: "Lenticchie lesse", qty: "200g" },
      { name: "Salmone cotto a vapore", qty: "150g" },
      { name: "Cipollotto fresco", qty: "1" }
    ],
    steps: [
      "Sgrana il salmone cotto in pezzi grandi.",
      "Unisci alle lenticchie fredde.",
      "Aggiungi pomodorini e cipollotto a rondelle.",
      "Condisci con olio, limone e pepe nero."
    ],
    tips: "Usa lenticchie nere Beluga per un contrasto cromatico bellissimo col rosa del salmone.",
    category: "Insalate",
    time: 20,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 193,
    title: "Pasta con Ragù di Tonno Fresco",
    description: "Un sugo di mare veloce che ricorda il ragù di carne nella consistenza.",
    ingredients: ["Pasta", "Tonno Fresco", "Pomodorini", "Aglio", "Vino Bianco", "Prezzemolo"],
    ingredientsDetails: [
      { name: "Pasta corta", qty: "200g" },
      { name: "Tonno fresco a cubetti piccoli", qty: "150g" },
      { name: "Pomodorini", qty: "10" }
    ],
    steps: [
      "Soffriggi aglio e peperoncino.",
      "Aggiungi il tonno e rosola velocemente a fuoco vivo.",
      "Sfuma col vino e aggiungi i pomodorini.",
      "Cuoci 10 minuti.",
      "Salta la pasta e guarnisci con prezzemolo."
    ],
    tips: "Non cuocere troppo il tonno o diventerà asciutto; deve restare rosato all'interno.",
    category: "Pasta",
    time: 20,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 194,
    title: "Uova al Tegamino con Pancetta e Spinaci",
    description: "Una cena completa in padella, ricca e bilanciata.",
    ingredients: ["Uova", "Pancetta", "Spinaci", "Olio", "Sale"],
    ingredientsDetails: [
      { name: "Uova", qty: "2" },
      { name: "Pancetta tesa", qty: "50g" },
      { name: "Spinaci freschi", qty: "100g" }
    ],
    steps: [
      "Rosola la pancetta in padella.",
      "Aggiungi gli spinaci finché non appassiscono.",
      "Crea dei fori tra la verdura e rompi le uova.",
      "Copri e cuoci 3-4 minuti."
    ],
    tips: "Usa la pancetta affumicata per dare un tocco più 'rustico' al piatto.",
    category: "Secondi",
    time: 15,
    difficulty: "Facile",
    servings: 1
  },
  {
    id: 195,
    title: "Risotto alle Erbe Aromatiche",
    description: "Un concentrato di profumi dell'orto, leggero e digeribile.",
    ingredients: ["Riso", "Menta", "Basilico", "Prezzemolo", "Brodo Vegetale", "Burro"],
    ingredientsDetails: [
      { name: "Riso Arborio", qty: "160g" },
      { name: "Mix di erbe tritate", qty: "1 manciata" },
      { name: "Zest di limone", qty: "q.b." }
    ],
    steps: [
      "Tosta il riso e portalo a cottura col brodo.",
      "Solo a fuoco spento aggiungi il trito di erbe freschissime.",
      "Manteca con una noce di burro e scorza di limone.",
      "Il profumo deve essere la caratteristica principale."
    ],
    tips: "Non tritare le erbe troppo presto o si ossideranno perdendo il colore verde brillante.",
    category: "Primi",
    time: 35,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 196,
    title: "Pollo alla Teriyaki",
    description: "Cubetti di pollo glassati con la tipica salsa giapponese.",
    ingredients: ["Pollo", "Salsa Teriyaki", "Zenzero", "Miele", "Sesamo", "Riso"],
    ingredientsDetails: [
      { name: "Petto di pollo", qty: "300g" },
      { name: "Salsa di soia e Miele", qty: "q.b." },
      { name: "Riso Basmati", qty: "150g" }
    ],
    steps: [
      "Taglia il pollo a cubetti e rosolalo in padella.",
      "Versa la salsa teriyaki (o soia+miele+zenzero).",
      "Lascia glassare finché la salsa è densa e lucida.",
      "Servi col riso bianco e semi di sesamo."
    ],
    tips: "La salsa deve 'nappare' il pollo, cioè ricoprirlo completamente come uno sciroppo.",
    category: "Etnico",
    time: 25,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 197,
    title: "Insalata di Ceci, Pomodori e Cipolla Rossa",
    description: "La semplicità rustica in un'insalata pronta in 2 minuti.",
    ingredients: ["Ceci", "Pomodoro", "Cipolla Rossa", "Olio", "Aceto", "Basilico"],
    ingredientsDetails: [
      { name: "Ceci in barattolo", qty: "200g" },
      { name: "Pomodori ramati", qty: "2" },
      { name: "Cipolla rossa di Tropea", qty: "1/2" }
    ],
    steps: [
      "Unisci tutti gli ingredienti affettati.",
      "Condisci con olio, sale e un goccio di aceto.",
      "Aggiungi foglie di basilico spezzettate."
    ],
    tips: "Lascia la cipolla in acqua e aceto per 10 min per renderla più digeribile.",
    category: "Insalate",
    time: 5,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 198,
    title: "Zuppa di Orzo e Funghi",
    description: "Densa, nutriente e dal sapore di montagna.",
    ingredients: ["Orzo", "Funghi Misti", "Aglio", "Olio", "Prezzemolo", "Brodo"],
    ingredientsDetails: [
      { name: "Orzo perlato", qty: "120g" },
      { name: "Funghi champignon o misti", qty: "200g" },
      { name: "Aglio", qty: "1 spicchio" }
    ],
    steps: [
      "Soffriggi l'aglio e aggiungi i funghi.",
      "Unisci l'orzo e tosta un minuto.",
      "Copri col brodo e cuoci 30-40 minuti.",
      "Spegni quando l'orzo è tenero e la zuppa densa."
    ],
    tips: "L'orzo rilascia molto amido, rendendo la zuppa naturalmente cremosa senza bisogno di panna.",
    category: "Zuppe",
    time: 50,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 199,
    title: "Pancake alle Mele",
    description: "Con fettine di mela nascoste nell'impasto soffice.",
    ingredients: ["Farina", "Latte", "Uova", "Mele", "Cannella", "Zucchero"],
    ingredientsDetails: [
      { name: "Farina 00", qty: "150g" },
      { name: "Mela", qty: "1" },
      { name: "Cannella", qty: "1 pizzico" }
    ],
    steps: [
      "Prepara la pastella classica.",
      "Taglia la mela a fette sottilissime.",
      "Metti la pastella in padella e adagia sopra una fetta di mela.",
      "Gira e cuoci finché la mela non è caramellata.",
      "Spolvera di cannella."
    ],
    tips: "Usa mele Fuji o Pink Lady per la loro dolcezza e tenuta in cottura.",
    category: "Colazione",
    time: 25,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 200,
    title: "Pasta con Crema di Zucca e Gorgonzola",
    description: "Il connubio perfetto tra il dolce della zucca e il carattere del formaggio.",
    ingredients: ["Pasta", "Zucca", "Gorgonzola", "Cipolla", "Olio", "Noci"],
    ingredientsDetails: [
      { name: "Pasta corta", qty: "200g" },
      { name: "Zucca cotta a vapore", qty: "200g" },
      { name: "Gorgonzola", qty: "50g" }
    ],
    steps: [
      "Frulla la zucca cotta finché liscia.",
      "Sciogli il gorgonzola nella crema di zucca calda.",
      "Lessa la pasta e saltala nel condimento.",
      "Guarnisci con noci tritate."
    ],
    tips: "Aggiungi un pizzico di noce moscata alla zucca per esaltare il sapore autunnale.",
    category: "Pasta",
    time: 30,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 201,
    title: "Cous Cous alle Verdure e Curcuma",
    description: "Un piatto unico leggero, colorato e ricco di spezie.",
    ingredients: ["Cous Cous", "Zucchine", "Carote", "Peperoni", "Curcuma", "Cipolla"],
    ingredientsDetails: [
      { name: "Cous cous", qty: "150g" },
      { name: "Mix verdure a cubetti", qty: "300g" },
      { name: "Curcuma", qty: "1 cucchiaino" }
    ],
    steps: [
      "Salta le verdure in padella con olio e curcuma.",
      "Prepara il cous cous versando acqua bollente salata e coprendo.",
      "Sgrana il cous cous con una forchetta.",
      "Unisci le verdure e mescola bene.",
      "Servi tiepido o freddo."
    ],
    tips: "Aggiungi dei ceci bolliti per rendere il piatto nutrizionalmente completo.",
    category: "Piatti Unici",
    time: 20,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 202,
    title: "Insalata di Pollo al Curry e Mele",
    description: "Un'insalata saporita con un tocco agrodolce.",
    ingredients: ["Pollo", "Mele", "Curry", "Maionese", "Sedano", "Noci"],
    ingredientsDetails: [
      { name: "Petto di pollo grigliato", qty: "200g" },
      { name: "Mela verde", qty: "1" },
      { name: "Maionese", qty: "1 cucchiaio" }
    ],
    steps: [
      "Taglia il pollo e la mela a cubetti.",
      "In una ciotola mescola maionese e curry.",
      "Unisci pollo, mela, sedano affettato e noci.",
      "Condisci con la salsa al curry e mescola."
    ],
    tips: "Usa mela Granny Smith per una nota croccante e acidula perfetta col curry.",
    category: "Insalate",
    time: 15,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 203,
    title: "Pasta con Pesto di Rucola e Pomodorini Secchi",
    description: "Sapore deciso e contrasto tra l'amaro della rucola e il dolce dei pomodorini.",
    ingredients: ["Pasta", "Rucola", "Pomodorini Secchi", "Mandorle", "Parmigiano", "Olio"],
    ingredientsDetails: [
      { name: "Pasta corta", qty: "200g" },
      { name: "Rucola fresca", qty: "80g" },
      { name: "Pomodorini secchi sott'olio", qty: "5" }
    ],
    steps: [
      "Frulla la rucola con mandorle, olio e parmigiano.",
      "Lessa la pasta al dente.",
      "Taglia i pomodorini secchi a pezzetti.",
      "Salta la pasta col pesto e aggiungi i pomodorini secchi."
    ],
    tips: "Se il pesto è troppo amaro, aggiungi un po' più di parmigiano o una punta di miele.",
    category: "Pasta",
    time: 15,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 204,
    title: "Uova al Pomodoro e Peperoni (Shakshuka)",
    description: "Un piatto unico speziato, perfetto per fare la scarpetta.",
    ingredients: ["Uova", "Pomodoro", "Peperoni", "Cipolla", "Cumino", "Paprika"],
    ingredientsDetails: [
      { name: "Uova", qty: "3" },
      { name: "Polpa di pomodoro", qty: "400g" },
      { name: "Peperone rosso", qty: "1" }
    ],
    steps: [
      "Soffriggi cipolla e peperone con le spezie.",
      "Aggiungi il pomodoro e cuoci 15 min.",
      "Crea degli spazi e rompi le uova dentro.",
      "Copri e cuoci finché l'albume è solido ma il tuorlo morbido."
    ],
    tips: "Servi con pane Pita o fette di pane tostato spesse.",
    category: "Secondi",
    time: 30,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 205,
    title: "Risotto al Taleggio e Pere",
    description: "Un classico abbinamento tra formaggio cremoso e frutta dolce.",
    ingredients: ["Riso", "Taleggio", "Pere", "Brodo Vegetale", "Vino Bianco", "Burro"],
    ingredientsDetails: [
      { name: "Riso Carnaroli", qty: "160g" },
      { name: "Taleggio", qty: "80g" },
      { name: "Pera Kaiser", qty: "1" }
    ],
    steps: [
      "Tosta il riso e sfuma col vino bianco.",
      "A metà cottura aggiungi metà pera a cubetti piccoli.",
      "Porta a cottura col brodo.",
      "Manteca con taleggio e il resto della pera.",
      "Il formaggio deve sciogliersi completamente."
    ],
    tips: "Il taleggio ha una nota aromatica forte che si sposa benissimo con la dolcezza della pera.",
    category: "Primi",
    time: 35,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 206,
    title: "Pollo alla Cacciatora Bianco",
    description: "Versione senza pomodoro, con vino bianco, olive e rosmarino.",
    ingredients: ["Pollo", "Vino Bianco", "Olive", "Rosmarino", "Aglio", "Olio"],
    ingredientsDetails: [
      { name: "Pollo a pezzi", qty: "500g" },
      { name: "Vino bianco secco", qty: "200ml" },
      { name: "Olive verdi", qty: "50g" }
    ],
    steps: [
      "Rosola il pollo con aglio e rosmarino.",
      "Sfuma col vino bianco e lascia evaporare.",
      "Aggiungi le olive e un po' di brodo o acqua.",
      "Copri e cuoci 40 min finché il fondo è cremoso."
    ],
    tips: "Usa olive taggiasche per un sapore più delicato e raffinato.",
    category: "Secondi",
    time: 50,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 207,
    title: "Insalata di Orzo, Tonno e Zucchine",
    description: "Un piatto estivo fresco e nutriente, ideale da portare al lavoro.",
    ingredients: ["Orzo", "Tonno", "Zucchine", "Limone", "Olio", "Menta"],
    ingredientsDetails: [
      { name: "Orzo perlato", qty: "150g" },
      { name: "Tonno sott'olio", qty: "120g" },
      { name: "Zucchine", qty: "2" }
    ],
    steps: [
      "Lessa l'orzo e lascialo raffreddare.",
      "Taglia le zucchine a cubetti piccoli e saltale velocemente in padella.",
      "Unisci orzo, tonno sgozzolato e zucchine.",
      "Condisci con olio, limone e menta fresca."
    ],
    tips: "L'orzo rimane più croccante del riso nelle insalate fredde.",
    category: "Piatti Unici",
    time: 30,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 208,
    title: "Zuppa di Vongole allo Zafferano",
    description: "Raffinata e profumata, ottima come antipasto o primo leggero.",
    ingredients: ["Vongole", "Zafferano", "Aglio", "Olio", "Prezzemolo", "Pane"],
    ingredientsDetails: [
      { name: "Vongole fresche", qty: "500g" },
      { name: "Zafferano", qty: "1 bustina" },
      { name: "Vino bianco", qty: "q.b." }
    ],
    steps: [
      "Apri le vongole in padella con aglio e vino.",
      "Filtra il liquido di cottura e scioglici dentro lo zafferano.",
      "Rimetti le vongole nel liquido giallo profumato.",
      "Servi con pane tostato e prezzemolo fresco."
    ],
    tips: "Assicurati di spurgare bene le vongole in acqua salata per eliminare la sabbia.",
    category: "Antipasti",
    time: 20,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 209,
    title: "Pancake di Zucchine (Salty Pancakes)",
    description: "Una variante salata sfiziosa, ottima per un brunch o come antipasto.",
    ingredients: ["Zucchine", "Uova", "Farina", "Parmigiano", "Lievito Istantaneo"],
    ingredientsDetails: [
      { name: "Zucchine grattugiate", qty: "2" },
      { name: "Farina 00", qty: "100g" },
      { name: "Parmigiano Reggiano", qty: "30g" }
    ],
    steps: [
      "Strizza bene le zucchine grattugiate per togliere l'acqua.",
      "Mescola uova, farina, parmigiano e lievito.",
      "Unisci le zucchine e amalgama.",
      "Cuoci a cucchiaiate in padella calda unta finché dorati."
    ],
    tips: "Servi con una crema di yogurt greco ed erba cipollina.",
    category: "Antipasti",
    time: 20,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 210,
    title: "Pasta con Crema di Cavolfiore e Briciole di Pane",
    description: "Un piatto povero ma ricchissimo di gusto e consistenza.",
    ingredients: ["Pasta", "Cavolfiore", "Acciughe", "Pane Grattugiato", "Aglio", "Olio"],
    ingredientsDetails: [
      { name: "Pasta corta", qty: "200g" },
      { name: "Cavolfiore (cimette)", qty: "300g" },
      { name: "Acciughe sott'oil", qty: "2 filetti" }
    ],
    steps: [
      "Lessa il cavolfiore e frullalo con un po' di acqua di cottura.",
      "In padella tosta il pangrattato con un filo d'olio finché scuro.",
      "Soffriggi aglio e acciughe e aggiungi la crema di cavolfiore.",
      "Salta la pasta nella crema e cospargi col pane croccante."
    ],
    tips: "Il pangrattato tostato (chiamato 'formaggio dei poveri') dà una nota di croccantezza fondamentale.",
    category: "Pasta",
    time: 25,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 211,
    title: "Gyoza di Maiale (Ravioli Giapponesi)",
    description: "Ravioli croccanti alla base e morbidi sopra, ripieni di carne e verza.",
    ingredients: ["Pasta Gyoza", "Maiale Macinato", "Verza", "Zenzero", "Soia", "Aglio"],
    ingredientsDetails: [
      { name: "Dischi di pasta gyoza", qty: "12" },
      { name: "Maiale macinato", qty: "150g" },
      { name: "Verza tritata", qty: "50g" }
    ],
    steps: [
      "Mescola maiale, verza, zenzero, aglio e soia.",
      "Metti un cucchiaino di ripieno in ogni disco e chiudi a ventaglio.",
      "Rosola la base dei ravioli in padella con olio.",
      "Versa un dito d'acqua e copri per cuocere al vapore finché l'acqua evapora."
    ],
    tips: "Non girare i ravioli: devono restare bruciacchiati solo sul fondo.",
    category: "Etnico",
    time: 45,
    difficulty: "Difficile",
    servings: 2
  },
  {
    id: 212,
    title: "Insalata di Avocado, Gamberetti e Pompelmo",
    description: "Un abbinamento chic e rinfrescante, perfetto per l'estate.",
    ingredients: ["Avocado", "Gamberetti", "Pompelmo Rosa", "Olio", "Sale", "Menta"],
    ingredientsDetails: [
      { name: "Avocado maturo", qty: "1" },
      { name: "Gamberetti bolliti", qty: "150g" },
      { name: "Pompelmo rosa a vivo", qty: "1/2" }
    ],
    steps: [
      "Taglia l'avocado a fette e il pompelmo a spicchi senza pelle.",
      "Unisci i gamberetti.",
      "Condisci con un'emulsione di olio e succo di pompelmo.",
      "Aggiungi menta fresca."
    ],
    tips: "L'acidità del pompelmo bilancia la grassezza dell'avocado.",
    category: "Antipasti",
    time: 15,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 213,
    title: "Pasta con Ragù di Agnello e Menta",
    description: "Sapore intenso e aromatico per un primo piatto pasquale o domenicale.",
    ingredients: ["Pasta", "Agnello Macinato", "Vino Rosso", "Menta", "Scalogno", "Olio"],
    ingredientsDetails: [
      { name: "Pasta corta", qty: "200g" },
      { name: "Macinato di agnello", qty: "200g" },
      { name: "Vino rosso", qty: "1/2 bicchiere" }
    ],
    steps: [
      "Soffriggi lo scalogno e aggiungi l'agnello macinato.",
      "Sfuma col vino rosso.",
      "Cuoci a fuoco basso con un po' di brodo per 30 min.",
      "Aggiungi molta menta fresca tritata alla fine.",
      "Salta la pasta col ragù bianco di agnello."
    ],
    tips: "La menta è essenziale per 'pulire' il sapore forte della carne di agnello.",
    category: "Pasta",
    time: 45,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 214,
    title: "Uova al Tegamino con Bottarga",
    description: "Un tocco di mare sapido su un classico della colazione o cena veloce.",
    ingredients: ["Uova", "Bottarga di Muggine", "Burro", "Pepe Nero", "Pane"],
    ingredientsDetails: [
      { name: "Uova", qty: "2" },
      { name: "Bottarga grattugiata", qty: "1 cucchiaino" },
      { name: "Burro", qty: "10g" }
    ],
    steps: [
      "Cuoci le uova al tegamino nel burro.",
      "Spegni il fuoco quando il tuorlo è ancora liquido.",
      "Spolvera generosamente di bottarga grattugiata.",
      "Aggiungi un giro di pepe nero e servi con pane croccante."
    ],
    tips: "Non salare le uova: la bottarga è già molto sapida.",
    category: "Secondi",
    time: 10,
    difficulty: "Facile",
    servings: 1
  },
  {
    id: 215,
    title: "Risotto al Gorgonzola e Noci",
    description: "Cremoso, avvolgente e croccante: il risotto perfetto per l'inverno.",
    ingredients: ["Riso", "Gorgonzola", "Noci", "Brodo Vegetale", "Vino Bianco", "Burro"],
    ingredientsDetails: [
      { name: "Riso Carnaroli", qty: "160g" },
      { name: "Gorgonzola piccante", qty: "60g" },
      { name: "Gherigli di noce", qty: "30g" }
    ],
    steps: [
      "Tosta il riso e sfuma col vino bianco.",
      "Porta a cottura col brodo.",
      "Manteca con gorgonzola e un pizzico di burro.",
      "Guarnisci con noci tritate grossolanamente al momento."
    ],
    tips: "Usa gorgonzola piccante se ami i sapori forti, dolce per un risultato più delicato.",
    category: "Primi",
    time: 35,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 216,
    title: "Pollo alla Crema di Funghi",
    description: "Soffice petto di pollo immerso in una vellutata salsa ai funghi.",
    ingredients: ["Pollo", "Funghi", "Panna", "Scalogno", "Burro", "Prezzemolo"],
    ingredientsDetails: [
      { name: "Petto di pollo a fette", qty: "300g" },
      { name: "Funghi Champignon", qty: "200g" },
      { name: "Panna da cucina", qty: "100ml" }
    ],
    steps: [
      "Infarinare il pollo e rosolarlo nel burro.",
      "In un'altra padella saltare i funghi con lo scalogno.",
      "Unire pollo e funghi, aggiungere la panna.",
      "Lasciare addensare il sugo per 5 minuti a fuoco basso."
    ],
    tips: "Aggiungi un pizzico di noce moscata alla panna per un aroma più profondo.",
    category: "Secondi",
    time: 30,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 217,
    title: "Insalata di Patate, Tonno e Olive Nere",
    description: "Sostanziosa e saporita, perfetta come piatto unico freddo.",
    ingredients: ["Patate", "Tonno", "Olive Nere", "Maionese (opzionale)", "Cipollotto", "Olio"],
    ingredientsDetails: [
      { name: "Patate lesse", qty: "300g" },
      { name: "Tonno sott'olio", qty: "120g" },
      { name: "Olive nere al forno", qty: "1 manciata" }
    ],
    steps: [
      "Taglia le patate lesse a cubetti grandi.",
      "Unisci tonno, olive e cipollotto a rondelle.",
      "Condisci con olio, sale e pepe.",
      "Aggiungi un cucchiaio di maionese se la vuoi più cremosa."
    ],
    tips: "Le patate lesse fatte il giorno prima sono più sode e ideali per l'insalata.",
    category: "Piatti Unici",
    time: 30,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 218,
    title: "Zuppa di Mais e Pancetta (Corn Chowder)",
    description: "Una zuppa densa e dolce-salata tipica della cucina americana.",
    ingredients: ["Mais", "Pancetta", "Patate", "Panna", "Cipolla", "Brodo"],
    ingredientsDetails: [
      { name: "Mais in chicchi (lattina)", qty: "200g" },
      { name: "Pancetta a cubetti", qty: "50g" },
      { name: "Patata media", qty: "1" }
    ],
    steps: [
      "Rosola la pancetta finché croccante.",
      "Toglila e nella stessa pentola soffriggi la cipolla.",
      "Aggiungi patata a cubetti, mais e brodo.",
      "Cuoci finché la patata è tenera, poi aggiungi la panna.",
      "Frulla una parte della zuppa per addensarla."
    ],
    tips: "Servi con la pancetta croccante messa sopra all'ultimo momento.",
    category: "Zuppe",
    time: 40,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 219,
    title: "Pancake allo Sciroppo d'Acero e Noci",
    description: "La colazione classica canadese, energetica e deliziosa.",
    ingredients: ["Farina", "Latte", "Uova", "Sciroppo d'Acero", "Noci Pecan", "Burro"],
    ingredientsDetails: [
      { name: "Farina 00", qty: "150g" },
      { name: "Sciroppo d'acero", qty: "q.b." },
      { name: "Noci pecan o classiche", qty: "20g" }
    ],
    steps: [
      "Prepara i pancake classici.",
      "Mentre cuociono, trita le noci.",
      "Impiatta i pancake caldi con una noce di burro sopra.",
      "Versa abbondante sciroppo d'acero e cospargi con le noci."
    ],
    tips: "Puoi mettere le noci direttamente nell'impasto mentre è ancora liquido in padella.",
    category: "Colazione",
    time: 20,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 220,
    title: "Pasta con Pesto di Pistacchi e Gamberi",
    description: "Un primo piatto di pesce elegante e dai colori vivaci.",
    ingredients: ["Pasta", "Pistacchi", "Gamberi", "Aglio", "Olio", "Zest di Limone"],
    ingredientsDetails: [
      { name: "Pasta lunga (Linguine)", qty: "200g" },
      { name: "Pesto di pistacchi", qty: "3 cucchiai" },
      { name: "Gamberi puliti", qty: "100g" }
    ],
    steps: [
      "Salta i gamberi velocemente in padella con aglio e olio.",
      "Spegni e unisci il pesto di pistacchi diluito con acqua di cottura.",
      "Lessa la pasta e saltala nel condimento.",
      "Finisci con scorza di limone grattugiata."
    ],
    tips: "Non cuocere il pesto: il calore della pasta basta a farlo sciogliere senza rovinarlo.",
    category: "Pasta",
    time: 20,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 221,
    title: "Bibimbap (Bowl Coreana)",
    description: "Riso, verdure saltate, carne e un uovo fritto: il pasto completo coreano.",
    ingredients: ["Riso", "Manzo Macinato", "Spinaci", "Carote", "Germogli di Soia", "Uova"],
    ingredientsDetails: [
      { name: "Riso bollito", qty: "200g" },
      { name: "Verdure miste", qty: "q.b." },
      { name: "Salsa Gochujang (piccante)", qty: "1 cucchiaio" }
    ],
    steps: [
      "Salta ogni verdura separatamente con un po' di olio di sesamo.",
      "Cuoci la carne con soia e aglio.",
      "Metti il riso sul fondo di una ciotola grande.",
      "Disponi le verdure e la carne a raggiera sopra il riso.",
      "Metti un uovo fritto al centro e la salsa piccante a lato."
    ],
    tips: "Si mangia mescolando energicamente tutto insieme prima di assaggiare.",
    category: "Etnico",
    time: 45,
    difficulty: "Difficile",
    servings: 2
  },
  {
    id: 222,
    title: "Insalata di Cetrioli e Yogurt (Tzatziki Salad)",
    description: "Freschissima e povera di grassi, perfetta per accompagnare carne grigliata.",
    ingredients: ["Cetrioli", "Yogurt Greco", "Aglio", "Aneto", "Olio", "Aceto"],
    ingredientsDetails: [
      { name: "Cetrioli", qty: "2" },
      { name: "Yogurt greco bianco", qty: "150g" },
      { name: "Aglio tritato finissimo", qty: "1/2 spicchio" }
    ],
    steps: [
      "Affetta i cetrioli a rondelle sottili.",
      "Prepara la salsa mescolando yogurt, aglio, olio, aceto e aneto.",
      "Unisci i cetrioli alla salsa e mescola bene.",
      "Lascia riposare in frigo 15 min."
    ],
    tips: "Elimina i semi centrali del cetriolo per renderlo più digeribile e meno acquoso.",
    category: "Insalate",
    time: 15,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 223,
    title: "Pasta con Ragù di Polpo",
    description: "Una variante di mare del ragù, ricca, saporita e originale.",
    ingredients: ["Pasta", "Polpo", "Pomodoro", "Vino Rosso", "Aglio", "Prezzemolo"],
    ingredientsDetails: [
      { name: "Pasta corta", qty: "200g" },
      { name: "Polpo fresco o surgelato", qty: "300g" },
      { name: "Passata di pomodoro", qty: "200ml" }
    ],
    steps: [
      "Taglia il polpo a pezzetti piccolissimi.",
      "Soffriggi aglio e peperoncino, aggiungi il polpo e rosola bene.",
      "Sfuma col vino rosso.",
      "Aggiungi pomodoro e cuoci coperto per 40 min finché il polpo è tenero."
    ],
    tips: "Usa un vino rosso corposo: il polpo regge benissimo i sapori forti.",
    category: "Pasta",
    time: 60,
    difficulty: "Difficile",
    servings: 2
  },
  {
    id: 224,
    title: "Uova al Tegamino con Spinaci e Pinoli",
    description: "Una cena veloce e salutare, con il tocco croccante della frutta secca.",
    ingredients: ["Uova", "Spinaci", "Pinoli", "Aglio", "Olio", "Uvetta (opzionale)"],
    ingredientsDetails: [
      { name: "Uova", qty: "2" },
      { name: "Spinaci freschi", qty: "150g" },
      { name: "Pinoli", qty: "10g" }
    ],
    steps: [
      "Salta gli spinaci in padella con aglio e olio.",
      "Aggiungi i pinoli e tostali insieme alla verdura.",
      "Sposta gli spinaci ai lati della padella e rompi le uova al centro.",
      "Cuoci finché l'uovo è della consistenza preferita."
    ],
    tips: "L'aggiunta di uvetta (stile siciliano) crea un contrasto dolce-salato delizioso.",
    category: "Secondi",
    time: 15,
    difficulty: "Facile",
    servings: 1
  },
  {
    id: 225,
    title: "Risotto al radicchio e Speck",
    description: "Il gusto amaro del radicchio bilanciato dal sapido dello speck.",
    ingredients: ["Riso", "Radicchio", "Speck", "Vino Rosso", "Parmigiano", "Burro"],
    ingredientsDetails: [
      { name: "Riso Carnaroli", qty: "160g" },
      { name: "Radicchio Trevigiano", qty: "1 ceppo" },
      { name: "Speck a listarelle", qty: "50g" }
    ],
    steps: [
      "Rosola lo speck finché croccante e mettilo da parte.",
      "Nella stessa pentola tosta il riso e aggiungi il radicchio tagliato fine.",
      "Sfuma col vino rosso e porta a cottura col brodo.",
      "Manteca con burro e parmigiano.",
      "Aggiungi lo speck croccante solo alla fine sopra al piatto."
    ],
    tips: "Il radicchio tardivo è meno amaro e più pregiato, perfetto per questo risotto.",
    category: "Primi",
    time: 35,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 226,
    title: "Pollo alla Senape e Miele",
    description: "Un classico della cucina anglosassone, dolce, piccante e cremoso.",
    ingredients: ["Pollo", "Senape", "Miele", "Panna", "Scalogno", "Burro"],
    ingredientsDetails: [
      { name: "Petto di pollo a cubetti", qty: "300g" },
      { name: "Senape di Digione", qty: "1 cucchiaio" },
      { name: "Miele di acacia", qty: "1 cucchiaio" }
    ],
    steps: [
      "Infarina il pollo e rosolalo con lo scalogno.",
      "Mescola senape, miele e panna in una ciotolina.",
      "Versa la salsa sul pollo e lascia addensare a fuoco basso per 10 min.",
      "Il sugo deve essere lucido e denso."
    ],
    tips: "Usa senape in grani se preferisci una consistenza più rustica.",
    category: "Secondi",
    time: 25,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 227,
    title: "Insalata di Ceci, Zucchine e Feta",
    description: "Fresca, proteica e colorata, ottima da preparare in anticipo.",
    ingredients: ["Ceci", "Zucchine", "Feta", "Limone", "Olio", "Basilico"],
    ingredientsDetails: [
      { name: "Ceci precotti", qty: "200g" },
      { name: "Zucchine crude a julienne", qty: "2" },
      { name: "Feta sbriciolata", qty: "80g" }
    ],
    steps: [
      "Taglia le zucchine a striscioline sottili o a julienne.",
      "Unisci ceci, zucchine e feta in una ciotola.",
      "Condisci con un'emulsione di olio, limone e sale.",
      "Aggiungi foglie di basilico fresco spezzettate."
    ],
    tips: "Le zucchine crude sono dolci e croccanti, ideali per le insalate estive.",
    category: "Insalate",
    time: 15,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 228,
    title: "Zuppa di Pesce e Zafferano",
    description: "Una zuppa di pesce bianca profumata e lussuosa.",
    ingredients: ["Pesce Misto", "Zafferano", "Scalogno", "Vino Bianco", "Brodo di Pesce", "Pane"],
    ingredientsDetails: [
      { name: "Filetti di pesce bianco", qty: "300g" },
      { name: "Gamberi", qty: "4" },
      { name: "Zafferano", qty: "1 bustina" }
    ],
    steps: [
      "Soffriggi lo scalogno, aggiungi il pesce a pezzi grandi.",
      "Sfuma col vino bianco.",
      "Aggiungi il brodo di pesce in cui avrai sciolto lo zafferano.",
      "Cuoci 10-15 minuti stando attento a non rompere il pesce.",
      "Servi con fette di pane tostato."
    ],
    tips: "Non mescolare troppo: scuoti la pentola per non sfaldare i filetti di pesce.",
    category: "Zuppe",
    time: 30,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 229,
    title: "Pancake ai Lamponi e Cioccolato Bianco",
    description: "Un abbinamento raffinato e dolcissimo per una colazione speciale.",
    ingredients: ["Farina", "Latte", "Uova", "Lamponi", "Cioccolato Bianco", "Burro"],
    ingredientsDetails: [
      { name: "Farina 00", qty: "150g" },
      { name: "Lamponi freschi", qty: "100g" },
      { name: "Scaglie di cioccolato bianco", qty: "30g" }
    ],
    steps: [
      "Prepara l'impasto dei pancake.",
      "Aggiungi i lamponi (tagliati a metà se grandi) e le scaglie di cioccolato.",
      "Cuoci in padella facendo attenzione perché il cioccolato bianco tende a caramellare velocemente.",
      "Servi con una spolverata di zucchero a velo."
    ],
    tips: "Usa cioccolato bianco di buona qualità per evitare che diventi troppo grasso in cottura.",
    category: "Colazione",
    time: 25,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 230,
    title: "Pasta con Pesto di Pomodori Secchi e Mandorle",
    description: "Un sugo siciliano dal sapore concentrato e dalla consistenza granulosa.",
    ingredients: ["Pasta", "Pomodori Secchi", "Mandorle", "Aglio", "Olio", "Basilico"],
    ingredientsDetails: [
      { name: "Pasta corta", qty: "200g" },
      { name: "Pomodori secchi sott'olio", qty: "100g" },
      { name: "Mandorle pelate", qty: "30g" }
    ],
    steps: [
      "Frulla pomodori secchi, mandorle, aglio e olio finché non ottieni un pesto denso.",
      "Lessa la pasta al dente.",
      "Spegni il fuoco e unisci il pesto diluendolo con acqua di cottura.",
      "Guarnisci con basilico e granella di mandorle."
    ],
    tips: "Se i pomodori secchi sono troppo salati, sciacquali bene sotto l'acqua prima di frullarli.",
    category: "Pasta",
    time: 15,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 231,
    title: "Ramen di Maiale (Semplificato)",
    description: "La famosa zuppa giapponese con noodles, uovo marinato e carne tenera.",
    ingredients: ["Noodles per Ramen", "Maiale a Fette", "Brodo di Carne", "Uova", "Soia", "Zenzero"],
    ingredientsDetails: [
      { name: "Noodles freschi o secchi", qty: "150g" },
      { name: "Brodo saporito (soia, zenzero, aglio)", qty: "1 litro" },
      { name: "Uova sode barzotte", qty: "2" }
    ],
    steps: [
      "Prepara un brodo molto saporito con zenzero, aglio e soia.",
      "Cuoci le fette di maiale in padella con un po' di soia finché caramellate.",
      "Lessa i noodles a parte.",
      "Componi la bowl: noodles, brodo bollente, fette di maiale e l'uovo a metà sopra."
    ],
    tips: "L'uovo deve avere il tuorlo ancora cremoso per essere un vero ramen.",
    category: "Etnico",
    time: 50,
    difficulty: "Difficile",
    servings: 2
  },
  {
    id: 232,
    title: "Insalata di Cetrioli, Avocado e Sesamo",
    description: "Ispirata alla cucina giapponese, fresca e ricca di grassi buoni.",
    ingredients: ["Cetrioli", "Avocado", "Sesamo", "Soia", "Olio di Sesamo", "Aceto di Riso"],
    ingredientsDetails: [
      { name: "Cetriolo grande", qty: "1" },
      { name: "Avocado maturo", qty: "1" },
      { name: "Semi di sesamo tostati", qty: "1 cucchiaio" }
    ],
    steps: [
      "Affetta il cetriolo a rondelle velate.",
      "Taglia l'avocado a cubetti.",
      "Prepara il condimento con soia, aceto di riso e olio di sesamo.",
      "Unisci tutto e cospargi con i semi di sesamo."
    ],
    tips: "Tosta i semi di sesamo in padella per un minuto per sprigionarne tutto l'aroma.",
    category: "Insalate",
    time: 10,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 233,
    title: "Pasta con Ragù di Sarde e Finocchietto",
    description: "I sapori della Sicilia: sarde fresche, finocchietto e uvetta.",
    ingredients: ["Pasta", "Sarde Fresche", "Finocchietto Selvatico", "Uvetta", "Pinoli", "Zafferano"],
    ingredientsDetails: [
      { name: "Bucatini", qty: "200g" },
      { name: "Sarde pulite", qty: "200g" },
      { name: "Finocchietto selvatico", qty: "1 mazzetto" }
    ],
    steps: [
      "Lessa il finocchietto e usa la sua acqua per cuocere la pasta.",
      "Soffriggi cipolla, uvetta e pinoli, aggiungi le sarde a pezzetti.",
      "Sciogli lo zafferano e aggiungilo al sugo.",
      "Unisci pasta e finocchietto alle sarde e salta bene."
    ],
    tips: "Questo è il condimento della famosa 'Pasta con le sarde' alla palermitana.",
    category: "Pasta",
    time: 40,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 234,
    title: "Uova al Tegamino con Caviale",
    description: "Il lusso estremo in un piatto di una semplicità disarmante.",
    ingredients: ["Uova", "Caviale (o succedaneo)", "Burro", "Sale", "Panna Acida"],
    ingredientsDetails: [
      { name: "Uova freschissime", qty: "2" },
      { name: "Caviale di qualità", qty: "10g" },
      { name: "Panna acida", qty: "1 cucchiaino" }
    ],
    steps: [
      "Cuoci le uova al tegamino nel burro cercando di non far dorare i bordi.",
      "Metti un ciuffetto di panna acida sopra ogni uovo.",
      "Adagia delicatamente il caviale sulla panna acida.",
      "Servi con fette di pane bianco senza crosta tostate."
    ],
    tips: "Il calore dell'uovo deve solo scaldare appena il caviale senza 'cuocerlo'.",
    category: "Secondi",
    time: 10,
    difficulty: "Facile",
    servings: 1
  },
  {
    id: 235,
    title: "Risotto al prosecco e Melograno",
    description: "Festivo, elegante e dal colore rubino brillante.",
    ingredients: ["Riso", "Prosecco", "Melograno", "Brodo Vegetale", "Burro", "Parmigiano"],
    ingredientsDetails: [
      { name: "Riso Carnaroli", qty: "160g" },
      { name: "Prosecco Brut", qty: "1 bicchiere" },
      { name: "Succo e chicchi di melograno", qty: "1" }
    ],
    steps: [
      "Tosta il riso e sfuma col prosecco.",
      "A metà cottura aggiungi il succo di melograno.",
      "Manteca con burro e parmigiano.",
      "Decora con i chicchi di melograno freschi alla fine."
    ],
    tips: "Il melograno dà un'acidità piacevolissima che contrasta la grassezza del burro.",
    category: "Primi",
    time: 35,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 236,
    title: "Pollo alla Cacciatora con Funghi",
    description: "Una variante autunnale del classico pollo stufato, ricca e profumata.",
    ingredients: ["Pollo", "Funghi", "Pomodoro", "Cipolla", "Vino Rosso", "Aglio"],
    ingredientsDetails: [
      { name: "Pollo a pezzi", qty: "500g" },
      { name: "Funghi misti (anche secchi)", qty: "200g" },
      { name: "Vino rosso", qty: "100ml" }
    ],
    steps: [
      "Rosola il pollo con aglio e cipolla.",
      "Aggiungi i funghi e fai insaporire.",
      "Sfuma col vino rosso.",
      "Unisci il pomodoro e cuoci coperto per 45 min."
    ],
    tips: "Aggiungi un cucchiaio di funghi porcini secchi ammollati per un profumo incredibile.",
    category: "Secondi",
    time: 60,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 237,
    title: "Insalata di Ceci, Rucola e Grana",
    description: "Un'insalata veloce, sana e saporita, ottima per un pranzo leggero.",
    ingredients: ["Ceci", "Rucola", "Grana Padano", "Limone", "Olio", "Pepe"],
    ingredientsDetails: [
      { name: "Ceci precotti", qty: "200g" },
      { name: "Rucola", qty: "50g" },
      { name: "Scaglie di grana", qty: "q.b." }
    ],
    steps: [
      "Unisci ceci e rucola in una ciotola.",
      "Aggiungi le scaglie di grana.",
      "Condisci con olio, succo di limone e abbondante pepe nero macinato al momento."
    ],
    tips: "Aggiungi dei pomodorini ciliegino per una nota di colore e freschezza in più.",
    category: "Insalate",
    time: 10,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 238,
    title: "Zuppa di Ceci e Castagne",
    description: "Un piatto tipico dell'autunno, povero e nutriente.",
    ingredients: ["Ceci", "Castagne lesse", "Rosmarino", "Aglio", "Olio", "Brodo Vegetale"],
    ingredientsDetails: [
      { name: "Ceci precotti o secchi", qty: "200g" },
      { name: "Castagne già cotte e pelate", qty: "100g" },
      { name: "Rosmarino fresco", qty: "1 rametto" }
    ],
    steps: [
      "Soffriggi aglio e rosmarino in olio.",
      "Aggiungi i ceci e le castagne spezzettate.",
      "Copri col brodo e cuoci 20-30 min.",
      "Frulla una parte per renderla cremosa.",
      "Servi con un filo d'olio a crudo."
    ],
    tips: "Il rosmarino è fondamentale per aromatizzare castagne e ceci.",
    category: "Zuppe",
    time: 40,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 239,
    title: "Pancake ai Fichi e Miele",
    description: "Colazione settembrina dolcissima e scenografica.",
    ingredients: ["Farina", "Latte", "Uova", "Fichi Freschi", "Miele", "Mandorle"],
    ingredientsDetails: [
      { name: "Farina 00", qty: "150g" },
      { name: "Fichi maturi", qty: "3" },
      { name: "Miele di castagno", qty: "q.b." }
    ],
    steps: [
      "Prepara i pancake classici.",
      "Taglia i fichi a spicchi.",
      "Metti un cucchiaio di miele in padella e rosola i fichi per un minuto.",
      "Impiatta i pancake coi fichi caramellati sopra e granella di mandorle."
    ],
    tips: "Usa fichi ben maturi ma sodi, in modo che non si disfino in padella.",
    category: "Colazione",
    time: 25,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 240,
    title: "Pasta con Pesto di Rapa Rossa e Formaggio Caprino",
    description: "Un colore fucsia incredibile per un piatto dal sapore terroso e acidulo.",
    ingredients: ["Pasta", "Rapa Rossa", "Caprino", "Noci", "Aglio", "Olio"],
    ingredientsDetails: [
      { name: "Pasta corta", qty: "200g" },
      { name: "Rapa rossa precotta", qty: "150g" },
      { name: "Caprino fresco", qty: "80g" }
    ],
    steps: [
      "Frulla la rapa rossa con noci, aglio e olio finché liscia.",
      "Lessa la pasta al dente.",
      "Salta la pasta col pesto viola.",
      "Metti dei fiocchetti di caprino freddo sopra ogni piatto."
    ],
    tips: "Il contrasto tra il dolce della rapa e l'acido del caprino è molto equilibrato.",
    category: "Pasta",
    time: 15,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 241,
    title: "Tacos di Gamberi e Lime",
    description: "Street food messicano fresco e veloce, ottimo per una cena tra amici.",
    ingredients: ["Tortillas", "Gamberi", "Lime", "Cavolo Cappuccio", "Coriandolo", "Maionese Piccante"],
    ingredientsDetails: [
      { name: "Tortillas piccole di mais", qty: "4" },
      { name: "Gamberi saltati", qty: "150g" },
      { name: "Cavolo affettato fine", qty: "50g" }
    ],
    steps: [
      "Marina i gamberi con lime e peperoncino, poi saltali in padella.",
      "Scalda le tortillas su una piastra.",
      "Riempi ogni tortilla col cavolo, i gamberi e la maionese piccante.",
      "Guarnisci con coriandolo fresco."
    ],
    tips: "Usa molto succo di lime per marinare i gamberi: li renderà tenerissimi.",
    category: "Etnico",
    time: 25,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 242,
    title: "Insalata di Pomodorini, Pane e Cetrioli (Panzanella)",
    description: "La classica ricetta toscana di recupero, fresca e povera.",
    ingredients: ["Pane Raffermo", "Pomodori", "Cetriolo", "Cipolla Rossa", "Basilico", "Aceto"],
    ingredientsDetails: [
      { name: "Pane toscano raffermo", qty: "200g" },
      { name: "Pomodori maturi", qty: "3" },
      { name: "Aceto di vino rosso", qty: "q.b." }
    ],
    steps: [
      "Bagna il pane con acqua e aceto, poi strizzalo e sbriciolalo.",
      "Unisci pomodori, cetriolo e cipolla affettati.",
      "Condisci con olio, sale e abbondante basilico.",
      "Lascia riposare almeno un'ora prima di mangiare."
    ],
    tips: "Non inzuppare troppo il pane: deve restare consistente, non diventare una pappa.",
    category: "Insalate",
    time: 20,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 243,
    title: "Pasta con Ragù di Verdure",
    description: "Un'alternativa vegetariana leggera e saporita, ricca di colori.",
    ingredients: ["Pasta", "Zucchine", "Melanzane", "Peperoni", "Pomodoro", "Carote"],
    ingredientsDetails: [
      { name: "Pasta corta", qty: "200g" },
      { name: "Mix verdure a cubetti piccoli", qty: "300g" },
      { name: "Passata di pomodoro", qty: "100ml" }
    ],
    steps: [
      "Fai un soffritto con cipolla e carota.",
      "Aggiungi le altre verdure a cubetti piccoli.",
      "Sfuma col vino bianco e aggiungi il pomodoro.",
      "Cuoci 20-30 min finché le verdure sono tenere.",
      "Salta la pasta col ragù vegetale."
    ],
    tips: "Taglia le verdure tutte della stessa dimensione (cubetti di circa 5mm) per una cottura uniforme.",
    category: "Pasta",
    time: 40,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 244,
    title: "Uova al Tegamino con Pancetta Croccante",
    description: "Il comfort food per eccellenza, pronto in meno di 10 minuti.",
    ingredients: ["Uova", "Pancetta affumicata", "Burro", "Pepe", "Pane"],
    ingredientsDetails: [
      { name: "Uova", qty: "2" },
      { name: "Pancetta a fette", qty: "3" },
      { name: "Burro", qty: "10g" }
    ],
    steps: [
      "Rosola la pancetta in padella finché non rilascia il grasso ed è croccante.",
      "Toglila e aggiungi un ricciolo di burro.",
      "Cuoci le uova mantenendo il tuorlo morbido.",
      "Impiatta l'uovo con la pancetta croccante sopra."
    ],
    tips: "Usa il grasso rilasciato dalla pancetta per cuocere le uova: darà un sapore incredibile.",
    category: "Secondi",
    time: 10,
    difficulty: "Facile",
    servings: 1
  },
  {
    id: 245,
    title: "Risotto al Taleggio e Noci",
    description: "Cremoso e saporito, con il contrasto croccante delle noci.",
    ingredients: ["Riso", "Taleggio", "Noci", "Brodo Vegetale", "Vino Bianco", "Scalogno"],
    ingredientsDetails: [
      { name: "Riso Carnaroli", qty: "160g" },
      { name: "Taleggio", qty: "80g" },
      { name: "Noci tritate", qty: "20g" }
    ],
    steps: [
      "Tosta il riso con lo scalogno.",
      "Sfuma col vino e porta a cottura col brodo.",
      "Manteca con abbondante taleggio fuori dal fuoco.",
      "Servi con una spolverata di noci tritate grossolanamente."
    ],
    tips: "Il taleggio deve essere a temperatura ambiente per sciogliersi meglio.",
    category: "Primi",
    time: 35,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 246,
    title: "Pollo alla Cacciatora con Olive",
    description: "Un classico della domenica, profumato di rosmarino e olive.",
    ingredients: ["Pollo", "Olive Nere", "Pomodoro", "Rosmarino", "Vino Rosso", "Aglio"],
    ingredientsDetails: [
      { name: "Pollo a pezzi", qty: "500g" },
      { name: "Olive nere", qty: "50g" },
      { name: "Passata di pomodoro", qty: "200ml" }
    ],
    steps: [
      "Rosola il pollo con aglio e rosmarino.",
      "Sfuma col vino rosso.",
      "Aggiungi pomodoro e olive.",
      "Cuoci a fuoco lento per 40-50 min."
    ],
    tips: "Il sugo deve essere ben ristretto alla fine della cottura.",
    category: "Secondi",
    time: 60,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 247,
    title: "Insalata di Ceci, Tonno e Cipolla Rossa",
    description: "La cena dell'ultimo minuto, sana, proteica e gustosa.",
    ingredients: ["Ceci", "Tonno", "Cipolla Rossa", "Olio", "Aceto", "Sale"],
    ingredientsDetails: [
      { name: "Ceci in scatola", qty: "200g" },
      { name: "Tonno sott'olio", qty: "120g" },
      { name: "Cipolla rossa", qty: "1/4" }
    ],
    steps: [
      "Sciacqua i ceci e mettili in una ciotola.",
      "Unisci il tonno e la cipolla affettata finissima.",
      "Condisci con olio, aceto e sale.",
      "Lascia insaporire 10 min."
    ],
    tips: "Aggiungi del prezzemolo fresco tritato per una nota erbacea.",
    category: "Insalate",
    time: 5,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 248,
    title: "Zuppa di Pomodoro e Pane (Pappa al Pomodoro)",
    description: "La regina delle zuppe toscane, calda, densa e profumata di basilico.",
    ingredients: ["Pomodoro", "Pane Raffermo", "Aglio", "Olio", "Brodo", "Basilico"],
    ingredientsDetails: [
      { name: "Pane toscano raffermo", qty: "200g" },
      { name: "Pomodori pelati", qty: "400g" },
      { name: "Aglio", qty: "2 spicchi" }
    ],
    steps: [
      "Soffriggi l'aglio in abbondante olio.",
      "Aggiungi i pomodori e schiacciali con la forchetta.",
      "Unisci il pane a pezzetti e il brodo bollente.",
      "Cuoci mescolando spesso finché il pane è disfatto e la pappa densa.",
      "Metti molto basilico fresco."
    ],
    tips: "Usa olio extravergine di ottima qualità, è l'ingrediente che dà sapore al piatto.",
    category: "Zuppe",
    time: 40,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 249,
    title: "Pancake allo Yogurt e Fragole",
    description: "Soffici e leggeri, con fragole fresche e yogurt nell'impasto.",
    ingredients: ["Farina", "Yogurt", "Uova", "Fragole", "Zucchero", "Lievito"],
    ingredientsDetails: [
      { name: "Farina 00", qty: "150g" },
      { name: "Yogurt bianco", qty: "125g" },
      { name: "Fragole", qty: "100g" }
    ],
    steps: [
      "Prepara l'impasto con farina, yogurt, uova e zucchero.",
      "Taglia le fragole a pezzetti piccoli e uniscile all'impasto.",
      "Cuoci i pancake in padella.",
      "Servi con yogurt extra e fragole fresche sopra."
    ],
    tips: "Non girare i pancake finché non vedi le bollicine sulla superficie.",
    category: "Colazione",
    time: 25,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 250,
    title: "Pasta con Pesto di Rucola e Noci",
    description: "Sapore amaro e avvolgente, pronta nel tempo di cottura della pasta.",
    ingredients: ["Pasta", "Rucola", "Noci", "Parmigiano", "Olio", "Aglio"],
    ingredientsDetails: [
      { name: "Pasta corta", qty: "200g" },
      { name: "Rucola fresca", qty: "80g" },
      { name: "Gherigli di noce", qty: "30g" }
    ],
    steps: [
      "Frulla rucola, noci, aglio e olio finché cremoso.",
      "Lessa la pasta al dente.",
      "Spegni il fuoco e condisci con il pesto.",
      "Metti un po' di parmigiano grattugiato sopra."
    ],
    tips: "Se il pesto risulta troppo amaro, aggiungi un po' di formaggio cremoso o panna.",
    category: "Pasta",
    time: 15,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 251,
    title: "Insalata Greca Classica (Horiatiki)",
    description: "Feta, olive, cetrioli e pomodori: l'essenza dell'estate greca.",
    ingredients: ["Feta", "Pomodori", "Cetriolo", "Cipolla Rossa", "Olive Kalamata", "Origano"],
    ingredientsDetails: [
      { name: "Feta intera", qty: "100g" },
      { name: "Pomodori", qty: "2" },
      { name: "Cetriolo", qty: "1" }
    ],
    steps: [
      "Taglia le verdure a pezzi grandi.",
      "Affetta la cipolla rossa molto fine.",
      "Metti tutto in una ciotola, aggiungi le olive.",
      "Adagia la feta intera sopra e cospargi di origano e olio EVO."
    ],
    tips: "La vera insalata greca non ha lattuga!",
    category: "Insalate",
    time: 15,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 252,
    title: "Uova al Tegamino con Porcini",
    description: "Un secondo piatto autunnale di grande classe.",
    ingredients: ["Uova", "Funghi Porcini", "Burro", "Aglio", "Prezzemolo", "Sale"],
    ingredientsDetails: [
      { name: "Uova fresche", qty: "2" },
      { name: "Porcini freschi", qty: "2" },
      { name: "Burro", qty: "20g" }
    ],
    steps: [
      "Pulisci i porcini e tagliali a fette.",
      "Rosolali in padella con burro e aglio.",
      "Sposta i funghi ai lati e cuoci le uova al centro.",
      "Finisci con prezzemolo fresco tritato."
    ],
    tips: "Se non hai porcini freschi, usa champignon e qualche pezzetto di porcino secco ammollato.",
    category: "Secondi",
    time: 20,
    difficulty: "Facile",
    servings: 1
  },
  {
    id: 253,
    title: "Risotto al Gorgonzola e Pere",
    description: "Un classico intramontabile che bilancia dolcezza e carattere.",
    ingredients: ["Riso", "Gorgonzola", "Pere", "Vino Bianco", "Burro", "Parmigiano"],
    ingredientsDetails: [
      { name: "Riso Carnaroli", qty: "160g" },
      { name: "Gorgonzola dolce", qty: "80g" },
      { name: "Pera Abate", qty: "1" }
    ],
    steps: [
      "Tosta il riso e sfuma col vino bianco.",
      "Cuoci col brodo e a metà aggiungi la pera a cubetti.",
      "Manteca con gorgonzola e un filo di burro.",
      "Il sapore deve essere cremoso e avvolgente."
    ],
    tips: "Usa una pera soda che non si sfaldi completamente in cottura.",
    category: "Primi",
    time: 35,
    difficulty: "Media",
    servings: 2
  },
  {
    id: 254,
    title: "Pasta con Ragù di Salsiccia e Funghi",
    description: "Sapore di bosco e di casa in un piatto di pasta ricchissimo.",
    ingredients: ["Pasta", "Salsiccia", "Funghi", "Pomodoro", "Cipolla", "Olio"],
    ingredientsDetails: [
      { name: "Pasta corta", qty: "200g" },
      { name: "Salsiccia di maiale", qty: "150g" },
      { name: "Funghi misti", qty: "200g" }
    ],
    steps: [
      "Sgrana la salsiccia e rosolala con la cipolla.",
      "Aggiungi i funghi e cuoci finché non hanno perso l'acqua.",
      "Unisci la passata di pomodoro e cuoci 20 min.",
      "Salta la pasta nel sugo saporito."
    ],
    tips: "Usa pasta rigata per trattenere meglio i pezzetti di salsiccia e funghi.",
    category: "Pasta",
    time: 35,
    difficulty: "Facile",
    servings: 2
  },
  {
    id: 255,
    title: "Pancake Integrali alle Noci",
    description: "Colazione sana, rustica e ricca di omega-3.",
    ingredients: ["Farina Integrale", "Latte", "Uova", "Noci", "Miele", "Lievito"],
    ingredientsDetails: [
      { name: "Farina integrale", qty: "150g" },
      { name: "Gherigli di noce", qty: "30g" },
      { name: "Miele di acacia", qty: "2 cucchiai" }
    ],
    steps: [
      "Prepara l'impasto con farina integrale, latte e uova.",
      "Trita le noci grossolanamente e uniscile all'impasto.",
      "Cuoci i pancake in padella antiaderente.",
      "Servi con un filo di miele caldissimo sopra."
    ],
    tips: "La farina integrale richiede un po' più di latte rispetto alla 00 per mantenere la morbidezza.",
    category: "Colazione",
    time: 20,
    difficulty: "Facile",
    servings: 2
  }
];
