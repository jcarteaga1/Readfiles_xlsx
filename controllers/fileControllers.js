const XLSX = require('xlsx');
var xl = require('excel4node');
personsControllers = require('../controllers/personControllers');

function read(file){
	var workbook = XLSX.readFile(file);
	var sheet_name_list = workbook.SheetNames;
	var data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
	personsControllers.addFile(data);
	return data
}

function createShipping(){
	var wb = new xl.Workbook();
	var ws = wb.addWorksheet('Sheet 1');
	var style = wb.createStyle({
	  font: {
	    color: '#FF0800',
	    size: 12,
	  },
	  numberFormat: '$#,##0.00; ($#,##0.00); -',
	});
	ws.cell(1, 1)
	  .string('UserId');
	ws.cell(1, 2)
	  .string('RoleId');
	ws.cell(1, 3)
	  .string('CompanyId');
	ws.cell(1, 4)
	  .string('DepartamentId');
	ws.cell(1, 5)
	  .string('ServiceId');
	ws.cell(1, 6)
	  .string('CityOriginId');
	ws.cell(1, 7)
	  .string('CityDestinationId');
	ws.cell(1, 8)
	  .string('postalCode');
	ws.cell(1, 9)
	  .string('SenderId');
	ws.cell(1, 10)
	  .string('nameSender');
	ws.cell(1, 11)
	  .string('addressSender');
	ws.cell(1, 12)
	  .string('nameAddressee');
	ws.cell(1, 13)
	  .string('addressAddressee');
	ws.cell(1, 14)
	  .string('AddresseeId');
	ws.cell(1, 15)
	  .string('phoneAddressee');
	ws.cell(1, 16)
	  .string('emailAddresse');
	ws.cell(1, 17)
	  .string('reference');
	ws.cell(1, 18)
	  .string('observations');
	ws.cell(1, 19)
	  .string('weight');
	ws.cell(1, 20)
	  .string('quantity');
	ws.cell(1, 21)
	  .string('width');
	ws.cell(1, 22)
	  .string('long');
	ws.cell(1, 23)
	  .string('high');
	ws.cell(1, 24)
	  .string('insuredValue');
	ws.cell(1, 25)
	  .string('value');

	wb.write('./public/Excel.xlsx');
}	

function assignShipping(){
	var wb = new xl.Workbook();
	var ws = wb.addWorksheet('Sheet 1');
	var style = wb.createStyle({
	  font: {
	    color: '#FF0800',
	    size: 12,
	  },
	  numberFormat: '$#,##0.00; ($#,##0.00); -',
	});
	ws.cell(1, 1)
	  .string('ShippingId');
	ws.cell(1, 2)
	  .string('DeliveryCourierId');
	ws.cell(1, 3)
	  .string('OperatorId');

	wb.write('Excel.xlsx');
}

assignShipping(); 

module.exports={
	read
}