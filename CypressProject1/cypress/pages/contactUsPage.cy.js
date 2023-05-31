/// <reference types="cypress"/>

class contactUsPage{
    elements={
        alertAccept : () => cy.get('#hs-eu-confirmation-button'),
        firstNameInput : () => cy.get('#firstname-b15d4232-7672-429d-81fd-a00020bddf95'),
        lastNameInput : () => cy.get('#lastname-b15d4232-7672-429d-81fd-a00020bddf95'),
        emailInput : () => cy.get('#email-b15d4232-7672-429d-81fd-a00020bddf95'),
        mobilePhoneNumberInput : () => cy.get('#mobilephone-b15d4232-7672-429d-81fd-a00020bddf95'),
        messageBoxInput : () => cy.get('#message-b15d4232-7672-429d-81fd-a00020bddf95'),
        sendMessageButton : () => cy.get('.actions > .btn'),
        successTxt : () => cy.get('h3'),
        errorText : () => cy.contains('Please complete this required field.'),
        errorTxtFirstName : () => cy.get('.hs_firstname > .no-list > li > .hs-error-msg'),
        errorTxtLastName : () => cy.get('.hs_lastname > .no-list > li > .hs-error-msg'),
        errorTxtEmail : () => cy.get('.hs_email > .no-list > li > .hs-error-msg'),
        errorTxtMobileNo : () => cy.get('.hs_mobilephone > .no-list > li > .hs-error-msg'),
    }

    alertAccept(){
        this.elements.alertAccept().click();
    }

    enterFirstName(firstName)
   {
    //    this.elements.firstNameInput().clear();
       this.elements.firstNameInput().type(firstName);
   }
   enterLastName(lastName)
   {
    //    this.elements.lastNameInput().clear();
       this.elements.lastNameInput().type(lastName);
   }
   enterEmail(email)
   {
    //    this.elements.emailInput().clear();
       this.elements.emailInput().type(email);
   }
   enterMobilePhoneNumber(mobilePhoneNumber)
   {
    //    this.elements.mobilePhoneNumberInput().clear();
       this.elements.mobilePhoneNumberInput().type(mobilePhoneNumber);
   }
   enterMessage(messageBox)
   {
    //    this.elements.messageBoxInput().clear();
       this.elements.messageBoxInput().type(messageBox);
   }

    submitForm(){
        this.elements.sendMessageButton().click();
    }
}

    export default contactUsPage;
    // require('cypress-xpath')
