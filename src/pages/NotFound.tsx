const pageStyle = {
  height: `100dvh`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function NotFound(): JSX.Element {
  return (
    <section style={pageStyle}>
      <h1 style={{ fontSize: "7rem" }}>404 NOT FOUND</h1>
    </section>
  );
}
