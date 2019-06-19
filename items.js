if (!jQuery) 
{
    throw new Error("Requires jQuery"); 
}

$(function() {
	var imageBasePath = "https://raw.githubusercontent.com/AronDavis/Team-Fight-Tactics-Item-Grid/master/itemImages/";
	var baseItems = [];
	var comboItems = [];

	//baseItems
	baseItems.push({
		title: "B.F. Sword",
		details: "+20 Attack Damage."
		});
		
	baseItems.push({
		title: "Chain Vest",
		details: "+20 Armor."
		});
		
	baseItems.push({
		title: "Giant's Belt",
		details: "+200 Health."
		});
		
	baseItems.push({
		title: "Needlessly Large Rod",
		details: "+20% Spell Damage."
		});
		
	baseItems.push({
		title: "Negatron Cloak",
		details: "+20 Magic Resist."
		});
		
	baseItems.push({
		title: "Recurve Bow",
		details: "+20% Attack Speed."
		});
		
	baseItems.push({
		title: "Spatula",
		details: "Used to build items."
		});
		
	baseItems.push({
		title: "Tear of the Goddess",
		details: "+20 Mana."
		});
	
	//combo items	
	comboItems.push({
		title: "Blade of the Ruined King",
		details: "Wearer is also a Blademaster.",
		components: ["Spatula", "Recurve Bow"]
		});
	
	comboItems.push({
		title: "Bloodthirster",
		details: "35% Lifesteal.",
		components: ["B.F. Sword", "Negatron Cloak"]
		});
		
	comboItems.push({
		title: "Brawler's Gloves",
		details: "Wearer is also a Brawler.",
		components: ["Spatula", "Negatron Cloak"]
		});
		
	comboItems.push({
		title: "Cursed Blade",
		details: "Attacks have a low chance to Reduce enemy's star level by 1.",
		components: ["Negatron Cloak", "Recurve Bow"]
		});
		
	comboItems.push({
		title: "Darkin",
		details: "Wearer is also a Demon.",
		components: ["Spatula", "Tear of the Goddess"]
		});
		
	comboItems.push({
		title: "Dragon's Claw",
		details: "Gain 83% resistance to magic damage.",
		components: ["Negatron Cloak"]
		});
		
	comboItems.push({
		title: "Force of Nature",
		details: "Gain 1+ Team Size.",
		components: ["Spatula"]
		});
		
	comboItems.push({
		title: "Frozen Heart",
		details: "Adjacent enemies Attack Speed is 20% Slower.",
		components: ["Tear of the Goddess", "Chain Vest"]
		});
		
	comboItems.push({
		title: "Frozen Mallet",
		details: "Wearer is also a Glacial.",
		components: ["Spatula", "Giant's Belt"]
		});
		
	comboItems.push({
		title: "Guardian Angel",
		details: "Wearer revives with 300 Health.",
		components: ["B.F. Sword", "Chain Vest"]
		});
		
	comboItems.push({
		title: "Guinsoo's Rageblade",
		details: "Attacks grant 5% Attack Speed. Stacks infinitely.",
		components: ["Recurve Bow", "Needlessly Large Rod"]
		});
		
	comboItems.push({
		title: "Hextech Gunblade",
		details: "Heal for 25% of all damage dealt.",
		components: ["B.F. Sword", "Needlessly Large Rod"]
		});
		
	comboItems.push({
		title: "Hush",
		details: "Attacks have a high chance to Silence.",
		components: ["Negatron Cloak", "Tear of the Goddess"]
		});
		
	comboItems.push({
		title: "Infinity Edge",
		details: "Critical Strikes deal +100% damage.",
		components: ["B.F. Sword"]
		});
		
	comboItems.push({
		title: "Ionic Spark",
		details: "Whenever an enemy casts a spell, they take 100 damage.",
		components: ["Negatron Cloak", "Needlessly Large Rod"]
		});
		
	comboItems.push({
		title: "Knight's Vow",
		details: "Wearer is also a Knight.",
		components: ["Spatula", "Chain Vest"]
		});
		
	comboItems.push({
		title: "Locket of the Iron Solari",
		details: "On start of combat, all adjacent allies gain a shield of 200.",
		components: ["Chain Vest", "Needlessly Large Rod"]
		});
		
	comboItems.push({
		title: "Luden's Echo",
		details: "Spells deal 100 splash damage on hit.",
		components: ["Needlessly Large Rod", "Tear of the Goddess"]
		});
		
	comboItems.push({
		title: "Morellonomicon",
		details: "Spells deal burn damage equal to 10% of the enemy's maximum health per second.",
		components: ["Needlessly Large Rod", "Giant's Belt"]
		});
		
	comboItems.push({
		title: "Phantom Dancer",
		details: "Wearer dodges all Critical Strikes.",
		components: ["Chain Vest", "Recurve Bow"]
		});
		
	comboItems.push({
		title: "Rabadon's Deathcap",
		details: "Spell Damage +50% AP.",
		components: ["Needlessly Large Rod"]
		});
		
	comboItems.push({
		title: "Rapid Firecannon",
		details: "Wearer's attacks cannot be dodged. Attack Range is doubled.",
		components: ["Recurve Bow"]
		});
		
	comboItems.push({
		title: "Red Buff",
		details: "Attacks deal 2.5% Maximum Health burn damage. Burned units cannot heal.",
		components: ["Chain Vest", "Giant's Belt"]
		});
		
	comboItems.push({
		title: "Redemption",
		details: "On death, heal all nearby allies for 1000 Health.",
		components: ["Giant's Belt", "Tear of the Goddess"]
		});
		
	comboItems.push({
		title: "Runaan's Hurricane",
		details: "Attacks 2 additional enemies. These additional attacks deal 50% damage.",
		components: ["Negatron Cloak", "Spatula"]
		});
		
	comboItems.push({
		title: "Seraph's Embrace",
		details: "Regain 20 mana each time a spell is cast.",
		components: ["Tear of the Goddess"]
		});
		
	comboItems.push({
		title: "Spear of Shojin",
		details: "After casting an ability, wearer gains 20% of its max mana per attack.",
		components: ["B.F. Sword", "Tear of the Goddess"]
		});
		
	comboItems.push({
		title: "Statikk Shiv",
		details: "Every 3rd attack deals 100 splash magical damage.",
		components: ["Recurve Bow", "Tear of the Goddess"]
		});
		
	comboItems.push({
		title: "Sword Breaker",
		details: "Attacks have a chance to disarm.",
		components: ["Chain Vest", "Negatron Cloak"]
		});
		
	comboItems.push({
		title: "Sword of the Divine",
		details: "Each second, the wearer has a 5% chance to gain 100% Critical Strike.",
		components: ["B.F. Sword", "Recurve Bow"]
		});
		
	comboItems.push({
		title: "Thornmail",
		details: "Reflect 25% of damage taken from attacks.",
		components: ["Chain Vest"]
		});
		
	comboItems.push({
		title: "Titanic Hydra",
		details: "Attacks deal 10% of the wearer's max Health as splash damage.",
		components: ["Giant's Belt", "Recurve Bow"]
		});
		
	comboItems.push({
		title: "Warmog's Armor",
		details: "Wearer regenerates 5% max Health per second.",
		components: ["Giant's Belt"]
		});
		
	comboItems.push({
		title: "Youmuu's Ghostblade",
		details: "Wearer is also an Assassin.",
		components: ["Spatula", "B.F. Sword"]
		});
		
	comboItems.push({
		title: "Yuumi",
		details: "Wearer is also a Sorcerer.",
		components: ["Spatula", "Needlessly Large Rod"]
		});
		
	comboItems.push({
		title: "Zephyr",
		details: "On start of combat, banish an enemy for 5 seconds.",
		components: ["Giant's Belt", "Negatron Cloak"]
		});
		
	comboItems.push({
		title: "Zeke's Herald",
		details: "Adjacent allies gain +12.5% Attack Speed.",
		components: ["B.F. Sword", "Giant's Belt"]
		});
		
		
	function createIcon(item, container){
		if(item == undefined)
			return;
		
		var $imgContainer = $("<div/>").addClass("tooltip");
		
		var $img = $("<img/>")
		$img.attr("src", `${imageBasePath}/${encodeURI(item.title)}.png`);
		
		var $tooltipTitle = $("<div/>").addClass("tooltipTitle").text(item.title);
		var $tooltipDetails = $("<div/>").addClass("tooltipDetails").text(item.details);
		
		var $tooltipText = $("<div/>").addClass("tooltipText");
		
		$tooltipText.append($tooltipTitle);
		$tooltipText.append($tooltipDetails);
		
		if(item.components != undefined)
		{
			var $tooltipComponents = $("<div/>").addClass("tooltipComponents");
			
			var componentItems = baseItems.filter(baseItem => item.components.includes(baseItem.title));
			
			for(var i = 0; i < componentItems.length; i++)
			{
				var $componentImage = $("<img/>").addClass("componentImage");
				$componentImage.attr("src", `${imageBasePath}/${encodeURI(componentItems[i].title)}.png`);
				
				$tooltipComponents.append($componentImage);
			}
			
			$tooltipText.append($tooltipComponents);
		}
		
		$imgContainer.append($img);
		$imgContainer.append($tooltipText);
		
		container.append($imgContainer);
	}

	// create table
	var $table = $('<table>');

	// caption
	$table.append('<caption>TFT Item Grid</caption>');

	// thead
	var $thead = $table.append('<thead>').children('thead');
	var $headerRow = $thead.append('<tr />').children('tr');


	var $th = $("<th />");
	$headerRow.append($th);
	
	//add items to header
	for(var i = 0; i < baseItems.length; i++)
	{
		var $th = $("<th />");
		createIcon(baseItems[i], $th)
		$headerRow.append($th);
	}

	//tbody
	var $tbody = $table.append('<tbody />').children('tbody');

	for(var i = 0; i < baseItems.length; i++)
	{
		var $tr = $tbody.append('<tr />').children('tr:last')
		
		var $th = $("<th />");
		createIcon(baseItems[i], $th)
		$tr.append($th);
		
		for(var j = 0; j < baseItems.length; j++)
		{
			var $td = $("<td />");
			
			var item = comboItems.find(function(comboItem){
				//if base item x 2
				if(i == j)
				{
					return comboItem.components.includes(baseItems[i].title) && comboItem.components.length == 1;
				}

				
				return comboItem.components.includes(baseItems[i].title) &&
				comboItem.components.includes(baseItems[j].title)
			});
			
			createIcon(item, $td)
			
			$tr.append($td);
		}
	}

	// add table to dom
	$table.appendTo('body');

});


