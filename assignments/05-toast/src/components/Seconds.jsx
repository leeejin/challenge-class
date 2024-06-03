import { useId } from "react";

function Seconds({ seconds }) {
  const id = useId();
  return (
    <div className="flex flex-col gap-1 items-start">
      <label htmlFor={id}>노출시간(ms) (선택)</label>
      <input
        className="border p-4 py-2.5 rounded-md w-80"
        type="number"
        ref={seconds}
        defaultValue={2000}
        id={id}
      />
    </div>
  );
}

export default Seconds;
