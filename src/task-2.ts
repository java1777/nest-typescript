// Union type bilan ishlash

// 1 - Misol
const findType = (item:string|number):string|number =>{
    const arr = item.toString().split('')
    for(let i = 0; i < arr.length; i++) {
        if(isNaN(Number(arr[i]))) {
            return item
        }
    }
    return Number(item)
}
const result6 = findType('123qwe');
// console.log(result6);

// ----------------------------------------------------------

// 2 - Misol
const findType2 = (item:string | boolean): number | boolean => {
    if(typeof item == 'boolean') {
        return true
    } else {
        return item.length
    }
}
const result7 = findType('true')
// console.log(result7);

// ----------------------------------------------------------

// 3 - Misol
const findAge = (age:number):string => {
    if(age >= 18) {
        return "Balog'atga yetgan"
    } else {
        return "Balog'atga yetmagan"
    }
}
const result8 = findAge(77)
// console.log(result8);

// ----------------------------------------------------------

// 4 - Misol
const mexmon = (item:string | undefined | null): void => {
    if ((typeof item == 'string') && item) {
        console.log('Xush kelibsiz, '+item);
        return
    } else {
        console.log('Xush kelibsiz, Mexmon');
        return
    }
}
// mexmon('')

// ----------------------------------------------------------

// 5 - Misol
const Welcome = (): void => {
    console.log('Xush kelibsiz');
}
// Welcome()

// ----------------------------------------------------------

// 6 - Misol
const xatolik = (): never => {
    throw new Error('Xatolik yuz berdi')
}
// xatolik();