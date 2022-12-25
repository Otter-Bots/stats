import { HttpStatusCode } from "solid-start/server";
export default function NotFound() {
    return (
      <main>
        <HttpStatusCode code={405} />
        <h1>Method Not Allowed</h1>
      </main>
    );
  }
  