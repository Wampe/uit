import { Injectable, PipeTransform, Pipe } from '@angular/core';

/**
 * Transforms any input value
 */
@Pipe({
	name: 'uitPipe'
})
@Injectable()
export class UitPipe implements PipeTransform {
	public transform(value: any, args: any[] = null): string {
		return value;
	}
}
