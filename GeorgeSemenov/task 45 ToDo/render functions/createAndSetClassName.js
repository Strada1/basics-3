export default function createAndSetClassName(tagName,className){
  let createdNode = document.createElement(tagName);
  createdNode.className= className;
  return createdNode;
}
