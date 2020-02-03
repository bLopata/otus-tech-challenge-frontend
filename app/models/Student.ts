//@ts-ignore
import { Searchable } from './Searchable.ts'
/*

*/
export class StudentClass {
  id: Number;
  grade: Number;
}

export class Student implements Searchable {
  constructor(obj: any) {
    for(let key of Object.keys(obj)){
      this[key] = obj[key]
    }
  }
  first: String;
  last: String;
  email: String;
  studentClasses: StudentClass[];
  isMatch(query: String): boolean {
    let tokens = query.toLowerCase().split(" ");
    return tokens.every(w => (this.first.toLowerCase() + " " + this.last.toLowerCase()).includes(w));
  }
}
