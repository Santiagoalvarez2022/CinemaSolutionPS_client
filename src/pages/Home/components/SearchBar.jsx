import { InputGroup, Form } from "react-bootstrap"

export default function SearchBar() {
  return (
   <InputGroup>
        <InputGroup.Text>search</InputGroup.Text>
            <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
            />
    </InputGroup> 
  )
}
