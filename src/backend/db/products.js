import {
  v4 as uuid
} from "uuid";

import {boneChew, dentastix, duoStick, mini, sara, yummy} from "../../assets/images"

export const products = [{
    _id: uuid(),
    title: "Dogsee Chew",
    img: boneChew,
    productDesc: "The perfect long-lasting dog chew sticks for puppies and small breed fluffies!",
    textBadge: "Trending",
    rating: "4.0 ",
    reviews: "8.6K reviews",
    price: "₹450",
    initialPrice: "₹2500",
    discount: "82%",
    categoryName: "dog-treats",
  },

  {
    _id: uuid(),
    title: "Apple & Banana Biscuits",
    img: yummy,
    productDesc: "Made with real Apples & Bananas, free of Gluten & Artificial Flavours. Suitable for all Dogs",
    textBadge: "Best Seller",
    rating: "4.2 ",
    reviews: "6.2K reviews",
    price: "₹450",
    initialPrice: "₹2500",
    discount: "82%",
    categoryName: "dog-treats",
  },

  {
    _id: uuid(),
    title: "Duo Stick",
    img: duoStick,
    productDesc: "Made with real Apples & Bananas, free of Gluten & Artificial Flavours. Suitable for all Dogs",
    textBadge: "Few Left",
    rating: "4.6 ",
    reviews: "12.3K reviews",
    price: "₹450",
    initialPrice: "₹2500",
    discount: "82%",
    categoryName: "dog-treats",
  },

  {
    _id: uuid(),
    title: "Mini's MaM",
    img: mini,
    productDesc: "Made with real Apples & Bananas, free of Gluten & Artificial Flavours. Suitable for all Dogs",
    textBadge: "Few Left",
    rating: "4.6 ",
    reviews: "12.3K reviews",
    price: "₹450",
    initialPrice: "₹2500",
    discount: "82%",
    categoryName: "dog-treats",
  },

  {
    _id: uuid(),
    title: "Sara's Jerky",
    img: sara,
    productDesc: "Made with real Apples & Bananas, free of Gluten & Artificial Flavours. Suitable for all Dogs",
    textBadge: "Restocked",
    rating: "3.5 ",
    reviews: "6.6K reviews",
    price: "₹450",
    initialPrice: "₹2500",
    discount: "82%",
    categoryName: "dog-treats",
  },

  {
    _id: uuid(),
    title: "DentaStix",
    img: dentastix,
    productDesc: "Made with real Apples & Bananas, free of Gluten & Artificial Flavours. Suitable for all Dogs",
    textBadge: "Trending",
    rating: "4.2 ",
    reviews: "8.5K reviews",
    price: "₹450",
    initialPrice: "₹2500",
    discount: "82%",
    categoryName: "dog-treats",
  },
];