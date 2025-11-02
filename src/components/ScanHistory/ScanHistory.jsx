import { QRCodeSVG } from "qrcode.react";
import { SCAN_DATA } from "../../constants";
import s from "./scanHistory.module.css";

export const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");

  return (
    <div className={s.container}>
      {data.map((text) => {
        return (
          <div className={s.item}>
            <p key={text}>{text}</p>
              <QRCodeSVG value={text} className={s.QRCode} />
          </div>
        );
      })}
    </div>
  );

};
