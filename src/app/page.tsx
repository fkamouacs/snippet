"use client";

import Quote from "./quote";
import { useQuote } from "./_hooks/useQuote";

export default function Home() {
  const { quotes } = useQuote();
  console.log(quotes);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Quote />
    </main>
  );
}
