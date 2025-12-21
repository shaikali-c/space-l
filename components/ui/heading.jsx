export default function Heading({ children }) {
  return (
    <section className="p-7 md:p-15 text-3xl pb-10">
      <h2 className="max-w-120">{children}</h2>
    </section>
  );
}
