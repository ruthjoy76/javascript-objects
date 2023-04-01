const animals = [
  {
    id: 1,
    name: "Corgi",
    price: 500,
    description:
      "A small, fluffy dog breed with a friendly and outgoing personality.",
    image: "https://picsum.photos/200/300/?random=1",
    category: "Dogs",
  },
  {
    id: 2,
    name: "Persian Cat",
    price: 800,
    description:
      "A beautiful, long-haired cat breed known for their sweet and gentle personalities.",
    image: "https://picsum.photos/200/300/?random=2",
    category: "Cats",
  },
  {
    id: 3,
    name: "African Grey Parrot",
    price: 1200,
    description:
      "A highly intelligent and talkative bird species that make great companions.",
    image: "https://picsum.photos/200/300/?random=3",
    category: "Birds",
  },
  {
    id: 4,
    name: "Bearded Dragon",
    price: 150,
    description:
      "A reptile species that are easy to care for and make great pets for beginners.",
    image: "https://picsum.photos/200/300/?random=4",
    category: "Reptiles",
  },
  {
    id: 5,
    name: "Goldfish",
    price: 10,
    description:
      "A popular freshwater fish species that are easy to care for and make great pets for kids.",
    image: "https://picsum.photos/200/300/?random=5",
    category: "Fish",
  },
  {
    id: 6,
    name: "Rabbit",
    price: 200,
    description:
      "A cute and cuddly small animal species that make great indoor pets.",
    image: "https://picsum.photos/200/300/?random=6",
    category: "Small Animals",
  },
  {
    id: 7,
    name: "Bengal Cat",
    price: 1000,
    description:
      "A beautiful, spotted cat breed known for their energetic and playful personalities.",
    image: "https://picsum.photos/200/300/?random=7",
    category: "Cats",
  },
  {
    id: 8,
    name: "French Bulldog",
    price: 1500,
    description:
      "A small, muscular dog breed known for their affectionate and playful personalities.",
    image: "https://picsum.photos/200/300/?random=8",
    category: "Dogs",
  },
  {
    id: 9,
    name: "Hamster",
    price: 20,
    description:
      "A small, furry rodent species that are easy to care for and make great pets for kids.",
    image: "https://picsum.photos/200/300/?random=9",
    category: "Small Animals",
  },
  {
    id: 10,
    name: "Siamese Fighting Fish",
    price: 15,
    description:
      "A beautiful freshwater fish species that are easy to care for and come in a variety of colors.",
    image: "https://picsum.photos/200/300/?random=10",
    category: "Fish",
  },
];
animals.forEach(function (animal) {
  const card = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = animal.name;

  const price = document.createElement("p");
  price.textContent = animal.price;

  const description = document.createElement("p");
  description.textContent = animal.description;

  const addToCardBtn = document.createElement("button");
  addToCardBtn.textContent = "Add to Cart";

  const image = document.createElement("img");
  image.src = animal.image;


  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(price);
  card.appendChild(description);
  card.appendChild(addToCardBtn);

  document.body.appendChild(card);
});