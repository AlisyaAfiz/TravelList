export default function Stats({items}) {
    const totalItems = items.length;
    const packedItems = items.filter((item) => item.packed).length;
    const percentage = Math.round((packedItems/totalItems)*100)
    return (
      <footer className="stats">
        <em>
          { percentage === 100 ? "You got everything!" : `You have ${totalItems} items in the list. You already packed ${packedItems} (${percentage}%).`}
          </em>
      </footer>
    );
  }