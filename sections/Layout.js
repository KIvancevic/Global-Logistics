import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import { useRouter } from 'next/router'

const Layout = ({ children, pageMeta }) => {

  const router = useRouter();

  const meta = {
    title: 'Global Logistic LTD - Transportation Company',
    description: 'Makin deliveries fast, efficient & on time',
    type: 'website', 
    ...pageMeta,
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph */}
        <meta 
          property="og:url" 
          content={`http://localhost:3000${router.asPath}`} 
        />
        <meta property="og:type" content={meta.type}/>
        <meta property="og:site_name" content="Transportation Company"/>
        <meta property="og:description" content={meta.description}/>
        <meta property="og:title" content={meta.title}/>
        {meta.date && (
          <meta property="article:published_time" content={meta.date} 
          />
        )}
      </Head>
      <div className="min-h-screen flex flex-col min-h-full max-w-full">
        <Header />
        <main className="flex-grow container mx-auto min-h-full max-w-full">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
