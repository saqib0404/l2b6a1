// 1 
const formatValue = (input: string | number | boolean): string | number | boolean | undefined => {
    if (typeof input === "string") {
        return input.toUpperCase();
    } else if (typeof input === "number") {
        return input * 10;
    } else if (typeof input === "boolean") {
        return !input;
    }
}

// 2
const getLength = (input: string | unknown[]): number | undefined => {
    if (typeof input === "string") {
        return input.length
    } else if (Array.isArray(input)) {
        return input.length;
    }
}

// 3
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }
    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}`
    }
}

// 4
interface Item {
    title: string;
    rating: number;
}
const filterByRating = (items: Item[]): Item[] => {
    return items.filter(item => item.rating >= 4 && item.rating <= 5);
};

// 5
interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
const filterActiveUsers = (users: User[]): User[] => {
    return users.filter(user => user.isActive);
}

// 6
interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}
const printBookDetails = (book: Book): void => {
    const availabilityStatus = book.isAvailable ? 'Yes' : 'No';
    const details = `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availabilityStatus}`;

    console.log(details);
};

// 7
type MyArray = string | number;
const getUniqueValues = (array1: MyArray[], array2: MyArray[]): MyArray[] => {
    const seen: { [key: string | number]: boolean } = {};
    let uniqueValues: MyArray[] = [];
    let uniqueIndex = 0;

    const processArray = (arr: MyArray[]) => {
        for (let i = 0; i < arr.length; i++) {
            const value = arr[i];
            if (value !== undefined) {
                if (!seen[value]) {
                    seen[value] = true;
                    uniqueValues[uniqueIndex] = value;
                    uniqueIndex++;
                }
            }
        }
    };
    processArray(array1);
    processArray(array2);
    return uniqueValues;
};

// 8
interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}
const calculateTotalPrice = (products: Product[]): number => {
    return products.reduce((accumulator, product) => {
        let productTotal = product.price * product.quantity;
        if (product.discount && product.discount > 0 && product.discount <= 100) {
            const discountMultiplier = product.discount / 100;
            const discountAmount = productTotal * discountMultiplier;
            productTotal -= discountAmount;
        }
        return accumulator + productTotal;
    }, 0);
};
