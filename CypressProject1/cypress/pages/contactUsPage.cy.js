/// <reference types="cypress"/>

class contactUsPage{
    elements={
        contactUsTitle : () => cy.get('.display-4'),
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

    contactUsTitle(){
       return this.elements.contactUsTitle().click();
    }

    alertAccept(){
       return this.elements.alertAccept().click();
    }

    enterFirstName(firstName)
    {
        return this.elements.firstNameInput().type(firstName, { force: true });   
    }
    
    enterLastName(lastName)
    {
        return this.elements.lastNameInput().type(lastName, { force: true });
    }

    enterEmail(email)
    {
        return this.elements.emailInput().type(email, { force: true });
    }
    enterMobilePhoneNumber(mobilePhoneNumber)
    {
        return this.elements.mobilePhoneNumberInput().type(mobilePhoneNumber, { force: true });
    }
   
    enterMessage(messageBox)
    {
        return this.elements.messageBoxInput().type(messageBox, { force: true });
    }

    submitForm(){
       return this.elements.sendMessageButton().click({ force: true });
    }

    successTxt()
    {
        return this.elements.successTxt();
    }
}

    export default contactUsPage;
    // require('cypress-xpath')
