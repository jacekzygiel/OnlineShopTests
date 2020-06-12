context("Login page", () => {
    let usersData;

    before(() => {
        cy.fixture("users").then(($users) => usersData = $users);
    });

    beforeEach(() => {
        cy.setUserSessionStorage("");
        cy.visit("/");
    });

    describe("User login", () => {
        it("should allow registered user to login", () => {
            let user = usersData.standard_user;
            cy.login(user.login, user.password);
            cy.url()
                .should("contain", "inventory");
            cy.getUserSessionStorage()
                .should("eq", "standard_user");
            });
    });
});