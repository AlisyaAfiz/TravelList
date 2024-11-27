import { useState } from "react";

export default function Form({handleAddItems}) {
    const [description, setDesc] = useState("");
    const [quantity, setQty] = useState(1);
  
    function handleSubmit(event) {
      event.preventDefault();
      const newItem = {
        id: Date.now(),
        description,
        quantity,
        packed: false,
        favorite: false
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