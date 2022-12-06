import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Spinner, Form } from "react-bootstrap";
import "./index.css";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);
  const [countrySelected, setCountrySelected] = useState("in");

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?apiKey=6d36a43e2ab643af9f2a95f64b8bf2cc&country=${countrySelected}`
      )
      .then((res) => setNews(res.data.articles))
      .catch((err) => console.log(err));
  }, [countrySelected]);

  return (
    <Container>
      <Form.Select
        size="lg"
        style={{ width: "300px", margin: "10px auto" }}
        value={countrySelected}
        onChange={(e) => setCountrySelected(e.target.value)}
      >
        <option value="in">India</option>
        <option value="us">USA</option>
        <option value="ca">Canada</option>
        <option value="ae">United Arab Emirates</option>
        <option value="ua">Ukraine</option>
        <option value="gr">Greece</option>
      </Form.Select>
      <Row>
        {news.length ? (
          news.map((singleNews, index) => (
            <Col md={4} className="mt-2 mb-2" key={index}>
              <Card className="news-card">
                <Card.Header className="theme">
                  {singleNews.source.name}
                </Card.Header>
                <Card.Img
                  variant="top"
                  src={
                    singleNews.urlToImage
                      ? singleNews.urlToImage
                      : "https://st.depositphotos.com/1186248/3276/i/950/depositphotos_32760371-stock-photo-breaking-news.jpg"
                  }
                  style={{ height: "200px", borderRadius: "0" }}
                />
                <Card.Body>
                  <Card.Title className="news-title">
                    {singleNews.title.length <= 90
                      ? singleNews.title
                      : `${singleNews.title.slice(0, 90)}...`}
                  </Card.Title>
                  <Card.Text className="news-description">
                    {singleNews.description
                      ? `${singleNews.title.slice(0, 100)}...`
                      : "Please click on Read More to know about this breaking news"}
                  </Card.Text>

                  <a
                    href={singleNews.url}
                    className="btn btn-dark btn-sm"
                    style={{ margin: "0 5px" }}
                  >
                    Read more
                  </a>
                </Card.Body>
                <Card.Footer className="text-muted">
                  {singleNews.publishedAt}
                </Card.Footer>
              </Card>
            </Col>
          ))
        ) : (
          <Spinner
            animation="border"
            role="status"
            style={{ margin: "200px auto" }}
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </Row>
    </Container>
  );
};

export default News;

// Various types of request method/ HTTP methods - GET, POST, etc
