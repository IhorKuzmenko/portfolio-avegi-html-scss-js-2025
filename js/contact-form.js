const contactForm = document.querySelector(".contacts__form");

if (contactForm) {
  const formMessage = document.createElement("p");

  formMessage.className = "contacts__message";
  formMessage.id = "contacts-form-message";
  formMessage.setAttribute("role", "status");
  formMessage.setAttribute("aria-live", "polite");

  contactForm.append(formMessage);

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    formMessage.textContent = "This is a demo form. No data has been sent.";

    formMessage.classList.add("contacts__message--visible");
  });

  contactForm.addEventListener("input", () => {
    formMessage.textContent = "";
    formMessage.classList.remove("contacts__message--visible");
  });
}
