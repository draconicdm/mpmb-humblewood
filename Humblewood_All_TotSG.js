var iFileName = "Humblewood_All_TotSG.js";

SourceList["HW"] = {
	name : "Humblewood",
	abbreviation : "HW",
	group : "Humblewood",
	url : "https://hitpointpress.com/humblewood/"
};

SourceList["HWS"] = {
	name : "Humblewood: Tenders of the Scorched Grove",
	abbreviation : "HWS",
	group : "humblewood",
	url : "https://hitpointpress.com/humblewood/"
};

/*
Races
*/
RaceList["dusk corvum"] = {
	regExpSearch : /^(?=.*corvum)(?=.*(dusk)).*$/i,
	name : "Dusk Corvum",
	sortname : "Corvum, Dusk",
	source : ["HW", 12],
	plural : "Dusk Corvums",
	size : 3,
	speed : { walk : { spd : 30, enc: 20 }},
	languageProfs : ["Birdfolk", "Auran (can't speak)"],
	skillstxt : "Choose one from Arcana, History, Nature, or Religion.",
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*corvum)(?=.*\btalons?\b).*$/i,
		name : "Corvum Talons",
		source : ["HW", 12],
		damage : [1, 4, "piercing"]
	},
	weaponsAdd : ["Corvum Talons"],
	age : " reach adulthood at 18 years and live until around 70",
	height : " range from 4 and a half to 5 feet",
	weight : " weigh around 100 lbs",
	improvements : "Dusk Corvum: +2 Intelligence and +1 Dexterity.",
	scores : [0, 1, 0, 2, 0, 0],
	trait : "Dusk Corvum (+2 Intelligence and +1 Dexterity)" + (typePF ? " " : "\n") + "Talons: I can unarmed strike for 1d4 piercing damage, and have advantage on Athletics to climb.\nLearned: I have proficiency in Arcana, History, Nature, or Religion.\nAppraising Eye: I can spend an action to determine magical properties, activation, and estimate market price of any item, once per short rest.\nSkulker: I have advantage on Stealth checks in dim light or darkness.\nStreet Smarts: I have proficiency in the Insight skill.",
	features : {
		"glide" : {
			name : "Glide",
			minlevel : 1,
			action : ["reaction", " (falling)"]
		},
		"appraising eye" : {
			name : "Appraising Eye",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : ["action", ""],
		}
	}
};

RaceList["kindled corvum"] = {
	regExpSearch : /^(?=.*corvum)(?=.*(kindled)).*$/i,
	name : "Kindled Corvum",
	sortname : "Corvum, Kindled",
	source : ["HW", 12],
	plural : "Kindled Corvums",
	size : 3,
	speed : { walk : { spd : 30, enc: 20 }},
	languageProfs : ["Birdfolk", "Auran (can't speak)"],
	skillstxt : "Choose one from Arcana, History, Nature, or Religion.",
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*corvum)(?=.*\btalons?\b).*$/i,
		name : "Corvum Talons",
		source : ["HW", 12],
		damage : [1, 4, "piercing"]
	},
	weaponsAdd : ["Corvum Talons"],
	age : " reach adulthood at 18 years and live until around 70",
	height : " range from 4 and a half to 5 feet",
	weight : " weigh around 100 lbs",
	improvements : "Kindled Corvum: +2 Intelligence and +1 Charisma.",
	scores : [0, 0, 0, 2, 0, 1],
	trait : "Kindled Corvum (+2 Intelligence and +1 Charisma)" + (typePF ? " " : "\n") + "Talons: I can unarmed strike for 1d4 piercing damage, and have advantage on Athletics to climb.\nLearned: I have proficiency in Arcana, History, Nature, or Religion.\nAppraising Eye: I can spend an action to determine magical properties, activation, and estimate market price of any item, once per short rest.\nConvincing: I have proficiency in Deception or Persuasion, with advantage to convince people on topics related to the skill I got from the Learned trait.\nSharp Mind: I learn an additional language, a tool proficiency, and perfect memory on everything I have seen or heard in the past month.",
	features : {
		"glide" : {
			name : "Glide",
			minlevel : 1,
			action : ["reaction", " (falling)"]
		},
		"appraising eye" : {
			name : "Appraising Eye",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : ["action", ""],
		}
	}
};

RaceList["bright gallus"] = {
	regExpSearch : /^(?=.*gallus)(?=.*(bright)).*$/i,
	name : "Bright Gallus",
	sortname : "Gallus, Bright",
	source : ["HW", 15],
	plural : "Bright Gallus",
	size : 3,
	speed : { walk : { spd : 30, enc: 20 }},
	skills : ["Insight"],
	languageProfs : ["Birdfolk", "Auran (can't speak)"],
	weaponprofs : [true, false, []],
	toolProfs : [["brewer's, carpenter's, or smith's tools", 1]],
	age : " reach adulthood at 18 years and live until around 70",
	height : " range from 4 to 5 feet",
	weight : " weigh around 90 lbs",
	improvements : "Bright Gallus: +2 Wisdom and +1 Charisma.",
	scores : [0, 0, 0, 0, 2, 1],
	trait : "Bright Gallus (+2 Wisdom and +1 Charisma)" + (typePF ? " " : "\n") + "Glide: I can slow my fall at 60 feet per round, so long as I don't carry heavy weapons, heavy armor, or a shield.\nWing Flap: I can propel myself half my movement speed as part of a jump.\nCommunal: History checks about the history, culture, or community of my race are made with double proficiency bonus.\nInpsiring: I can inspire an ally as an action. They can add a d4 to their next ability check, attack roll, or save.",
	features : {
		"glide" : {
			name : "Glide",
			minlevel : 1,
			action : ["reaction", " (falling)"]
		},
		"wing flap" : {
			name : "Wing Flap",
			minlevel : 1,
			action : ["bonus action", ""]
		}
	}
};

RaceList["huden gallus"] = {
	regExpSearch : /^(?=.*gallus)(?=.*(huden)).*$/i,
	name : "Huden Gallus",
	sortname : "Gallus, Huden",
	source : ["HW", 15],
	plural : "Huden Gallus",
	size : 3,
	speed : { walk : { spd : 30, enc: 20 }},
	skills: ["Nature"],
	languageProfs : ["Birdfolk", "Auran (understand only)"],
	weaponprofs : [true, false, []],
	toolProfs : [["brewer's, carpenter's, or smith's tools", 1]],
	age : " reach adulthood at 18 years and live until around 70",
	height : " range from 4 to 5 feet",
	weight : " weigh around 90 lbs",
	improvements : "Huden Gallus: +2 Wisdom and +1 Dexterity.",
	scores : [0, 1, 0, 0, 2, 0],
	trait : "Huden Gallus (+2 Wisdom and +1 Dexterity)" + (typePF ? " " : "\n") + "Glide: I can slow my fall at 60 feet per round, so long as I don't carry heavy weapons, heavy armor, or a shield.\nWing Flap: I can propel myself half my movement speed as part of a jump.\nCommunal: History checks about the history, culture, or community of my race are made with double proficiency bonus.\nSeedspeech. I can communicate simple ideas to plants, and am able to interpret their responses in simple language.",
	features : {
		"glide" : {
			name : "Glide",
			minlevel : 1,
			action : ["reaction", " (falling)"]
		},
		"wing flap" : {
			name : "Wing Flap",
			minlevel : 1,
			action : ["bonus action",""]
		}
	}
};

RaceList["sable luma"] = {
	regExpSearch : /^(?=.*luma)(?=.*(sable)).*$/i,
	name : "Sable Luma",
	sortname : "Luma, Sable",
	source : ["HW", 17],
	plural : "Sable Lumas",
	size : 2,
	speed : {walk : {spd : 25, enc: 15}},
	savetxt : { adv_vs : ["poison"]},
	dmgres : ["Poison"],
	languageProfs : ["Birdfolk", "Auran (can't speak)"],
	age : " reach adulthood around 20, live until 70.",
	height : " around 3 feet tall.",
	weight : " around 30 lbs.",
	improvements : "Sable Luma: +2 Charisma and +1 Constitution;",
	scores : [0, 0, 1, 0, 0, 2],
	trait : "Sable Luma (+2 Charisma and +1 Constitution)" + (typePF ? " " : "\n") + "Glide: I can slow my fall at 60 feet per round, so long as I don't carry heavy weapons, heavy armor, or a shield.\nWing Flap: I can propel myself half my movement speed as part of a jump.\nFated: Once per Long Rest I can reroll any attack, skill check, or saving throw before the outcome is known.\nHard to Read: Insight checks against me have disadvantage, and my deception checks against non-luma have advantage.",
	abilitysave : 6,
	spellcastingAbility : 6,
	features : {
		"glide" : {
			name : "Glide",
			minlevel : 1,
			action : ["reaction", " (falling)"]
		},
		"wing flap" : {
			name : "Wing Flap",
			minlevel : 1,
			action : ["bonus action",""]
		}
	},
	spellcastingBonus : {
		name : "Touched",
		"class" : "sorcerer",
		level : [0, 0],
		firstcol : 'atwill'
	}
};

