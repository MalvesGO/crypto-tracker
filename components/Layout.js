import Head from "next/head";
import Link from "next/Link";

const Layout = ({ children, title = "Crypto Tracker" }) => {
  return (
    <div className="layout">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <Link href="/" passHref>
          <a>
            <img
              className="coin_logo"
              src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
              alt=""
            />
          </a>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;