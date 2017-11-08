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
      action: 'https://ontrack.hilti.com/ontrack/app.html',
      datahue: {
        username: '1028d66426293e821ecfd9ef1a0731df',
        light: 0,
        post: {
          on: true,
          hue: 546,
          sat: 254,
          bri: 254
        }
      }
    },
    {
      title: 'Bossard',
      logo: '/old/bossard.svg',
      action: '/apps/bossard',
      datahue: {
        username: '1028d66426293e821ecfd9ef1a0731df',
        light: 1,
        post: {
          on: true,
          hue: 37856,
          sat: 254,
          bri: 254
        }
      }
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
        username: '1028d66426293e821ecfd9ef1a0731df',
        light: 2,
        post: {
          on: true,
          hue: 37856,
          sat: 254,
          bri: 254
        }
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
      datahue: {
        username: '1028d66426293e821ecfd9ef1a0731df',
        light: 3,
        post: {
          on: true,
          hue: 23114,
          sat: 254,
          bri: 254
        }
      }
    },
    {
      title: 'HSR IoT Windmesser',
      logo: '/old/bossard.svg',
      action:
        'https://www.hsr.ch/uploads/tx_icscrm/SA_Lichtensteiger_Schlegel.pdf',
      datahue: {
        username: '1028d66426293e821ecfd9ef1a0731df',
        light: 4,
        post: {
          on: true,
          hue: 36946,
          sat: 254,
          bri: 254
        }
      }
    },
    {
      title: 'Weidmann',
      logo: 'weidman.png',
      action: 'https://www.weidmann-medical.com/technologie/'
    }
  ],
  apps: {
    bossard: 'start C:\\Temp\\application.windows64\\digisens_demoapp_try40.exe'
  }
};
data.lights = data.entries.filter(e => e.datahue).map(e => e.datahue.light);

module.exports = data;
