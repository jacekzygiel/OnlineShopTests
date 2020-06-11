context("Login", () => {
    let usersData;

    before(() => {
        cy.fixture("users").then(($users) => usersData = $users);
    });

    beforeEach(() => {
        cy.visit("/");
    });

    describe("Registered user", () => {
        it("can login", () => {
            let user = usersData.standard_user;
            cy.visit("/");
            cy.get("[data-test=username]").type(user.login);
            cy.get("[data-test=password]").type(user.password);
            cy.get(".btn_action").click();
            cy.url()
                .should("contain", "inventory");
            cy.get(".product_label")
                .should("be.visible");
            cy.getSessionStorage("session-username").should("eq", "standard_user");
        });
    });
});