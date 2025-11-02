import { GENERATE_DATA } from "../../constants";
import { QRCodeSVG } from "qrcode.react";
import s from "./generateHistory.module.css";

export const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");

  return (
    <div className={s.container}>
      {data.map((text) => {
        return (
          <div className={s.item}>
            <p key={text}>{text}</p>
            <QRCodeSVG value={text} className={s.QRCode}/>
          </div>
        );
      })}
    </div>
  );
};
