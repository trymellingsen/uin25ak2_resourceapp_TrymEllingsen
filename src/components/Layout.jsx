import Nav from "./nav"; 

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Nav />
      <section className="content-container">
        {children}
      </section>
    </div>
  );
};

export default Layout;