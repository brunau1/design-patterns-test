export interface AbstractPrinter {
	print(data: string): void;
}

export interface AbstractFactory {
	create(type: string): AbstractPrinter;
}
