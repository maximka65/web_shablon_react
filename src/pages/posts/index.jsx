import React, { useEffect, useState } from 'react';
import {
  Card, CardBody, CardText, CardTitle, Col, Container, Row, Spinner,
} from 'reactstrap';

const Posts = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const newPosts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json());
      setPosts(newPosts);
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
        {
          !posts.length ? (
            <p>Posts not found</p>
          ) : (
            posts.map(({ body, id, title }) => (
              <Col className="mt-2 mb-5">
                <Card
                  className="h-100"
                  key={id}
                  style={{
                    width: '18rem',
                  }}
                >
                  <CardBody>
                    <CardTitle tag="h5">
                      {title}
                    </CardTitle>
                    <CardText>
                      {body}
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            ))
          )
        }
      </Row>
    </Container>
  );
};

export default Posts;
