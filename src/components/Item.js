export default function Item({ item, handleUpdateItem, handleDeleteItem, handleFavorites }) {
    return (
      <li style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        <button onClick={() => handleFavorites(item.id)} style={{fontSize: 30}}>
        {item.favorite ? "⭐" : "☆"}
        </button>
        <input type="checkbox" checked={item.packed} onChange={() => handleUpdateItem(item.id)}/>
        {item.description} ({item.quantity})
        <button onClick={() => handleDeleteItem(item.id)}>❌</button>
      </li>
    );
  }