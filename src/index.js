import { createMonitor } from './monitor.js';
import { fetchTickets } from './fetchers/tickets.js';

createMonitor(fetchTickets, { interval: 30 * 60 * 1000 }); // 30 minutos
console.log('running monitor-app')