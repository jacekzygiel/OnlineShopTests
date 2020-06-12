context("Checkout Page", () => {
    let usersData;

    before(() => {
        cy.fixture("users").then(($users) => usersData = $users);
    });

    beforeEach(() => {
        cy.setSessionStorage("session-username", "standard_user");
        cy.setSessionStorage("cart-contents", "[4, 3]");
    });

    describe("Order flow", () => {
        it("places an order", () => {
            let user = usersData.standard_user;
            cy.visit("checkout-step-one.html");
            cy.get('[data-test=firstName]').type(user.firstName)
            cy.get('[data-test=lastName]').type(user.lastName)
            cy.get('[data-test=postalCode]').type(user.zip)
            cy.get('.btn_primary').click()

            cy.url()
                .should("contain", "checkout-step-two");
            cy.get(".cart_list .cart_item")
                .should("have.length", 2)
            cy.get('.btn_action').click()

            cy.url()
                .should("contain", "checkout-complete");
            cy.get('#checkout_complete_container')
                .should("be.visible")
        })
    })
});