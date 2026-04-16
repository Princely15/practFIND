const mythicalCreatures = [
	{name: "Dragon", type: "Fire", lastSeen: "Volcano Valley"},
	{name: "Mermaid", type: "Water", lastSeen: "Coral Caves"},
	{name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest"},
	{name: "Griffin", type: "Air", lastSeen: "Highwind Mountains"},
	{name: "Kraken", type: "Water", lastSeen: "Abyssal Depths"}
];

// tasks 1

const waterMythicalCreatures = mythicalCreatures.find(function(creature){
    return creature.type ===  "Water"
});
console.log (waterMythicalCreatures.name)

// tasks 2

const mythicalCreatIndex = mythicalCreatures.findIndex(function(creature){
    return creature.name === "Griffin"
});
console.log (mythicalCreatIndex.name);

// task 3
const lastSeenCreature = mythicalCreatures.find(function(creature){
    return creature.lastSeen === "Enchanted Forest"
});
console.log (lastSeenCreature.lastSeen);