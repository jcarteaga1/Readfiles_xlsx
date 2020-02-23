const XLSX = require('xlsx');
personsControllers = require('../controllers/personControllers');

function read(file){
	var workbook = XLSX.readFile(file);
	var sheet_name_list = workbook.SheetNames;
	var data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
	personsControllers.addFile(data);
	return data
}

module.exports={
	read
}