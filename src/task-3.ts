// Qoshimcha savollar

// 1 - Misol
const fibonacci = (n: number): number[] => {
  if (n <= 0) return [];

  const result: number[] = n === 1 ? [0] : [0, 1];

  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;
};

const result9 = fibonacci(10);
// console.log(result9);

// -------------------------------------------------------

// - 2 - Misol
type Product = {
    id: number,
    name: string,
    price: number,
    inStock: number
}

const products = (arr: Product[]): object => {
    return arr.filter(item => item.price>100)
}
const productInfo:Product[] = [
    { id: 1, name: 'Uzum', price: 500, inStock: 100},
    { id: 2, name: 'Olma', price: 50, inStock: 100},
    { id: 3, name: 'Nok', price: 77, inStock: 100},
    { id: 4, name: 'Banan', price: 120, inStock: 100},
    { id: 5, name: 'Kivi', price: 450, inStock: 100},
]
const result10 = products(productInfo)
// console.log(result10);
