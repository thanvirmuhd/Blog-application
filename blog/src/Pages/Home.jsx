import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

export default function Home() {

  const [blog, setBlog] = useState([]);




  const getData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const jsonData = await data.json();
    setBlog(jsonData)
  }





  useEffect(() => {
    getData();
  }, [])
  return (
     <div style={{ backgroundColor: 'black', minHeight: '100vh' }}>
      <Container>



        <Row>
          {
            blog.map((item, index) => {
              return (
                <Col key={index}>
                  <Card className='mt-3' style={{ width: '18rem', maxHeight: '100rem', height: '33rem',border: '2px solid white',backgroundColor: '#28282B' }}>
                  <Card.Img variant="top" src="https://i.ytimg.com/vi/E9gyL-UcQco/maxresdefault.jpg" />
                    <Card.Body style={{color:'white'}}>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.body}</Card.Text>
                      <Button className='mt-5'variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </div>
  )
}