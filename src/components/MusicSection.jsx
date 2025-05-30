import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import AlbumCard from "./AlbumCard";

const MusicSection = ({ artistName, sectionTitle }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`)
      .then((resp) => resp.json())
      .then((result) => setSongs(result.data.slice(0, 4)))
      .catch((err) => console.log(err));
  }, [artistName]);

  return (
    <div>
      <h2>{sectionTitle}</h2>
      <Row xs={1} sm={2} lg={3} xl={4}>
        {songs.map((song) => (
          <Col key={song.id}>
            <AlbumCard song={song} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MusicSection;
