import LoginLogic from '../fixtures/Logic/automacaoLogic';

describe('Login com Cookies', () => {

  before(() => {
    // Só faz login 1 vez no início da suíte
    cy.loginComCookies();
  });

  beforeEach(() => {
    // Em cada it, apenas restaura os cookies
    cy.restaurarCookies();
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  });

    it('Teste de Logout', () => {
    LoginLogic.clicarBotaoDaConta();
    LoginLogic.clicarBotaoLogOut();
    LoginLogic.validarLogOut();
});
});
