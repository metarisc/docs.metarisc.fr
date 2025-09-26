document.addEventListener('DOMContentLoaded', (event) => {
  // Si dans l'url demande un hash, on essaye de scroller jusqu'à l'élément correspondant
  if (window.location.hash) {
    const id = window.location.hash.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  }
});