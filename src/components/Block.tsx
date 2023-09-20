import { FunnelBlock } from "@/types/funnel";

// TODO
// 1. decouple it as it gets more complicated
// 2. add validations
// 3. don't trust JSON values

type TextAlign = "left" | "right" | "center" | "justify";

const TextBlock: React.FC<{
  color?: string;
  align: TextAlign;
  text?: string;
}> = ({ color, align, text }) => {
  // sanitize text
  return <div style={{ color, textAlign: align }}>{text}</div>;
};

const Block: React.FC<{
  block: FunnelBlock;
}> = ({ block }) => {
  switch (block.type) {
    case "text":
      return (
        <TextBlock
          color={block.color}
          text={block.text}
          align={block.align as TextAlign} // Validate value
        />
      );
    case "image":
      return <img src={block.src} alt="" />;
    case "button":
      return (
        <button
          className="py-2 px-4 rounded"
          style={{ color: block.color, backgroundColor: block.bgColor }}
        >
          {block.text}
        </button>
      );
    case "list":
      return (
        <ul>
          {block.items?.map((item, index) => (
            <li key={index} className="flex justify-between gap-x-6 py-2">
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src={item.src}
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {item.title}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
};

export default Block;