RaceList["sera luma"] = {
	regExpSearch : /^(?=.*luma)(?=.*(sera)).*$/i,
	name : "Sera Luma",
	sortname : "Luma, Sera",
	source : ["HW", 17],
	plural : "Sera Lumas",
	size : 2,
	speed : {walk : {spd : 25, enc: 15}},
	skills : ["Performance"],
	languageProfs : ["Birdfolk", "Auran (can't speak)"],
	age : " reach adulthood around 20, live until 70.",
	height : " around 3 feet tall.",
	weight : " around 30 lbs.",
	improvements : "Sable Luma: +2 Charisma and +1 Constitution;",
	scores : [0, 0, 1, 0, 0, 2],
	trait : "Sable Luma (+2 Charisma and +1 Constitution)" + (typePF ? " " : "\n") + "Glide: I can slow my fall at 60 feet per round, so long as I don't carry heavy weapons, heavy armor, or a shield.\nWing Flap: I can propel myself half my movement speed as part of a jump.\nFated: Once per Long Rest I can reroll any attack, skill check, or saving throw before the outcome is known.",
	abilitysave : 6,
	spellcastingAbility : 6,
	features : {
		"glide" : {
			name : "Glide",
			minlevel : 1,
			action : ["reaction", " (falling)"]
		},
		"wing flap" : {
			name : "Wing Flap",
			minlevel : 1,
			action : ["bonus action",""]
		},
		"charm person" : {
			name : "Charm Person",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			tooltip : "(Songbird)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Songbird",
				spells : ["charm person"],
				selection : ["charm person"],
				oncelr : true
			}
		}
	},
	spellcastingBonus : {
		name : "Touched",
		"class" : "sorcerer",
		level : [0, 0],
		firstcol : 'atwill'
	}
};

RaceList["maran raptor"] = {
	regExpSearch : /^(?=.*raptor)(?=.*(maran)).*$/i,
	name : "Maran Raptor",
	sortname : "Raptor, Maran",
	source : ["HW", 18],
	plural : "Maran Raptors",
	size : 2,
	speed : {
		walk : {spd : 25, enc : 15},
		swim : {spd : 25, enc : 15}
	},
	skills : ["Perception"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*raptor)(?=.*\btalons?\b).*$/i,
		name : "Raptor Talons",
		source : ["HW", 12],
		damage : [1, 4, "piercing"]
	},
	weaponsAdd : ["Raptor Talons"],
	languageProfs : ["Birdfolk", "Auran (can't speak)"],
	weaponprofs : [false, false, ["longbow", "shortbow", "spear"]],
	age : " reach maturity around 20, living over 100 years.",
	height : " less than 4 feet tall.",
	weight : " around 35 lbs.",
	improvements : "Maran Raptor: +2 Dexterity and +1 Intelligence;",
	scores : [0, 2, 0, 1, 0, 0],
	trait : "Maran Raptor (+2 Dexterity and +1 Intelligence)" + (typePF ? " " : "\n") + "Glide: I can slow my fall at 60 feet per round, so long as I don't carry heavy weapons, heavy armor, or a shield.\nTalons: My unarmed strikes deal 1d4 piercing damage and I have advantage on Athletics check for climbing.\nWoodland Hunter: I turn 3/4 cover into half cover and half cover into no cover.\nHunter's Training: Longbows are not heavy weapons for me.\nPatient: I have advantage on an attack roll or ability check made as part of a readied action.",
	features : {
		"glide" : {
			name : "Glide",
			minlevel : 1,
			action : ["reaction", " (falling)"]
		}
	}
};

RaceList["mistral raptor"] = {
	regExpSearch : /^(?=.*raptor)(?=.*(mistral)).*$/i,
	name : "Mistral Raptor",
	sortname : "Raptor, Mistral",
	source : ["HW", 18],
	plural : "Mistral Raptors",
	size : 2,
	speed : {
		walk : {spd : 25, enc : 15}
	},
	skills : ["Perception", "Acrobatics"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*raptor)(?=.*\btalons?\b).*$/i,
		name : "Raptor Talons",
		source : ["HW", 12],
		damage : [1, 4, "piercing"]
	},
	weaponsAdd : ["Raptor Talons"],
	languageProfs : ["Birdfolk", "Auran (can't speak)"],
	weaponprofs : [false, false, ["longbow", "shortbow", "spear"]],
	age : " reach maturity around 20, living over 100 years.",
	height : " less than 4 feet tall.",
	weight : " around 35 lbs.",
	improvements : "Mistral Raptor: +2 Dexterity and +1 Wisdom;",
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Mistral Raptor (+2 Dexterity and +1 Wisdom)" + (typePF ? " " : "\n") + "Glide: I can slow my fall at 60 feet per round, so long as I don't carry heavy weapons, heavy armor, or a shield.\nTalons: My unarmed strikes deal 1d4 piercing damage and I have advantage on Athletics check for climbing.\nWoodland Hunter: I turn 3/4 cover into half cover and half cover into no cover.\nHunter's Training: Longbows are not heavy weapons for me.\nAerial Defense: Attacks against me while I'm falling, gliding, or jumping have disadvantage.",
	features : {
		"glide" : {
			name : "Glide",
			minlevel : 1,
			action : ["reaction", " (falling)"]
		}
	}
};

RaceList["stout strig"] = {
	regExpSearch : /^(?=.*strig)(?=.*(stout)).*$/i,
	name : "Stout Strig",
	sortname : "Strig, Stout",
	source : ["HW", 20],
	plural : "Stout Strigs",
	size : 3,
	speed : {walk : {spd : 30, enc : 20}},
	skills : ["Intimidation"],
	weapons : ["Strig Talons"],
	languageprofs : ["Birdfolk", "Auran (can't speak)"],
	vision : [["Darkvision", 60]],
	age : " mature around 15, live to 80.",
	height : " 4 to 5 feet.",
	weight : " around 110 lbs.",
	improvements : "Stout Strig: +2 Strength and +1 Constitution.",
	scores : [2, 0, 1, 0, 0, 0],
	trait : "Stout Strig (+2 Strength and +1 Constitution)" + (typePF ? " " : "\n") + "Glide: I can slow my fall at 60 feet per round, so long as I don't carry heavy weapons, heavy armor, or a shield.\nTalons: My unarmed strikes deal 1d4 piercing damage and I have advantage on Athletics check for climbing.\nPatterned Feathers: I have advantage on Stealth checks to hide in a forest.\nBrawler: When I hit someone with my talons I can grapple them as a bonus action.",
	features : {
		"glide" : {
			name : "Glide",
			minlevel : 1,
			action : ["reaction", " (falling)"]
		},
		"brawler" : {
			name : "Brawler",
			minlevel : 1,
			action : ["bonus action", " (grapple)"]
		}
	}
};

RaceList["swift strig"] = {
	regExpSearch : /^(?=.*strig)(?=.*(swift)).*$/i,
	name : "Swift Strig",
	sortname : "Strig, Swift",
	source : ["HW", 20],
	plural : "Swift Strigs",
	size : 3,
	speed : {walk : {spd : 35, enc : 25}},
	skills : ["Survival"],
	weapons : ["Strig Talons"],
	languageprofs : ["Birdfolk", "Auran (can't speak)"],
	vision : [["Darkvision", 60]],
	age : " mature around 15, live to 80.",
	height : " 4 to 5 feet.",
	weight : " around 110 lbs.",
	improvements : "Swift Strig: +2 Strength and +1 Dexterity.",
	scores : [2, 1, 0, 0, 0, 0],
	trait : "Swift Strig (+2 Strength and +1 Dexterity)" + (typePF ? " " : "\n") + "Glide: I can slow my fall at 60 feet per round, so long as I don't carry heavy weapons, heavy armor, or a shield.\nTalons: My unarmed strikes deal 1d4 piercing damage and I have advantage on Athletics check for climbing.\nPatterned Feathers: I have advantage on Stealth checks to hide in a forest.",
	features : {
		"glide" : {
			name : "Glide",
			minlevel : 1,
			action : ["reaction", " (falling)"]
		}
	}
};

WeaponsList["strig talons"] = {
	regExpSearch : /^(?=.*strig)(?=.*\btalons?\b).*$/i,
	name : "Strig Talons",
	soruce : ["HW", 18],
	ability : 1,
	type : "Natural",
	damage : [1, 4, "piercing"],
	range : "Melee",
	description : "",
	abilitytodamage : true,
	monkweapon : true
};

