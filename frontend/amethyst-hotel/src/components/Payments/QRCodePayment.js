import React from 'react';
import QRCode from 'qrcode.react';

function QRCodePayment({ onSelectPaymentMethod }) {
  return (
    <div>
      <p>Pay using QR Code:</p>
      <QRCode value="your_qr_code_data_here" size={128} />
      <button onClick={() => onSelectPaymentMethod('qrCode')}>Pay with QR Code</button>
    </div>
  );
}

export default QRCodePayment;
