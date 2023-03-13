const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");


function onTabClick(event) {

    let currentBtn = event.target;
    let tabId = currentBtn.dataset.tab;
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('active')) {
        tabsBtn.forEach(btn => {
            btn.classList.remove('active')
        });
        tabsItems.forEach(tab => {
            tab.classList.remove('active')
        })
    }

    currentBtn.classList.add('active');
    currentTab.classList.add('active');

}

export default onTabClick;