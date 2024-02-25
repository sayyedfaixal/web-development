const listArray = [
  {
    tagType: "p",
    tagText: "Hey this is para1",
    tagId: "para1",
    tagClass: "para",
    tagMargin: "15",
    tagPadding: "10",
    tagColor: "violet",
  },
  {
    tagType: "p",
    tagText: "Hey this is para2",
    tagId: "para2",
    tagClass: "para",
    tagMargin: "15",
    tagPadding: "10",
    tagColor: "indigo",
  },
  {
    tagType: "p",
    tagText: "Hey this is para3",
    tagId: "para3",
    tagClass: "para",
    tagMargin: "15",
    tagPadding: "10",
    tagColor: "blue",
  },
  {
    tagType: "p",
    tagText: "Hey this is para4",
    tagId: "para4",
    tagClass: "para",
    tagMargin: "15",
    tagPadding: "10",
    tagColor: "green",
  },
  {
    tagType: "p",
    tagText: "Hey this is para5",
    tagId: "para5",
    tagClass: "para",
    tagMargin: "15",
    tagPadding: "10",
    tagColor: "yellow",
  },
];

const div1 = document.createElement("div");
div1.setAttribute("class", "second-div");
listArray.map(function (eachItem) {
  const itemNode = document.createElement(`${eachItem.tagType}`);
  itemNode.setAttribute("class", `${eachItem.tagClass}`);
  itemNode.setAttribute("id", `${eachItem.tagId}`);
  itemNode.innerText = eachItem.tagText;
  itemNode.style.color = "purple";
  itemNode.style.background = `${eachItem.tagColor}`;
  itemNode.style.margin = `${eachItem.tagMargin}px`;
  itemNode.style.padding = `${eachItem.tagPadding}px`;
  itemNode.style.fontSize = "20px";
  itemNode.style.borderRadius = "20px";
  div1.appendChild(itemNode);
});

const div = document.createElement("div");
div.className = "container";
div.id = Math.round(Math.random() * 10 + 1);

const h1 = document.createElement("h1");
h1.innerText = "Dom Manuplation";
h1.style.color = "#fff";
console.log(h1);

div.appendChild(h1);
console.log(div);
document.body.appendChild(div);

document.body.append(div1);
