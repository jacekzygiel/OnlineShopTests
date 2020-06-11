context("Cart", () => {

    beforeEach(() => {
       cy.setSessionStorage("cart-contents", "[4, 3]");
       cy.fixture('users').then((users) => {
           cy.visit("/")
           cy.login(users.standard_user.login, users.standard_user.password)
        })
       cy.visit("cart.html");
    });

    describe("Product", () => {
        it("remove item from cart", () => {
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