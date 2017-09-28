const hueIP = '<bridge ip address>',
  username = '1028d66426293e821ecfd9ef1a0731df';

const links = document.getElementsByTagName('a');
for (let i = 0; i < links.length; i++) {
  const link = links[i];
  link.addEventListener('click', function (e) {
    console.log({ link })
    if (link.pathname.startsWith('/apps/')) {
      e.preventDefault();
      window.fetch(link.pathname);
    }
    if (link.dataset.huepost) {
      fetch(`http://${hueIP}/api/${username}/lights/1/state`, {
        method: 'post',
        body: link.dataset.huepost
      });
    }
  }, false);
}
