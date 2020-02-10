class Menu {

      // Constructor
      constructor() {
            this.hamburgerButtonOpen = document.querySelector( '.hamburger--open' );
            this.hamburgerButtonCLose = document.querySelector( '.hamburger--close' );
            this.navigationMenu = document.querySelector( '.header__nav' );
            this.bodyScroll = document.querySelector( 'body' );
            this.events();
      }

      // Events
      events() {
            
            this.hamburgerButtonOpen.onclick = this.hamburgerOpenMenu.bind( this );
            this.hamburgerButtonCLose.onclick = this.hamburgerCloseMenu.bind( this );
      }

      // Methods
      hamburgerOpenMenu() {
            this.hamburgerButtonOpen.classList.remove( 'active' );
            this.hamburgerButtonCLose.classList.add( 'active' );
            this.navigationMenu.classList.add( 'open' );
            this.bodyScroll.classList.add( 'body-no-scroll' );
      }

      hamburgerCloseMenu() {
            this.hamburgerButtonOpen.classList.add( 'active' );
            this.hamburgerButtonCLose.classList.remove( 'active' );
            this.navigationMenu.classList.remove( 'open' );
            this.bodyScroll.classList.remove( 'body-no-scroll' );
      }
}

let navigationClick = new Menu();