class StudentClass {
  id: Number;
  grade: Number;
}

export class Student {
  constructor(obj: any) {
    for(let key of Object.keys(obj)){
      this[key] = obj[key]
    }
  }
  first: String;
  last: String;
  email: String;
  studentClasses: StudentClass[];
  searchFields: String[] = ['first', "last"];
  isMatch(query: String): boolean {
    let tokens = query.split(" ");
    console.log(`isMatch() called with ${query} to check against ${this.searchFields}`)

    return tokens.every(w => this.searchFields.join().includes(w));
  }
}
