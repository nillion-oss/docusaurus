import React from 'react';
import { testnetConfig } from './config';
import styles from './styles.module.css';

const TestnetNetworkButton = ({
  addChainSuccess,
  addChainFail,
  style,
  className,
  buttonTitle,
}) => {
  const handleAddChain = async () => {
    if (!window.keplr) {
      addChainFail('Please install Keplr extension');
      return;
    }

    try {
      await window.keplr.experimentalSuggestChain(testnetConfig);
      addChainSuccess(
        'Chain added successfully! Please enable Nillion in Chain Visibility tab'
      );
    } catch (error) {
      console.error(error);
      addChainFail('Failed to add chain: ' + error.message);
    }
  };

  return (
    <button
      className={`${styles.button} ${className || ''}`}
      style={style}
      onClick={handleAddChain}
    >
      <img
        src='/img/keplr_logo.png'
        alt='Keplr Logo'
        className={styles.keplrImg}
      />
      {buttonTitle || 'Add NilChain to Keplr'}
    </button>
  );
};

export default TestnetNetworkButton;
