import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { WRITING_MEMO } from "../../redux/reducers/auth.reducer";
const MemoContainer = styled.article`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Top = styled.span`
  font-size: 10px;
  color: var(--color-grey);
  margin: 0 auto 24px;
`;
const Content = styled.textarea`
  all: unset;
  flex-grow: 1;
  font-size: 15px;
  line-height: 1.66;
`;

function DetailMemo({ lists, setLists }) {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.auth.title);
  const id = useSelector((state) => state.auth.id);
  const time = useSelector((state) => state.auth.time);
  const handleMemoSubmit = (e) => {
    dispatch({
      type: WRITING_MEMO,
      payload: { id, title: e.target.value, time },
    });
    const modifedMemo = lists.map((list) => {
      if (list.id === id)
        return {
          ...list,
          title: e.target.value,
          time: time,
        };
      return list;
    }, lists);
    setLists(modifedMemo);
  };

  return (
    <MemoContainer>
      <Top>{time}</Top>
      <Content
        value={title === "새로운 메모" ? "" : title}
        onChange={(e) => {
          handleMemoSubmit(e);
        }}
      ></Content>
    </MemoContainer>
  );
}
export default DetailMemo;
