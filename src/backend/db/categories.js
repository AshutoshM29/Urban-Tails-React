import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Treats",
    description:
      "Treats for your pets",
  },

  {
    _id: uuid(),
    categoryName: "Leash",
    description:
      "Leash and Harness for your pets",
  },
  
  {
    _id: uuid(),
    categoryName: "Toys",
    description:
      "Toys for your pets",
  },

  {
    _id: uuid(),
    categoryName: "Grooming",
    description:
      "Grooming stuffs for your pets",
  },

  {
    _id: uuid(),
    categoryName: "Bedding",
    description:
      "Bedding for your pets",
  },

  {
    _id: uuid(),
    categoryName: "Clothing",
    description:
      "Clothing & Accessories for your pets",
  },
];
