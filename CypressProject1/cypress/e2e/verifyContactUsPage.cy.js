import contactUsPage from "../pages/contactUsPage.cy";


describe('Contact Us Page', () => {
    beforeEach(() => {
      // executes prior each test within it block
      cy.visit('https://www.founderandlightning.com/contact');
    });
    
  
    it('should display the Contact Us page', () => {
      const contactUsPageObj = new contactUsPage();
      contactUsPageObj.elements.contactUsTitle().should('contain','CONTACT US');
    });

    it('Verify ContactUs page successful with a valid data', () => {
      const contactUsPageObj = new contactUsPage();
      //Checking the window alert text
      contactUsPageObj.alertAccept();
      cy.wait(5000); 
      // Fill in the form fields
      contactUsPageObj.enterFirstName("Testing User",{ force: true });
      contactUsPageObj.enterLastName("1",{ force: true });
      contactUsPageObj.enterEmail('zii84fx@icznn.com',{ force: true });
      contactUsPageObj.enterMobilePhoneNumber(1234567890,{ force: true });
      contactUsPageObj.enterMessage('This is a test message.',{ force: true });
      cy.wait(5000);
      // Submit the form
      contactUsPageObj.submitForm();  
      
      // Verify if success message is displayed
      // contactUsPageObj.successText.should("have.text","Thank you for your message. We'll get back to you as soon as possible.").should("be.visible");
    });
  
    it('Verify error message when required fields are not filled', () => {
      // Submit the form without filling in the required fields
      contactUsPage.submitForm();  
      // Verify if error message is displayed
      contactUsPage.elements.errorTxt().should('contain','Please complete this required field.');
    });

    it('Verify ContactUs page unsuccessful with a invalid Email', () => {
      const contactUsPageObj = new contactUsPage();
      //Checking the window alert text
      contactUsPageObj.alertAccept();
      // Fill in the form fields
      contactUsPageObj.enterFirstName("Testing User",{ force: true });
      contactUsPageObj.enterLastName("1",{ force: true });
      // Fill in the wrong email id format
      contactUsPageObj.enterEmail('zii84fxicznn.com',{ force: true });
      // Verify if error message is displayed
      contactUsPageObj.elements.errorTxtEmail().should('contain','Email must be formatted correctly');
      contactUsPageObj.enterMobilePhoneNumber(1234567890,{ force: true });
      contactUsPageObj.enterMessage('This is a test message.',{ force: true });
      cy.wait(5000);
      // Submit the form
      contactUsPageObj.submitForm().click({force: true});
    });

  });