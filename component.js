class MyModal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    const style = /* css */ `<style>
      .modal {
        background: rgba(0,0,0,0.7);
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: none;
        align-items: center;
        justify-content: center;
      }
      .modalContent {
        background: white;
        border-radius: 2rem;
        width: 40%;
        height: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    </style>`;
    const template = /* html */ `<div class="modal">
      <div class="modalContent">
        <slot></slot>
      <div>
    </div>`;
    this.shadowRoot.innerHTML = `${style} ${template}`;
  }

  open() {
    this.shadowRoot.querySelector(".modal").style.display = "flex";
  }

  close() {
    this.shadowRoot.querySelector(".modal").style.display = "none";
  }
}

customElements.define("my-modal", MyModal);
