import React from "react";

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

//interface for array of options
export interface OptionsInterface {
  value: string | number;
  label: string;
}
interface ObjectInterface {
  [key: string]: any;
}

//interface for ruling state of redux
export interface RulingStateInterface {
  fetchingRulings: boolean;
  rulings: Array<RulingInterface>;
  error: string | null;
  rulingsFetched: boolean;
  rulingsFetchFailed: boolean;
  rulingsVoted: Array<string> | [];
}

//interface for ruling actions of redux
export interface RulingActionInterface {
  type: string;
  payload?: any;
}

//inteface fot InfoState Component
interface InfoStateProps {
  message: string;
  icon: string;
  type: "info" | "loading";
}
