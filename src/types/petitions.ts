export interface PetitionSummary {
  id: number;
  title: string;
  writer: string;
  createDate: string;
  imageCount: number;
  like: number;
  modifiedDate: string;
}

export interface Petition {
  id: number;
  title: string;
  content: string;
  writer: string;
  createDate: string;
  imageCount: number;
  hasAuthority: boolean;
  view: number;
  like: number;
  isLiked: boolean;
  modifiedDate: string;
}
