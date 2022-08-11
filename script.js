document.getElementById("sendButton").addEventListener("click", validateForm);

function validateForm() {
  if (document.getElementById("user-name").value != "" && document.getElementById("user-email").value != "") {
    alert("Prontinho! Seu email foi cadastrado com sucesso em nossa newsletter! :)");
  } else {
    alert("Por favor, preencha os campos corretamente!");
  }

}

/* ANIMAÇÕES */

const debounce = function(func,wait,immediate){
  let timeout;
  return function(...args){
      const context = this;
      const later = function(){
          timeout = null;
          if (!immediate) func.apply(context,args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later,wait);
      if (callNow) func.apply(context,args);
  };
};

const target = document.querySelectorAll("[data-anime]")

const animationClass = 'animate';

function animeScroll(){
  const windowTop = window.pageYOffset + ((window.innerHeight *3) /4);
  target.forEach(function(e){
      if((windowTop) > e.offsetTop){
          e.classList.add(animationClass);
      }
  })
}

animeScroll()

window.addEventListener('scroll',function(){
  animeScroll();
})
