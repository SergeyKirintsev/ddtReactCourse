import { useState } from "react";
import "./ToogleText.css";

function ToogleText({ text }: { text: string }) {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="toogle">
      <button
        className="toogle__button"
        type="button"
        onClick={() => setIsShow((prev) => !prev)}
      >
        {isShow ? "Скрыть текст" : "Показать текст"}
      </button>
      {isShow && <p className="toogle__text">{text}</p>}
    </div>
  );
}

export default ToogleText;
