//Função responsável pela navegação por Tab
function initTabNav(){
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  const active = 'ativo';

  if(tabMenu.length && tabContent.length){
    tabContent[0].classList.add(active);

    //Função para adicionar a class ativo na section de acordo com o index selecionado  
    function activeTab(index){
      //looping para remover a class ativo de todos os itens
      tabContent.forEach((section) => {
        section.classList.remove(active);
      });
      tabContent[index].classList.add(active);
    }

    //Evento para acionar a função activeTab quando um item for clicado
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  };
};
initTabNav();


//Função Accordion List para os itens do FAQ
function initAccordion(){
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const active = 'ativo';

  if(accordionList.length){
    accordionList[0].classList.add(active);
    accordionList[0].nextElementSibling.classList.add(active);

    //função para ativar os itens DT e DD no HTML
    function activeAccordion(){
      this.classList.toggle(active);
      this.nextElementSibling.classList.toggle(active);
    }

    //Evento para incluir a classe ativo após clicar no elemento
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
initAccordion();

//Função Scroll suave
function initScrollSuave(){
  const linksInterno = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  linksInterno.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
initScrollSuave();

//Função para animar o scroll
function initAnimicaoScroll(){
  const sections = document.querySelectorAll('.js-scroll');
  const active = 'ativo';

  if(sections.length){
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll(){
      sections.forEach((section) => {
        //constante para salvar o valor da section quando chega no topo da página
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        if(sectionTop < 0){
          section.classList.add(active);
        } else {
          section.classList.remove(active);
        }
      });
    };
    animaScroll();

    window.addEventListener('scroll', animaScroll);
  };
};
initAnimicaoScroll();