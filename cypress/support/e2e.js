
/**
 * Cypress Support File - Local Execution
 *
 * Configurações globais para execução local dos testes.
 * Inclui comandos personalizados, suporte a XPath
 * e integração com o Mochawesome Reporter.
 */

// Importa comandos personalizados do Cypress
import './commands';

// Habilita suporte a XPath
import 'cypress-xpath';

// Registra o Mochawesome Reporter
import 'cypress-mochawesome-reporter/register';

