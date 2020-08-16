describe("Tickets", () => {
    beforeEach(() => cy.visit("https://bit.ly/2XSuwCW"));

    it("fills all the text input fields", () => {
        const firstName = "Jefferson";
        const lastName = "Melo";

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type("jefferson.mello8@hotmail.com");
        cy.get("#requests").type("Nada a declarar");
        cy.get("#signature").type(`${firstName} ${lastName}`);        
    });

    it("select two tickets", () => {
        cy.get("#ticket-quantity").select("2");
    });

    it("select 'vip' ticket type", () => {
        cy.get("#vip").check();
    });

    it("select 'social media' checkbox", () => {
        cy.get("#social-media").check();
    });

    it("select 'friend', and 'publication', then uncheck 'friend'", () => {
        cy.get("#friend").check();
        cy.get("#publication").check();
        cy.get("#friend").uncheck();    
    })

    it.only("has 'TICKETBOX' header's heading", () => {
        cy.get("header h1")
          .should("contain", "TICKETBOX");
    });

    it.only("alerts on invalid email", () => {
        cy.get("#email")
          .as("email")
          .type("jeffersonmello8_hotmail.com");
        
        cy.get("#email.invalid")
          .should("exist");
    });

    it.only("alert does not exist", () => {
        cy.get("#email")
          .as("email")
          .type("jeffersonmello8@hotmail.com");
        
        cy.get("#email.invalid")
          .should("not.exist");
    })


});