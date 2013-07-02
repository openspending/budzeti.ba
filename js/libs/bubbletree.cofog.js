/*
 * BubbleTree Style for COFOG taxonomy
 *
 */

var BubbleTree = BubbleTree || {};
BubbleTree.Styles = BubbleTree.Styles || {};

BubbleTree.Styles.Cofog1 = {
    // Agriculture
    'aktivnoti-poljoprivrede': { icon: 'farms.svg', color: '#CA221D' },
    // Communications
    'aktivnosti-prometa-i-komunikacija': { icon: 'communication.svg', color: '#C22769' },
    // Mining
    'aktivnosti-rudarstva-mineralnih-resursa-proizvodnje-i-gradevinarstva': { icon: 'coal.svg', color: '#3F93E1' },
    // Budget reserves
    'budzetska-rezerva-i-ostalo': { icon: 'pig.svg', color: '#481B79' },
    // Economics
    'ekonomski-poslovi': { icon: 'money.svg', color: '#6AAC32' }, 
    'ostale-ekonomske-aktivnosti': { icon: 'money.svg', color: '#6AAC32' }, 
    // Education
    'obrazovanje': { icon: 'education.svg', color: '#42928F' },
    'aktivnosti-prosvjete-i-obrazovanja': { icon: 'schools.svg', color: '#42928F' },
    'aktivnosti-obrazovanja': { icon: 'education.svg', color: '#42928F' },
    // Military
    'aktivnosti-odbrane': { icon: 'defence.svg', color: '#D32645' },
    'odbrana': { icon: 'EC.svg', color: '#D32645' },
    // Running government
    'opste-javne-usluge': { icon: 'government-uk.svg', color: '#CD531C' },
    'opste-javne-sluzbe': { icon: 'government-uk.svg', color: '#CD531C' },
    'aktivnosti-opcih-javnih-sluzbi': { icon: 'government-uk.svg', color: '#CD531C' },
    // Debt
    'otplata-vanjskog-duga-i-ostalo': { icon: 'public-debt.svg', color: '#EDC92D' },
    'otplata-dugova-i-ostalo': { icon: 'public-debt.svg', color: '#EDC92D' },
    // Culture, creativity, and religion
    'rekreativni-kulturni-i-religijski-poslovi': { icon: 'culture.svg', color: '#A5B425' },
    'reakreativni-kulturni-i-religijski-poslovi': { icon: 'culture.svg', color: '#A5B425' },
    'kulturne-rekreacijske-religijske-aktivnosti': { icon: 'culture.svg', color: '#A5B425' },
    // Public safety
    'javni-red-i-sigurnost': { icon: 'order-safety.svg', color: '#211D79' },
    'sigurnost-i-javni-red': { icon: 'order-safety.svg', color: '#211D79' },
    'aktivnosti-javnog-reda-i-sigurnosti': { icon: 'order-safety.svg', color: '#211D79' },
    // Helping others (social services)
    'socijalna-zastita': { icon: 'helping-others.svg', color: '#449256' }, 
    'socijalno-osiguranje-i-skrb': { icon: 'helping-others.svg', color: '#449256' },
    'aktivnosti-socijalnog-osiguranja': { icon: 'helping-others.svg', color: '#449256' },
    'aktivnosti-socijalne-zastite': { icon: 'helping-others.svg', color: '#449256' },
    // Housing
    'stambeno-komunalne-djelatnosti': { icon: 'our-streets.svg', color: '#7A2077' },
    'stambeno-komunalni-poslovi': { icon: 'our-streets.svg', color: '#7A2077' },
    // Environment
    'zastita-okolisa': { icon: 'environment.svg', color: '#CA221D' },	
    // Health
    'aktivnosti-zdravstva': { icon: 'health.svg', color: '#E29826' },
    'zdravstvo': { icon: 'health.svg', color: '#E29826' }
}

