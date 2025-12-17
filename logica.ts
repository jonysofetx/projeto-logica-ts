// Jonatan: Adicionando a lógica de validação de e-mail (Regras de Negócio)
function validarEmail(email: string): boolean {
    // Expressão regular (Regex) para verificar o formato básico de um e-mail
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Controle de fluxo: Decide se o e-mail corresponde ao padrão ou não
    if (regexEmail.test(email)) {
        console.log(`O e-mail "${email}" é válido.`);
        return true;
    } else {
        console.log(`O e-mail "${email}" é inválido.`);
        return false;
    }
}
// --- TESTANDO A LÓGICA DE VALIDAÇÃO ---

validarEmail("jonatan@projeto.com"); // Deve ser válido (true)
validarEmail("email_invalido");    // Deve ser inválido (false)
