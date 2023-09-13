import { ref } from "vue";
export default function () {
  const numbers = ref([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const addNumber = (num) => {
    numbers.value.push(num);
  };

  const filterNumber = (min) => numbers.value.filter((num) => num >= min);

  return {
    numbers,
    addNumber,
    filterNumber,
  };
}
