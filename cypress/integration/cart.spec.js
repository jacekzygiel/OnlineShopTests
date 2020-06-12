context("Cart Page", () => {

    beforeEach(() => {
        cy.setUserSessionStorage("standard_user");
        cy.setCartSessionStorage("[0, 2]");
        cy.visit("cart.html");
    });

    describe("Items", () => {
        it("removes item from cart", () => {
            cy.get(".cart_list .cart_item")
                .first().as("firstItem");

            cy.get("@firstItem")
                .find(".btn_secondary")
                .click();

            cy.get(".cart_item")
                .should("have.length", 1);
            cy.getCartSessionStorage()
                .should("eq", "[2]");
        });
    });
});