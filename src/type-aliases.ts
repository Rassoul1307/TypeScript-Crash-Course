type Rgb = [number, number, number];

function getRandomColor(): Rgb {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return [r, g, b];
}

const colorOne = getRandomColor();
const colorTwo = getRandomColor();

// Object literal

type User = {
  name: string;
  score: number;
};

const userOne: User = { name: "Ahmed", score: 125 };

function formatUser(utili: User): void {
  console.log(`${utili.name} a un score de ${utili.score}`);
}
formatUser(userOne);
formatUser({ name: "rassoul", score: 156 });
