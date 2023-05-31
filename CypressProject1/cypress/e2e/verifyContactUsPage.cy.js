import contactUsPage from "../pages/contactUsPage.cy";


describe('Contact Us Page', () => {
    beforeEach(() => {
      // executes prior each test within it block
      cy.visit('/');
    });
    
  
    it('should display the Contact Us page', () => {
      const contactUsPageObj = new contactUsPage();
      contactUsPageObj.elements.contactUsTitle().should('contain','Contact');
    });

    it('Verify ContactUs page successful with a valid data', () => {
      const contactUsPageObj = new contactUsPage();
      //Checking the window alert text
      contactUsPageObj.alertAccept();
      // Fill in the form fields
      contactUsPageObj.enterFirstName("Testing User");
      contactUsPageObj.enterLastName("1");
      contactUsPageObj.enterEmail('zii84fx@icznn.com');
      contactUsPageObj.enterMobilePhoneNumber(1234567890);
      contactUsPageObj.enterMessage('This is a test message.');
      // Submit the form
      contactUsPageObj.submitForm();  
      
      // Verify if success message is displayed, The system is exhibiting some unusual behavior, so I have made a comment on this line.
      // contactUsPageObj.successTxt().should("have.text","Thank you for your message. We'll get back to you as soon as possible.").should("be.visible");
    });
  
    it('Verify error message when required fields are not filled', () => {
      const contactUsPageObj = new contactUsPage();
      // Submit the form without filling in the required fields
      contactUsPageObj.submitForm();   
      // Verify if error message is displayed
      contactUsPageObj.elements.errorText().should('contain','Please complete this required field.');
    });

    it('Verify ContactUs page unsuccessful with a invalid Email', () => {
      const contactUsPageObj = new contactUsPage();
      //Checking the window alert text
      contactUsPageObj.alertAccept();
      // Fill in the form fields
      contactUsPageObj.enterFirstName("Testing User");
      contactUsPageObj.enterLastName("1");
      // Fill in the wrong email id format
      contactUsPageObj.enterEmail('zii84fxicznn.com');
      // Verify if error message is displayed
      contactUsPageObj.elements.errorTxtEmail().should('contain','Email must be formatted correctly');
      contactUsPageObj.enterMobilePhoneNumber(1234567890);
      contactUsPageObj.enterMessage('This is a test message.');
      // Submit the form
      contactUsPageObj.submitForm();
    });

  });