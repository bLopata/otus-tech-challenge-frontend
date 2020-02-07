import { Pipe, PipeTransform, Injectable } from "@angular/core";
//@ts-ignore
import { Searchable } from "../Models/Searchable.ts";

@Pipe({
  name: "filter"
})
@Injectable()
export class FilterPipe implements PipeTransform {
  transform(items: Array<any>, keyword: String): any[] {
    if (!items) return [];
    if (!keyword) return items;
    debugger;
    return items.filter(i => i.studentSearch(keyword));
  }
}
