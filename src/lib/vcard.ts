import { saveAs } from "file-saver";

export const generateVCard = () => {
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Spabrix
ORG:Spabrix Agency
TITLE:Digital Agency
TEL;TYPE=WORK,VOICE:9946972210
EMAIL;TYPE=WORK:spabrix@gmail.com
URL:https://www.spabrix.in/
NOTE:Website Development | Digital Marketing | Graphic Design
END:VCARD`;

  const blob = new Blob([vCardData], { type: "text/vcard;charset=utf-8" });
  saveAs(blob, "spabrix-contact.vcf");
};

export const downloadDigitalCard = () => {
  const printWindow = window.open("", "_blank");
  if (!printWindow) return;

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Spabrix - Digital Business Card</title>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #fff7ed 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        .card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 24px;
          padding: 3rem;
          width: 100%;
          max-width: 400px;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1);
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .logo-container {
            margin-bottom: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }
        .logo-text {
          font-size: 2.5rem;
          font-weight: 800;
          color: #007BFF;
          letter-spacing: -0.05em;
        }
        .tagline {
          color: #64748b;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 2rem;
          line-height: 1.5;
        }
        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #e2e8f0, transparent);
          margin: 1.5rem 0;
        }
        .contact-item {
          margin: 1rem 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }
        .label {
          font-size: 0.75rem;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }
        .value {
          font-weight: 700;
          color: #1e293b;
          font-size: 0.95rem;
        }
        .qr-placeholder {
            margin-top: 2rem;
            color: #94a3b8;
            font-size: 0.75rem;
        }
        @media print {
          body { background: white; }
          .card { box-shadow: none; border: 1px solid #e2e8f0; }
        }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="logo-container">
           <!-- Ideally inline SVG or base64 image here, but text for now as fallback -->
           <span class="logo-text">Spabrix</span>
        </div>
        <div class="tagline">Website Development | Digital Marketing<br/>Graphic Design</div>
        
        <div class="contact-item">
          <span class="label">Phone</span>
          <span class="value">9946972210</span>
        </div>

        <div class="contact-item">
          <span class="label">Web</span>
          <span class="value">www.spabrix.in</span>
        </div>

        <div class="qr-placeholder">
          Scan to save contact
        </div>
      </div>
      <script>
        window.onload = () => window.print();
      </script>
    </body>
    </html>
  `);
  printWindow.document.close();
};
