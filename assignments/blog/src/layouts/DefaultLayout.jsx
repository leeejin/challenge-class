import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
function DefaultLayout() {
  /** 컴포넌트의 생애주기와 의존성 배열에 담긴 값의 변화에 따라
   함수를 실행해주는 훅 useEffect(함수, 의존성배열) 의존성배열에 []면 마운트될때 한번만 실행
   */
  useEffect(() => {
    console.log("나 마운트됨");
    return () => {
      console.log("나 언마운트 됨");
    };
  }, []);
  return (
    <div>
      <Link to="/">홈 페이지</Link>
      <br />
      <Link to="/posts">포스트 목록 페이지</Link>
      <br />
      <Link to="/posts/1">포스트 상세 페이지</Link>
      <Outlet />
    </div>
  );
}
export default DefaultLayout;
