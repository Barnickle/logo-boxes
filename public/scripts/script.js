const hueip = '152.96.239.205';
const username = 'adsf';

const app = new Vue({
  el: '#windowApp',
  data: {
    title: 'title',
    show: false,
    src: ''
  },
  methods: {
    displayWindow: function(title, src) {
      this.title = title;
      this.src = src;
      this.show = true;
    },
    close: function(e) {
      this.show = false;
      this.src = '';
    }
  }
});

const links = document.getElementsByTagName('a');
for (let i = 0; i < links.length; i++) {
  const link = links[i];
  link.addEventListener(
    'click',
    function(e) {
      e.preventDefault();
      if (link.pathname.startsWith('/apps/')) {
        fetch(link.pathname);
      } else {
        app.displayWindow(link.dataset.title, link.href);
      }
      const ds = link.parentElement.dataset;
      if (ds.hueusername) {
        lightUp(ds.huelight, ds.huepost);
      }
    },
    false
  );
}

const lights = JSON.parse(
  document.getElementsByClassName('entries')[0].dataset.huelights
);

function lightUp(light, command) {
  // turn off all lights except light
  lights.forEach(l => l != light && lightSet(l));
  lightSet(light, command);
}

function lightSet(light, command = JSON.stringify({ on: false })) {
  fetch(`http://${hueip}/api/${username}/lights/${light}/state`, {
    method: 'post',
    body: command
  });
}
