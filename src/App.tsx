import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Guayaquil", "Quito", "Cuenca"];

  return (
    <div>
      <ListGroup
        items={items}
        heading="Ciudades"
        onSelectItem={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
