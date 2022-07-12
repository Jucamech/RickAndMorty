import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(characters: any,value: string = '' ): any {
    const val = value? characters.filter((str:any) => str.name.toLowerCase().includes(value.toLowerCase())):characters
    return val;
  }

}
