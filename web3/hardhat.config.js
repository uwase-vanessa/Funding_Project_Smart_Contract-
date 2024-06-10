module.exports = {
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: 'goerli',
  networks: {
    hardhat: {},
    goerli: {
      url: 'https://rpc.ankr.com/eth_goerli',
      accounts: [`0x0781b1470e4c2bed3b1565c8d35ee004f0e4B59d`],  // Replace this with your private key
    },
    funding: {
      url: 'http://127.0.0.1:8545',
      accounts: [`0xA3693CC83aFb14AC2a5f8C77A5fC8E7Cf06B538d`],  // Replace this with your private key
    },
  },
};
