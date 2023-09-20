"use client";

import FileInput from "@/components/FileInput";
import PreviewBox from "@/components/PreviewBox";
import Image from "next/image";
import { useState } from "react";
import { FunnelData } from "@/types/funnel";

export default function HomePage() {
  const [data, setData] = useState<FunnelData | null>(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-24">
      <div className="flex-col lg:flex-row z-10 max-w-5xl w-full items-center justify-between font-mono flex">
        <div className="flex flex-col items-center lg:items-start">
          <Image
            src="https://perspective.imgix.net/assets/app/logo/256x256.png"
            alt="Mini perspective Logo"
            className="mb-8"
            width={80}
            height={80}
            priority
          />
          <p className="mb-8 text-center flex justify-center border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit static w-auto rounded-xl border bg-gray-200 p-4 dark:bg-zinc-800/30">
            Get started by uploading your funnel file &nbsp;
          </p>
          <FileInput onChange={(newData: FunnelData) => setData(newData)} />
        </div>
        <PreviewBox data={data} />
      </div>
    </main>
  );
}
