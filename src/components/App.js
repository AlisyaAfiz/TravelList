import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats.js";

// Initial packing items
// const initialItems = [
//   { id: 1, description: "Shirt", quantity: 5, packed: false },
//   { id: 2, description: "Pants", quantity: 2, packed: false },
// ];

function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((prevItems) => [...prevItems, item]);
  }
  function handleUpdateItem(itemId) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleDeleteItem(id) {
    if (id === undefined) {
      setItems([]);
    } else {
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }
  }
  function handleFavorites(itemId) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, favorite: !item.favorite } : item
      )
    );
  }
  const sortedItems = [...items].sort((a, b) => b.favorite - a.favorite);
  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems}/>
      <PackingList items={sortedItems} handleUpdateItem={handleUpdateItem} handleDeleteItem={handleDeleteItem} handleFavorites={handleFavorites}/>
      <Stats items={items}/>
    </div>
  );
}

export default App;