RaceList["grove cervan"] = {
	regExpSearch : /^(?=.*cervan)(?=.*(grove)).*$/i,
	name : "Grove Cervan",
	sortname : "Cervan, Grove",
	source : ["HW", 22],
	plural : "Grove Cervans",
	size : 3,
	speed : {walk : {spd : 35, enc : 25}},
	skillstxt : "Choose one from Athletics, Medicine, Nature, or Survival",
	languageprofs : ["Birdfolk", "Cervan (no writing)"],
	age : " mature around 12, live for 100-150 years.",
	height : " 5 to 6 feet.",
	weight : " 130-180 lbs.",
	improvements : "Grove Cervan: +2 Constitution and +1 Dexterity.",
	scores : [0, 1, 2, 0, 0, 0],
	trait : "Grove Cervan (+2 Constitution and +1 Dexterity)" + (typePF ? " " : "\n") + "Practical: I gain proficiency in Athletics, Medicine, Nature, or Survival.\nSurge of Vigor: If an attack does more than half of my remaining hit points in damage, I regain 1d12 + my Constitution modifier immediately, once per long rest.\nStanding Leap: my long jump is 30 and my high jump is 15 without running start.\nNimble Step: Opportunity attacks made against me are at disadvantage.",
	features : {
		"surge of vigor" : {
			name : "Surge of Vigor",
			usages : 1,
			recovery : "long rest"
		}
	}
};

RaceList["pronghorn cervan"] = {
	regExpSearch : /^(?=.*cervan)(?=.*(pronghorn)).*$/i,
	name : "Pronghorn Cervan",
	sortname : "Cervan, Pronghorn",
	source : ["HW", 22],
	plural : "Pronghorn Cervans",
	size : 3,
	speed : {walk : {spd : 30, enc : 20}},
	skillstxt : "Choose one from Athletics, Medicine, Nature, or Survival",
	languageprofs : ["Birdfolk", "Cervan (no writing)"],
	weapons : ["Antlers"],
	age : " mature around 12, live for 100-150 years.",
	height : " close to 7 feet.",
	weight : " over 200 lbs.",
	improvements : "Pronghorn Cervan: +2 Constitution and +1 Strength.",
	scores : [1, 0, 2, 0, 0, 0],
	trait : "Pronghorn Cervan (+2 Constitution and +1 Strength)" + (typePF ? " " : "\n") + "Practical: I gain proficiency in Athletics, Medicine, Nature, or Survival.\nSurge of Vigor: If an attack does more than half of my remaining hit points in damage, I regain 1d12 + my Constitution modifier immediately, once per long rest.\nRobust Build: My carrying capacity is doubled, as is the weight I can push, drag, or lift.\nAntlers: I can gore with my antlers. I can also charge as a bonus action if I spend 20 feet in a straight line, doing 1d6 extra damage. If the target is Large or smaller, they make a Strength save DC 8 + Strength + proficiency or are pushed 10 feet back.",
	features : {
		"surge of vigor" : {
			name : "Surge of Vigor",
			usages : 1,
			recovery : "long rest"
		},
		"charge" : {
			name : "Charge",
			actions : ["bonus action", ""]
		}
	},
	carryingCapacity : 2
};

WeaponsList["antlers"] = {
	regExpSearch : /^(?=.*\bantlers?\b).*$/i,
	name : "Antlers",
	source : ["HW", 23],
	ability : 1,
	type : "Natural",
	damage : [1, 6, "piercing"],
	range : "Melee",
	description : "",
	abilitytodamage : true,
	dc : true,
	monkweapon : true
}

RaceList["hedge"] = {
	regExpSearch : /^(?=.*hedge).*$/i,
	name : "Hedge",
	source : ["HW", 24],
	plural : "Hedges",
	size : 2,
	speed : {
		walk : {spd : 25, enc: 15},
		burrow : {spd : 15, enc: 10}
	},
	languageProfs : ["Birdfolk", "Hedge"],
	armorOptions : {
		regExpSearch : /^(?=.*spiny)(?=.*quills).*$/i,
		name : "Spiny Quills",
		source : ["HW", 25],
		ac : 14
	},
	age : " mature around 20, live for 120 years.",
	height : " are between 3 and 4 feet tall.",
	weight : " weigh around 70 lbs.",
	improvements : "Hedge: +2 Charisma and +1 Wisdom.",
	scores : [0, 0, 0, 0, 1, 2],
	trait : "Hedge (+2 Charisma and +1 Wisdom)" + (typePF ? " " : "\n") + "Natural Burrower: I can burrow through soil but not anything more substantial.\nSpiny Quills: I can't wear armor but can use shields. My AC is 14 + DEX\nCurl Up: I can use my action to curl up. While curled up, I can't move, attack, or cast spells with S components. My AC becomes 19, ignoring DEX. I can still use a shield. A creature that misses me with a melee attack takes 2d4 piercing damage. If I'm hit while curled up, I get knocked prone.\nI can communicate simple ideas with bugs.",
	spellcastingAbility : 6,
	spellcastingBonus : [{
		name : "Forest Magic",
		spells : ["druidcraft"],
		selection : ["druidcraft"],
		firstCol : 'atwill'
	}],
	features : {
		"animal messenger" : {
			name : "Forest Magic",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			spellcastingBonus : {
				name : "Forest Magic",
				spells : ["animal messenger"],
				selection : ["animal messenger"],
				firstCol : 'oncesr'
			}
		},
		"curl up" : {
			name : "Curl Up",
			minlevel : 1,
			actions : ["action", ""]
		}
	}
};

RaceList["jerbeen"] = {
	regExpSearch : /^(?=.*hedge).*$/i,
	name : "Jerbeen",
	source : ["HW", 27],
	plural : "Jerbeens",
	size : 2,
	speed : {walk : {spd : 30, enc : 20}},
	languageProfs : ["Birdfolk", "Jerbeen"],
	age : " mature around 5 years and live for 40",
	height : " stand between 2 and 3 feet tall",
	weight : " weigh between 20-40 lbs.",
	improvements: "Jerbeen: +2 Dexterity and +1 Charisma",
	scores : [0, 2, 0, 0, 0, 1],
	trait : "Jerbeen (+2 Dexterity and +1 Charisma)" + (typePF ? " " : "\n") + "Standing Leap: My long jump is 30 feet and high jump is 15 feet, without running start.\nNimbleness: I can move through the space of a creature a larger size than me.\nTake Heart: I have advantage on STR saves and saves against frighten if I have a non-frightened and non-incapacitated ally I can see or hear within 5 feet.\nTeam Tactics: I can use the Help action as a bonus action.",
	features : {
		"team tactics" : {
			name : "Help",
			actions : ["bonus action", ""]
		}
	}
};

RaceList["mapach"] = {
	regExpSearch : /^(?=.*mapach).*$/i,
	name : "Mapach",
	source : ["HW", 28],
	plural : "Mapachs",
	size : 3,
	speed : {
		walk : { spd : 30, enc: 20 },
		climb : { spd : 20, enc: 10 }
	},
	languageProfs : ["Birdfolk", "Mapach"],
	vision : [["Darkvision", 60]],
	savetxt : { adv_vs : ["poison"]},
	dmgres : ["Poison"],
	toolProfs : ["Tinker's Tools"],
	age : " mature at an average pace, reaching adulthood at 15 years and live well past 90",
	height : " range from 4 to 5 feet",
	weight : " weigh around 90-160 lbs",
	improvements : "Mapach: +2 Wisdom and +1 Constitution;",
	scores : [0, 0, 1, 0, 2, 0],
	trait : "Mapach (+2 Wisdom and +1 Constitution)" + (typePF ? " " : "\n") + "Expert Climbers: I have a climbing speed of 20 feet.\nScroungecraft: I can construct crude versions of common items from materials around me. 10 minutes to craft a tool or piece of adenturing gear worth 30 gp or less, lasting 1 hour. Can spend 8 hours to make a scroungecrafted item permanent.\nSkulker: advantage on Stealth checks made in dim light and darkness.",
};

