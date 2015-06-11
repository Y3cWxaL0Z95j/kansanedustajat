fs = require('fs')

var raw = fs.readFileSync('./suuri-v.txt').toString().split("\n"),
	ryhmat = { 'Suuri Valiokunta.txt': [] };

for (i in raw) {
	if (i % 2 === 0) {
		var edust = raw[i] + ' <' + raw[i].toLowerCase().replace(' ', '.').replace(/[ä]/g, 'a').replace(/[ö]/g, 'p').replace(/[å]/g, 'a') + '@eduskunta.fi' + '>';
		ryhmat['Suuri Valiokunta.txt'].push(edust);
	}
}

for (var i in ryhmat) {
	fs.writeFile('./' + i, ryhmat[i].join('\n'));
}
