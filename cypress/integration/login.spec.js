context("Login page", () => {
    let usersData;

    before(() => {
        cy.fixture("users").then(($users) => usersData = $users);
    });

    beforeEach(() => {
        cy.visit("/");
    });

    describe("User login", () => {
        it("should allow registered user to login", () => {
            let user = usersData.standard_user;
            cy.login(user.login, user.password);
            cy.url()
                .should("contain", "inventory");
            cy.getSessionStorage("session-username")
                .should("eq", "standard_user");
            });
    });
});