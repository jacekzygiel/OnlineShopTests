context("Checkout Page", () => {
    let usersData;
    let inventory;
    let cart;

    before(() => {
        cy.fixture("users").then(($users) => usersData = $users);
        cy.fixture("items").then(($items) => inventory = $items);
    });

    beforeEach(() => {
        cart = [];
        cart.push(inventory.sauceBackpack.id);
        cart.push(inventory.redTatt.id);
        cy.setSessionStorage("session-username", "standard_user");
        cy.setSessionStorage("cart-contents", "[" + cart.join(",") + "]");
    });

    describe("Cart summary", () => {
        it("should display cart summary containing all added elements", () => {
            cy.visit("checkout-step-two.html");
            cy.get(".cart_list .cart_item").as("cart_items");
            cy.get("@cart_items")
                .should("have.length", 2);

            cy.get("@cart_items")
                .first()
                .find(".inventory_item_name")
                .should("have.text", inventory.sauceBackpack.name);
            cy.get("@cart_items")
                .eq(1)
                .find(".inventory_item_name")
                .should("have.text", inventory.redTatt.name);
        });
    });

    describe("Order flow", () => {
        it("places an order", () => {
            let user = usersData.standard_user;
            cy.visit("checkout-step-one.html");
            cy.get("[data-test=firstName]").type(user.firstName);
            cy.get("[data-test=lastName]").type(user.lastName);
            cy.get("[data-test=postalCode]").type(user.zip);
            cy.get(".btn_primary").click();

            cy.url()
                .should("contain", "checkout-step-two");
            cy.get(".btn_action").click();

            cy.url()
                .should("contain", "checkout-complete");
            cy.get("#checkout_complete_container")
                .should("be.visible");
        });
    });
});