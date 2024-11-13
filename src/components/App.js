import React from "react";
import { format } from "date-fns"; // You can remove this if you're not using the date anymore.
import ExampleComponent from "./ExampleComponent"; // Import ExampleComponent

// Step 1: Create a simple TestComponent
import TestComponent from "./TestComponent"; // Import TestComponent

function App() {
  return (
    <div className="App">
      {/* Step 2: Update this <h1> to display "Now" */}
      <h1>Now</h1>
      
      {/* Step 3: ExampleComponent is here */}
      <ExampleComponent />

      {/* Step 4: Add the TestComponent below ExampleComponent */}
      <TestComponent />
    </div>
  );
}

export default App;
