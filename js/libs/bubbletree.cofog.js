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
    'odbrana': { icon: 'defence.svg', color: '#D32645' },
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
	'01.1': { icon: 'legislative.svg' },
	'01.2': { icon: 'aid.svg' },
	'01.3': { icon: 'misc-services.svg' },
	'01.7': { icon: 'public-debt.svg' },
	
	'02.1': { icon: 'military.svg' },
	'02.2': { icon: 'civil-defence.svg' },
	'02.3': { icon: 'foreign-military-aid.svg' },
	'02.4': { icon: 'defence-research.svg' },
	'02.5': { icon: 'defence-admin.svg' },
	
	'03.1': { icon: 'police.svg' },
	'03.2': { icon: 'fire-brigade.svg' },
	'03.3': { icon: 'courts.svg' },
	'03.4': { icon: 'prisons.svg' },
	'03.5': { icon: 'rd-order-safety.svg' },
	'03.6': { icon: 'admin-order-safety.svg' },
	
	'04.1': { icon: 'social-systems.svg' },
	'04.2': { icon: 'farms.svg' },
	'04.3': { icon: 'energy.svg' },
	'04.4': { icon: 'manufactoring-construction.svg' },
	'04.5': { icon: 'transport.svg' },
	'04.6': { icon: 'police.svg' },
	'04.7': { icon: 'police.svg' },
	//'04.8': { icon: 'rd-eco.svg' },
	'04.9': { icon: 'police.svg' },
	
	'05.1': { icon: 'waste.svg' },
	'05.2': { icon: 'toilet.svg' },
	'05.3': { icon: 'pollution.svg' },
	'05.4': { icon: 'tree.svg' },
	'05.6': { icon: 'environment-admin.svg' },
	
	'06.1': { icon: 'housing.svg' },		
	'06.2': { icon: 'community.svg' },
	'06.3': { icon: 'water.svg' },
	'06.4': { icon: 'street-lights.svg' },
	
	'07.1': { icon: 'medical-supplies.svg' },				
	'07.2': { icon: 'health.svg' },
	'07.3': { icon: 'hospital.svg' },
	
	'08.2': { icon: 'culture.svg' },					
	'08.1': { icon: 'sports.svg' },	
	'08.3': { icon: 'media.svg' },	
	
	'10.1': { icon: 'helping-others.svg' },
	'10.2': { icon: 'old-age.svg' },
	'10.4': { icon: 'family.svg' },
	'10.7': { icon: 'family2.svg' }

};

BubbleTree.Styles.Cofog3 = {

	'01.1.1': { icon: 'legislative.svg' },
	'01.1.2': { icon: 'pig.svg' },
	'01.1.3': { icon: 'worldmap.svg' },
	'01.2.1': { icon: 'aid-developing-countries.svg' },
	'01.2.2': { icon: 'economic-aid.svg' },
	'01.3.1': { icon: 'human-resources.svg' },
	'01.3.2': { icon: 'planning.svg' },
	'01.3.3': { icon: 'research.svg' },

	'04.1.1': { icon: 'social-systems.svg' },
	'04.1.2': { icon: 'labour.svg' },					
	'04.2.1': { icon: 'farms.svg' },
	'04.2.2': { icon: 'forest.svg' },
	'04.2.3': { icon: 'fishing.svg' },				
	'04.3.1': { icon: 'coal.svg' },
	'04.3.2': { icon: 'petrol.svg' },
	'04.3.3': { icon: 'nuclear.svg' },
	'04.3.4': { icon: 'fuel.svg' },
	'04.3.5': { icon: 'electricity.svg' },
	'04.3.6': { icon: 'wind.svg' },
	'04.5.1': { icon: 'car.svg' },
	'04.5.2': { icon: 'anchor.svg' },
	'04.5.3': { icon: 'railways.svg' },
	'04.5.4': { icon: 'airplane.svg' },

	'07.1.1': { icon: 'medical-supplies.svg' },				
	'07.1.2': { icon: 'other-medical-products.svg' },				
	'07.1.3': { icon: 'wheelchair.svg' },		
	'07.2.1': { icon: 'health.svg' },
	'07.2.2': { icon: 'microscope.svg' },
	'07.2.2': { icon: 'dental.svg' },
	'07.3.1': { icon: 'hospital.svg' },
	'07.3.2': { icon: 'hospital-specialized.svg' },
	'07.3.2': { icon: 'dental.svg' },

	'10.1.2': { icon: 'helping-others.svg' }
}