import { useContext } from "react";
import "./App.css";
import { TextContext, Textstate } from "./test/TextContext";
import { Resource } from "./test/TextProvider";

function App() {
  const {
    data,
    isFetchSlow,
    isLoading,
    error,
    handleDelete,
    handlePatch,
    handlePost,
    handlePut,
  } = useContext<Textstate>(TextContext);

  console.log("data?", data);

  return (
    <>
      <button onClick={() => handleDelete(1)}>DELETE</button>
      <button
        onClick={() =>
          handlePatch({
            id: 1,
            title: "Soyeon",
            body: "Te amooo",
          })
        }
      >
        PATCH
      </button>
      <button
        onClick={() =>
          handlePost({
            title: "Soyeon",
            body: "Te amo",
          })
        }
      >
        POST
      </button>
      <button
        onClick={() =>
          handlePut({
            id: 1,
            title: "string",
            body: "string",
            userId: 2,
          })
        }
      >
        PUT
      </button>
      {isLoading ? <h6>Cargando...</h6> : null}
      {isFetchSlow && <h6>Tenemos problemas con la carga.</h6>}
      {data && Array.isArray(data)
        ? data.map((item: Resource) => <h6>{item.title}</h6>)
        : null}
      {error && <h6>Error: {error.message}</h6>}
    </>
  );
}

export default App;
