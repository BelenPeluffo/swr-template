import { useContext, useEffect } from "react";
import "./App.css";
import { TextContext, Textstate } from "./test/TextContext";
import { Resource } from "./test/TextProvider";

function App() {
  const {
    data,
    isFetchSlow,
    isLoading,
    error,
    // handleGet,
    handleDelete,
    handlePatch,
    handlePost,
    handlePut,
  } = useContext<Textstate>(TextContext);

  useEffect(() => {
    console.log("isLoading?", isLoading);
  }, [isLoading]);

  return (
    <>
      {/* <button onClick={handleGet}>GET</button> */}
      <button onClick={handleDelete}>DELETE</button>
      <button onClick={handlePatch}>PATCH</button>
      <button onClick={handlePost}>POST</button>
      <button onClick={handlePut}>PUT</button>
      {/* {apiResponse && <h6>{apiResponse}</h6>} */}
      {isLoading ? <h6>Cargando...</h6> : null}
      {isFetchSlow && <h6>Tenemos problemas con la carga.</h6>}
      {data && data.map((item: Resource) => <h6>{item.title}</h6>)}
      {error && <h6>Error: {error.message}</h6>}
    </>
  );
}

export default App;
