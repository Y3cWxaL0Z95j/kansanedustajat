fs = require('fs')

var raw = fs.readFileSync('./kaikki.txt').toString().split("\n"),
	ryhmat = {};

for (i in raw) {
	if (i % 2 === 0) {
		var edust = raw[i] + ' <' + raw[i].toLowerCase().replace(' ', '.').replace(/[ä]/g, 'a').replace(/[ö]/g, 'o').replace(/[å]/g, 'a').replace(/[é]/g, 'e') + '@eduskunta.fi' + '>';
	}
	else {
		if (!ryhmat[raw[i]]) {
			ryhmat[raw[i]] = [];
		}

		ryhmat[raw[i]].push(edust);
	}
}

for (var i in ryhmat) {
	console.log('./' + i + '.txt');
	fs.writeFile('./' + i + '.txt', ryhmat[i].join('\n'));
}