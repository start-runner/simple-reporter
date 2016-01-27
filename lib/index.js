export default function(log) {
    if (typeof log.messages !== 'undefined') {
        [].concat(log.messages).forEach(function(message) {
            console.log(`[${log.name}]: ${message}`);
        });
    }

    if (log.type === 'start') {
        console.log(`[${log.name}]: start`);
    } else if (log.type === 'resolve') {
        console.log(`[${log.name}]: done`);
    } if (log.type === 'reject') {
        console.log(`[${log.name}]: error`);
    }
}
