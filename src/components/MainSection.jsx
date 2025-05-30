import { Container } from "react-bootstrap";
import MusicSection from "./MusicSection";

const MainSection = () => (
  <main className="mainPage">
    <Container fluid>
      <div className="mainLinks d-flex mb-4">
        <a href="#">TRENDING</a>
        <a href="#">PODCAST</a>
        <a href="#">MOODS AND GENRES</a>
        <a href="#">NEW RELEASES</a>
        <a href="#">DISCOVER</a>
      </div>
      <MusicSection artistName="queen" sectionTitle="Rock Classics" />
      <MusicSection artistName="Gazzelle" sectionTitle="Pop Culture" />
      <MusicSection artistName="eminem" sectionTitle="HipHop" />
    </Container>
  </main>
);

export default MainSection;
