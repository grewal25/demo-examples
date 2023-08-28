import React from "react";

interface TextData {
  type: "text";
  content: string;
}

interface ImageData {
  type: "image";
  src: string;
  alt: string;
}

function isTextData(data: TextData | ImageData): data is TextData {
  return data.type === "text";
}

const DynamicComponent: React.FC<{ data: TextData | ImageData }> = ({
  data,
}) => {
  if (isTextData(data)) {
    return <p>{data.content}</p>;
  } else {
    return <img src={data.src} alt={data.alt} />;
  }
};

const TypeGuardExample: React.FC<{ isImage: boolean }> = ({ isImage }) => {
  const text: TextData = { type: "text", content: "Hello, world!" };
  const image: ImageData = {
    type: "image",
    src: "data:image/png;base64,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",
    alt: "An image",
  };

  return (
    <div>
      {isImage ? (
        <DynamicComponent data={image} />
      ) : (
        <DynamicComponent data={text} />
      )}
    </div>
  );
};

export default TypeGuardExample;
