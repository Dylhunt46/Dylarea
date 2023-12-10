setTimeout(function () {
  customElements.define(
    'count-up',
    class extends HTMLElement {
      constructor() {
        super();
        this.textContent = 'Bonjour';
      }
    }
  );
}, 5000);
