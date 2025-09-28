document.addEventListener('DOMContentLoaded', (event) => {
    new Sidebar('#sidebar');
    new Sidebar('#sidebar-api');
});

class Sidebar {
    constructor(querySelector) {
      this.elem = document.querySelector(querySelector);  
      if (this.elem !== null) {
        this.expandActiveGroup();
        this.scrollToActiveLink();
        this.updateActiveLinkOnScroll();
      }
    }

    getActiveLink() {
      let activeLink = this.elem.querySelector(`a.active-link`);
      return activeLink;
    }
  
    expandActiveGroup() {
      const activeLink = this.getActiveLink();
  
      if (activeLink) {
        let group = activeLink.closest('.sidebar-group');
        while (group) {
          this.toggleGroup(group, false);
          group = group.parentElement.closest('.sidebar-group');
        }
      }
    }

    toggleGroup(group, hide) {
      let items = group.querySelector('.nav.collapse');
      items.classList.toggle('hide', hide);
      items.classList.toggle('show', !hide);
    }

    scrollToActiveLink() {
      const activeLink = this.getActiveLink();
      if (activeLink) {
        activeLink.scrollIntoView({ block: 'center' });
      }
    }

    updateActiveLinkOnScroll() {
      const links = this.elem.querySelectorAll('a');
      const sections = Array.from(links)
        .map(link => link.getAttribute('href'))
        .filter(href => href && href.includes('#') && !href.startsWith('#submenu'))
        .map(href => {
          const targetId = href.substring(href.indexOf('#'));
          return document.querySelector(targetId);
        })
        .filter((section) => section !== null);

      const observer = new IntersectionObserver((entries) => {
        links.forEach(link => link.classList.remove('active-link'));
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const linksActive = Array.from(links).filter(link => link.getAttribute('href').includes(`#${entry.target.id}`));
            linksActive.forEach(link => {
              link.classList.add('active-link');
            });
          }
        });
      }, { rootMargin: '-50% 0px'});

      sections.forEach(section => observer.observe(section));
    }
  }