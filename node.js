const allProducts = [
    {
        id: 1,
        category: "jeans",
        name: "Clash Black Ripped Flare Jeans",
        price: 1500,
        image: "80.jpg"
    },
    {
        id: 2,
        category: "jeans",
        name: "Dark Wide Denim Shorts",
        price: 1200,
        image: "12333.webp"
    },
    {
        id: 3,
        category: "jeans",
        name: "Black Skinny Ripped Jeans",
        price: 1700,
        image: "1236.jpg"
    },
    {
        id: 4,
        category: "jeans",
        name: "Black Flare Classic Jeans",
        price: 1600,
        image: "124.jpg"
    },
    {
        id: 5,
        category: "jeans",
        name: "Washed Blue Baggy Jeans",
        price: 1400,
        image: "джинсы/444.jpg"
    },
    {
        id: 6,
        category: "jeans",
        name: "Light Blue Wide Shorts",
        price: 1100,
        image: "джинсы/3211.jpg"
    },
    {
        id: 7,
        category: "jeans",
        name: "Black Denim Long Shorts",
        price: 1300,
        image: "джинсы/4445.jpg"
    },
    {
        id: 8,
        category: "jeans",
        name: "Dark Blue Wide Leg Jeans",
        price: 1500,
        image: "джинсы/5543.jpg"
    },
    {
        id: 9,
        category: "jeans",
        name: "Black Wide Crop Jeans",
        price: 1450,
        image: "джинсы/5543.jpg"
    },
    {
        id: 10,
        category: "jeans",
        name: "Blue Flare Jeans",
        price: 1650,
        image: "джинсы/12334.jpg"
    },
    {
        id: 11,
        category: "jeans",
        name: "Dark Straight Classic Jeans",
        price: 1550,
        image: "джинсы/44445.jpg"
    },
    {
        id: 12,
        category: "jeans",
        name: "Blue Denim Shorts",
        price: 1000,
        image: "джинсы/eeee.jpg"
    },

    {
        id: 13,
        category: "longsleeves",
        name: "Grey Basic Longsleeve",
        price: 1200,
        image: "лонгсливы/315.jpg"
    },
    {
        id: 14,
        category: "longsleeves",
        name: "White Logo Longsleeve",
        price: 1300,
        image: "лонгсливы/316.jpg"
    },
    {
        id: 15,
        category: "longsleeves",
        name: "Navy Oversize Longsleeve",
        price: 1400,
        image: "лонгсливы/317.jpg"
    },
    {
        id: 16,
        category: "longsleeves",
        name: "White Crop Longsleeve",
        price: 1250,
        image: "лонгсливы/318.jpg"
    },
    {
        id: 17,
        category: "longsleeves",
        name: "Black Sleeve Print Longsleeve",
        price: 1600,
        image: "лонгсливы/319.jpg"
    },
    {
        id: 18,
        category: "longsleeves",
        name: "Dark Grey Basic Longsleeve",
        price: 1350,
        image: "лонгсливы/320.jpg"
    },
    {
        id: 19,
        category: "longsleeves",
        name: "Light Blue Crop Longsleeve",
        price: 1300,
        image: "лонгсливы/322.jpg"
    },
    {
        id: 20,
        category: "longsleeves",
        name: "Brown Basic Longsleeve",
        price: 1350,
        image: "лонгсливы/323.jpg"
    },
    {
        id: 21,
        category: "longsleeves",
        name: "Black Small Logo Longsleeve",
        price: 1450,
        image: "лонгсливы/324.jpg"
    },
    {
        id: 22,
        category: "longsleeves",
        name: "White Chill Longsleeve",
        price: 1400,
        image: "лонгсливы/3334.jpg"
    },
    {
        id: 23,
        category: "longsleeves",
        name: "Grey Striped Longsleeve",
        price: 1500,
        image: "лонгсливы/3335.jpg"
    },
    {
        id: 24,
        category: "longsleeves",
        name: "Pink Sport Longsleeve",
        price: 1450,
        image: "лонгсливы/3336.jpg"
    },

    {
        id: 25,
        category: "jackets",
        name: "Blue Winter Ski Jacket",
        price: 2400,
        image: "куртки/771.jpg"
    },
    {
        id: 26,
        category: "jackets",
        name: "Black Cropped Puffer Jacket",
        price: 2200,
        image: "куртки/772.jpg"
    },
    {
        id: 27,
        category: "jackets",
        name: "Navy Blue Puffer Jacket",
        price: 2500,
        image: "куртки/773.jpg"
    },
    {
        id: 28,
        category: "jackets",
        name: "Black Hooded Puffer Jacket",
        price: 2700,
        image: "куртки/774.jpg"
    },
    {
        id: 29,
        category: "jackets",
        name: "Grey Layered Winter Jacket",
        price: 2600,
        image: "куртки/775.jpg"
    },
    {
        id: 30,
        category: "jackets",
        name: "Black Oversize Winter Jacket",
        price: 2800,
        image: "куртки/776.jpg"
    },
    {
        id: 31,
        category: "jackets",
        name: "Black Cropped Hooded Jacket",
        price: 2300,
        image: "куртки/778.jpg"
    },
    {
        id: 32,
        category: "jackets",
        name: "Olive Fleece Jacket",
        price: 2100,
        image: "куртки/779.jpg"
    },
    {
        id: 33,
        category: "jackets",
        name: "Khaki Short Bomber Jacket",
        price: 2400,
        image: "куртки/781.jpg"
    },
    {
        id: 34,
        category: "jackets",
        name: "Black Leather Biker Jacket",
        price: 3200,
        image: "куртки/782.jpg"
    },
    {
        id: 35,
        category: "jackets",
        name: "Black Glossy Puffer Jacket",
        price: 2900,
        image: "куртки/783.jpg"
    },
    {
        id: 36,
        category: "jackets",
        name: "Black Tech Winter Jacket",
        price: 3000,
        image: "куртки/785.jpg"
    }
];
