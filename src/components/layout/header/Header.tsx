import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicDocument } from "@prismicio/types";
import Link from "next/link";

export const Header = ({ navigation }: { navigation: PrismicDocument[] }) => {
  console.log(navigation);
  return (
    <header className="border-b border-gray-800 py-12 dark:border-neutral-700">
      <div className="container flex items-center justify-center">
        <Link href="/">
          <a className="ml-0 mr-auto flex-1">Hire Me</a>
        </Link>
        <span className="flex-1 items-center text-center font-serif text-2xl">
          Missy Wright
        </span>
        <nav className="mr-0 ml-auto flex flex-1 justify-end gap-6">
          {/* {navigation.map((link) => (
            <PrismicLink key={link.id} href={link.uid}>
              <PrismicText field={link.data.meta_title} />
            </PrismicLink>
          ))} */}
        </nav>
      </div>
    </header>
  );
};
