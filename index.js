const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://eth-rinkeby.alchemyapi.io/v2/iH2KFE4SaG7vR6Dw-BXj3RHAv-YVBPnR'));

provider=new ethers.providers.Web3Provider(window.ethereum);
provider.send("eth_requestAccounts", []);
signer=provider.getSigner();

contractAddress="0xa5a7075038824d005C6beFF39d9CB1c2AFA801Ca";
contractAbi=[
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "newCandidate",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "candidates",
    "outputs": [
      {
        "internalType": "address",
        "name": "accountAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "email",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "_addressOfDeployedForTestToken",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "a",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "b",
        "type": "string"
      }
    ],
    "name": "compareStrings",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_email",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "_addressOfDeployedForTestToken",
        "type": "address"
      }
    ],
    "name": "join",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
];

contract=new ethers.Contract(contractAddress, contractAbi, signer);

async function sendEmail(){
  await contract.join(
    "alexeybereza12345@gmail.com",
    "Oleksii Bereza",
    "0x6e4cFfb8f34D63366B3DAFe513950218FB65d9c5",
    { value: 0x499602D2 }
    );
}



