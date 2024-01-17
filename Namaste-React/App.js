/*
    Trying to build using this document tree using React
        <div id = "root" class = "container">
            <h1 id = 'heading-1'>
                Hello, this is h1 tag which was built using react
            </h1>
            <h2 id = 'heading-2'>
                Hey, this is h2 tag which was built too using react
            </h2>
        </div>
*/

const heading1 = React.createElement(
  "h1",
  {
    id: "heading-1",
  },
  "Hello, this is h1 tag which was built using react"
);
const heading2 = React.createElement(
  "h2",
  {
    id: "heading-2",
  },
  "Hey, this is h2 tag which was built too using react"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([heading1, heading2]);
