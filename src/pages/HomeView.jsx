import ItemCard from "../components/ItemCard/Card";
import ItemArray from "../utils/PageIndex";

function HomeView() {
  return (
    <>
      <div
        style={{
          margin: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
