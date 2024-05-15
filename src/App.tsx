import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Alert>
        Hello <span>world</span>
      </Alert>
      <Button color="danger" onClick={() => console.log("Clicked")}>
        Press me
      </Button>
    </div>
  );
}

export default App;
