import clsx from "clsx";
function Toast({ toast }) {
  return (
    <ul className="fixed bottom-6 right-6 grid grid-cols-1 gap-y-3">
      {toast.map((item, i) => (
        <li key={i}>
          <div
            className={clsx(
              "border bg-white rounded-lg flex p-6 shadow-lg w-[320px] transition items-center duration-500 text-sm",
              {
                "translate-x-0": item.id, // 생길때
                "translate-x-[calc(100%+20px)]": !item.id, //없어질때
              }
            )}
          >
            <div className="grow flex flex-col">
              <h5 className="font-semibold">{item.title}</h5>
              <p>{item.content}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default Toast;
