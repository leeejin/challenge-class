import { useRef } from "react";
import "./App.css";
import Content from "./components/Content";
import Title from "./components/Title";

import Seconds from "./components/Seconds";
import { useToast } from "./contexts/toast.context";
function App() {
  const toast = useToast();
  const title = useRef(null);
  const content = useRef(null);
  const seconds = useRef(null);
  const handleToast = () => {
    const formData = {
      title: title.current.value,
      content: content.current.value,
      seconds: parseInt(seconds.current.value) || 2000,
    };
    const error = {
      titleError: !formData.title.trim().length,
      contentError: !formData.content.trim().length,
    };
    if (error.titleError || error.contentError) {
      alert("제목과 내용 모두 입력해주세요");
      return;
    }
    toast.on(formData);

    setTimeout(() => {
      toast.off(formData.id);
    }, formData.seconds);
  };
  return (
    <main className="h-screen grid place-items-center">
      <div className="grid grid-cols-1 gap-y-6">
        <h1 className="text-2xl font-semibold text-center">토스트 컨트롤러</h1>

        <div className="flex flex-col gap-4">
          <Title title={title} />
          <Content content={content} />
          <Seconds seconds={seconds} />
        </div>
        <button
          className="bg-black text-white p-3 rounded-md font-medium hover:bg-black/80 transition active:bg-black/70"
          onClick={handleToast}
        >
          토스트 띄우기
        </button>
      </div>
    </main>
  );
}

export default App;
