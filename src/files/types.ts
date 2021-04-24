export type Player = {
  uuid: string; // long
  username: string;
  username_history: { username: string }[];
  textures: Textures;
  created_at?: Date;
};

type Textures = {
  custom: boolean;
  slim: boolean;
  skin: {
    url: string;
    data: string;
  };
  cape?: {
    url: string;
    data: string;
  };
  raw: { value: string; signature: string };
};
