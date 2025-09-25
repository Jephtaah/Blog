import Header from './Header';

function Layout({ children }) {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="container">
          {children}
        </div>
      </main>
    </div>
  );
}

export default Layout;