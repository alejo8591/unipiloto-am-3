var list, item1 ,item2, item3;

list = document.createElement("ul");
item1 = document.createElement("li");
item1.appendChild(document.createTextNode("1"));
item2 = document.createElement("li");
item2.appendChild(document.createTextNode("2"));
item3 = document.createElement("li");
item3.appendChild(document.createTextNode("3"));

list.appendChild(item1);
list.appendChild(item3);
list.insertBefore(item2, item3);

document.body.appendChild(list);
 