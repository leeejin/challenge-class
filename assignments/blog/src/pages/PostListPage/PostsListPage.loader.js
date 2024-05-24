export default async function postsListPageLoader() {
  //값을 가져와서 이 값이 어디로 흘러갈지는 모르겠지만 일단 리턴!
  //렌더링 전에 로더를 호출하기 때문에 렌더링하는 시점에 이미 데이터를 가지고 있음
  const url = "https://jsonplaceholder.typicode.com/posts";
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
