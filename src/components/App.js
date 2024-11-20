import { useState } from "react";

// Initial packing items
// const initialItems = [
//   { id: 1, description: "Shirt", quantity: 5, packed: false },
//   { id: 2, description: "Pants", quantity: 2, packed: false },
// ];

function Logo() {
  return <h1>My Travel List</h1>;
}

function Form({handleAddItems}) {
  const [description, setDesc] = useState("");
  const [quantity, setQty] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false
    };
    handleAddItems(newItem);
    setDesc("");
    setQty(1);
  }

  function handleDesc(event) {
    setDesc(event.target.value);
  }

  function handleQty(event) {
    setQty(Number(event.target.value));
  }


  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to pack?</h3>
      <select value={quantity} onChange={handleQty}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={handleDesc}
      />
      <button type="submit">ADD</button>
    </form>
  );
}

function PackingList({items, itemPacked, deleteItem}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} itemPacked={itemPacked} deleteItem={deleteItem}/>
        ))}
      </ul>
    </div>
  );
}

function Item({ item, itemPacked, deleteItem }) {
  return (
    <li style={{ textDecoration: item.packed ? "line-through" : "none" }}>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => itemPacked(item.id)}
      />
      {item.description} ({item.quantity})
      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats({items}) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems/totalItems)*100)
  return (
    <footer className="stats">
      <em>You have {totalItems} items in the list. You already packed {packedItems} ({percentage}%).</em>
    </footer>
  );
}

function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((prevItems) => [...prevItems, item]);
  }
  function handlePacked(itemId) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleDelete(itemId) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }
  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems}/>
      <PackingList items={items} itemPacked={handlePacked} deleteItem={handleDelete}/>
      <Stats items={items}/>
    </div>
  );
}

export default App;
