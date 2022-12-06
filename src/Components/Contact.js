import { Container, Row, Col } from 'react-bootstrap'
import brandLogo from '../assets/brand-logo.png'

const Contact = () => {
  return (
    <Container style={{ textAlign: "center" }}>
      <h1 className="display-2 mt-2 mb-4">Contact Us</h1>
      <Row>
        <Col md={10}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          hic laboriosam suscipit labore in expedita alias. Distinctio quam fuga
          perferendis recusandae natus amet provident incidunt fugit soluta
          facere eos quis praesentium, illo officiis facilis sed dolorem,
          impedit porro nisi eveniet? Illo qui iste quisquam nisi magni
          molestiae. Dolor impedit obcaecati, amet voluptates quidem cupiditate
          voluptatem aperiam ipsa deserunt? Ipsum reiciendis tempora,
          reprehenderit ducimus rem temporibus a repudiandae. Ratione vero fugit
          officia magni repellendus quis, fugiat vel ipsum pariatur, omnis
          quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          hic laboriosam suscipit labore in expedita alias. Distinctio quam fuga
          perferendis recusandae natus amet provident incidunt fugit soluta
          facere eos quis praesentium, illo officiis facilis sed dolorem,
          impedit porro nisi eveniet? Illo qui iste quisquam nisi magni
          molestiae. Dolor impedit obcaecati, amet voluptates quidem cupiditate
          voluptatem aperiam ipsa deserunt? Ipsum reiciendis tempora,
          reprehenderit ducimus rem temporibus a repudiandae. Ratione vero fugit
          officia magni repellendus quis, fugiat vel ipsum pariatur, omnis
          quidem.
        </Col>
        <Col md={2}>
          <img src={brandLogo} alt="brand" style={{ height: "200px" }} />
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;