import { useEffect, useState } from "react";

export default function Fetch() {
  const [msg, setMsg] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`/api`, {
          method: "GET",
        });
        if (!res.ok) throw new Error(`error ${res}`);
        const r = await res.json();
        setMsg(JSON.stringify(r));
      } catch (e) {
        console.error(e);
        setMsg(`${e}`);
      }
    };

    getData();
  }, [msg]);

  return <div>hello {msg}</div>;
}
