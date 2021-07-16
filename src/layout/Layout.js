import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header /> ??? maybe */}
      {children}
      <Footer />
    </>
  );
};
export default Layout;
