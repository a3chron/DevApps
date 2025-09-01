import { useState } from "react";

export default function Embed({ url }: { url: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="w-full px-4">
      {!failed && (
        <iframe
          src={url}
          className="w-full h-96 border-0 rounded-2xl overflow-hidden"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
