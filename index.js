count = 1

const heade = document.createElement("h1");
const head_text = document.createTextNode("Welcome to THE DOM HOMEWORK");
const para = document.createElement("p");
const para_text = document.createTextNode("This is your first THE DOM HOMEWORK assignment");
const liste = document.createElement("ul");
const list1 = document.createElement("li");
const list2 = document.createElement("li");
const list3 = document.createElement("li");
const list1_text = document.createTextNode("Mr.");
const list2_text = document.createTextNode("Gard");
const list3_text = document.createTextNode("Ner");
const button = document.createElement("button");
const button_text = document.createTextNode("Add a new list item");


heade.setAttribute("class","highlight")

heade.appendChild(head_text);
para.appendChild(para_text);
button.appendChild(button_text);
liste.appendChild(list1);
list1.appendChild(list1_text);
liste.appendChild(list2);
list2.appendChild(list2_text);
liste.appendChild(list3);
list3.appendChild(list3_text);
document.getElementById("myDiv").appendChild(heade);
document.getElementById("myDiv").appendChild(para);
document.getElementById("myDiv").appendChild(button);
document.getElementById("myDiv").appendChild(liste);

function add_list_items(){
    let new_item = document.createElement("li");
    let new_item_text = document.createTextNode(`New Element ${count}`);
    liste.appendChild(new_item);
    new_item.appendChild(new_item_text);
    count += 1;
    document.getElementById("myDiv").appendChild(liste);
    
}

button.addEventListener("click",add_list_items)