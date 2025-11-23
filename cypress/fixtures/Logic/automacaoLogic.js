import elementos from '../../fixtures/Page/automacaoPage';  

class LoginLogic {

    visitarPagina(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');        
    }

    preencherCampoUsuario() {
        cy.get(elementos.campoUsuario).type('Admin');
    }
            
    preencherCampoSenha(){
        cy.get(elementos.campoSenha).type('admin123')
    }

    clicarBotaoLogin(){
        cy.get(elementos.botaoLogin).click();    
    }

    validaLogin(){
        cy.get(elementos.elementoValidaLogin).contains('Time at Work').should('be.visible');
    }
}

export default new LoginLogic();
