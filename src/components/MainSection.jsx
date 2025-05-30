import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AlbumCard from "./AlbumCard";

const MainSection = () => {
  const [rock, setRock] = useState([]);
  const [pop, setPop] = useState([]);
  const [hiphop, setHipHop] = useState([]);

  useEffect(() => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=rock")
      .then((resp) => resp.json())
      .then((results) => setRock(results.data))
      .catch((error) => console.log(error));

    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=pop")
      .then((resp) => resp.json())
      .then((results) => setPop(results.data))
      .catch((error) => console.log(error));

    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=hiphop")
      .then((resp) => resp.json())
      .then((results) => setHipHop(results.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <main className="mainPage">
      <Container fluid>
        <Row>
          <Col>
            <div className="mainLinks d-flex">
              <a href="#">TRENDING</a>
              <a href="#">PODCAST</a>
              <a href="#">MOODS AND GENRES</a>
              <a href="#">NEW RELEASES</a>
              <a href="#">DISCOVER</a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div id="rock">
              <h2>
                <strong>Rock Classics</strong>
              </h2>
              <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="rockSection">
                {rock.slice(0, 4).map((song) => (
                  <Col key={song.id}>
                    <AlbumCard song={song} />
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div id="pop">
              <h2>
                <strong>Pop Culture</strong>
              </h2>
              <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="popSection">
                {pop.slice(0, 4).map((song) => (
                  <Col key={song.id}>
                    <AlbumCard song={song} />
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div id="hiphop">
              <h2>
                <strong>HipHop</strong>
              </h2>
              <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="hipHopSection">
                {hiphop.slice(0, 4).map((song) => (
                  <Col key={song.id}>
                    <AlbumCard song={song} />
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};
export default MainSection;
