import { SortStrategy } from '../../interfaces/strategy';
import { BubbleSort } from './bubble.sort';
import { InsertionSort } from './insertion.sort';
import { MergeSort } from './merge.sort';
import { QuickSort } from './quick.sort';

class SortClient {
	private sortMethod: SortStrategy;
	constructor(sortMethod: SortStrategy) {
		this.sortMethod = sortMethod;
	}
	setSortMethod(sortMethod: SortStrategy) {
		this.sortMethod = sortMethod;
	}
	sort(array: number[]) {
		return this.sortMethod.sort(array);
	}
}

function main() {
	const array = [3, 5, 24, 1, 4, 50, 37, 91, -1, 0, 11, 78];
	console.log('Unsorted array: ', array);
	const client = new SortClient(new BubbleSort());
	console.log('Bubble sort');
	console.log(client.sort(array));
	client.setSortMethod(new InsertionSort());
	console.log('Insertion sort');
	console.log(client.sort(array));
	client.setSortMethod(new MergeSort());
	console.log('Merge sort');
	console.log(client.sort(array));
	client.setSortMethod(new QuickSort());
	console.log('Quick sort');
	console.log(client.sort(array));
}
main();
