import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";

const AlbumCard = ({ song }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: "SELECTED_SONG", payload: song });
  };

  return (
    <Card className="cards text-center" onClick={handleClick}>
      <Card.Img src={song.album.cover_medium} variant="top" className="mx-auto d-block" style={{ cursor: "pointer" }} />
      <Card.Body>
        <Card.Title style={{ cursor: "pointer" }}>Track: "{song.title}"</Card.Title>
        <Card.Text>Artist: {song.artist.name}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AlbumCard;
