import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  WRITED_MEMO,
  WRITING_MEMO,
  getPresentTime,
} from "../../redux/reducers/auth.reducer";
import DetailMemo from "../DetailMemo";
const MenuContainer = styled.aside`
  border-right: 1px solid var(--color-lightgrey);
  height: 100%;
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr;
  align-content: flex-start;
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  position: sticky;
  top: 0px;
  border-top-left-radius: 10px;
  border-bottom: 1px solid var(--color-lightgrey);
  button {
    color: var(--color-grey);
    &:hover {
      color: var(--color-black);
    }
  }
`;
const Ul = styled.ul`
  padding: 20px 12px;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  align-content: flex-start;
  row-gap: 8px;
  margin: 0px;
  overflow-x: hidden;
`;
const Li = styled.li`
  background-color: ${({ selected }) =>
    selected ? "var(--color-yellow)" : "transparent"};
  border-radius: 4px;
  width: ${(props) => props.width};
  padding: 12px 24px;
  cursor: pointer;
`;
const Font = styled.h6`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  text-overflow: ellipsis;
  margin: 5px;
`;
const DEFAULT_TITLE = "새로운 메모";
const DEFAULT_DATA = {
  id: crypto.randomUUID(),
  title: DEFAULT_TITLE,
  time: getPresentTime(),
  isWriting: false,
};
function HomeLayout() {
  const dispatch = useDispatch();
  const [lists, setLists] = useState(
    JSON.parse(localStorage.getItem("data")) || [DEFAULT_DATA]
  );
  const isWriting = useSelector((state) => state.auth.isWriting);
  const title = useSelector((state) => state.auth.title);
  const time = useSelector((state) => state.auth.time);
  const [listId, setListId] = useState(lists[0].id);

  useEffect(() => {}, []);
  const handleCreate = () => {
    const newMemo = {
      id: crypto.randomUUID(),
      title: DEFAULT_TITLE,
      time: getPresentTime(),
      isWriting: false,
    };
    const editedMemo = { title, time };
    if (isWriting === true) {
      console.log("true상태임");
      const modifedMemo = lists.map((list) => {
        if (list.id === listId)
          return {
            ...list,
            title: editedMemo.title,
            time: editedMemo.time,
          };
        return list;
      }, lists);
      setLists(modifedMemo);
      localStorage.setItem("data", JSON.stringify(modifedMemo));
    }
    setLists((prev) => [newMemo, ...prev]);
    setListId(newMemo.id);
    dispatch({ type: WRITED_MEMO, payload: newMemo });
    localStorage.setItem("data", JSON.stringify([newMemo, ...lists]));
  };
  const handleDelete = () => {
    const newLists = lists.filter((list) => list.id !== listId);
    if (newLists.length < 1) {
      alert("하나 이상의 메모는 남겨두어야 합니다.");
      return;
    }
    setLists(newLists);
    setListId(newLists[0].id);
    dispatch({ type: WRITED_MEMO, payload: newLists[0] });
    localStorage.setItem("data", JSON.stringify(newLists));
  };
  const handleChangeList = (memoId, memoTitle, memoTime) => {
    setListId(memoId);
    const findData = lists.find((listId) => listId.id === memoId);
    dispatch({
      type: findData.title == DEFAULT_TITLE ? WRITING_MEMO : WRITED_MEMO,
      payload: { id: memoId, title: memoTitle, time: memoTime },
    });
  };
  const handleTitleFormat = (list) => {
    let original = (list.id === listId ? title : list.title).slice(0, 13);
    original += original.length > 12 ? "..." : "";
    return original.length ? original : DEFAULT_TITLE;
  };
  return (
    <>
      <MenuContainer>
        <Header>
          <button onClick={handleCreate}>새 메모 작성하기</button>
          <button onClick={handleDelete}>삭제</button>
        </Header>
        <Ul>
          {lists.map((list) => (
            <Li
              key={list.id}
              selected={list.id === listId}
              width={
                lists.some((list) => list.title.length > 10) ||
                title.length > 10
                  ? "100%"
                  : ""
              }
              onClick={() => {
                handleChangeList(list.id, list.title, list.time);
              }}
            >
              <Font size={"13px"} weight={"700"}>
                {handleTitleFormat(list)}
              </Font>
              <Font size={"12px"} weight={"100"}>
                {(list.id === listId ? time : list.time).slice(13)}
              </Font>
            </Li>
          ))}
        </Ul>
      </MenuContainer>
      <DetailMemo setLists={setLists} lists={lists} />
    </>
  );
}
export default HomeLayout;
