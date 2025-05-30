import { Container, Row, Col, ProgressBar, Image } from "react-bootstrap";
import { useSelector } from "react-redux";

const Player = () => {
  const songSelected = useSelector((state) => state.songSelected.content);
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={{ span: 10, offset: 2 }}>
          <Row className="h-100 flex-column justify-content-center align-items-center">
            {songSelected && (
              <div className="d-inline-block align-middle mb-2">
                <Image src={songSelected.album.cover_medium} width="70" className="mb-2" />
                <div>
                  <strong>{songSelected.title}</strong>
                </div>
              </div>
            )}
            <Col xs={6} md={4}>
              <div className="d-flex playerControls justify-content-between">
                <a href="#">
                  <img src="assets/playerbuttons/shuffle.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="assets/playerbuttons/prev.png" alt="prev" />
                </a>
                <a href="#">
                  <img src="assets/playerbuttons/play.png" alt="play" />
                </a>
                <a href="#">
                  <img src="assets/playerbuttons/next.png" alt="next" />
                </a>
                <a href="#">
                  <img src="assets/playerbuttons/repeat.png" alt="repeat" />
                </a>
              </div>
              <ProgressBar now={40} className="mt-3 progress" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
