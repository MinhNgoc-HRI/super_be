
import * as fs from 'fs';
import * as path from 'path';

class Log {
	public baseDir: string;
	public fileName: string;
	public linePrefix: string;

	public today: Date = new Date();

	constructor() {
		let _dateString = `${this.today.getFullYear()}-${(this.today.getMonth() + 1)}-${this.today.getDate()}`;
		let _timeString = `${String(this.today.getHours()).padStart(2, '0')}:${String(this.today.getMinutes()).padStart(2, '0')}:${String(this.today.getSeconds()).padStart(2, '0')}`;

		this.baseDir = path.join(__dirname, '../../.logs/');
		console.log(this.baseDir)
		this.fileName = `${_dateString}.log`;
		this.linePrefix = `[${_dateString} ${_timeString}]`;
	}

	// Thêm flag INFO vào log
	public info (_string: string): void {
		this.addLog('INFO', _string);
	}

	// Thêm flag WARN vào log
	public warn (_string: string): void {
		this.addLog('WARN', _string);
	}

	// Thêm flag ERROR vào log
	public error (_string: string): void {
		// Line break and show the first line
		console.log('\x1b[31m%s\x1b[0m', '[ERROR] :: ' + _string.split(/r?\n/)[0]);

		this.addLog('ERROR', _string);
	}

	// Thêm flag tự custom vào log
	public custom (_filename: string, _string: string): void {
		this.addLog(_filename, _string);
	}
	// Thêm log vào file log
	private addLog (_kind: string, _string: string): void {
		const _that = this;
		_kind = _kind.toUpperCase();
		
		if(!fs.existsSync(_that.baseDir)){
			fs.mkdirSync(_that.baseDir)
		}
		fs.open(`${_that.baseDir}${_that.fileName}`, 'a', (_err, _fileDescriptor) => {
			if (!_err && _fileDescriptor) {
				// thêm log vào cuối file và đóng
				fs.appendFile(_fileDescriptor, `${_that.linePrefix} [${_kind}] ${_string}\n`, (_err) => {
					if (! _err) {
						fs.close(_fileDescriptor, (_err) => {
							if (! _err) {
								return true;
							} else {
								return console.log('\x1b[31m%s\x1b[0m', 'Error closing log file that was being appended');
							}
						});
					} else {
						return console.log('\x1b[31m%s\x1b[0m', 'Error appending to the log file');
					}
				});
			} else {
				return console.log('\x1b[31m%s\x1b[0m', 'Error cloudn\'t open the log file for appending');
			}
		});
	}

	/**
	 * Xóa file LOG sau X ngày
	 *
	 * Note: 'X' nên đc thêm ở file .env
	 */
	public clean (): void {
		//
	}
}

export default new Log;