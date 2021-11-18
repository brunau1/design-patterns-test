"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilePrinter = exports.ConsolePrinter = exports.PrinterFactory = void 0;
var fs_1 = __importDefault(require("fs"));
var PrinterFactory = /** @class */ (function () {
    function PrinterFactory() {
    }
    PrinterFactory.prototype.create = function (type) {
        var PrinterClass = this.getPrinterClass(type);
        return new PrinterClass();
    };
    PrinterFactory.prototype.getPrinterClass = function (type) {
        switch (type) {
            case 'file':
                return FilePrinter;
            case 'console':
                return ConsolePrinter;
            default:
                throw new Error("Unknown printer type: " + type);
        }
    };
    return PrinterFactory;
}());
exports.PrinterFactory = PrinterFactory;
var ConsolePrinter = /** @class */ (function () {
    function ConsolePrinter() {
    }
    ConsolePrinter.prototype.print = function (data) {
        console.log('Console print: \n', data);
    };
    return ConsolePrinter;
}());
exports.ConsolePrinter = ConsolePrinter;
var FilePrinter = /** @class */ (function () {
    function FilePrinter() {
    }
    FilePrinter.prototype.print = function (data) {
        var directory = 'output.txt';
        fs_1.default.writeFileSync(directory, data);
    };
    return FilePrinter;
}());
exports.FilePrinter = FilePrinter;
var Program = /** @class */ (function () {
    function Program(factory) {
        this.factory = factory;
    }
    Program.prototype.main = function (type) {
        var printer = this.factory.create(type);
        printer.print('Hello world');
    };
    return Program;
}());
new Program(new PrinterFactory()).main('file');
//# sourceMappingURL=index.js.map