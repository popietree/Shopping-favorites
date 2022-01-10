import { initStore } from "./store";

const configureStore = () => {
  const actions = {
    TOGGLE_FAV: (curState, productId) => {
      const prodIndex = curState.products.findIndex((p) => p.id === productId);
      const newFavStatus = !curState.products[prodIndex].isFavorite;
      const updatedProducts = [...curState.products];
      updatedProducts[prodIndex] = {
        ...curState.products[prodIndex],
        isFavorite: newFavStatus,
      };
      return { products: updatedProducts };
    },
  };
  initStore(actions, {
    products: [
      {
        id: "p1",
        title: "Red Scarf",
        description: "A pretty red scarf.",
        isFavorite: false,
      },
      {
        id: "p2",
        title: "Blue T-Shirt",
        description: "A pretty blue t-shirt.",
        isFavorite: false,
      },
      {
        id: "p3",
        title: "Green Trousers",
        description: "A pair of lightly green trousers.",
        isFavorite: false,
      },
      {
        id: "p4",
        title: "Orange Hat",
        description: "Street style! An orange hat.",
        isFavorite: false,
      },
    ],
  });
};

export default configureStore;
//Initiate initial products sotre
// const configureStore = () => {
//   const actions = {
//     // Product Id is payload
//     TOGGLE_FAV: (currState, productId) => {
//       const prodIndex = currState.findIndex((p) => p.id === productId);
//       //GET NEW FAVORITE STATUS
//       const newFavStatus = !currState[prodIndex].isFavorite;
//       //CRATE UPDATED PRODUCTS LIST
//       const updatedProducts = [...currState];
//       //REPLACE FAVORITE STATUS
//       updatedProducts[prodIndex] = {
//         ...currState[prodIndex],
//         isFavorite: newFavStatus,
//       };
//       return { products: updatedProducts };
//     },
//   };
//   //Actions object will be registed in global action sobj
//   initStore(actions, {
//     products: [
//       {
//         id: "p1",
//         title: "Red Scarf",
//         description: "A pretty red scarf.",
//         isFavorite: false,
//       },
//       {
//         id: "p2",
//         title: "Blue T-Shirt",
//         description: "A pretty blue t-shirt.",
//         isFavorite: false,
//       },
//       {
//         id: "p3",
//         title: "Green Trousers",
//         description: "A pair of lightly green trousers.",
//         isFavorite: false,
//       },
//       {
//         id: "p4",
//         title: "Orange Hat",
//         description: "Street style! An orange hat.",
//         isFavorite: false,
//       },
//     ],
//   });
// };

// export default configureStore;
