
/**
 * Factory responsável por gerar dados de usuários
 * para os testes automatizados do Automation Exercise.
 *
 * Permite sobrescrever campos específicos através
 * do parâmetro overrides.
 */

function createUser(overrides = {}) {
  // Gera um identificador exclusivo para cada usuário
  const uniqueId = `${Date.now()}-${Cypress._.random(100000, 999999)}`;

  const user = {
    // Informações iniciais de cadastro
    name: `Usuario QA ${uniqueId}`,
    email: `danielle.qa.${uniqueId}@test.com`,

    // Informações da conta
    password: 'Teste@123456',
    title: 'Mrs',
    birthDay: '10',
    birthMonth: 'May',
    birthYear: '1990',
    newsletter: true,
    specialOffers: true,

    // Dados pessoais
    firstName: 'Danielle',
    lastName: 'Patricio',
    company: 'QA Automation',

    // Endereço
    address: '123 Test Street',
    address2: 'Apartment 201',
    country: 'Canada',
    state: 'Ontario',
    city: 'Toronto',
    zipcode: 'M5V 2T6',

    // Contato
    mobile: '11999999999'
  };

  return {
    ...user,
    ...overrides
  };
}

module.exports = { createUser };
