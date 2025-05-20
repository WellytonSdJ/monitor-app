import 'dotenv/config';
import { sendNotification } from './notifier.js';

// Função principal que aceita qualquer fetcher (função que retorna [{ id, label }])
export function createMonitor(fetchItemsFn, options = {}) {
  const knownIds = new Set();
  const interval = options.interval || 5 * 60 * 1000;

  async function check() {
    try {
      const items = await fetchItemsFn();
      const newItems = items.filter(item => !knownIds.has(item.id));

      if (newItems.length > 0) {
        sendNotification(newItems.length, newItems.map(i => i.label));
      }

      // Atualiza os IDs conhecidos
      knownIds.clear();
      items.forEach(item => knownIds.add(item.id));
    } catch (err) {
      console.error('Erro no monitoramento:', err.message);
    }
  }

  // Roda uma vez e depois a cada X tempo
  check();
  setInterval(check, interval);
}
