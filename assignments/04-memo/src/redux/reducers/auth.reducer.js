const MONTHS = [
  "",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export const getPresentTime = () => {
  const now = new Date().toString().slice(0, 21).split(" ");
  const time = parseInt(now[4].slice(0, 2));
  const dayNight = time ? "오후 " : "오전 ";
  const hours = dayNight === "오후 " ? time - 12 : time;

  return (
    now[3] +
    "년 " +
    MONTHS.indexOf(now[1]) +
    "월 " +
    now[2] +
    "일 " +
    dayNight +
    hours +
    now[4].slice(2)
  );
};
export const WRITING_MEMO = "auth/WRITING_MEMO";
export const WRITED_MEMO = "auth/WRITIED_MEMO";
const initialState = {
  id: crypto.randomUUID(),
  title: "새로운 메모",
  time: getPresentTime(),
  isWriting: false,
};

//공장

function authReducer(prevState = initialState, action) {
  switch (action.type) {
    case WRITING_MEMO: // 쓰고있을때 변화있을때
      console.log("변화잇을때", action.payload);
      return {
        ...prevState,
        id: action.payload.id,
        title: action.payload.title,
        time: action.payload.time,
        isWriting: true,
      };
    case WRITED_MEMO: // 안썼을때 변화없을때
      console.log("변화없을때");
      return {
        ...prevState,
        id: action.payload.id,
        title: action.payload.title,
        time: action.payload.time,
        isWriting: false,
      };
    default:
      return prevState;
  }
}

export default authReducer;
