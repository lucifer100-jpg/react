export const Card = ({ card, onClick }) => {
  return (
    <div
      className={`card ${card.isFlipped ? "flipped" : ""} ${
        card.isMatched ? "matched" : ""
      }`}
      onClick={onClick}
    >
      {card.isFlipped || card.isMatched ? card.value : "❓"}
    </div>
  );
};
