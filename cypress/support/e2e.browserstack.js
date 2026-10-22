
/**
 * Cypress Support File - BrowserStack Execution
 *
 * Configurações globais para execução remota dos testes.
 * Inclui comandos personalizados e suporte a XPath.
 *
 * O Mochawesome não é registrado neste ambiente,
 * pois os relatórios são gerenciados pelo BrowserStack.
 */

// Importa comandos personalizados do Cypress
import './commands';

// Habilita suporte a XPath
import 'cypress-xpath';
