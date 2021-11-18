import { SortStrategy } from '../../interfaces/strategy';

/**
 * This class contains logic for Quick Sort algorithm implementation.
 *
 * @class QuickSort
 * @constructor
 */
export class QuickSort implements SortStrategy {
	private arr: number[];

	constructor() {
		this.arr = [];
	}
	public sort(arry: number[]): number[] {
		if (arry !== undefined) {
			this.arr = arry;
			return this.quicksort(0, this.arr.length - 1);
		}
		return [];
	}

	private swap(i: number, j: number): void {
		let temp: number = this.arr[i];
		this.arr[i] = this.arr[j];
		this.arr[j] = temp;
	}

	private quicksort(low: number, high: number): number[] {
		let i: number = low;
		let j: number = high;
		let pivot: number = this.arr[Math.floor((low + high) / 2)];

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
	}
}
