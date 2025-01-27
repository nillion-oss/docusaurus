import IframeVideo from '@site/src/components/IframeVideo/index';
import SupportedWallets from './\_testnet_supported_wallets.mdx';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Creating a Nillion Wallet

Create a Nillion wallet to connect to the [Nillion Testnet](/network) and access your assets.

## Supported Wallets

<SupportedWallets/>

## How to create a Nillion wallet and connect to the Nillion Testnet

This guide walks you through downloading a wallet, setting up your wallet, and adding the Nillion Testnet.

<Tabs>
<TabItem value="keplr" label="Keplr Wallet" default>

### 1. Download Keplr

Visit the [Keplr download page](https://www.keplr.app/download) and select your browser to download the Keplr browser extension. We recommend Chrome.

![Download Keplr](/img/download-wallet.png)

### 2. Install the Keplr browser extension

Click "Add to Chrome" to install the Keplr Chrome extension.

![Add extension](/img/add-extension.png)

### 3. Create a new wallet

After Keplr is installed, it will pop open in a new tab. Click "Create a new wallet."

![Create wallet](/img/create-wallet.png)

### 4. Create a recovery phrase

Create a wallet using a recovery phrase. Click "Create new recovery phrase."

![Create a wallet with a new recovery phrase](/img/recovery-phrase.png)

### 5. Secure your recovery phrase

Follow the steps to show your recovery phrase. Make sure to store your secret recovery phrase securely.
![Secure phrase](/img/secure-phrase.png)

### 6. Set a wallet password

Verify your recovery phrase by filling in ordered words. Then name your wallet and set a password. You'll use this password to log into Keplr on this device. To import this wallet for use on another device, you'll need the recovery phrase.
![Verify](/img/verify-wallet.png)

### 7. Add Nillion Testnet

    1. Toggle open the "Extensions" button in your browser and pin the Keplr extension so that the browser has access to it.

    2. Open the [Keplr Chains page](https://chains.keplr.app/) and search for "Nillion." Click "Add to Keplr."

    3. "Approve" adding the Nillion Testnet within Keplr.

    4. In the Keplr extension, click the hamburger menu and click "Manage Chain Visibility." This opens the Select Chains page in a new tab. Search for "NIL" and click the checkmark to make the Nillion Testnet visible from within Keplr. Click "Save."

    5. Verify setup by toggling Keplr back open. Scroll down to the bottom of the "Home" tab, where you should see a new NIL token balance of 0 NIL.

### 8. Find your new Nillion wallet address

    1. From your Keplr extension, click the "Copy address" button.

    2. Now you'll see addresses for all enabled chains. Filter for "NIL"

    3. Click to copy your Nillion wallet address to your clipboard. Your Nillion wallet address is safe to share with others; they'll need your wallet address to send you NIL.

<IframeVideo videoSrc="https://www.loom.com/embed/3b243bee264d4ca992381ef131e5a625?sid=17c8f87a-a468-41e3-88f1-7ca287063d29"/>

</TabItem>
<TabItem value="leap" label="Leap Wallet">

### 1. Download Leap

Visit the [Leap Wallet download page](https://www.leapwallet.io/download) and select your browser to download the Leap browser extension. We recommend Chrome.

### 2. Install the Leap browser extension

Click "Add to Chrome" to install the Leap Chrome extension.

### 3. Create a new wallet

After Leap is installed, it will pop open in a new tab. Click "Create new wallet."

### 4. Create a recovery phrase

Create a wallet using a recovery phrase. Click "Generate seed phrase."

### 5. Secure your recovery phrase

Follow the steps to show your recovery phrase. Make sure to store your secret recovery phrase securely in a safe place. Never share it with anyone.

### 6. Set a wallet password

Verify your recovery phrase by filling in ordered words. Then set a password for your wallet. You'll use this password to log into Leap on this device. To import this wallet for use on another device, you'll need the recovery phrase.

### 7. Add Nillion Testnet

    1. Click the Leap extension icon in your browser to open it.
    
    2. Click on the settings icon (gear) in the top right corner.
    
    3. Select "Manage Networks" from the menu.
    
    4. Search for "Nillion" in the network list.
    
    5. Toggle on the Nillion Testnet to enable it.
    
    6. Return to the main wallet view and verify that you can see the NIL token with a 0 balance.

### 8. Find your new Nillion wallet address

    1. From your Leap extension, click on the NIL token.
    
    2. Click the "Receive" button or your wallet address to copy it.
    
    3. Your Nillion wallet address is now copied to your clipboard. This address is safe to share with others; they'll need it to send you NIL.

</TabItem>
</Tabs>

<br/>
Nice! You've set up your Nillion wallet and have a Nillion wallet address. Next, [use the Faucet](/guide-testnet-faucet) to get some Testnet NIL.
