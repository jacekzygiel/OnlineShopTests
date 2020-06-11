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
            cy.login(user.login, user.password);
            cy.url()
                .should("contain", "inventory");
            cy.get(".product_label")
                .should("be.visible");
        });
    });
});