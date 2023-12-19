import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={textStyle}>© 2023 Your Company. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#141414', // Netflix uses a dark background color
  color: '#757575', // Netflix uses a light text color
  textAlign: 'center',
  padding: '20px',
//   position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%',
};

const textStyle = {
  margin: '0',
  fontSize: '14px',
};

export default Footer;
