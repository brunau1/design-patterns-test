"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeSort = void 0;
var MergeSort = /** @class */ (function () {
    function MergeSort() {
        this.temp = [];
    }
    MergeSort.prototype.sort = function (array) {
        if (array !== undefined) {
            return this.mergeSort(array, this.temp, 0, array.length - 1);
        }
        return [];
    };
    MergeSort.prototype.mergeSort = function (arr, temp, left, right) {
        if (left < right) {
            var center = Math.floor((left + right) / 2);
            this.mergeSort(arr, temp, left, center);
            this.mergeSort(arr, temp, center + 1, right);
            this.merge(arr, temp, left, center + 1, right);
        }
        return arr;
    };
    MergeSort.prototype.merge = function (arr, temp, left, right, rightEnd) {
        var leftEnd = right - 1;
        var k = left;
        var num = rightEnd - left + 1;
        while (left <= leftEnd && right <= rightEnd) {
            if (arr[left] <= arr[right]) {
                temp[k++] = arr[left++];
            }
            else {
                temp[k++] = arr[right++];
            }
        }
        while (left <= leftEnd) {
            temp[k++] = arr[left++];
        }
        while (right <= rightEnd) {
            temp[k++] = arr[right++];
        }
        for (var i = 0; i < temp.length; i++, rightEnd--) {
            arr[rightEnd] = temp[rightEnd];
        }
    };
    return MergeSort;
}());
exports.MergeSort = MergeSort;
//# sourceMappingURL=merge.sort.js.map