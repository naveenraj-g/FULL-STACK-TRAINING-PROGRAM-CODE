// import Demo from "./Demo";
// import Button from "./Button";
// import Card from "./Card";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";

function App() {
  return (
    // <div className="p-2 space-y-2">
    //   <Demo />
    //   <Button label="Click Me" />
    //   <Button label="Add" />
    //   <Card>
    //     <h1>This is card</h1>
    //   </Card>
    // </div>
    <>
      <Header />
      <main>
        <CoreConcept />
      </main>
    </>
  );
}

export default App;
