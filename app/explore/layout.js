import Heading from "@/components/ui/heading";
import Post from "@/components/ui/post";
import Searchbar from "@/components/ui/searchbar";
const imageName = [1, 2, 3, 5, 6, 7, 8, 9];

export default function ExploreLayout({ children }) {
  return (
    <main className="md:grid md:grid-cols-[60vw_40vw]">
      <section className="pb-15">
        <header className="p-7 md:p-15 text-lg flex justify-between items-center">
          <h2>SPACE.</h2>
          <Searchbar />
        </header>
        <Heading>
          Discover the best space researches ever, what exactly are you looking
          for?
        </Heading>
        <section className="flex px-7 md:px-15 gap-15 overflow-x-auto">
          {imageName.map((iName, id) => (
            <Post id={iName} key={id} />
          ))}
        </section>
      </section>
      {children}
    </main>
  );
}
