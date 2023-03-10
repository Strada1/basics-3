import renderTasksContainer from './renderTasksContainer.js';
import renderTask from './renderTask.js';

export default function render(renderByProperty = "priority"){
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
      tasksContainer = renderTasksContainer(currentPropertyStatus)
    }
    renderTask(item.name, item.status, tasksContainer)
    // console.log(`   name: ${item.name}, priority: ${item.priority}`);
  })
}