import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import s from "./qrCodeGenerator.module.css";

import { GENERATE_DATA } from "../../constants";

const QrCodeGenerator = () => {
  // Правило: Ты получаешь массив из двух элементов:
  //[значение_состояния, функция_для_его_изменения].
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const onClickHafnler = (result) => {
    const prevDate = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");

    localStorage.setItem(
      GENERATE_DATA,
      JSON.stringify([...prevDate, value])
      // jonny
    );

    setResult(value);
    setValue("");
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
    setResult("");
  };

  console.log(result);

  return (
    <div className={s["QR"]}>
      <input
        type="text"
        value={value}
        placeholder="Введите текст..."
        onChange={onChangeHandler}
      />

      {/* это типа как addEvenList а внетри ты передаюш функсию {} */}

      <button type="button" onClick={onClickHafnler}>
        Сгенерировать QR
      </button>

      {result !== "" && (
        <div className={s["QRcode"]}>
          <QRCodeSVG value={result} />
        </div>
      )}
    </div>
  );
};

// 1:20:49

export { QrCodeGenerator };
