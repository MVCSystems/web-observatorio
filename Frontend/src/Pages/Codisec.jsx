import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const CodisecListItem = ({ item }) => {
  console.log(item);
  return <div className="grid grid-cols-1 md:grid-cols-2">asd</div>;
};

export default function Codisec() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/andres-maza")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container mx-auto overflow-y-auto">
      {data.length > 0 &&
        data.map((item, index) => <CodisecListItem key={index} item={item} />)}
    </div>
  );
}

CodisecListItem.propTypes = {
  item: PropTypes.object,
};
