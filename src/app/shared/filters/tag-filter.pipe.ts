import { Pipe, PipeTransform } from '@angular/core';
import { fromJS, List } from 'immutable';

@Pipe({
  name: 'tagFilter'
})
export class TagFilterPipe implements PipeTransform {

  transform(value: Object, filterExpression: string): any {
    console.log(fromJS(value));
    let _value = fromJS(value);
    let filteredPaths = [];
    if (filterExpression) {
      filterExpression.split('/')
      .forEach(tag => {
        if (value[tag]) {
          value = value[tag];
        }
      });
    }
    return value;
  }

}
