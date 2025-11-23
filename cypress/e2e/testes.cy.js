import LoginLogic from '../fixtures/Logic/automacaoLogic';

describe('Login', () => {
    beforeEach(() => {
        LoginLogic.visitarPagina();
    });

    it('Teste de Login na aplicação', () => {
        LoginLogic.preencherCampoUsuario();
        LoginLogic.preencherCampoSenha();
        LoginLogic.clicarBotaoLogin();
        LoginLogic.validaLogin();
    });
});
