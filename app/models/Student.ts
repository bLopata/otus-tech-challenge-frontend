export class StudentClass {
  id: Number;
  grade: Number;
}

export class Course {
  id: String;
  name: String;
}

/**
 * Parses a JSON object and creates an instance of the `Student` class and
 * specifies the value types of the properties.
 *
 * @param obj - The source object whose properties to bind to the instance.
 */
export class Student {
  constructor(obj: any) {
    for (let key of Object.keys(obj)) {
      this[key] = obj[key];
    }
  }
  first: String;
  last: String;
  email: String;
  studentClasses: StudentClass[];
  student_id: Number;
  /**
   *  Allows for searching of any combination of first and last
   *  names against the student database.
   *
   * @param query - The search query from the input box.
   * @returns A boolean result determining if the `first` and `last` names
   * of this instance are included in the search query.
   */
  studentSearch(query: String): boolean {
    let tokens = query.toLowerCase().split(" ");
    return tokens.every(w =>
      (this.first.toLowerCase() + " " + this.last.toLowerCase()).includes(w)
    );
  }
  
}
