// Jonatan: Adicionando a lógica de validação de e-mail (Regras de Negócio)
function validarEmaillogistica(email) {
    // Expressão regular (Regex) para verificar o formato básico de um e-mail
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Controle de fluxo: Decide se o e-mail corresponde ao padrão ou não
    if (regexEmail.test(email)) {
        console.log("O e-mail \"".concat(email, "\" \u00E9 v\u00E1lido."));
        return true;
    }
    else {
        console.log("O e-mail \"".concat(email, "\" \u00E9 inv\u00E1lido."));
        return false;
    }
}
// --- TESTANDO A LÓGICA DE VALIDAÇÃO ---
validarEmail("jonatan@projeto.com"); // Deve ser válido (true)
validarEmail("email_invalidolo"); // Deve ser inválido (false)
