import { Wrapper, Title, Introduce, FlexLeft, Label, Input, Alert, Button } from "../styles/NewStyle";

export default function NewSignin() {
  return (
    <Wrapper>
        <Title>로그인</Title>
        <Introduce>반갑습니다.</Introduce>
        <FlexLeft top="67px">
            <Label>ID</Label>
        </FlexLeft>
        <Input type="text" />
        <FlexLeft top="20px">
            <Label>PW</Label>
        </FlexLeft>
        <Input type="text" />
        <Alert>경고입니다.</Alert>
        <Button>로그인</Button>
    </Wrapper>
  );
}