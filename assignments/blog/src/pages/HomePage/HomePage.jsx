function HomePage() {
  return (
    <div>
      {/* <a> 태그는 get 요청을 하면서 페이지를 다시 그림 그래서 네트워크 doc에 가보면 요청이 나오지만 
      Link를 누르게 되면 doc 보면 안뜸 Link는 react 안에서 가지고 있는 ???를 가져옴
      여기서 Link는 브라우저에서 a태그로 나옴 */}
      <h1>HomePage</h1>
    </div>
  );
}
export default HomePage;
