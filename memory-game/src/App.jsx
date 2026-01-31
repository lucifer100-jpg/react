import { useEffect, useState } from "react";
import { GameHeader } from "./components/GameHeader";
import { Card } from "./components/Card";
import { WinMessage } from "./components/WinMessage";

const cardValues = [
  "🐒","🦧","🐕","🐅","🐎","🦌","🐂","🐘",
  "🐒","🦧","🐕","🐅","🐎","🦌","🐂","🐘",
];

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function App() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  const initializeGame = () => {
    const shuffled = shuffleArray(cardValues).map((value, index) => ({
      id: index,
      value,
      isFlipped: false,
      isMatched: false,
    }));
    setCards(shuffled);
    setFlipped([]);
    setScore(0);
    setMoves(0);
    setIsLocked(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (clickedCard) => {
    if (
      clickedCard.isFlipped ||
      clickedCard.isMatched ||
      isLocked ||
      flipped.length === 2
    )
      return;

    const updatedCards = cards.map((card) =>
      card.id === clickedCard.id ? { ...card, isFlipped: true } : card
    );
    setCards(updatedCards);

    const newFlipped = [...flipped, clickedCard.id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setIsLocked(true);
      setMoves((m) => m + 1);

      const [firstId, secondId] = newFlipped;
      const first = updatedCards.find((c) => c.id === firstId);
      const second = updatedCards.find((c) => c.id === secondId);

      if (first.value === second.value) {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              card.id === firstId || card.id === secondId
                ? { ...card, isMatched: true }
                : card
            )
          );
          setScore((s) => s + 1);
          setFlipped([]);
          setIsLocked(false);
        }, 500);
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              card.id === firstId || card.id === secondId
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlipped([]);
          setIsLocked(false);
        }, 1000);
      }
    }
  };

  const isGameComplete = cards.every((card) => card.isMatched);

  return (
    <div className="app">
      <GameHeader score={score} moves={moves} onReset={initializeGame} />
      {isGameComplete && <WinMessage moves={moves} />}
      <div className="cards-grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onClick={() => handleCardClick(card)}
          />
        ))}
      </div>
    </div>
  );
}
