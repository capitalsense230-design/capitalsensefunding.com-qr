"use client";

import { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function Home() {
  const url =
    "https://www.capitalsensefunding.com/apply-online.php";

  const qrRef = useRef<HTMLDivElement>(null);

  const downloadQR = () => {
    const canvas = qrRef.current?.querySelector("canvas");
    if (!canvas) return;

    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "capital-sense-apply-qr.png";
    link.click();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
      
      <h1 className="text-3xl font-bold mb-6 text-center">
        Capital Sense Funding
      </h1>

      <p className="text-lg mb-6 text-center">
        Scan to Apply for Fast Business Capital
      </p>

      <div ref={qrRef} className="bg-white p-8 rounded-2xl shadow-xl">
        <QRCodeCanvas
          value={url}
          size={350}            // Better for print
          level="H"             // High error correction
          includeMargin
          fgColor="#000000"
          bgColor="#ffffff"
          imageSettings={{
            src: "/logo.png",
            height: 75,
            width: 75,
            excavate: true,
          }}
        />
      </div>

      <button
        onClick={downloadQR}
        className="mt-8 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Download QR Code
      </button>

      <p className="mt-6 text-gray-500 text-sm text-center">
        https://www.capitalsensefunding.com/apply-online.php
      </p>
    </main>
  );
}