RaceList["vulpin"] = {
	regExpSearch : /vulpin/i,
	name : "Vulpin",
	source : ["HW", 30],
	plural : "Vulpin",
	size : 3,
	speed : { walk : { spd : 30, enc: 20 }},
	languageProfs : ["Birdfolk", "Vulpin"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*vulpin)(?=.*\bbite?\b).*$/i,
		name : "Vulpin Bite",
		source : ["HW", 30],
		damage : [1, 6, "piercing"],
		description : "Finesse;"
	},
	weaponsAdd : ["Vulpin Bite"],
	vision : [["Darkvision", 60]],
	age : " mature at an average pace, reaching adulthood at 15 years and live well past 90",
	height : " range from 4 and a half to 5 feet",
	weight : " weigh around 90-140 lbs",
	improvements : "Vulpin: +2 Intelligence and +1 Charisma;",
	scores : [0, 0, 0, 2, 0, 1],
	trait : "Vulpin (+2 Intelligence and +1 Charisma)" + (typePF ? " " : "\n") + "Bite: I can bite as an unarmed strike, dealing 1d6 piercing damage. Can use STR or DEX.\nBewitching Guile: I can cast charm person at level 1, ambush prey at level 3, and fear at level 5, using Intelligence.",
	abilitysave : 4,
	spellcastingAbility : 4,
	features : {
		"charm person" : {
			name : "Charm Person",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			tooltip : "(Bewitching Guile)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Bewitching Guile (level 1)",
				spells : ["charm person"],
				selection : ["charm person"],
				oncelr : true
			}
		},
		"ambush prey" : {
			name : "Ambush Prey",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : "(Bewitching Guile)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Bewitching Guile (level 3)",
				spells : ["ambush prey"],
				selection : ["ambush prey"],
				oncelr : true
			}
		},
		"fear" : {
			name : "Fear",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : "(Bewitching Guile)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Bewitching Guile (level 5)",
				spells : ["fear"],
				selection : ["fear"],
				oncelr : true
			}
		}
	}
};

/*
Spells
*/
SpellsList["ambush prey"] = {
	name : "Ambush Prey",
	nameShort : "Ambush Prey",
	source : ["HW", 49],
	defaultExcluded : false,
	classes : ["ranger"],
	level : 2,
	school : "Illus",
	time : "1 a",
	range : "S",
	rangeMetric : "S",
	components : "S,M",
	compMaterial : "a broken twig",
	duration : "1 h",
	description : "invisible for 1hr while unmoving, 1d6 add. dmg on first attack",
	descriptionFull : "You channel primal predatory energies to perfectly conceal your presence in order to surprise your target. You become invisible for the spell's duration, granting advantage on all Dexterity (Stealth) checks to remain hidden. The invisibility will last for the duration of the spell, however, moving 5 feet or more from your position will end the effect. The first attack you make while invisible against any target you are hidden from deals 1d6 additional damage, ending the spell.",
	ritual : false,
	psionic : false,
	allowUpCasting : true,
};

SpellsList["elevated sight"] = {
	name : "Elevated Sight",
	nameShort : "Elevated Sight",
	source : ["HW", 49],
	defaultExcluded : false,
	classes : ["cleric", "druid", "ranger", "warlock", "wizard"],
	level : 1,
	school : "Div",
	time : "1 a",
	range : "S",
	components : "V,S",
	duration : "conc, 1 minute",
	description : "project vision 120 feet up, stays above me, BA to move up or down",
	descriptionFull : "You cast your eyes skyward, granting you sight from a higher vantage point. You project your vision to see through an invisible sensor which appears in a spot up to 120 feet above you. You can see through the sensor as if you were flying, granting a full 360 degree view from its location. The sensor moves with you, retaining its height in relation to you. You can use a bonus action to adjust the sensor’s height, but only to a maximum of 120 feet above you. While looking through this sensor you are blind, though you can switch between seeing through the sensor or through your own eyes at any time during your turn.",
	ritual : false,
	psionic : false,
	allowUpCasting : false,
};

SpellsList["feathered reach"] = {
	name : "Feathered Reach",
	nameShort : "Feathered Reach",
	source : ["HW", 50],
	defaultExcluded : false,
	classes : ["druid", "ranger"],
	level : 3,
	school : "Trans",
	time : "1 a",
	range : "S",
	rangeMetric : "S",
	components : "S,M",
	compMaterial : "a small feather",
	duration : "1 min",
	description : "arms become wings, 2x fly speed, high jump, glide, adv. jump checks",
	descriptionFull : "You transform your arms into powerful wings, and your fingers into long, graceful feathers. The effects of this spell last 1 minute, at which point the feathers gradually fall out, causing you to float gently to the ground as your arms return to their original form. This spell confers a number of benefits upon the caster:\nAs a bonus action, you can fly up to double your movement speed. You must land once you finish your movement, although you do not take fall damage while this spell is active, as your feathered arms bear you gently to the ground.\nYou can use your powerful feathered arms to propel yourself upward a distance equal to half your movement speed. You can do this once during your turn and may use it in conjunction with a regular jump.\nWhen falling, you can use your reaction to stiffen your arms, and glide on the wind. You may fly up to your movement speed, in any direction, choosing where you land.\nYou gain advantage on all athletics checks used to make a long or high jump. You do not need to move 10 feet before you jump to gain distance, and you triple the distance you would jump normally.\nIn order to benefit from this spell your hands must be free of shields and heavy weapons, and you cannot be encumbered.",
	ritual : false,
	psionic : false,
	allowUpCasting : false,
};

SpellsList["globe of twilight"] = {
	name : "Globe of Twilight",
	nameShort : "Gl. of Twilight",
	source : ["HW", 50],
	defaultExcluded : false,
	classes : ["druid", "ranger", "warlock"],
	level : 2,
	school : "Illus",
	time : "1 a",
	range : "S:15-ft radius, 15-ft high",
	components : "V,S,M",
	compMaterial : "a dab of pitch and a bag of glittering sand",
	duration : "conc, 10 min",
	save : "Wis",
	description : "lightly obsc, allies adv stealth, disadv perc, enemies WIS save or blind",
	descriptionFull : "You shroud the area surrounding you in a sphere of night sky, dotted with miniature stars. The twilight conceals your allies, but clearly illuminates your enemies.\nThe area affected by this spell is lightly obscured by magical shadow, within which small constellations softly twinkle. Aside from these stars, only light produced by a spell of 3rd level or higher can properly illuminate any area inside the sphere. Nonmagical light does not function inside the sphere, and all other forms of magical radiance can only produce dim light in a 5-foot space.\nWhen you cast this spell you may designate any number of creatures you can see to be concealed by the supernatural shadows while in the sphere. A concealed creature has advantage on Dexterity (Stealth) checks when inside the sphere and may attempt to hide at any time. Because the area of the spell is lightly obscured, creatures within the spell’s area have disadvantage on Wisdom (Perception) checks made to see those outside of it.\nAll other creatures in the area are dazzled by the light of the miniature stars, causing them to have disadvantage on all perception checks inside the sphere. When such a creature enters the spell’s area for the first time, or starts its turn there, it must make a Wisdom saving throw or be blinded until the end of its turn.",
	ritual : false,
	psionic : false,
	allowUpCasting : true,
};

SpellsList["gust barrier"] = {
	name : "Gust Barrier",
	nameShort : "Gust Barrier",
	source : ["HW", 50],
	defaultExcluded : false,
	classes : ["bard", "druid", "sorcerer", "wizard"],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "S",
	rangeMetric : "S",
	components : "S",
	duration : "1 round",
	save : "Con",
	description : "ranged attacks at me at disadv, melee attackers make CON save or flung 10 ft. prone",
	descriptionFull : "You spread your arms wide, allowing yourself to become enveloped by the air around you. Until the end of your next turn, any ranged attack made against you is done with disadvantage.\nMelee attackers who successfully hit you must make a Constitution saving throw against your spell save DC. On a failure, the attacker is flung away from you up to 10 feet and is knocked prone.",
	ritual : false,
	psionic : false,
	allowUpCasting : true,
};

SpellsList["invoke the amarinthine"] = {
	name : "Invoke the Amaranthine",
	nameShort : "Inv. the Amaranthine",
	source : ["HW", 51],
	defaultExcluded : false,
	classes : ["cleric", "paladin"],
	level : 3,
	school : "Div",
	time : "10 min",
	range : "S",
	rangeMetric : "S",
	components : "V,S,M",
	compMaterial : "a holy symbol of the Amaranthine",
	duration : "24 h",
	description : "roll 2d20, keep numbers, replace attack, check, or save within 60 ft as reaction",
	descriptionFull : "You call upon the power of an Amaranthine to grant yourself insight into the Great Rhythm that moves all things. When you cast this spell, roll two d20s, and record what you rolled. For each die, choose either attack roll, skill check, or saving throw. You can choose each option multiple times. For the next 24 hours, you may substitute any roll of an ally or enemy you can see within 60 feet with one of the recorded numbers that matches the type of roll you wish to replace (attack roll, skill check, or saving throw). The target still adds any relevant modifiers to this number, but otherwise treat the substituted number as the number they rolled.\nTo do this, you must spend a reaction to present your holy symbol and invoke the name of the Amaranthine whose energies you called upon. You can do this anytime after the skill check, saving throw or attack has been rolled, but before the outcome of the event has been determined. The spell ends after 24 hours",
	ritual : false,
	psionic : false,
	allowUpCasting : true,
};

