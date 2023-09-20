import { FunnelData, FunnelPage } from "@/types/funnel";
import React, { ReactNode, useEffect, useState } from "react";
import Funnel from "./Funnel";

const PreviewWrapper: React.FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <div className="mt-12"></div>
    <div className="w-full max-w-[375px] h-[600px] flex flex-col bg-white rounded shadow-lg overflow-hidden">
      {children}
    </div>
  </>
);

const PreviewButton: React.FC<{
  disabled: boolean;
  onClick: () => void;
  text: string;
}> = ({ disabled, onClick, text }) => (
  <button
    className={`py-2 px-4 rounded ${
      disabled ? "bg-gray-300" : "bg-blue-500 text-white"
    }`}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
);

const PreviewBoxNavigation: React.FC<{
  page: number;
  pages: FunnelPage[];
  setPage: (p: number) => void;
}> = ({ page, pages, setPage }) => (
  <div className="bg-gray-100 p-4 flex justify-between items-center">
    <PreviewButton
      disabled={page === 0}
      onClick={() => setPage(page - 1)}
      text="Back"
    />
    Page {page + 1} of {pages.length}
    <PreviewButton
      disabled={page === pages.length - 1}
      onClick={() => setPage(page + 1)}
      text="Next"
    />
  </div>
);

const PreviewBox: React.FC<{ data?: FunnelData | null }> = ({ data }) => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage(0);
  }, [data]);

  if (!data) {
    return (
      <PreviewWrapper>
        <div className="flex flex-col justify-center items-center h-full border-4 border-dashed border-gray-300">
          <span className="text-gray-500">Preview will appear here</span>
        </div>
      </PreviewWrapper>
    );
  }

  return (
    <PreviewWrapper>
      <div className="bg-blue-500 text-white text-center py-2">
        Preview (375x600)
      </div>

      <div
        className="flex-grow overflow-y-auto"
        style={{ backgroundColor: data.bgColor }}
      >
        <Funnel blocks={data?.pages[page]?.blocks} />
      </div>

      {data.pages?.length > 1 && (
        <PreviewBoxNavigation
          page={page}
          setPage={setPage}
          pages={data.pages}
        />
      )}
    </PreviewWrapper>
  );
};

export default PreviewBox;
