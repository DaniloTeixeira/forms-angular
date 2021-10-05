import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

const _mapToClass = <T>(data: any, _class: new (data: any) => T): T =>
  new _class(data);

export const mapToClass = <T>(
  _class: new (data?: any) => T
): OperatorFunction<any, T> => map((value) => _mapToClass(value, _class));
