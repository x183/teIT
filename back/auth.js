import express from 'express';
const app = express();
app.get('/auth:pass', (req, res) => {
	const {pass} = req.params;
	if (pass === '123'){
		res.send('OK');
	}
	else {
		res.send('NO');
	}
});