import { Card } from "react-bootstrap";

const AlbumCard = ({ song }) => (
  <Card className="cards text-center">
    <Card.Img src={song.album.cover_medium} variant="top" className="mx-auto d-block" />
    <Card.Body>
      <Card.Title>Track:"{song.title}"</Card.Title>
      <Card.Text>Artist:{song.artist.name}</Card.Text>
    </Card.Body>
  </Card>
);
export default AlbumCard;
