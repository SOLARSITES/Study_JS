const disableScroll = () => {
  const headerWrapper = document.querySelector('.header-wrapper');
  const scrollWidth = window.innerWidth - document.body.offsetWidth;

  document.body.dataset.scrollY = window.scrollY;

  document.body.style.cssText = `
        position:fixed;
        top: -${window.scrollY}px;
        left:0;
        width: 100%;
        overflow:hidden;
        height:100vh;
        padding-right: ${scrollWidth}px;
    `;

  headerWrapper.style.cssText = `padding-right: ${scrollWidth}px;`;
};

const enableScroll = () => {
  const headerWrapper = document.querySelector('.header-wrapper');

  document.body.style.cssText = '';
  headerWrapper.style.cssText = '';

  window.scroll({
    top: document.body.dataset.scrollY,
  });
};

export default { disableScroll, enableScroll };
