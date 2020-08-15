describe("Tickets", () => {
    beforeEach(() => cy.visit("https://bit.ly/2XSuwCW"));

    it.only("fills all the text input fields", () => {
        const firstName = "Jefferson";
        const lastName = "Melo";

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type("jefferson.mello8@hotmail.com");
        cy.get("#requests").type("Nada a declarar");
        cy.get("#signature").type(`${firstName} ${lastName}`);        
    });

    it("has 'TICKETBOX' header's heading", () => {});


});