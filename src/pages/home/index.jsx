import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardText,
  Col, Container, Form, FormGroup, FormText, Input, Label, Row, Spinner,
} from 'reactstrap';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const newPosts = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then((response) => response.json());
      setItems(newPosts);
      setLoading(false);
    };
    getPosts();
  }, []);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center">
        <Spinner />
      </Container>
    );
  }

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-between mt-2 mb-5">
          {
            items.slice(0, 3).map((item) => (
              <Card
                className="h-100 m-2"
                key={item.id}
                style={{
                  width: '300px',
                }}
              >
                <CardBody>
                  <img src={item.thumbnailUrl} alt={item.id} className="w-100" />
                  <CardText>
                    {item.title}
                  </CardText>
                </CardBody>
              </Card>
            ))
          }
        </Col>
      </Row>
      <Row>
        <Col className="mt-5 mb-5">
          <Button color="primary">
            primary
          </Button>
          {' '}
          <Button>
            secondary
          </Button>
          {' '}
          <Button color="success">
            success
          </Button>
          {' '}
          <Button color="info">
            info
          </Button>
          {' '}
          <Button color="warning">
            warning
          </Button>
          {' '}
          <Button color="danger">
            danger
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="mt-5 mb-5">
          <Form>
            <FormGroup>
              <Label for="exampleEmail">
                Email
              </Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="with a placeholder"
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">
                Password
              </Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="password placeholder"
                type="password"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">
                Select
              </Label>
              <Input
                id="exampleSelect"
                name="select"
                type="select"
              >
                <option>
                  1
                </option>
                <option>
                  2
                </option>
                <option>
                  3
                </option>
                <option>
                  4
                </option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelectMulti">
                Select Multiple
              </Label>
              <Input
                id="exampleSelectMulti"
                multiple
                name="selectMulti"
                type="select"
              >
                <option>
                  1
                </option>
                <option>
                  2
                </option>
                <option>
                  3
                </option>
                <option>
                  4
                </option>
                <option>
                  5
                </option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">
                Text Area
              </Label>
              <Input
                id="exampleText"
                name="text"
                type="textarea"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">
                File
              </Label>
              <Input
                id="exampleFile"
                name="file"
                type="file"
              />
              <FormText>
                This is some placeholder block-level help text for the above input.
                It‘s a bit lighter and easily wraps to a new line.
              </FormText>
            </FormGroup>
            <FormGroup tag="fieldset">
              <legend>
                Radio Buttons
              </legend>
              <FormGroup check>
                <Input
                  name="radio1"
                  type="radio"
                />
                {' '}
                <Label check>
                  Option one is this and that—be sure to include why it‘s great
                </Label>
              </FormGroup>
              <FormGroup check>
                <Input
                  name="radio1"
                  type="radio"
                />
                {' '}
                <Label check>
                  Option two can be something else and selecting it will deselect option one
                </Label>
              </FormGroup>
              <FormGroup
                check
                disabled
              >
                <Input
                  disabled
                  name="radio1"
                  type="radio"
                />
                {' '}
                <Label check>
                  Option three is disabled
                </Label>
              </FormGroup>
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" />
              {' '}
              <Label check>
                Check me out
              </Label>
            </FormGroup>
            <Button>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
