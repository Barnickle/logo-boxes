const hueIP = '<bridge ip address>',
  username = '1028d66426293e821ecfd9ef1a0731df';

const app = new Vue({
  el: '#windowApp',
  data: {
    title: 'title',
    show: false,
    src: ''
  },
  methods: {
    displayWindow: function (title, src) {
      this.title = title;
      this.src = src;
      this.show = true;
    },
    close: function (e) {
      this.show = false;
      this.src = '';
    }
  }
});


const links = document.getElementsByTagName('a');
for (let i = 0; i < links.length; i++) {
  const link = links[i];
  link.addEventListener('click', function (e) {
    console.log({ link })
    if (link.pathname.startsWith('/apps/')) {
      e.preventDefault();
      window.fetch(link.pathname);
    }
    e.preventDefault();
    app.displayWindow(link.dataset.title, link.href);
    if (link.dataset.huepost) {
      fetch(`http://${hueIP}/api/${username}/lights/1/state`, {
        method: 'post',
        body: link.dataset.huepost
      });
    }
  }, false);
}