SpellsList["mend plants"] = {
	name : "Mend Plants",
	nameShort : "Gust Barrier",
	source : ["HWS", 8],
	defaultExcluded : false,
	classes : ["druid", "sorcerer", "wizard"],
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M",
	duration : "Instantaneous",
	description : "repair living plant, grow foliage, seed sprout, create 5ft cube of difficult terrain, heal living plant with <10 hp",
	descriptionFull : "Drawing on primordial magic, you can instill vitality in nearby plants to create one of the following effects within range:\nYou instantly repair a single break or tear in a living plant you touch, such as torn foliage, a scorched branch, a scar cut into bark, or two pieces of a plant that have been broken apart. As long as the damage is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former destruction.\nYou instantly cause a defoliated plant to grow foliage, cause a planted seed to sprout, or restore the ability to sprout to a dead seed pod.\nYou can cause a 5-foot cube of living plants to flourish with foliage such as leaves and grass. This area can become thick enough to conceal a Medium or smaller creature, or become overgrown enough to become difficult terrain (your choice when you cast the spell).\nYou can touch a living plant with 10 or fewer hit points remaining to stimulate regenerative growth. The plant regains 1 hit point at the start of each of its turns for the next minute.",
	ritual : false,
	psionic : false,
	allowUpCasting : false,
};

SpellsList["shape plants"] = {
	name : "Shape Plants",
	nameShort : "Shape Plants",
	source : ["HW", 51],
	defaultExcluded : false,
	classes : ["bard", "cleric", "druid"],
	level : 4,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	rangeMetric : "Touch",
	components : "V,S",
	duration : "1 h",
	description : "5-foot cube of plants becomes difficult terrain, 2d4 pierc for every 5 ft moved through",
	descriptionFull : "You call upon gentle natural magics to alter the growth of plants. Any plant life you can see within range that fits within a 5-foot cube can take on whatever shape you desire. Additionally, if the plant is a bramble, or capable of growing thorns, you turn the affected area into difficult terrain, causing 2d4 points of piercing damage for every 5 feet moved through the area you shaped. You may also increase or decrease the number of flowers, vines, leaves, thorns, branches, or fruits produced by any plant you shape.\nAfter one hour, the magic of your spell fades, and the plant resumes its normal shape. If you can use speak with plants (or a similar ability) to communicate with the plant, you may persuade it to retain its new form. Different plants have different feelings and attitudes, and if the form is too different from its natural shape it is likely to decline. If the plant accepts, at the GM’s discretion, it will retain the form you have sculpted it into, in which case the effect becomes permanent.\nFor each spell level above 4th, the size of the cube of plant life you can affect increases by an additional 5 feet.",
	ritual : false,
	psionic : false,
	allowUpCasting : true,
};

SpellsList["spiny shield"] = {
	name : "Spiny Shield",
	nameShort : "Spiny Shield",
	source : ["HW", 51],
	defaultExcluded : false,
	classes : ["druid", "ranger", "sorcerer", "wizard"],
	level : 1,
	school : "Abjur",
	time : "1 rea",
	range : "S",
	rangeMetric : "S",
	components : "V,S,M",
	compMaterial : "a small quill",
	duration : "1 rnd",
	description : "barrier reduces melee damage by 2d4, dealing as much pierc. half cover from range",
	descriptionFull : "An ethereal barrier of spikes, made of magical force, interposes itself between you and an attacker. Until your next turn, when you are hit by a melee attack, the barrier reduces the damage your are dealt by 2d4, and deals the same amount of piercing damage to the attacker. The shield is ineffective against ranged attackers, but still provides a +2 bonus to AC (treat as half cover) against them for the duration.\nAt Higher Levels. When you cast this spell using a spell slot above 1st level, increase the spell’s effect by an additional 1d4 for every slot level above 1st.",
	ritual : false,
	psionic : false,
	allowUpCasting : true,
};

SpellsList["stellar bodies"] = {
	name : "Stellar Bodies",
	nameShort : "Stellar Bodies",
	source : ["HW", 52],
	defaultExcluded : false,
	classes : ["cleric", "druid", "sorcerer", "wizard"],
	level : 4,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "1 min",
	save : "Wis",
	description : "melee attack 5 ft makes WIS save or 1d8 rad. dmg. ranged spell for 4d8 rad. dmg, CON save or blind",
	descriptionFull : "You create two small stars that orbit you. They twinkle pleasantly, shedding dim light in a 10-foot radius centered on you. The stars protect you. If a creature within 5 feet of you hits you with a melee attack they must make a Wisdom saving throw or take 1d8 points of radiant damage for each star orbiting you.\nOnce per round, on your turn, you may use your action to cause a star to streak towards an enemy, expending it as it explodes in a blinding flash. Make a ranged spell attack against an enemy within 120 feet, dealing 4d8 points of radiant damage on a hit. The target must then make a Constitution saving throw or be blinded until the start of your next turn.\nThe spell ends when either its duration expires, you fall unconscious, or you have expended all of your stars.\nAt Higher Levels. When you cast this spell using a spell slot above 4th level, you may create one additional star for every two slot levels above 4th. For each additional star orbiting you, the radius of dim light centered on you increases by 5 feet.",
	ritual : false,
	psionic : false,
	allowUpCasting : true,
};

SpellsList["veil of dusk"] = {
	name : "Veil of Dusk",
	nameShort : "Ambush Prey",
	source : ["HW", 52],
	defaultExcluded : false,
	classes : ["druid", "warlock"],
	level : 1,
	school : "Abjur",
	time : "1 bns",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "a pinch of soot",
	duration : "conc, 10 min",
	description : "1 crea gets +1 AC and adv. on stealth",
	descriptionFull : "You incant towards a creature, cloaking them in a shadowy veil of darkness and silence. The target gains a +1 bonus to their armor class and rolls stealth checks with advantage for the duration of the spell.",
	ritual : false,
	psionic : false,
	allowUpCasting : false,
};

/*
Subclasses
*/
AddSubClass("druid", "circle of the warden", {
	regExpSearch : /^(?=.*(circle|druid))(?=.*warden).*$/i,
	subname : "Circle of the Warden",
	source : ["HWS", 8],
	features : {
		"subclassfeature2" : {
			name : "Heartbeat of the Land",
			source : ["TotSG", 8],
			minlevel : 2,
			description : desc(["I have double proficiency in Nature and Insight skills. I can commune for 10 minutes and learn severity of environmental threats, any aberrations, elementals, fey, or undead, or the general direction of the nearest portal to an elemental plane within 3 miles."]),
			skills : [["Nature", "full"], ["Insight", "full"]],
		},
		"subclassfeature2.1" : {
			name : "Shared Burden",
			source : ["TotSG", 9],
			minlevel : 2,
			description : desc([
				"When an ally within 30 feet takes cold, fire, lightning, or thunder damage, I can use a reaction to grant that creature to the damage dealt. I take the same amount of damage. As an action, I can remove up to 20 ft of adjacent spaces where such damage persists, taking 1d6 damage per 5-foot space removed. If the effect is caused by a spell, I take 1d6 per level of the spell per 5-foot space. All damage dealt through this is resisted by me.",
			]),
			action : [["reaction", " (when ally takes damage)"], ["action", " (suppress AoE)"]]
		},
		"subclassfeature6" : {
			name : "Sympathetic Shield",
			source : ["TotSG", 9],
			minlevel : 6,
			description : desc([
				"As an action, I can expend one Wild Shape to shield myself or an ally, granting +2 AC and 1d10 temporary HP. At 14th level, the armor deals 1d8 of magical bludgeoning, piercing, or slashing damage (my choice) when taking damage from a creature within 5 feet."
			]),
			action : ["action", ""]
		},
		"subclassfeature10" : {
			name : "Aura of Calm",
			source : ["TotSG", 9],
			minlevel : 10,
			description : desc([
				"When I or an ally within 10 feet is healed from a spell, that spell heals extra equal to half my druid level. Plants that aren't creature negate difficult terrain and grant advantage against difficult terrain-spells using plants."
			])
		},
		"subclassfeature14" : {
			name : "Bond of Shelter",
			source : ["TotSG", 9],
			minlevel : 14,
			description : desc([
				"As an action, once per Long Rest, I create a 30 ft radius, 20 ft tall cylinder lasting 1 hour. Plants and natural elements defend me when I'm on the material or elemental planes, or plants sprout when I'm elsewhere. I can designate allies to be immune to the effect.\n - Creatures must succeed on a Charisma save to enter the cylinder. Planar travel into the cylinder fails.\n - Creatures have disadvantage on attack rolls against targets in the cylinder.\n - Creatures can't charm, frighten, or possess targets within the cylinder.\n - When a creature enters the area, it takes 5d10 magical bludgeoning damage from the animated nature within."
			]),
			action : ["action", ""],
			usages : 1,
			recovery : "long rest"
		}
	}
});

