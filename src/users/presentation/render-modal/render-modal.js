import modalHtml from "./render-modal.html?raw";
import "./render-modal.css";

let modal;

export const showModal = () => {
  modal?.classList.remove("hide-modal");
};

export const hideModal = () => {
  modal?.classList.add("hide-modal");
};
/**
 *
 * @param {HTMLDivElement} element
 * @returns
 */
export const renderModal = (element) => {
  if (modal) return;
  modal = document.createElement("div");
  modal.innerHTML = modalHtml;
  modal.className = "modal-conatiner hide-modal";
  form = modal.querySelector("form");

  modal.addEventListener("click", (event) => {
    if (event.target.className !== "modal-container") {
      hideModal();
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  element.append(modal);
};
