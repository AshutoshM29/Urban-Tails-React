import {
  v4 as uuid
} from "uuid";

import {dogTreat, dogLeash, dogToys, dogGrooming, dogBedding, dogClothing, catClothing, catTreat, catToys, catLitter, catGrooming, catBedding} from "../../assets/images"

// Dog Categories

export const categories = [{
    _id: uuid(),
    categoryName: "Treats",
    titleDog: "Treats",
    description: "Treats for your dogs",
    categoryImageDog: dogTreat,
  },

  {
    _id: uuid(),
    categoryName: "Leash & Harness",
    titleDog: "Leash & Harness",
    description: "Leash and Harness for your dogs",
    categoryImageDog: dogLeash,
  },

  {
    _id: uuid(),
    categoryName: "Toys",
    titleDog: "Toys",
    description: "Toys for your dogs",
    categoryImageDog: dogToys,
  },

  {
    _id: uuid(),
    categoryName: "Grooming",
    titleDog: "Grooming",
    description: "Grooming stuffs for your dogs",
    categoryImageDog: dogGrooming,
  },

  {
    _id: uuid(),
    categoryName: "Bedding",
    titleDog: "Bedding",
    description: "Bedding for your dogs",
    categoryImageDog: dogBedding,
  },

  {
    _id: uuid(),
    categoryName: "Clothing & Accessories",
    titleDog: "Clothing & Accessories",
    description: "Clothing & Accessories for your dogs",
    categoryImageDog: dogClothing,
  },

];