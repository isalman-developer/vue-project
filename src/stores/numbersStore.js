import {
  defineStore
} from "pinia";

export const useNumbersStore = defineStore("numbers", {
  // first arg must be always through which we identify the store
  state: () => {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  },

  // actions as the methods.
  actions: {
    addNumber(number) {
      this.numbers.push(number);
    },
  },

  // getters as the computed properties of the store,
  getters: {
    // the param with in the function will always be the state, its a function returning a function 
    // here is the function that has to be returned and the value that has passed will be treated as an argument here
    filterNumbers: (state) => {
      return (minNumber) => state.numbers.filter(num => num >= minNumber);
    }

    // short syntax for the above function is 
    // filterNumbers: (state) => (min) => state.numbers.filter(num => num >= min),
  },
});