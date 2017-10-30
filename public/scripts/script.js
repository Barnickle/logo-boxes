

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
    e.preventDefault();
    if (link.pathname.startsWith('/apps/')) {
      window.fetch(link.pathname);
    } else {
      app.displayWindow(link.dataset.title, link.href);
    }
    if (link.parentElement.dataset.hueip) {
      const ds = link.parentElement.dataset;
      fetch(`http://${ds.hueip}/api/${ds.hueusername}/lights/1/state`, {
        method: 'post',
        body: link.dataset.huepost
      });
    }
  }, false);
}
