export type Link = {
  url?: string;
  scripts?: string[];
  styles?: string[];
};

export type PayloadLink = {
  message?: string;
  link: Link;
};

export type State = {
  link: Link;
  error: undefined | string;
};
