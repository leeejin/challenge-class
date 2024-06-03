import clsx from "clsx";
import { useEffect, useState } from "react";

function Toast({ toast }) {
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    setIsDisplayed(true);
    setTimeout(() => setIsDisplayed(false), toast.seconds - 500);
  }, [toast.seconds]);

  const handleDelete = () => {
    setIsDisplayed(false);
  };
  return (
    <div
      className={clsx(
        "border bg-white rounded-lg flex p-6 shadow-lg w-[320px] transition items-center duration-500",
        {
          "translate-x-0": isDisplayed, // 나타날때
          "translate-x-[calc(100%+20px)]": !isDisplayed, // 안보일때
        }
      )}
      onClick={handleDelete}
    >
      <div className="flex flex-col">
        <h5 className="font-semibold">{toast.title}</h5>
        <p>{toast.content}</p>
      </div>
    </div>
  );
}
export default Toast;
