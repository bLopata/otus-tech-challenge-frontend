import { Injectable } from '@angular/core';

// @ts-ignore
import { Searchable } from '../models/Searchable.ts'

@Injectable()

export class SearchService {

  constructor() { }

  private collection: Searchable[];

  search(query: String) {
    this.collection.filter(i => i.isMatch(query))
  };

  load(param: Searchable[]) {
      this.collection = param;
  };
}