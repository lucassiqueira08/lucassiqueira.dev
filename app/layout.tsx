import "../styles/globals.css";

const RootLayout = ({ children }: never) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </head>
    <body className="bg-primary-black">{children}</body>
  </html>
);

export default RootLayout;