BubbleTree.Styles.Cofog2 = {
    'parlamentarna-skupstina-bosne-i-hercegovine': { icon: 'legislative.svg' },
    'centralna-izborna-komisija-bih': { icon: 'legislative.svg' },
    'direkcija-za-ekonomsko-planiranje': { icon: 'planning.svg' },
    'rezervisanja': { icon: 'pig.svg' },
    'predsjednistvo-bih': { icon: 'president.svg' }, // Need to create
    'sluzba-za-zajednicke-poslove-institucija-bosne-i-hercegovine': { icon: 'misc-services.svg' },
    'agencija-za-identifikacione-dokumente-evidenciju-i-razmjenu-podataka-bih': { icon: 'admin.svg' },
    'ministarstvo-vanjskih-poslova-bosne-i-hercegovine': { icon: 'worldmap.svg' },
    'direktni-transferi-sa-jrt' : { icon: 'financial-admin.svg' },
    'ured-za-razmatranje-zalbi-po-javnim-nabavkama': { icon: 'financial-admin.svg' },
    'servisiranje-spoljnog-duga': { icon: 'public-debt.svg' },
    'ostalo': { icon: 'money.svg' },
    'ministarstvo-finansija-i-trezora-bih': { icon: 'money.svg' },
    'agencija-za-javne-nabavke-bih': { icon: 'money.svg' },
    'obavjestajno-sigurnosna-agencija-bosne-i-hercegovine' : { icon: 'intelligence-agency.svg' }, // Need to create
    'ministarstvo-odbrane-bih': { icon: 'military.svg' },
    'drzavna-agencija-za-istrage-i-zastitu': { icon: 'police.svg' },
    'granicna-policija-bosne-i-hercegovine': { icon: 'police2.svg' },
    'sud-bosne-i-hercegovine': { icon: 'courts.svg' },
    'ministarstvo-pravde-bih': { icon: 'courts.svg' },
    'visoko-sudsko-i-tuzilacko-vijece-bosne-i-hercegovine': { icon: 'courts.svg' },
    'tuzilastvo-bosne-i-hercegovine': { icon: 'courts.svg' },
    'direkcija-za-koordinaciju-policijskih-tijela': { icon: 'admin-order-safety.svg' },
    'uprava-za-indirektno-oporezivanje-bosne-i-hercegovine': { icon: 'social-systems.svg' },
    'ministarstvo-vanjske-trgovine-i-ekonomskih-odnosa-bosne-i-hercegovine': { icon: 'import-export.svg' }, // Import export
    'ministarstvo-komunikacija-i-prometa-bosne-i-hercegovine': { icon: 'communication-transport.svg'}, // Need to create
    'direkcija-za-civilno-vazduhoplovstvo-bih': { 'icon': 'airplane.svg' },
    'agencija-za-promociju-stranih-investicija-u-bih': { icon: 'economic-aid.svg' },
    'konkurencijsko-vijece-bosne-i-hercegovine': { icon: 'economic-aid.svg' }, // Need update?
    'agencija-za-postanski-promet-bih': { icon: 'postal-service.svg' }, // Need to create
    'uprava-bih-za-zastitu-zdravlja-bilja': { icon: 'tree.svg' },
    'komisija-za-koncesije-bih': { icon: 'manufactoring-construction.svg' },
    'agencija-za-sigurnost-hrane-bih': { icon: 'food.svg' }, // Need to create
    'komisija-za-ocuvanje-nacionalnih-spomenika': { icon: 'heritage.svg' }, // Need to create
    'memorijalni-centar-srebrenica-potocari': { icon : 'potocari.svg' }, // Need to create
    'agencija-za-lijekove-i-medicinska-sredstva-bosne-i-hercegovine': { icon: 'medical-supplies.svg' },				
    'ured-za-veterinarstvo-bih': { icon: 'animal.svg' }, // Need to create
    'agencija-za-forenzicka-ispitivanja-i-vjestacenja': { icon: 'microscope.svg' },	
    'agencija-za-antidoping-kontrolu': { icon: 'sports.svg' },	
    'agencija-za-predskolsko-osnovno-i-srednje-obrazovanje-bih': { icon: 'schools.svg' },
    'agencija-za-razvoj-visokog-obrazovanja-i-osiguranje-kvaliteta': { icon: 'education.svg' },
    'centar-za-informisanje-i-priznavanje-dokumenata-iz-oblasti-visokog-obrazovanja': { icon : 'education.svg'}, // Need to update? (umsjón)
    'ministarstvo-civilnih-poslova': { icon: 'family.svg' },
    'fond-za-povratak-bih': { icon: 'family.svg' },
    'minstarstvo-za-ljudska-prava-i-izbjeglice-bih': { icon: 'family2.svg' },
    'sluzba-za-poslove-sa-strancima-bosne-i-hercegovine': { icon: 'world-family.svg' } // Need to create
};

