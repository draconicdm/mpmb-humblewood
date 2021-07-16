/*
Preliminary variables
*/
var iFileName = "HumblewoodRaces.js";

SourceList["HW"] = {
	name : "Humblewood",
	abbreviation : "HW",
	group : "Humblewood",
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
	plural : Hedges,
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
