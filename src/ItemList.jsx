import React, { useContext, useEffect, useState } from "react";
import { toaster2 } from "./toast";
import { AppContext } from "./Context";

const ItemList = ({ ele, setData }) => {
  const [state, dispatch] = useContext(AppContext);

  const localStorageCheck = localStorage.getItem("check");
  console.log(typeof(localStorageCheck));

  const initialChecked = localStorageCheck === "true";
  console.log(typeof initialChecked);
  const [checked, setChecked] = useState(initialChecked);

  useEffect(() => {
    localStorage.setItem("check", checked);
  }, [checked]);

  const handleCheck = () => {
    setChecked(!checked);
  };

  const handleDelete = (id) => {
    // setData((prev)=>{
    //     return prev.filter((itm)=>{
    //         return itm.id !== id
    //     })
    // })

    dispatch({ type: "DELETE_ITEM", payload: id });

    toaster2("Item Deleted");
  };

  return (
    <div key={ele.id} className="single-item">
      <input onChange={() => handleCheck()} type="checkbox" checked={checked} />
      {/* <p style="text-transform: capitalize; text-decoration: line-through;">hfhf</p> */}

      <p style={{ textDecoration: checked ? "line-through" : null }}>
        {ele.data}
      </p>

      <button
        onClick={() => handleDelete(ele.id)}
        className="btn remove-btn"
        type="button"
      >
        delete
      </button>
    </div>
  );
};

export default ItemList;
