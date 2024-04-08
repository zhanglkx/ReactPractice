import ItemCard from "@/Components/ItemCard/Card";
import ItemArray from "../utils/PageIndex";
import {useEffect} from "react";
import Favicon from '../../public/astronaut.svg'
import changeFavicon from "@/utils/changeFavicon.ts";

function HomeView() {

    // const [_, setValue] = useState<number>(0);

    useEffect(() => {
        changeFavicon(Favicon)
    }, []);

  return (
    <>
      <div
        style={{
          margin: "10px",
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          flexWrap: 'wrap'
        }}
      >
        {ItemArray.map((item) => (
          <ItemCard {...item} key={item.route} />
        ))}
      </div>
    </>
  );
}

export default HomeView;
