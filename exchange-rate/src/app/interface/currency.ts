export interface DataItem {
  code: string;
  value: number;
}

export interface Data {
  [key: string]: DataItem;
}

export interface Meta {
  last_updated_at: string;
}

export interface Currency {
  meta: Meta;
  data: Data;
}






