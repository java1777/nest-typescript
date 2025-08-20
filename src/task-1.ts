// Tuple va array bilan ishlash

// 1 - Misol
const minNumber = (arr: number[]): number => {
    const min = Math.min(...arr)
    return min
}
const result1 = minNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
// console.log(result1);

// ---------------------------------------------------

// 2 - Misol
const joinString = (arr: string[]): string => {
    return arr.join(',')
}
const result2 = joinString([" suv ", " kabi ", " bo'l ", " suv ", "kabi"])
// console.log(result2);

// ---------------------------------------------------

// 3 - Misol
const userInfo = (userName: string, loginTime: Date, isLoggedIn: boolean):void => {
    const time = new Date(loginTime.toUTCString().toString())
    if (isLoggedIn) {
        console.log(`${userName} tizimga kirgan\n${time}`);
    } else {
        console.log(`${userName} tizimga kirmagan!`);
    }
}
const nowTime = new Date()
// const result3 = userInfo('Javohir', nowTime, false)

// ---------------------------------------------------

// 4 - Misol
type Phone = {
    brand: string,
    model: string,
    price: number
}

const maxPrice = (phones: Phone[]): object => {
    return phones.reduce((max, item) => item.price > max.price ? item : max);
}
const phones: Phone[] = [
    {brand: 'Apple', model: '10', price: 100},
    {brand: 'Samsung', model: 'A50', price: 700},
    {brand: 'Xiomi', model: 'Mi 9 pro', price: 400},
]
const result4 = maxPrice(phones)
// console.log(result4);

// ---------------------------------------------------

// 5 - Misol
type Students = {
    name: string,
    grade: number,
    isActive: boolean
}
const isActiveStudents = (arr: Students[]): object => {
    return arr.filter(item => item.isActive)
}
const students: Students[] = [
    {name: 'Javohir', grade: 5, isActive: true},
    {name: 'Rushana', grade: 5, isActive: true},
    {name: 'Dilafruz', grade: 5, isActive: true},
    {name: 'Hakima', grade: 4, isActive: true},
    {name: 'Misha', grade: 3, isActive: false}
]
const result5 = isActiveStudents(students)
// console.log(result5);