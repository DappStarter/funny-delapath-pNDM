require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture stone crawl ranch come gesture person army gate'; 
let testAccounts = [
"0xd82c00fabf918a7420cd8eea556ed979b53460eaa166a3ccfe3135808d7cf7f7",
"0xd6bf4e4101ce0ab7034d3763e942567239f6ba08902935fdace8bc46cd054ce4",
"0x3ae5f667951d116120742369986b5bf3cbe35767ec016e2517bb0135160e4ba9",
"0x1ea9b2e8163e0f34b9ba32fa581d65985100288efd5e99acb897d63debf7e6ae",
"0x79f79ad256c777327f49ebf1cdb3c445493e4c48eabd5a68efd8f6b6ebbb38c2",
"0xf45962120dd9850c4ca7c27edddda34ae55c63817730314d813bec369fac2028",
"0x8349cfc12d7549cc7585f43a14292ee869a4644a6b7ddefe0533d683812c7fae",
"0x1a6e991e302a155e0181212d3dd60241fe55d6dd3a49df73092199b0b80faca1",
"0x8935cb38e1484081387e9dec2797689030ca2639f164d8d933d5889a408f96bf",
"0xc828c7561093569f3b4e6c3b6340fe0987b7a5d3992757e7abbb8c24e10e0dd2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


