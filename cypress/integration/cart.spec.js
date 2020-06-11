context("Cart Page", () => {

    beforeEach(() => {
        cy.setSessionStorage("session-username", "standard_user");
        cy.setSessionStorage("cart-contents", "[4, 3]");
        cy.visit("cart.html");
    });

    describe("Items", () => {
        it("removes item from cart", () => {
            cy.get(".cart_list .cart_item")
                .first().as("firstItem");

            cy.get("@firstItem")
                .find(".btn_secondary")
                .click();

            cy.get(".cart_item").should("have.length", 1);
            cy.getSessionStorage("cart-contents").should("eq", "[3]");
        });
    });
});