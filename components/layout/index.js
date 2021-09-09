import NavBar from "../nav";

export default function Layout({ children }) {
  return (
    <>
      <NavBar></NavBar>
      <main>{children}</main>
    </>
  );
}
