require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_API_URL,
      accounts: [`0x${process.env.META_MASK_RINKEBY_PRIV_KEY}`]
    },
  },
};
