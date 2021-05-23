//interface for vote attribute at ruling item
export interface VoteInterface {
  positive: number;
  negative: number;
}

//interface for ruling item
export interface RulingInterface {
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: string;
  votes: VoteInterface;
}
