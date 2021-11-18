import { SortStrategy } from '../../interfaces/strategy';

export class MergeSort implements SortStrategy {
	private temp: number[] = [];

	sort(array: number[]): number[] {
		if (array !== undefined) {
			return this.mergeSort(array, this.temp, 0, array.length - 1);
		}
		return [];
	}

	private mergeSort(
		arr: number[],
		temp: number[],
		left: number,
		right: number
	): number[] {
		if (left < right) {
			let center: number = Math.floor((left + right) / 2);
			this.mergeSort(arr, temp, left, center);
			this.mergeSort(arr, temp, center + 1, right);
			this.merge(arr, temp, left, center + 1, right);
		}
		return arr;
	}

	private merge(
		arr: number[],
		temp: number[],
		left: number,
		right: number,
		rightEnd: number
	): void {
		let leftEnd: number = right - 1;
		let k: number = left;
		let num: number = rightEnd - left + 1;

		while (left <= leftEnd && right <= rightEnd) {
			if (arr[left] <= arr[right]) {
				temp[k++] = arr[left++];
			} else {
				temp[k++] = arr[right++];
			}
		}

		while (left <= leftEnd) {
			temp[k++] = arr[left++];
		}

		while (right <= rightEnd) {
			temp[k++] = arr[right++];
		}

		for (let i: number = 0; i < temp.length; i++, rightEnd--) {
			arr[rightEnd] = temp[rightEnd];
		}
	}
}
