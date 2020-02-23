module.exports=(app)=>{

	fileControllers = require('../controllers/fileControllers');

	app.get('/', (req,res)=>{
		res.render('index');
	})

	app.post('/',async (req,res)=>{
		await fileControllers.read(req.file.path);
		res.send('file updated');
	})
}