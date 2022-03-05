if (module.hot) {
  module.hot.accept();
}

const tabBtns = document.querySelectorAll('.underwater__tabs-btn'),
  tabContents = document.querySelectorAll('.underwater__tabs-content');

tabBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    showTabPanel(e);
  });
});

function showTabPanel(e) {
  const tabId = e.target.dataset.tabTarget;
  const tabTarget = document.getElementById(tabId);

  tabBtns.forEach((tabBtn) => {
    tabBtn.classList.remove('js-tab-active');
  });

  tabContents.forEach((tabContent) => {
    tabContent.classList.remove('js-tab-active');
  });

  e.target.classList.add('js-tab-active');
  tabTarget.classList.add('js-tab-active');
}
