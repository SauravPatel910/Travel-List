function Stats({ items }) {
  if (!items.length)
    return <p className="stats">Start adding items to your Packing List 🔥</p>;

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {" "}
        {percentage === 100
          ? "You got everythings! Ready to go ✈"
          : `🎒 You have ${numItems} items on your list, you already packed ${numPacked} (${percentage} %)`}
      </em>
    </footer>
  );
}

export default Stats;
