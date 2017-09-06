
const links = document.getElementsByTagName('a');
for (let i = 0; i < links.length; i++) {
  const link = links[i];
  link.addEventListener('click', function (e) {
    console.log({ link })
    if (link.pathname.startsWith('/apps/')) {
      e.preventDefault();
      window.fetch(link.pathname);
    }
  }, false);
}
