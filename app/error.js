"use client";

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <h1>{error.message}</h1>
      <p>Please try again later.</p>
    </main>
  );
}
