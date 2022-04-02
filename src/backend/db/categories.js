import {
  v4 as uuid
} from "uuid";

import {dogTreat, dogLeash, dogToys, dogGrooming, dogBedding, dogClothing} from "../../assets/images"

// Dog Categories

export const categories = [{
    _id: uuid(),
    categoryName: "Treats",
    description: "Treats for your dogs",
    categoryImage: dogTreat,
  },

  {
    _id: uuid(),
    categoryName: "Leash & Harness",
    description: "Leash and Harness for your dogs",
    categoryImage: dogLeash,
  },

  {
    _id: uuid(),
    categoryName: "Toys",
    description: "Toys for your dogs",
    categoryImage: dogToys,
  },

  {
    _id: uuid(),
    categoryName: "Grooming",
    description: "Grooming stuffs for your dogs",
    categoryImage: dogGrooming,
  },

  {
    _id: uuid(),
    categoryName: "Bedding",
    description: "Bedding for your dogs",
    categoryImage: dogBedding,
  },

  {
    _id: uuid(),
    categoryName: "Clothing & Accessories",
    description: "Clothing & Accessories for your dogs",
    categoryImage: dogClothing,
  },

];