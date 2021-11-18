"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bubble_sort_1 = require("./bubble.sort");
var insertion_sort_1 = require("./insertion.sort");
var merge_sort_1 = require("./merge.sort");
var quick_sort_1 = require("./quick.sort");
var SortClient = /** @class */ (function () {
    function SortClient(sortMethod) {
        this.sortMethod = sortMethod;
    }
    SortClient.prototype.setSortMethod = function (sortMethod) {
        this.sortMethod = sortMethod;
    };
    SortClient.prototype.sort = function (array) {
        return this.sortMethod.sort(array);
    };
    return SortClient;
}());
function main() {
    var array = [3, 5, 24, 1, 4, 50, 37, 91, -1, 0, 11, 78];
    console.log('Unsorted array: ', array);
    var client = new SortClient(new bubble_sort_1.BubbleSort());
    console.log('Bubble sort');
    console.log(client.sort(array));
    client.setSortMethod(new insertion_sort_1.InsertionSort());
    console.log('Insertion sort');
    console.log(client.sort(array));
    client.setSortMethod(new merge_sort_1.MergeSort());
    console.log('Merge sort');
    console.log(client.sort(array));
    client.setSortMethod(new quick_sort_1.QuickSort());
    console.log('Quick sort');
    console.log(client.sort(array));
}
main();
//# sourceMappingURL=index.js.map