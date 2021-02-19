require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'kidney arena oxygen foot finish dash mean prosper coral light army gauge'; 
let testAccounts = [
"0xc7464bb0b9df37668d798760fb38a26544c4e2ef4f6bcd3611735f9a4d0fb256",
"0x55057a6207d2f85dfcca073cd3f17e11e020efaa6ddd5caa252ec0bbda745db0",
"0x0d793352a970a4b8e364b7528edf60427806644bbc9e47309c81d0ae596df391",
"0x4c3c4292cf544d430d6e1c570dd3eb17caac39eb5aecf36c099807474a7c5e87",
"0x764252327a97af0d4a09002b3fe2f6f630b1b6caefb8863e744706f40c2f7af7",
"0xcafff14490253bfa8983fdc3a4f4f698897c421be6dc960dd173b43979358f3e",
"0x406faa57d6d219c00ce719e16daea868dd4776c9a79cdb7225cd2f08624870e8",
"0x8af216851083a8b833107bd79ec00b2e682a9ed3ca2cde00e9764f67f5ef63ac",
"0x1213d6729c24da28757822c6e89c811053f7f065355c23989bcab71446e2405f",
"0xc593e7d93a90ae0b850960ca5a6d1769dbcb8df28139cab73acfe1d9e237bb55"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

