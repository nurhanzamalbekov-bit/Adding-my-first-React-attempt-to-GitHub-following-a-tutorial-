import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import s from "./qrCodeScanner.module.css"; // 1. Импортируем CSS-файл

import {SCAN_DATA} from'../../constants'

export const QrCodeScanner = () => {
  const [resultQR, setResult] = useState(null);

  const scanHandler = (result) => {
    setResult(result[0].rawValue);

    const prevDate =JSON.parse(localStorage.getItem(SCAN_DATA)||'[]')

    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...prevDate, result[0].rawValue]))
  };

  const styleSitteng = {
    container: {
      width: "100%",
      height: "100%",
      padding: 0,
    },
    video: {
      width: "100%",
      height: "100%",
    },
  };

  return (
    <div className={s['scanner-container']}>
      <h2>Сканер QR-кода</h2>
      <div className={s['scanner-box']}>
        <Scanner
          onScan={scanHandler}
          components={{ audio: false, finder: false }}
          styles={styleSitteng}
        />
      </div>
      <a href={resultQR} target="_blank" rel="noopener noreferrer">
        {resultQR}
      </a>
      <p className={s['scan-result-link']}>Наведите камеру на QR-код...</p>
    </div>
  );
};
