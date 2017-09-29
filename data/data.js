
const data = {
	title: 'DigitalLab @ HSR',
	entries: [
		{
			title: 'Digitallab',
			logo: 'digitallab.png',
			action: 'https://ontrack.hilti.com/ontrack/app.html'
		},
		{
			title: 'Hilti',
			logo: 'hilti.png',
			action: 'https://ontrack.hilti.com/ontrack/app.html'
		},
		{
			title: 'Bossard',
			logo: 'bossard.png',
			action: '/bossard/de/smart-factory-logistics.aspx',
			proxy: {
				path: '/bossard',
				website: 'www.bossard.com'
			},
			datahuepost: { //example
				on: true,
				sat: 254,
				bri: 254,
				hue: 10000
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
		{
			title: 'Tracktics',
			logo: 'tracktics.png',
			action: '/apps/bosch',
			style: {
				'background-color': 'rgba(0, 0, 0, 1)',
				padding: '10px',
			}
		},
	],
	apps: {
		bosch: 'start C:\\WINDOWS\\system32\\cmd.exe'
	}
}

module.exports = data;