import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One half pound bag of seeds",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);

  const handleCheck = (id) => {
    // console.log(`key : ${id}`);
    // made check function by using map and making a copy of the default items and changing them not the original ones
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    // Saving State in local storage
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  // Handle Delete
  const handleDelete = (id) => {
    // console.log(id);
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              />
              {/* added styles and double click event */}
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              {/* Delete button */}
              <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex={0}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is Empty</p>
      )}
    </main>
  );
};

export default Content;
