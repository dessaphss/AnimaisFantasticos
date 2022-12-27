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