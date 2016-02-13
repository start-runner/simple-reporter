export default (options = { mute: [] }) => (name, type, message) => {
    if (options.mute.indexOf(name) !== -1) {
        return;
    }

    if (typeof message !== 'undefined') {
        // hard error
        if (message instanceof Error) {
            console.error(message.stack);
        // soft error(s)
        } else if (typeof message !== 'undefined') {
            [].concat(message).forEach(msg => {
                console.log(`[${name}]: ${msg}`);
            });
        }
    }

    if (type === 'start') {
        console.log(`[${name}]: start`);
    } else if (type === 'resolve') {
        console.log(`[${name}]: done`);
    } else if (type === 'reject') {
        console.log(`[${name}]: error`);
    }
};
