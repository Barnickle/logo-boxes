
const data = {
	title: 'DigitalLab @ HSR',
	entries: [
		{
			title: 'Digitallab',
			logo: 'digitallab.png',
			action: 'http://digitallabathsr.ch/'
		},
		{
			title: 'Hilti',
			logo: 'hilti.png',
			action: 'https://ontrack.hilti.com/ontrack/app.html'
		},
		{
			title: 'Bossard',
			logo: '/old/bossard.svg',
			action: '/apps/bossard',
			datahue: {
				username: '1028d66426293e821ecfd9ef1a0731df',
				ip: '192.234.52.24',
				post: {
					on: true,
					sat: 254,
					bri: 254,
					hue: 10000
				},
			},
		},
		{
			title: 'Bossard',
			logo: 'bossard.png',
			action: '/bossard/de/smart-factory-logistics.aspx',
			proxy: {
				path: '/bossard',
				website: 'https://www.bossard.com'
			},
			datahue: {
				username: '54190cd808b703655886dffc0ea3f5e2',
				ip: '192.234.52.22',
				post: { //example
					on: true,
					sat: 254,
					bri: 254,
					hue: 5000
				},
			},
			style: {
				'object-fit': 'cover',
				'object-position': 'top'
			}
		},
		{
			title: 'Mettler Toledo',
			logo: 'Mettler_Toledo.png',
			action: 'https://www.mt.com/ch/de/home.html',
		},
		{
			title: 'HSR IoT Windmesser',
			logo: '/old/bossard.svg',
			action: 'https://www.hsr.ch/uploads/tx_icscrm/SA_Lichtensteiger_Schlegel.pdf',
		},
		{
			title: 'Weidmann',
			logo: 'weidman.png',
			action: 'https://www.weidmann-medical.com/technologie/'
		},
	],
	apps: {
		bossard: 'start C:\\Temp\\application.windows64\\digisens_demoapp_try40.exe'
	}
}

module.exports = data;