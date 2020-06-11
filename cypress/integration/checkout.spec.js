context("Checkout Page", () => {
    let usersData;

    before(() => {
        cy.fixture("users").then(($users) => usersData = $users);
    });

    beforeEach(() => {
        cy.setSessionStorage("session-username", "standard_user");
        cy.setSessionStorage("cart-contents", "[4, 3]");
    });

    describe("User information", () => {
        it("fills user information", () => {
            let user = usersData.standard_user;
            cy.visit("checkout-step-one.html");
            cy.get('[data-test=firstName]').type(user.firstName)
            cy.get('[data-test=lastName]').type(user.lastName)
            cy.get('[data-test=lastName]').type(user.zip)
            cy.get('.btn_primary').click()
        })
    })

    describe("Cart summary", () => {
        it("should display cart summary containing all added elements", () => {
            cy.visit("checkout-step-two.html");
            cy.get(".cart_list .cart_item")
                .should("have.length", 2)
        });
    });

    describe("Place order", () => {
        it("places an order", () => {
            cy.visit("checkout-step-two.html");
            cy.get('.btn_action').click()
            cy.url()
                .should("contain", "checkout-complete");
            cy.get('#checkout_complete_container')
                .should("be.visible")
        })
    })
});