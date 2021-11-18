"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertionSort = void 0;
var InsertionSort = /** @class */ (function () {
    function InsertionSort() {
    }
    InsertionSort.prototype.sort = function (list) {
        return this.insertionSort(list);
    };
    InsertionSort.prototype.insertionSort = function (list) {
        IndexIterator: for (var i = 1; i < list.length; i++) {
            var valueToSort = list[i];
            InsertionIterator: for (var j = i - 1; j >= 0; j--) {
                if (valueToSort >= list[j]) {
                    list[j + 1] = valueToSort;
                    continue IndexIterator;
                }
                else {
                    list[j + 1] = list[j];
                    list[j] = valueToSort;
                    continue InsertionIterator;
                }
            }
        }
        return list;
    };
    return InsertionSort;
}());
exports.InsertionSort = InsertionSort;
//# sourceMappingURL=insertion.sort.js.map