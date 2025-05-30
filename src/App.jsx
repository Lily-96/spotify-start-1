import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import SideBar from "./components/SideBar";
import Player from "./components/Player";
import MainSection from "./components/MainSection";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2} className="p-0">
            <SideBar />
          </Col>
          <Col xs={10} className="p-0">
            <MainSection />
          </Col>
        </Row>
      </Container>
      <Player />
    </>
  );
}

export default App;
