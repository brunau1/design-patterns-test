import { SortStrategy } from '../../interfaces/strategy';

export class InsertionSort implements SortStrategy {
	sort(list: number[]): number[] {
		return this.insertionSort(list);
	}
	private insertionSort<T>(list: T[]): T[] {
		IndexIterator: for (let i = 1; i < list.length; i++) {
			const valueToSort = list[i];

			InsertionIterator: for (let j = i - 1; j >= 0; j--) {
				if (valueToSort >= list[j]) {
					list[j + 1] = valueToSort;
					continue IndexIterator;
				} else {
					list[j + 1] = list[j];
					list[j] = valueToSort;
					continue InsertionIterator;
				}
			}
		}

		return list;
	}
}
