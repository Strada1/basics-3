import renderTask from './renderTask.js';

export default function render(renderByProperty = "priority"){
  this.parentNode.innerHTML='';
  //renderByProperty - по какому свойству группировать задачи при рендере
  let virtualList = this.list.concat([]);
  let currentPropertyStatus = "";
  let tasksContainer;
  
  //Сортируем задачи по указанному свойству
  virtualList.sort((item1,item2)=>item1[renderByProperty]
    .localeCompare(item2[renderByProperty]))

  virtualList.forEach((item,index,arr)=>{
    if(currentPropertyStatus != item[renderByProperty]){
      currentPropertyStatus = item[renderByProperty];
      tasksContainer = this.renderTasksContainer(
        {title:currentPropertyStatus,parentNode: this.parentNode})
    }
    this.renderTask(item, tasksContainer)
  })
}