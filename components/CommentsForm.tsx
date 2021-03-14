import styled from "@emotion/styled";

const Form = styled.form`
  margin: 0 auto;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Input = styled.input`
  border-radius: 5px;
  border: 3px solid gainsboro;
  margin-top: 10px;
  padding: 10px;
`;

const Textarea = styled.textarea`
  border-radius: 5px;
  border: 3px solid gainsboro;
  margin-top: 10px;
  resize: none;
`;

const Button = styled.button`
  background-color: #8271de;
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 15px;
  padding: 10px;
  width: 100px;
  &:hover {
    background-color: #3c2e8c;
  }
`;

const CommentsForm = () => (
  <Form name="comments" method="post" data-netlify="true" action="/thankyou">
    <input type="hidden" name="form-name" value="comments" />
    <Label>
      Your name:
      <Input name="name" type="text" required />
    </Label>

    <Label>
      Post comment:
      <Textarea name="comment" rows={10} required />
    </Label>
    <Button type="submit">Send</Button>
  </Form>
);

export default CommentsForm;
