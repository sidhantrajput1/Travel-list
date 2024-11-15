function Stats({ items }) {
    if (!items.length) {
      return (
        <p className="stats">
          <em>Start adding some item to your list 🚀</em>
        </p>
      );
    }
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);
    return (
      <footer className="stats">
        {percentage === 100 ? (
          "You got everything! Ready to go ✈️"
        ) : (
          <em>
            💼 You have {numItems} item on Your List, and You already packed{" "}
            {numPacked} ({percentage} %)
          </em>
        )}
      </footer>
    );
  }


  export default Stats;