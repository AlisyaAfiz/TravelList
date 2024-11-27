export default function Stats({items}) {
    const totalItems = items.length;
    const packedItems = items.filter((item) => item.packed).length;
    const percentage = totalItems === 0 ? 0 : Math.round((packedItems/totalItems)*100)
    return (
      <footer className="stats">
        <em style={{fontSize: 27}}>
          { percentage === 100 ? "You got everything!" : `You have ${totalItems} items in the list. You already packed ${packedItems} (${percentage}%).`}
          </em>
      </footer>
    );
  }