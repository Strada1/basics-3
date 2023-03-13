const tabsBtn   = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");
const tabsNav = document.querySelector(".tabs__nav");

tabsNav.addEventListener('click', onTabClick)
    
function onTabClick(event) {

    let currentBtn = event.target;
    let tabId = currentBtn.dataset.tab;
    let currentTab = document = document.querySelector(tabId);

    if ( ! currentBtn.classList.contains('active') ) {
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

