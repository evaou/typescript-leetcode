function insertionSort(arr: number[]): number[] {
    if (arr.length < 2) return arr;

    for (let i = 1; i < arr.length; i++) {
        let insertedValue = arr[i];
        let j = i;
        while (j > 0 && insertedValue < arr[j-1]) {
            arr[j] = arr[j-1];
            j--;
        }
        arr[j] = insertedValue;
    }

    return arr;
}

console.log(insertionSort([34, 22, 10, 19, 17]));