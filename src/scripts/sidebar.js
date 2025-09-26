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
      console.log(items);
      items.classList.toggle('hide', hide);
      items.classList.toggle('show', !hide);
    }

    scrollToActiveLink() {
      const activeLink = this.getActiveLink();
      if (activeLink) {
        activeLink.scrollIntoView({ block: 'center' });
      }
    }
  }