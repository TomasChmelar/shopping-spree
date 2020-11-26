import React from "react";

function List(Items) {
  return (
      <div>
        {Items.map(item => (<li key={item}>{item}</li>))}
      </div>
  );
}

export default List;