import React from 'react';
import '../../assets/token.css';

const TokenDashboard = () => {
  return (
      <div className="token-dashboard">
          <div className="flex-container">
              <div  className="text-container">
                  <div className="logo-container">
                      <img
                          src="https://cryptologos.cc/logos/near-protocol-near-logo.png"
                          alt="Logo"
                          className=""
                          style={{ width: '3em', marginLeft: '40px', marginRight: '20px' }}
                      />
                      <span className="token-name text-dark">NEAR Token</span>
                  </div>
                  <p style={{ width: '70%'}} className="token-description">
                      NEAR Token stakers earn their share of Story’s platform fees. View on{' '}
                      <a
                          href="https://coinmarketcap.com/currencies/near-protocol"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="external-link"
                      >
                          CoinMarketCap
                      </a>{' '}
                      or{' '}
                      <a
                          href="https://www.coingecko.com/en/coins/near-protocol"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="external-link"
                      >
                          CoinGecko
                      </a>
                  </p>
                  <a
                      href="https://www.coinbase.com/how-to-buy/near-protocol"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="buy-button"
                  >
                      Buy NEAR
                  </a>
              </div>
          </div>
          <div className="value-container">
              <div className="value">
                  <div className="font-bold">NEAR PRICE</div>
                  <div className="number">$1.459</div>
              </div>
              <div className="value">
                  <div className="font-bold">MARKET CAP</div>
                  <div className="number">$1.478 billion</div>
              </div>
              <div className="value">
                  <div className="font-bold">CIRCULATING SUPPLY</div>
                  <div className="number">990,450,821</div>
              </div>
              <div className="value">
                  <div className="font-bold">TOTAL SUPPLY</div>
                  <div className="number">1,000,000,000</div>
              </div>
          </div>
      </div>
  );
};

export default TokenDashboard;