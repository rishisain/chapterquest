export const books = [
  {
    id: 1,
    title: "The Midnight Hour",
    category: "Fantasy",
    price: 19.99,
    originalPrice: 25.99,
    badge: "Bestseller",
    cover: "https://placehold.co/200x300/1e293b/fff?text=The+Midnight+Hour",
    description: "A haunting tale of a man's journey to the shadows of a forgotten past."
  },
  {
    id: 2,
    title: "Beneath the Stars",
    category: "Fantasy",
    price: 24.99,
    cover: "https://placehold.co/200x300/1e293b/fff?text=Beneath+the+Stars",
    description: "A heart-warming tale where two souls discover what they need."
  },
  {
    id: 3,
    title: "The Art of Focus",
    category: "Self-Help",
    price: 14.99,
    badge: "New",
    cover: "https://placehold.co/200x300/1e293b/fff?text=The+Art+of+Focus",
    description: "Practical guide to mastering focus and boosting productivity."
  },
  {
    id: 4,
    title: "The Final Frontier",
    category: "Science Fiction",
    price: 29.99,
    cover: "https://placehold.co/200x300/1e293b/fff?text=The+Final+Frontier",
    description: "A mission to space secrets to change humanity forever."
  }
];

export const getBookById = (id) => books.find(b => b.id === parseInt(id));
export const getBooksByCategory = (category) => books.filter(b => b.category === category);
