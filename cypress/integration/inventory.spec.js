context("Inventory Page", () => {

    beforeEach(() => {
        cy.setSessionStorage("session-username", "standard_user");
        cy.setSessionStorage("cart-contents", "[]");
        cy.visit("/inventory.html");
    });

    describe("Items", () => {
        it("adds item to cart", () => {
            cy.get(".inventory_list .inventory_item")
                .first().as("firstItem");

            cy.get("@firstItem")
                .find(".btn_primary")
                .click();

            cy.get(".shopping_cart_badge").should("have.text", "1");
            cy.getSessionStorage("cart-contents").should("eq", "[4]");
        });

        it("removes stored item from cart", () => {
            cy.setSessionStorage("cart-contents", "[4]")
            cy.reload()
            cy.get(".inventory_list .inventory_item")
                .first().as("firstItem");

            cy.get("@firstItem")
                .find(".btn_secondary")
                .click();

            cy.get(".shopping_cart_badge").should("not.be.visible");
            cy.getSessionStorage("cart-contents").should("eq", "[]");
        });
    });
});