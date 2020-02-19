function swap(arr: number[], i: number, j: number) {
    let tmpValue = arr[i];
    arr[i] = arr[j];
    arr[j] = tmpValue;
}

function pivot(arr: number[], startIdx: number, endIdx: number, targetIdx: number = startIdx): number {
    let initialPivotIdx = targetIdx;
    let pivotIdx = startIdx;
    let pivotValue = arr[initialPivotIdx];

    for (let i = startIdx; i <= endIdx; i++) {
        if (pivotValue > arr[i]) {
            swap(arr, pivotIdx, i);
            pivotIdx++;
        }
    }

    if (arr[pivotIdx] !== pivotValue) {
        swap(arr, initialPivotIdx, pivotIdx);
    }

    return pivotIdx;
}

function quickSort(arr: number[], startIdx: number = 0, endIdx: number = arr.length - 1): number[] {
    if (startIdx < endIdx) {
        let pivotIdx = pivot(arr, startIdx, endIdx);
        quickSort(arr, startIdx, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, endIdx);
    }

    return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));