// Change code below this line
// let sum = 0;
// function add(...args) {
//   for (let i = 0; i < args.length; i += 1) {
//     sum += args[i];
//   }
//   return sum;
//   // Change code above this line
// }

// console.log(add(74, 11, 62, 46, 12, 36));

// // Change code below this line

// function add(...args) {
//   let sum = 0;
//   for (let i = 0; i < args.length; i += 1) {
//     sum += args[i];
//   }
//   return sum;
//   // Change code above this line
// }
// console.log(add(74, 11, 62, 46, 12, 36));
// // console.log(add(32, 6, 13, 19, 8));
// // console.log(add(12, 4, 11, 48));

// // Change code below this line
// // function addOverNum(x, ...args) {
// //   let total = 0;

// //   for (let i = 0; i < args.length; i += 1) {
// //     if (args[i] >= x) {
// //       total += args[i];
// //     }
// //   }

// //   return total;
// //   // Change code above this line
// // }

// // console.log(addOverNum(50, 15, 27)); //0
// // console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); //71

// // console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); //218

// // Change code below this line
// function findMatches(x, ...args) {
//   const matches = []; // Don't change this line

//   // const temp = [...x, ...args];

// for (let i = 0; i < temp.length; i += 1) {
//   console.log(`i = ${i} , соответствующее значение ${temp[i]}`);

//   if (temp.includes(temp[i])) {
//     matches.push(temp[i])
//   }
// }

//   for (const arg of args) {
//     if (x.includes(arg)) {
//       matches.push(arg);
//     }
//   }

//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams", "Sands of dune"],

//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },

//   removeBook(bookName) {
//     for (const book of this.books) {
//       if (book === bookName) {
//         this.books.splice(this.books.indexOf(book), 1);
//       }
//     }
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     for (const book of this.books) {
//       if (book === oldName) {
//         this.books.splice(this.books.indexOf(book), 1, newName);
//         console.log(this.books);
//       }
//     }
//     return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };

// console.log(bookShelf.removeBook("The last kingdom"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    const allName = [];
    for (const potion of this.potions) {
      allName.push(potion.name);
    }

    if (allName.includes(newPotion.name)) {
      return `'Error! Potion "${newPotion.name}" is already in your inventory!'`;
    } else this.potions.push(newPotion);
  },

  //     for (const potion of this.potions) {
  //       console.log(potion);
  //       if (potion.name === newPotion.name) {
  //         return `Error! Potion ${newPotion.name} is already in your inventory!`;
  //       }
  //     }
  //   this.potions.push(newPotion);
  //   console.log(this.potions);
  // },

  removePotion(potionName) {
    const allName = [];
    for (const potion of this.potions) {
      allName.push(potion.name);
    }

    if (allName.includes(potionName)) {
      for (const potion of this.potions) {
        if (potion.name === potionName) {
          const potionIndex = this.potions.indexOf(potion);
          console.log(potionIndex);
          this.potions.splice(potionIndex, 1);
        }
      }
    } else return `Potion ${potionName} is not in inventory!`;
  },

  updatePotionName(oldName, newName) {
    const allName = [];
    for (const potion of this.potions) {
      allName.push(potion.name);
    }

    if (allName.includes(oldName)) {
      for (const potion of this.potions) {
        if (potion.name === oldName) {
          potion.name = newName;
        }
      }
    } else return `Potion ${oldName} is not in inventory!`;
  },

  // Change code above this line
};

console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// console.log(atTheOldToad.getPotions());

// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.getPotions());

// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.getPotions());

// console.log(
//   atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
// );
// console.log(atTheOldToad.getPotions());
