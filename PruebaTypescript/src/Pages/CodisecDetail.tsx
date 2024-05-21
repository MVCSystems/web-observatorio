import { useParams } from "react-router-dom";

export default function CodisecDetail() {
  const id = useParams().id;
  return <div>Reunion de codisec {id}</div>;
}
