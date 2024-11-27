import Item from "./Item.js";

export default function PackingList({items, handleUpdateItem, handleDeleteItem, handleFavorites}) {
    return (
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item item={item} key={item.id} handleUpdateItem={handleUpdateItem} handleDeleteItem={handleDeleteItem} handleFavorites={handleFavorites}/>
          ))}
        </ul>
        <button onClick={() => handleDeleteItem()} style={{padding: "20px 60px", fontSize: 25}}>Clear All</button>
      </div>
    );
  }