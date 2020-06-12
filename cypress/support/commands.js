Cypress.Commands.add("getSessionStorage", (key) => {
    cy.window().then((window) => window.sessionStorage.getItem(key));
});

Cypress.Commands.add("setSessionStorage", (key, value) => {
    cy.window().then((window) => {
        window.sessionStorage.setItem(key, value);
    });
});

Cypress.Commands.add("login", (login, password) => {
    cy.get("[data-test=username]").type(login);
    cy.get("[data-test=password]").type(password);
    cy.get(".btn_action").click();
});