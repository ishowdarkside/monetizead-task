import Navbar from "../ui/Navbar/Navbar";

const pageStyle = {
  height: `100dvh`,
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
};

export default function NotFound(): JSX.Element {
  return (
    <>
      <Navbar />
      <section style={pageStyle}>
        <h1 style={{ fontSize: "7rem" }}>404 NOT FOUND</h1>
      </section>
    </>
  );
}
