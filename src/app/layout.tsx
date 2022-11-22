import Link from "next/link";
import type { ReactNode } from "react";
import { createClient } from "prismic-config";

import "styles/globals.css";
import { fonts } from "../utils/fonts";

const loader = async () => {
  const client = createClient();
  const document = await client.getSingle("navigation");

  return document;
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const { data } = await loader();

  return (
    <html lang="en">
      <body>
        <header className="container flex items-center justify-between py-10">
          <h3 className={fonts.syne.className}>Missy Wright</h3>
          <nav className="flex gap-4">
            {data.links.map((item) => {
              console.log(item.link.link_type);
              return (
                <Link href="/" key={item.label}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </header>
        <main className="flex min-h-screen flex-col">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
