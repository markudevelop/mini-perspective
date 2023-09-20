import { FunnelBlock } from "@/types/funnel";
import React from "react";
import Block from "./Block";

const Funnel: React.FC<{
  blocks: FunnelBlock[];
}> = ({ blocks }) => {
  if (!blocks?.length) {
    return null;
  }

  return (
    <div>
      {blocks.map((block: FunnelBlock) => (
        <div key={block.id} className="my-6">
          <Block block={block} />
        </div>
      ))}
    </div>
  );
};

export default Funnel;
