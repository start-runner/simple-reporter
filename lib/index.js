export default function(log) {
    if (typeof log.messages !== 'undefined') {
        [].concat(log.messages).forEach(function(message) {
            console.log(`[${log.name}]: ${message}`);
        });
    }

    if (log.type === 'task-start') {
        console.log(`[${log.name}]: start`);
    } else if (log.type === 'task-resolve') {
        console.log(`[${log.name}]: done`);
    } if (log.type === 'task-reject') {
        console.log(`[${log.name}]: error`);
    }
}
