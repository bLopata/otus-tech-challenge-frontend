export interface Searchable {
  searchFields: String[];
  isMatch(query: String);
}