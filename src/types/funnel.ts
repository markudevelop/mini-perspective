export type FunnelBlock = {
  id: string;
  type: "text" | "image" | "list" | "button";
  text?: string;
  color?: string;
  align?: string;
  src?: string;
  items?: {
    title: string;
    description: string;
    src: string;
  }[];
  bgColor?: string;
};

export type FunnelPage = {
  id: string;
  blocks: FunnelBlock[];
};

export type FunnelData = {
  name: string;
  bgColor: string;
  pages: FunnelPage[];
};
