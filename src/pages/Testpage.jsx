import { ButtonStyle, Circle } from "../styles/style";

export default function TestPage() {
  return (
    <div>
      <button>버튼입니다.</button>
      <ButtonStyle>theme 버튼입니다.</ButtonStyle>
      <input type="text" value="input입니다." />
      <Circle />
    </div>
  );
}