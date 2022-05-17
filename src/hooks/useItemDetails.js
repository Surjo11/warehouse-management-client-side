import { useEffect, useState } from "react";

const useItemDetails = (itemId) => {
  const [item, setItem] = useState({});
  useEffect(() => {
    const url = `https://secure-atoll-36381.herokuapp.com/item/${itemId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [item]);
  return [item];
};

export default useItemDetails;
