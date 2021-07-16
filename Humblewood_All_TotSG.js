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
	source : ["TotSG", 8],
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
