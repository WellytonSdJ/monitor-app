import notifier from 'node-notifier';

export function sendNotification(count, items = []) {
  notifier.notify({
    title: `🔔 ${count} novidade${count > 1 ? 's' : ''} detectada${count > 1 ? 's' : ''}`,
    message: items.join('\n'),
    sound: true
  });
}
