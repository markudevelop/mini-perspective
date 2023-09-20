import React, { ChangeEvent } from "react";

type FileInputProps = {
  onChange: (data: any) => void; // TODO types
  buttonText?: string;
};

const FileInput: React.FC<FileInputProps> = ({
  onChange,
  buttonText = "Upload File",
}) => {
  const handleFileInput = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        try {
          // TODO we need to validate the json format that it has
          // everything that's is required and is valid, set AS IS for now.
          onChange(JSON.parse(event.target?.result as string));
        } catch (e) {
          // TODO show notification for invalid json etc
          console.log(e);
        }
      };

      reader.readAsText(file);
    }
  };

  return (
    <div className="relative inline-block">
      <input
        type="file"
        accept="application/json"
        onChange={handleFileInput}
        className="hidden"
        id="fileInput"
      />
      <label
        htmlFor="fileInput"
        className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {buttonText}
      </label>
    </div>
  );
};

export default FileInput;