AddSubClass("cleric", "community domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(community)).*$/i,
	subname : "Community Domain",
	source : ["HW", 39],
	spellcastingExtra : ["bless", "goodberry", "aid", "heroism", "beacon of hope", "spirit guardians", "banishment", "faithful hound", "mass cure wounds", "rary's telepathic bond"],
	features : {
		"subclassfeature1" : {
			name : "Blessing of the Hearth",
			soruce : ["HW", 39],
			minlevel : 1,
			toolProfs : ["Cook's Utensils"],
			description : desc([
				"I gain proficiency with cook's utensils. I can conjure a hearth during a rest, feeding my companions. If anyone rolls hit dice while resting at my hearth, they can reroll one of their hit dice, taking the higher roll."
			])
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Magnificent Feast",
			source : ["HW", 39],
			minlevel : 2,
			description : desc([
				"By spending 10 minutes, I can create a number of food items equal to my Wisdom modifier. The food will last up to 8 hours or until the end of a rest. When eaten as an action, it provides 2d4 + my cleric level in healing, and removes either the frightened or poisoned condition."
			])
		},
		"subclassfeature6" : {
			name : "Channel Divinity: Community Watch",
			source : ["HW", 39],
			minlevel : 6,
			description : desc([
				"Number of allies equal to my Wisdom modifier within 30 feet can add a d6 to a skill check, saving throw, or attack roll, lasting for a number of rounds equal to my Wisdom modifier. Allies need to see at least one ally to use this."
			])
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : ["HW", 19],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 psychic damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 radiant damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra radiant damage."
				]
			}
		},
		"subclassfeature17" : {
			name : "Paragon of the People",
			source : ["HW", 39],
			minlevel : 17,
			description : "Community watch grants 2d6 to each ally and immunity to fear. Magnificent Feast produces 2x the amount of foodstuffs, which can also remove either a curse or a disease."
		}
	}
});

AddSubClass("cleric", "night domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(night)).*$/i,
	subname : "Night Domain",
	source : ["HW", 40],
	spellcastingExtra : ["sleep", "veil of dusk", "darkness", "moonbeam", "nondetection", "globe of twilight", "divination", "stellar bodies", "dream", "seeming"],
	"subclassfeature1" : {
		name : "Eye of Twilight",
		source : ["HW", 40],
		description : "\n " + "I gain 60 ft darkvision",
		vision : [["Darkvision", 60]]
	},
	"subclassfeature1.1" : {
		name : "Ward of Shadows",
		source : ["HW", 40],
		description : desc([
			"When a creature I can see within 30 ft attacks me, I can impose disadvantage on the attack roll, so long as the creature can be blinded."
		]),
		usages : "Wisdom modifier per ",
		usagecalc : "event.value = Math.max(1, What('Wis Mod'));",
		action : ["reaction", ""],
		recovery : "long rest"
	},
	"subclassfeature2" : {
		name : "Channel Divinity: Invocation of Night",
		source : ["HW", 40],
		description : desc(
			["I can extinguish all magical and nonmagical light within 30 feet. Each enemy within 30 feet makes a Constitution save or is blinded for a number of rounds equal to my cleric level. They repeat the save at the end of their turns."
		])
	},
	"subclassfeature6" : {
		name : "Channel Divinity: Improved Ward",
		source : ["HW", 41],
		description : desc(["I can use Ward of Shadow to protect another creature within 30 feet of me."])
	},
	"subclassfeature8" : {
		name : "Eye of Twilight improvement",
		source : ["HW", 40],
		description : desc(["I have darkvision out to 120 feet, that works in both magical and nonmagical darkness."]),
		vision : [["Darkvision", 120]]
	},
	"subclassfeature8.1" : {
		name : "Veil of Dreams",
		source : ["HW", 41],
		description : desc([
			"I can add my Cleric level to the dice rolled for the Sleep spell. I can choose the order in which creatures are affected by the Sleep spell. If the first creature is unaffected, the spell will instead skip this creature. A creature under my Sleep spell can only be woken until the start of my next turn."
		])
	},
	"subclassfeature17" : {
		name : "Eye of Twilight improvement",
		source : ["HW", 41],
		description : desc([
			"Once per day I can give myself truesight out to 120 feet for a number of minutes equal to my Wisdom modifier. It only functions in magical or nonmagical darkness."
		]),
		usages : 1,
		recovery : "long rest"
	},
	"subclassfeature17.1" : {
		name : "Creature of the Night",
		source : ["HW", 41],
		description : desc([
			"For 1 minute, I emit magical darkness in a 30 foot radius, and lightly obscuring shadows for another 50 feet. Only light produced by a 9th level spell or similar can negate the darkness. Enemies in the darkness are blinded and frightened as long as they are in it."
		]),
		usages : 1,
		recovery : "long rest",
		actions : [["action", " (activate)"], ["action", " (deactivate)"]]
	}
});

AddSubClass("fighter", "scofflaw", {
	regExpSearch : /^(?=.*scofflaw).*$/i,
	subname : "Scofflaw",
	source : ["HW", 41],
	fullname : "Scofflaw",
	abilitySave : 1,
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiency",
			source : ["HW", 41],
			minlevel : 3,
			description : desc([
				"I gain proficiency in one of the following skills: Deception, Insight, Intimidation, Sleight of Hand, Stealth, or Thieves' Cant"
			]),
			skillstxt : "Deception, Insight, Intimidation, Sleight of Hand, Stealth, or Thieves' Cant"
		},
		"subclassfeature3.1" : {
			name : "Intimidating Banter",
			source : ["HW", 41],
			minlevel : 3,
			description : desc([
				"I can make use Strength of Dexterity to make Charisma checks while in combat."
			])
		},
		"subclassfeature3.2" : {
			name : "Brutal Brawler",
			source : ["HW", 41],
			minlevel : 3,
			description : desc([
				"When I hit someone with an improvised weapon, I can use a bonus action to break it over their head, dealing maximum damage."
			]),
			weaponprofs : [true, true, "improvised weaopns"],
			actions : ["bonus action", " (break object)"]
		},
		"subclassfeature7" : {
			name : "Misdirection",
			source : ["HW", 42],
			minlevel : 7,
			description : desc([
				"I can use a bonus action to misdirect, forcing an INT save on a creature within 5 feet of me. On a fail, they must spend their reaction to attack a creature of my choice within 5 feet of them."
			]),
			acitons : ["bonus action", ""]
		},
		"subclassfeature10" : {
			name : "Blindside",
			source : ["HW", 41],
			minlevel : 10,
			description : desc([
				"Once per rest, I can apply extra damage on a hit. At level 18, I regain my use of this feature if I start combat without it."
			]),
			usages : 1,
			recovery : "short rest",
			additional : levels.map( function(n) { return n < 15 ? "5" : n < 18 ? "7" : n > 18 ? "9" : "d6 damage"; })
		},
		"subclassfeature15" : {
			name : "Infamy",
			source : ["HW", 42],
			minlevel : 15,
			description : desc([
				"As part of my attack, I can force a creature within 30 feet to make a Wisdom save or be frightened of me for 1 minute, repeating the save at the end of each of their turns. If they know of my deeds, they make the save at disadvantage."
			])
		},
		"subclassfeature18" : {
			name : "Two For Flinching",
			source : ["HW", 42],
			minlevel : 18,
			description : desc([
				"If I hit a target that I have misdirected this turn or is afflicted by a condition, I can make one additional attack against that opponent once per turn."
			])
		}
	}
});

