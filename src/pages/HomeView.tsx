import ItemCard from "@/Components/ItemCard/Card";
import ItemArray from "../utils/PageIndex";
import { wrap } from "module";

function HomeView() {
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
