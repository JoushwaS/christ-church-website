import { useState } from "react";

// COMPONENTS
import Contact from "./contact";
import Helps from "./messages";

export default function Help() {
  const [page, setPages] = useState("helps");
  return (
    <>
      {page === "helps" ? (
        <Helps setPages={setPages} />
      ) : (
        <Contact setPages={setPages} />
      )}
    </>
  );
}
