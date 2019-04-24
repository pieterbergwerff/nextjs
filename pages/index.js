import Link from "next/link";
import { Page } from "../renderprops";

function Index() {
  return (
    <Page>
      {() => (
        <>
          yo! welcome!
          <br />
          <Link href="/about">
            <a>Go to About</a>
          </Link>
        </>
      )}
    </Page>
  );
}

export default Index;
