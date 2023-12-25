// 1.) Import React And React Libraries
import React from "react";
import ReactDOM from "react-dom/client";
import Time from "./Components/Time";
import Input from "./Components/Input";
import TextArea from "./Components/TextArea";
import InputString from "./Components/InputString";

const element = document.getElementById('root');
const root = ReactDOM.createRoot(element);

const App = () => {

     return <div>
          <h2>Hello REACT-JS</h2>
          {/* <Time />
          <Input />
          <TextArea />
          <InputString /> */}
     </div>
}
root.render(<App />);