Cypress.Commands.add("getSessionStorage", (key) => {
    cy.window().then((window) => window.sessionStorage.getItem(key));
});

Cypress.Commands.add("setSessionStorage", (key, value) => {
    cy.window().then((window) => {
        window.sessionStorage.setItem(key, value);
    });
});

Cypress.Commands.add("setCartSessionStorage", (value) => {
    cy.setSessionStorage("cart-contents", value);
});

Cypress.Commands.add("getCartSessionStorage", () => {
    cy.getSessionStorage("cart-contents");
});

Cypress.Commands.add("setUserSessionStorage", (value) => {
    cy.setSessionStorage("session-username", value);
});

Cypress.Commands.add("getUserSessionStorage", () => {
    cy.getSessionStorage("session-username");
});

Cypress.Commands.add("login", (login, password) => {
    cy.get("[data-test=username]").type(login);
    cy.get("[data-test=password]").type(password);
    cy.get(".btn_action").click();
});
