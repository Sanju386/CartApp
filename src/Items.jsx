import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ItemList from "./ItemList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toaster } from "./toast";
import { AppContext } from "./Context";

const Items = () => {


  // const [inputValue, setInputValue] = useState("");

  // const localStorageData = localStorage.getItem("appData");
  

  // const localStorageExData = JSON.parse(localStorageData);
 

  // const [data, setData] = useState(localStorageExData);



const [state,dispatch] = useContext(AppContext)



  const list = {
    id: uuidv4(),
    data: state.inputValue,
  };

  const handleChange = (e) => {
    // setInputValue(e.target.value); 

    dispatch({type:"ADD_ITEM", payload: e.target.value})
  };


  useEffect(() => {
    
    localStorage.setItem("appData", JSON.stringify(state.data));
  }, [state.data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setData((prev) => {
    //   return [...prev, list];
    // });

    dispatch({type:"ADD_DATA", payload:list })

    // setInputValue("");

dispatch({type:"CLEAR_ITEM", payload: ''})

    toaster("Item Added");
  };

  return (
    <section className="section-center">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <h4>grocery bud</h4>
        <div className="form-control">
          <input
            type="text "
            className="form-input"
            onChange={handleChange}
            value={state.inputValue}
          />
          <button type="submit" className="btn">
            add item
          </button>
        </div>
      </form>
      <div className="items">
        {state.data.map((ele) => {
          return <ItemList ele={ele}  />;
        })}
      </div>
    </section>
  );
};

export default Items;
