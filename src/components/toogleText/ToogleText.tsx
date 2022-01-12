import { useState } from "react";
import "./ToogleText.css";

function ToogleText({ text }: { text: string }) {
  const [isShow, setShow] = useState(false);

  return (
    <div className="toogle">
      <button
        className="toogle__button"
        type="button"
        onClick={() => setShow((prev) => !prev)}
      >
        {isShow ? "Скрыть текст" : "Показать текст"}
      </button>
      {isShow && <p className="toogle__text">{text}</p>}
    </div>
  );
}

export default ToogleText;
