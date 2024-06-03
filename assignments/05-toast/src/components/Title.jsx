import { useId } from "react";

function Title({ title }) {
  const id = useId();
  return (
    <div className="flex flex-col gap-1 items-start">
      <label htmlFor={id}>제목 (필수)</label>
      <input
        className="border p-4 py-2.5 rounded-md w-80"
        type="text"
        id={id}
        ref={title}
        defaultValue={"Scheduled: Catch up"}
        required
      />
    </div>
  );
}

export default Title;
