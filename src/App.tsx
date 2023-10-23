//import { useState } from "react";

import "./App.css";
import { Row } from "antd";
import FilterDrawerButton from "./components/FilterDrawerButton";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>Employee Directory</h1>
      <Row>
        <div>add employee table here</div>
      </Row>
      <Row>
        <FilterDrawerButton />
      </Row>
      <Row>
        <div>add drawer here</div>
      </Row>
    </div>
  );
}

export default App;
