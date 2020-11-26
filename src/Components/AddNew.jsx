import React from "react";

const AddNew = ({items, setItem}) => {
    var addItem = setItem;
    items.push(addItem);
  return (
      <div>
        <AddNew setItem={setItem} />
        <button onClick={e => {setItem()}}>Add</button>
      </div>
  );
}

export default AddNew;