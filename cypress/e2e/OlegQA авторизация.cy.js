describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru'); // Ввести правильный логин
         cy.get('#pass').type ('iLoveqastudio1'); // Ввести правильный пароль
         cy.get('#loginButton').click(); // Нажать войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно').should('be.visible'); //Проверить нужный текст 
         cy.get('#exitMessageButton > .exitIcon').should('be.visible')//Проверить  наличие кнопки крестик
     })
     
     it('Восстановление пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').click(); //  Нажать «Забыли пароль»
         cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввести любой имейл
         cy.get('#restoreEmailButton').click (); // Нажать Отправить код
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail').should('be.visible'); //Проверить нужный текст 
         cy.get('#exitMessageButton > .exitIcon').should('be.visible')//Проверить  наличие кнопки крестик
     })

     it('Верный логин и неверный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru'); // Ввести правильный логин
         cy.get('#pass').type ('iLoveqastudio27'); // Ввести неправильный пароль
         cy.get('#loginButton').click(); // Нажать войти
         cy.get('#messageHeader').contains('Такого логина или пароля нет').should('be.visible'); //Проверить нужный текст 
         cy.get('#exitMessageButton > .exitIcon').should('be.visible')//Проверить  наличие кнопки крестик
     })

     it('Неверный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('German@dolnikov.ru'); // Ввести неверный логин
         cy.get('#pass').type ('iLoveqastudio1'); // Ввести правильный пароль
         cy.get('#loginButton').click(); // Нажать войти
         cy.get('#messageHeader').contains('Такого логина или пароля нет').should('be.visible'); //Проверить нужный текст 
         cy.get('#exitMessageButton > .exitIcon').should('be.visible')//Проверить  наличие кнопки крестик
     })
 
     it('Логин без @', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('germandolnikov.ru'); // Ввести логин без @
         cy.get('#pass').type ('iLoveqastudio1'); // Ввести правильный пароль
         cy.get('#loginButton').click(); // Нажать войти
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации').should('be.visible'); //Проверить нужный текст 
         
     })

     it('Приведение к строчным буквам', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввести правильный логин с Заглавными
         cy.get('#pass').type ('iLoveqastudio1'); // Ввести правильный пароль
         cy.get('#loginButton').click(); // Нажать войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно').should('be.visible'); //Проверить нужный текст 
         cy.get('#exitMessageButton > .exitIcon').should('be.visible')//Проверить  наличие кнопки крестик
     })
     

     


 }) 
 
describe('Проверка авторизации', function () {
    it('Покупка нового аватара', function () {
         cy.visit('https://pokemonbattle.ru/login'); // Зайти на сайт
 
 })