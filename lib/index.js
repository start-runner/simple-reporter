export default (options = { mute: [] }) => (name, type, message) => {
    if (options.mute.indexOf(name) !== -1) {
        return;
    }

    if (typeof message !== 'undefined') {
        [].concat(message).forEach(function(msg) {
            console.log(`[${name}]: ${msg}`);
        });
    }

    if (type === 'start') {
        console.log(`[${name}]: start`);
    } else if (type === 'resolve') {
        console.log(`[${name}]: done`);
    } if (type === 'reject') {
        console.log(`[${name}]: error`);
    }
};
