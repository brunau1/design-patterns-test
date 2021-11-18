"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickSort = void 0;
/**
 * This class contains logic for Quick Sort algorithm implementation.
 *
 * @class QuickSort
 * @constructor
 */
var QuickSort = /** @class */ (function () {
    function QuickSort() {
        this.arr = [];
    }
    QuickSort.prototype.sort = function (arry) {
        if (arry !== undefined) {
            this.arr = arry;
            return this.quicksort(0, this.arr.length - 1);
        }
        return [];
    };
    QuickSort.prototype.swap = function (i, j) {
        var temp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = temp;
    };
    QuickSort.prototype.quicksort = function (low, high) {
        var i = low;
        var j = high;
        var pivot = this.arr[Math.floor((low + high) / 2)];
        while (i <= j) {
            while (this.arr[i] < pivot) {
                i++;
            }
            while (this.arr[j] > pivot) {
                j--;
            }
            if (i <= j) {
                this.swap(i, j);
                i++;
                j--;
            }
        }
        if (low < j) {
            this.quicksort(low, j);
        }
        if (i < high) {
            this.quicksort(i, high);
        }
        return this.arr;
    };
    return QuickSort;
}());
exports.QuickSort = QuickSort;
//# sourceMappingURL=quick.sort.js.map