"use client";

import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function Home(): JSX.Element {
  const [url, setUrl] = useState<string>(
    "https://capital-app-chi.vercel.app/CapitalSenseFunding"
  );

  const qrRef = useRef<HTMLDivElement>(null);

  const downloadQR = () => {
    const canvas = qrRef.current?.querySelector("canvas");
    if (!canvas) return;

    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = "capital-sense-qr.png";
    link.click();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
      
      <h1 className="text-3xl font-bold mb-6 text-center">
        Capital Sense Funding QR Code
      </h1>

      <input
        type="text"
        value={url}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUrl(e.target.value)
        }
        className="w-full max-w-xl p-3 border rounded mb-6"
      />

      <div ref={qrRef} className="bg-white p-6 rounded-xl shadow-lg">
        <QRCodeCanvas
          value={url}
          size={320}
          level="H"
          includeMargin={true}
          fgColor="#000000"
          bgColor="#ffffff"
          imageSettings={{
            src: "/logo.png",
            height: 65,
            width: 65,
            excavate: true,
          }}
        />
      </div>

      <button
        onClick={downloadQR}
        className="mt-6 px-6 py-3 bg-black text-white rounded hover:bg-gray-800"
      >
        Download QR Code
      </button>

      <p className="mt-6 text-gray-600 text-center">
        Scan to Apply for Fast Business Capital
      </p>
    </main>
  );
}
