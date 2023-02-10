const list = [ 
	{name: 'create a post', status: 'In progress', priority: 'low'}, 
    {name: 'test', status: 'Done', priority: 'high'} 
];
list.push({name: 'ToDo', status: 'Done', priority: 'high'})
list.shift()
list[0] = {name: 'study Strada', status: 'In progress', priority: 'low'}
const lala = list.find(lala => lala.name === 'study Strada')
function watch () {
	console.log('Done')
	if(list.find(fin => fin.status === 'Done')) {
		console.log('	name: create a poss, status: In progress, priority: low')
	}
	console.log('In progress')
	if(list.find(str => str.status === 'In progress')) {
		console.log('	name: create a post, status: In progress, priority: low')
	}
	console.log('ToDo') 
	console.log('	-')
}
watch()













