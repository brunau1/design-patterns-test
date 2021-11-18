import {
	AbstractFactory,
	AbstractPrinter,
} from '../../interfaces/abstract-factory';
import fs from 'fs';
export class PrinterFactory implements AbstractFactory {
	create(type: string): AbstractPrinter {
		const PrinterClass = this.getPrinterClass(type);
		return new PrinterClass();
	}
	private getPrinterClass(type: string): any {
		switch (type) {
			case 'file':
				return FilePrinter;
			case 'console':
				return ConsolePrinter;
			default:
				throw new Error(`Unknown printer type: ${type}`);
		}
	}
}
export class ConsolePrinter implements AbstractPrinter {
	print(data: string): void {
		console.log('Console print: \n', data);
	}
}
export class FilePrinter implements AbstractPrinter {
	print(data: string): void {
		const directory: string = 'output.txt';
		fs.writeFileSync(directory, data);
	}
}
class Program {
	constructor(private factory: AbstractFactory) {}
	main(type: string): void {
		const printer = this.factory.create(type);
		printer.print('Hello world');
	}
}
new Program(new PrinterFactory()).main('file');
