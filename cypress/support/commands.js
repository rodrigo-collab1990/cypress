import LoginLogic from '../fixtures/Logic/automacaoLogic';

// Comando para realizar login e salvar cookies
Cypress.Commands.add('loginComCookies', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  LoginLogic.preencherCampoUsuario();
  LoginLogic.preencherCampoSenha();
  LoginLogic.clicarBotaoLogin();
  LoginLogic.validaLogin();

  // Salva todos os cookies APÓS logar
  cy.getCookies().then((cookies) => {
    cy.writeFile('cypress/fixtures/cookies.json', cookies);
  });
});

// Comando para restaurar cookies antes dos testes
Cypress.Commands.add('restaurarCookies', () => {
  cy.readFile('cypress/fixtures/cookies.json').then((cookies) => {
    cookies.forEach((cookie) => {
      cy.setCookie(cookie.name, cookie.value);
    });
  });
});
