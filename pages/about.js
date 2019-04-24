import { Component } from "react";
import Link from "next/link";
import { Page } from "../renderprops";

class AboutPage extends Component {
  static getInitialProps() {
    const isServer = typeof window === "undefined";
    return { isServer };
  }

  render() {
    return (
      <Page>
        {() => (
          <>
            how ya doing?
            <br />
            <Link href="/">
              <a>Go to Home</a>
            </Link>
          </>
        )}
      </Page>
    );
  }
}

export default AboutPage;
