import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test',
})
export class TestPipe implements PipeTransform {
  // transform(value: unknown, ...args: unknown[]): any {
  //   return "hello";


    transform(p:any,wish:string): string {
      if(p.gender == "f")
      {
        return `hello miss ${p.name}${wish}`
      }
      else
      {
        return `Hello Mr ${p.name} ${wish}`
      }

      return "hello";
  }
}
