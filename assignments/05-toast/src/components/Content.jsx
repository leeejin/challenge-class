import { useId } from "react";

function Content({ content }) {
  const id = useId();
  return (
    <div className="flex flex-col gap-1.5 items-start">
      <label htmlFor={id}>내용 (필수)</label>
      <input
        className="border px-4 py-2.5 rounded-md w-80"
        type="text"
        ref={content}
        defaultValue={"Friday, February 10, 2023 at 5:57 PM"}
        id={id}
      />
    </div>
  );
}

export default Content;
