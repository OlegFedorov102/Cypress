describe('Покемоны', function () {

    it('Покупка аватара', function () {
         cy.visit('https://pokemonbattle.ru/login')
         cy.get('#k_email').type('USER_LOGIN')
         cy.get('#k_password').type('USER_PASSWORD5')
         cy.get('.MuiButton-root').click()
         cy.get('.header_card_trainer').click()
         cy.get('.k_mobile > :nth-child(5)').click()
         cy.get('.available > button').first().click();
         cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4444333322221111')
         cy.get(':nth-child(1) > .style_1_base_input').type('0527')
         cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125')
         cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('OLEG FEDOROV')
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click()
         cy.get('.style_1_base_input').type('Правильный пароль от смс-ки: 56456')
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click()
         cy.get('.payment_form_card_form').contains('Покупка прошла успешно').should('be.visible')
         
     })
    
     


 }) 
 
 
 
