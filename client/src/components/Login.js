import React, { useRef } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

function Login() {
  const idRef = useRef()

  return (
    <Container className="align-items-center d-flex" style={{ height: '100vh'}}>
      <Form className="w-100">
        <Form.Group>
          <Form.Label>Enter Your Id</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
        <Button type="submit" className="mr-2">Login</Button>
        <Button variant="secondary">Create a New Id</Button>
      </Form>
    </Container>
  )
}

export default Login
