const {Persons} = require('../db/models');

function addFile(data){
	data.forEach(element=>{
		Persons.create(element);
	});
}

function getInfo(){
	Persons.findAll().then(persons=>{
		res.status(200).json(persons);
	});
}

module.exports={
	addFile,
	getInfo
}