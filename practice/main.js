const  cities = {
	list: {
		Oren: 56,
		Moscow: 77,
		Orsk: 56,
	},
	add(name, regionNumber){
		this.list[name] = regionNumber;
	},
	delete(name){
		delete this.list[name];
	},
	plus(nameFirts, summ){
		this.list[nameFirts] = summ;
	}
};
cities.add('Ufa', 102);
console.log(cities.list);

cities.delete('Oren');
console.log(cities.list);

cities.plus('Orsk', cities.list['Orsk'] + cities.list['Moscow']);
console.log(cities.list);

