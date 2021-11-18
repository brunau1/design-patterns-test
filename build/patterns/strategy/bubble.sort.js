"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleSort = void 0;
var BubbleSort = /** @class */ (function () {
    function BubbleSort() {
    }
    BubbleSort.prototype.sort = function (items) {
        return this.bubbleSort(items);
    };
    BubbleSort.prototype.bubbleSort = function (array) {
        array = array.slice();
        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < array.length - 1; j++) {
                if (array[j] > array[j + 1]) {
                    var swap = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = swap;
                }
            }
        }
        return array;
    };
    return BubbleSort;
}());
exports.BubbleSort = BubbleSort;
//# sourceMappingURL=bubble.sort.js.map