/*
Backgrounds
*/
BackgroundList["grounded"] = {
	regExpSearch : /grounded/i,
	name : "Grounded",
	source : ["HW", 44],
	skills : ["Athletics", "Insight"],
	skillstxt :"Athletics and Insight.",
	gold : 5,
	equipleft : [
		["Walking stick","",""],
		["Trinket from my culture", "", ""]
	],
	equipright : [
		["Traveler's clothes", "", 1],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Find Another Path",
	trait : [
		"I always second guess my choices.",
		"I have learned to not let the comments of others affect me.",
		"I'm eager to show the benefits of my unique perspective.",
		"I’m slow to trust someone new, but open up over shared hardships.",
		"I manufacture difficult situations to prove my abilities.",
		"I get embarrassed easily, even when someone tries to compliment me.",
		"I will deny my fears to everyone.",
		"I want to see how others handle situations I'm afraid of."
	],
	ideal : [
		["Adversity", "Adversity: Others think of me as weak, but I will prove my worth with hard work and determination. (Lawful)"],
		["Encouragement", "Encouragement: I try to seek out and support others like me who are seen as outcasts. (Good)"],
		["Exploration", "Exploration: I yearn to experience unique cultures and discover new places. (Chaotic)"],
		["Safety", "Safety. In this dangerous world, it’s best to keep your head down and stay cautious. (Neutral)"]
		["Rebellion", "Rebellion: Who cares what others think of me, so long as my actions reflect how I feel in my heart? (Chaotic)"],
		["Compromise", "Compromise: The best way to respect each other's differences is to find a solution that doesn't exclude anyone. (Good)"]
	],
	bond : [
		"My family has been the subject of ridicule ever since I left my home perch.",
		"A bully from my childhood now holds a position of power in my home perch.",
		"I follow the teachings of a wise outcast I met in my travels.",
		"I feel kinship to a culture outside my own.",
		"I won't tolerate anyone who insults me or my friends.",
		"I have found a new family on the forest floor, and they mean more to me than anything.",
	],
	flaw : [
		"I am incapable of action when I'm at great heights.",
		"I lash out at the slightest insult.",
		"I keep a distance from others so they won't learn of my fears.",
		"I project my insecurities onto others.",
		"I am uncouth and mannerless.",
		"I find it hard to trust other birdfolk."
	],
	extra : ["Pick a community place",
					"Fledgling",
					"Traitor",
					"Family",
					"Banished",
					"Oddity",
					"New home"],
	toolProfs : [["One type of artisan's tools", 1]],
	lifestyle : "poor"
};

BackgroundFeatureList["find another path"] = {
	description : "I can recall the general layout of the land while on the forest floor. I can always find my way around obstacles or needing to climb if such a path exists. I can easily find shelter on the forest floor for myself and five others.",
	source : ["HW", 44]
};

BackgroundList["bandit defector"] = {
	regExpSearch : /(bandit defector|lookout|lifter|thug|runner|hustler|captain)/i,
	name : "Bandit Defector",
	source : ["HW", 43],
	skills : ["Deception", "Survival"],
	skillstxt :"Deception and Survival.",
	gold : 10,
	equipleft : [
		["Knife","",1],
		["Cooking pot", "", 1],
		["Winter blanket", "", 1],
		["Prize from a successful robbery", "", ""]
	],
	equipright : [
		["Common clothes", "", 1],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Bandit Routes",
	trait : [
		"I am plucky and confident in my abilities, at least, that’s what I want others to think.",
		"I often crack jokes to lighten the mood.",
		"I like to keep my secrets, and those who try to pry into my life irritate me.",
		"I have trouble sleeping unless I’m on the ground (or floor) in my bedroll.",
		"I picked up many stories during my time on the road, and I have one for every occasion.",
		"You mess with my friends, you mess with me.",
		"I never really had a plan in life, I tend to just go with the flow.",
		"I’m as cautious as they come."
	],
	ideal : [
		["Repentance", "Repentance. I’ve done terrible things in the past, and I want to try and make up for them. (Good)"],
		["Nature", "Nature. I’ve seen what’s happening to the forest, and it’s bigger than all of us. We’re all doomed unless we do something about it. (Neutral)"],
		["Friendship", "Friendship. My friends are like family to me, and I’ll keep trying to do right by them until the end. (Good)"],
		["Self-Preservation", "Self-Preservation. Any good rat knows when it’s time to flee a sinking ship. I want to be clear of the Bandit Coalition when it goes down. (Evil)"],
		["Compassion", "Compassion. The struggle between humblefolk and birdfolk will only lead to more bloodshed. It needs to stop somewhere. (Good)"],
		["Freedom", "Freedom. I just want to be free to live my own life, and make my own way in the world. (Chaotic)"]
	],
	bond : [
		"I did some hard time in Alderheart’s prison, and the perch guard who arrested me still has it out for me.",
		"I stole something valuable from the Captain of my unit. I’m in big trouble if they ever find me.",
		"I harbor a terrible secret that might change how people think of me if it got out.",
		"I still sympathize with the Coalition’s aims, I just believe there’s a better way.",
		"My friends in the Coalition didn’t understand why I had to leave. They’ve branded me a traitor.",
		"I had people in the Coalition who looked up to me as a leader. They might still follow me, if I could only reach them.",
	],
	flaw : [
		"I’m always ready to bail when something goes wrong.",
		"Whenever I see something valuable, I can’t help but think of a way to steal it.",
		"It’s hard for me to trust people. I’ve been burned before.",
		"I have a problem with authority. Nobody tells me what to do.",
		"There’s a warrant out for my arrest.",
		"I have a bad habit that I picked up on the road."
	],
	extra : ["Select a Specialty",
					"Lookout",
					"Lifter",
					"Thug",
					"Runner",
					"Hustler",
					"Captain"],
	toolProfs : ["Disguise Kit", ["One type of gaming set or musical instrument", 1]],
	lifestyle : "poor"
};

BackgroundFeatureList["bandit routes"] = {
	description : "As someone who once assisted in countless highway robberies, you are familiar with the roads of the Wood and escape paths used by bandits. When you are not in combat, you (and companions you lead) can travel between locations that cut through forested areas twice as fast as your speed would normally allow.",
	source : ["HW", 43]
};

BackgroundList["wind-touched"] = {
	regExpSearch : /(wind-touched|windtouched|wind touched)/i,
	name : "Wind-Touched",
	source : ["HW", 45],
	skills : ["Acrobatics", "Performance"],
	skillstxt :"Acrobatics and Performance",
	gold : 10,
	equipleft : [
		["Wind instrument","",1],
		["Cooking pot", "", 1],
		["Ornate cloak", "", 1],
		["Symbol of the Wind", "", ""]
	],
	equipright : [
		["Common clothes", "", 1],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Supernatural Presence",
	trait : [
		"I never back down from a challenge.",
		"I always end up being the center of attention.",
		"I am gifted by the wind and destined for greatness.",
		"I have no time for those who doubt me.",
		"I seek out challenges to test myself.",
		"I am better than everyone else.",
		"I avoid showing my power at all costs.",
		"I remain humble despite my blessing."
	],
	ideal : [
		["Responsibility", "Responsibility. The powers I have been gifted with are meant to serve the common good. (Good)"],
		["Heroism", "Heroism. The wind chose me to be a brave warrior and leader, so shall it be. (Lawful)"],
		["Egotism", "Egotism. My powers situate me above others. The masses should know their place. (Evil)"],
		["Mysticism", "Mysticism. Connected to nature, I speak for the wind and divine its will for others. (Neutral)"],
		["Cynicism", "Cynicism. What matters isn’t whether or not my powers are genuine, but what advantages I can reap because of that belief. (Evil)"],
		["Naturalism", "Naturalism. The wind speaks to my soul, and I am bound to go wherever it directs me. (Chaotic)"]
	],
	bond : [
		"I am guided by a wise elder who prepares me for my destiny.",
		"I am estranged from my parents who don’t believe in my blessing.",
		"I seek to discredit the person who burdened me with this moniker.",
		"I live in the shadow of my mentor, seeking their approval.",
		"I have a sibling who is not blessed, which causes tension",
		"I am one with the wind. Personal relationships are fleeting.",
	],
	flaw : [
		"I can’t accept another’s suggestion once I’ve set my path.",
		"I expect nothing less than reverence from common people.",
		"I blindly trust in the power of my blessing.",
		"I am overly concerned about how others see me.",
		"I will prove my worth, even if it means putting myself and my friends in danger.",
		"I am burdened with responsibility, and find it hard to make even the simplest decisions."
	],
	toolProfs : [["One type of wind musical instrument", 1]],
	lifestyle : "modest"
};

BackgroundFeatureList["Supernatural Presence"] = {
	description : "Whether or not you are truly Wind-Touched, there are folk all across Everden that believe that you have been divinely blessed. If you make a show of power or skill that can be attributed to the wind or air, such as feats of acrobatics or commanding unseen forces, those believers will be bolstered by your supernatural presence. They will support you and, depending on how well you have convinced them of your powers, treat you with reverence and possibly even worship.",
	source : ["HW", 46]
};

/*
Feats
*/
FeatsList["aerial expert"] = {
	name : "Aerial Expert",
	source : ["HW", 47],
	descriptionFull : "Years of practice or an innate talent have made you adept at gliding. You gain the following benefits:\n - You no longer need to move at least 10 feet to perform long and high jumps. You may choose whether the jump uses your Strength or Dexterity score for determining height or distance, and you double the distance you would normally leap in either case.\n - You may take the Dash action while gliding to fly an additional distance up to your movement speed.\n - You may change direction freely while gliding, and may gain up to 10 feet of altitude once before you finish your descent.",
	description : "I can calculate jump height and distance using Dexterity instead of strength and leap twice as far. I can Dash while gliding. I can change direction freely and gain 10 ft altitude while gliding.",
	prerequisite : "Glide feature",
};

FeatsList["bandit cunning"] = {
	name : "Bandit Cunning",
	source : ["HW", 47],
	descriptionFull : "Your time as a bandit has granted you a sense for danger, and made you skilled at sizing up opponents. You gain the following benefits:\nWhen you are asked to make a saving throw, you may spend your reaction to add your Intelligence modifier as an additional bonus to the saving throw. You cannot use this ability again until you have completed a long rest.\nDuring combat, you can use your action to make an Intelligence (Investigation) check against any creature you have seen fight. As long as you succeed against a DC of 10 + their challenge rating, you can learn one useful fact of your choice about the target’s combat abilities. Choose from:\n• one damage resistance or immunityn• one condition immunity\n• one special ability possessed by the creature that either does damage, or prevents damage\n• one option under their attack, legendary, or reaction actions\n• one special sense they possess",
	description : "Add INT mod to a saving throw once per long rest. Make an investigation check during combat, DC 10 + CR to determine one of: one dmg resistance or immunity, one condition immunity, one damaging or damage preventing ability, one attack/legendary/reaction option, one special sense.",
	action : [["reaction", "(add INT to save)"], ["action", "(investigate)"]],
	usages : 1,
	recovery : "long rest"
};

FeatsList["opportunistic thief"] = {
	name : "Opportunistic Thief",
	source : ["HW", 47],
	descriptionFull : "You have learned the tricks of the trade of thievery, allowing you to exploit opportunities for pick-pocketing both in and out of combat. You gain the following benefits:\nIncrease your Dexterity score by 1.\nWhen a creature fails a melee attack roll against you in combat, you can make a Dexterity (Sleight of Hand) check against a DC equal to 10 + the target’s Dexterity modifier. On a success, you may steal any one item that is not being held or worn by the target.\nWhenever you successfully use your Sleight of Hand skill outside of combat to steal an object, you may immediately conceal it flawlessly on your person, or put another object you possess in its place.",
	description : "I can roll Sleight of Hand when a creature misses a melee attack to steal one item from the target not worn or carried. When I steal something out of combat successfully with sleight of hand it is immediately hidden.",
	scorestxt : "+1 Dexterity",
	scores : [0, 1, 0, 0, 0, 0]
};

FeatsList["perfect landing"] = {
	name : "Perfect Landing",
	source : ["HW", 47],
	descriptionFull : "Years of living at great heights have taught you how to fall more gracefully. You gain the following benefits:\nIncrease your Dexterity score by 1\nReduce the damage die for fall damage from a d6 to a d4.\nYou do not fall prone after taking falling damage.\nYou do not take damage for the first 30 feet of your fall.",
	description : "I can reduce fall damage dice to d4's. I don't fall prone from taking fall damage. I do not take damage during the first 30 feet of a fall.",
	scorestxt : "+1 Dexterity",
	scores : [0, 1, 0, 0, 0, 0]
};

FeatsList["speech of the ancient beasts"] = {
	name : "Speech of the Ancient Beasts",
	source : ["HW", 47],
	descriptionFull : "You have a special connection with the natural world. Great beasts regard you as their kin, and you possess the ability to speak the languages of the most powerful and mystic of their kind. You gain the following benefits:\nIncrease your Charisma score by 1.\nBeasts of Large size or larger have a friendly disposition toward you unless you have attacked them. \nYou have advantage on Charisma checks made against beasts that are of Large size or larger.\nYou can speak and understand Giant Eagle, Giant Elk, and Giant Owl. You can otherwise be understood by any beast of Large size or larger, whether or not they speak a language. Beasts with Intelligence scores of 4 or lower may only be able to understand simple concepts.",
	description : "Beasts of Large or larger are friendly unless I attack and I have advantage on charisma checks against them. I can speak and understand Giant Eagle, Giant Elk, and Giant Owl and can be stood by other Large or larger beasts.",
	scorestxt : "+1 Charisma",
	scores : [0, 0, 0, 0, 0, 1]
};

FeatsList["woodwise"] = {
	name : "Woodwise",
	source : ["HW", 47],
	descriptionFull : "You have lived your entire life in the gnarled, wooded areas of the world. You are adept at finding your way through even the most treacherous terrain. You gain the following benefits:\nYou gain proficiency in either the Survival or Nature skill.\nYou ignore difficult terrain.\nYou cannot become lost in natural surroundings except by magical means.",
	description : "I ignore difficult terrain and cannot become lost in natural surroundings except by magical means.",
	skillstxt : "Nature or Survival"
};

FeatsList["first responder"] = {
	name : "First Responder",
	source : ["HWS", 6],
	descriptionFull : "You have been specially trained in magical triage and are able to identify the signs of shock and fatigue in those suffering from injuries. You are always ready to provide aid to those in need. You gain the following benefits:\nYou can tell by looking at a creature if it is missing any of its hit points and whether or not it has more than half of its hit points. You also instantly determine if the creature is cursed, diseased, possessed, or afflicted by any of the following conditions: blinded, deafened, exhaustion, frightened, incapacitated, paralyzed, petrified, poisoned, or stunned.\nYou learn the spare the dying cantrip and can cast it as a bonus action.\nYou gain the ability to cast the spell cure wounds without using a spell slot, up to a number of times equal to half your proficiency bonus. You regain all expended uses when you finish a long rest. Wisdom is your spellcasting ability for this spell.",
	description : "I can instantly determine how many HP someone is missing and what conditions they have. I know spare the dying and can cast Cure Wounds up to half my proficiency bonus, using Wisdom.",
	spellcastingBonus : [{
		name : "At will",
		spellcastingAbility : 5,
		spells : ["spare the dying"],
		selection : ["spare the dying"],
		firstCol : 'atwill'
	}, {
		name : "Half proficiency",
		spellcastingAbillity : 5,
		spells : ["cure wounds"],
		selection : ["cure wounds"],
		usages : function(fields , v, output) {return floor(output.prof/2)},
		recovery : "long rest"
	}]
};

FeatsList["flamewoken"] = {
	name : "Flamewoken",
	source : ["HWS", 7],
	descriptionFull : "Living in the Scorched Grove or other areas touched by elemental fire can sometimes cause strange abilities to manifest among their inhabitants. Known as “flamewoken” by the Tenders, these gifted few have an ability to communicate with fire-aspected creatures and have power over flames. Tenders teach flamewoken among their order to hone their talents in service of nature. However, those outside of the order usually choose to keep their abilities hidden, as such powers are often seen as a curse. You gain the following benefits:\nYou can speak, read, and write Ignan.\nYou learn the produce flame cantrip. Wisdom is your spellcasting ability for this spell.\nAs a bonus action, you can strengthen the power of your flames. The next time you deal fire damage to one or more creatures before the end of your next turn, you can deal an additional 2d10 fire damage to one of those creatures. Once you use this feature, you can’t use it again until you complete a short or long rest.\nYou can whisper magical words in Ignan toward any nonmagical flames you can see within 30 feet of you that could fit within a 5-foot cube. As a bonus action, you can cause these flames to either grow by 5 feet in a single direction, provided there is fuel of some sort present in the new location, or you can extinguish the flames present in this space.",
	description : "I know Ignan, can cast Produce Flame, can deal 2d10 extra fire damage once per short rest, can cause a 5-foot cube of fire grow by 5 feet in one direction or extinguish them.",
	spellcastingBonus : [{
		name : "At will",
		spellcastingAbility : 5,
		spells : ["produce flame"],
		selection : ["produce flame"],
		firstCol : 'atwill'
	}],
	actions : ["bonus action", " (2d10 fire)"],
	usages : 1,
	recovery : "short rest"
};

FeatsList["forest sage"] = {
	name : "Forest Sage",
	source : ["HWS", 7],
	descriptionFull : "The Tenders value diversity among ideas, and although they began as a purely druidic order, they have since learned to accept many different ways of thinking about the natural world, especially regarding the application of magic. You are either a wizard who has learned to temper your arcane research with an eye to maintaining the delicate balance of natural forces, or you are a druid who has learned a new understanding of natural magic through study and experimentation. You gain the following benefits:\nIncrease your Intelligence or Wisdom score by 1, to a maximum of 20.\nYou can use your choice of Intelligence or Wisdom to make Animal Handling, Arcana, Nature, or Survival checks.\nYou can choose to learn two spells from either the druid or wizard spell list. Spells you choose must be of a level you can cast. The chosen spells count as spells of your class and are added to your spellbook if you are a wizard. The chosen spells use your spellcasting ability.",
	description : "I can use INT or WIS for Animal Handling, Arcana, Nature, and Survival. I learn two spells from the wizard or druid lists, using my spellcasting ability."
};