var titles = {
    'regulatorna-agencija-za-komunikacije': { icon: 'media.svg' },
    'agencija-za-statistiku-bih': { icon: 'statistics.svg' }, // Need to create
    'centar-za-uklanjanje-mina-u-bosni-i-hercegovini-bhmac': { icon: 'no-bomb.svg' }, // Need to create
    'ured-koordinatora-za-reformu-javen-uprave': { icon: 'admin.svg' },
    'ustavni-sud-bosne-i-hercegovine': { icon: 'court.svg' },
    'agencija-za-lijekove-i-medicinska-sredstva-bosne-i-hercegovine': { icon: 'medical-supplies.svg' },
    'agencija-za-skolovanje-i-strucno-osposobljavanje-kadrova': { icon: 'schools.svg' },
    'direkcija-za-europske-integracije': { icon: 'EC.svg' },
    'generalni-sekretarijat-vijeca-ministara-bosne-i-hercegovine': { icon: 'admin.svg' },
    'ured-za-reviziju-institucija-bih': { icon: 'financial-admin.svg' },
    'institut-za-nestala-lica-bih': { icon: 'missing-person.svg' }, // Need to create
    'jedinica-za-implementaciju-projekta-izgradnje-zavoda-za-izvrsenje-kaznenih-sankcija-pritvora-i-drugih-mjera-bih': { icon: 'prisons.svg' },
    'institut-za-mjeriteljstvo-bih': { icon: 'measurements.svg' }, // Need to create
    'institucija-ombdusmana-za-ljudska-prava-bih': { icon: 'unemployment.svg' },
    'institut-za-intelektualno-vlasnistvo-bih': { icon: 'books.svg' },
    'agencija-za-policijsku-podrsku': { icon: 'police.svg' },
    'institut-za-standardizaciju-bih': { icon: 'research.svg' }, // Need to create
    'agencija-za-drzavnu-sluzbu-bih': { icon: 'misc-services.svg' },
    'agencija-za-rad-i-zaposljavanje-bih': { icon: 'labour.svg' },
    'agencija-za-zastitu-licnih-podataka-u-bih': { icon: 'unemployment.svg' },
    'instut-za-akreditiranje-bih': { icon: 'measurements.svg'}, // Need to create
    'pravobranilastvo-bosne-i-hercegovine': { icon: 'court.svg' },
    'drzavna-regulatorna-agencija-za-radijacijsku-i-nuklearnu-bezbjednost-u-bih': { icon: 'nuclear.svg' },
    'agencija-za-prevenciju-korupcije-i-koordinaciju-borbe-protiv-korupcije': { icon: 'corruption.svg' }, // Need to create
    'agencija-za-nadzor-nad-trzistem-bih': { icon: 'money.svg' }, // Need to create?
    'arhiv-bih': { icon: 'file-cabinet.svg' }, // Need to create
    'ured-za-zakonodavstvo': { icon: 'court.svg'},
    'agencija-za-osiguranje-u-bih': { icon: 'insurance.svg' }, // Need to create
    'ured-za-harmonizaciju-i-koordinaciju-sistema-placanja-u-poljoprivredi-i-ruralnom-razvoju': { icon: 'farms.svg' },
    'centralna-harmonizacijska-jedinica': { icon: 'misc-services.svg' },
    'odbor-drzavne-sluzbe-za-zalbe': { icon: 'admin.svg' },
    'institucija-ombdusmana-za-zastitu-potrosaca-u-bih': { icon: 'economic-aid.svg' }
};

BubbleTree.Styles.Title = $.extend({}, BubbleTree.Styles.Cofog2, titles)
