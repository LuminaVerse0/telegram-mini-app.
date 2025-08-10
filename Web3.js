async function connectWallet() {
  if (window.ethereum) {
    await ethereum.request({ method: 'eth_requestAccounts' });
    alert('Wallet Connected!');
  } else {
    alert('MetaMask not found!');
  }
}

async function mintNFT() {
  alert('Minting logic will go here...');
}
