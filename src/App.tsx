import { useContext } from "react";
import "./App.css";
import { TextContext, Textstate } from "./test/TextContext";
import { Resource } from "./test/TextProvider";

function App() {
  const {
    data,
    error,
    handleGet,
    handleDelete,
    handlePatch,
    handlePost,
    handlePut
  } = useContext<Textstate>(TextContext);
  return (
    <>
      <button onClick={handleGet}>GET</button>
      <button onClick={handleDelete}>DELETE</button>
      <button onClick={handlePatch}>PATCH</button>
      <button onClick={handlePost}>POST</button>
      <button onClick={handlePut}>PUT</button>
      {/* {apiResponse && <h6>{apiResponse}</h6>} */}
      {data &&
        data.map((item: Resource) => (
          <h6>{item.title}</h6>
        ))}
    </>
  );
}

export default App;
