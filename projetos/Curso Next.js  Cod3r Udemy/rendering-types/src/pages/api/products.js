export default function getProducts(req, res) {
    function getRandomValue() {
        return Math.round(Math.random() * 1000, 2);
    }
  
    res.status(200)
    .json([
        {
            id: getRandomValue(),
            name: "Pen",
            price: 6.20
        },
        {
            id: getRandomValue(),
            name: "Rubber",
            price: 8.50
        },
        {
            id: getRandomValue(),
            name: "Book",
            price: 10.10
        },
        {
            id: getRandomValue(),
            name: "Scissor",
            price: 12.99
        }
    ])
}
