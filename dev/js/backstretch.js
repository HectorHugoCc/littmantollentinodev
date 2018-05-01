(function () {
  /* 
    variables 
  */

  //backstretch
  const nrImgBody = 12; //el número de imgs
  const IntSecond = 3; /*los segundos entre las imgs*/
  
  //bodas
  const nrTapaBoda = 7; //numero de bobas
  const nrImgBodas = 20; //el número de imgs por boda

  let listRutaImg = new Array(nrImgBodas);

  for (let index = 0; index < nrTapaBoda; index++) {
   listRutaImg[index] = "./imgs/galeria-bodas/boda"+(index+1)+"/";    
  }

  //prebodas
  const nrImgPreBodas = 20; //el número de imgs

  //videosbodas
  const nrVideoBodas = 10; //el número de imgs

  /* 
    fin variables
  */

  /* 
    backstretch 
  */
  let getIndex = document.getElementById('inicio');
  let inicio = getIndex.getAttribute('class');

  if (inicio == "main-menu__item active") {
    let imagenes = new Array(nrImgBody);

    document.body.style.background = "radial-gradient(#FFF, #000) fixed";

    for (let index = 0; index < imagenes.length; index++) {
      imagenes[index] = "/imgs/img" + (index + 1) + ".jpg";
    }
    // Precarga de todas la imagenes
    $(imagenes).each(function () {
      $("<img/>")[0].src = this;
    });

    // Almacena cual imagen esta activa
    var index = 0;

    // Aplicamos la primera imagen del arreglo
    // y lo configuramos para que realice un efecto de transición (fadeIn)
    // de 500 milisegundos entre cada cambio imagen
    $.backstretch(imagenes[index], { speed: IntSecond * 1000 });

    // setInterval es una funcion que se repite determinado tiempo
    // en este caso cada 5000 milisegundos incrementando el index
    // y aplicando una nueva imagen
    setInterval(function () {
      index = (index >= imagenes.length - 1) ? 0 : index + 1;
      $.backstretch(imagenes[index]);
    }, 5000);

  }

  /* 
    fin backstretch
  */

  /*  
    prebodas
  */
  let galeria_prebodas = document.getElementById('galeria-prebodas');

  // Precarga de todas la imagenes
  if (galeria_prebodas) {
    for (let index = 0; index < nrImgPreBodas; index++) {
      galeria_prebodas.innerHTML += `
      <div class="gallery-item"><a href="./imgs/galeria-prebodas/imagen-${index + 1}.jpg" data-fancybox="gallery" data-caption="preboda ${index + 1}"><img src="./imgs/galeria-prebodas/mini-${index + 1}.jpg" alt="preboda ${index + 1}"/></a></div>
      `;
    }
  }

  //estilos

  let S = document.createElement('style');
  S.type = 'text/css';
  S.appendChild(document.createTextNode(`
  .gallery {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(1, 300px);
    grid-template-rows: repeat(${nrImgPreBodas}, 300px);
  }

  @media screen and (min-width: 768px) {
    .gallery {
      grid-template-columns: repeat(2, 300px);
      grid-template-rows: repeat(${Math.ceil(nrImgPreBodas / 2)}, 300px);
    }
  }

  @media screen and (min-width: 1024px) {
    .gallery {
      grid-template-columns: repeat(3, 300px);
      grid-template-rows: repeat(${Math.ceil(nrImgPreBodas / 3)}, 300px);
    }
  }

  @media screen and (min-width: 1440px) {
    .gallery {
      grid-template-columns: repeat(4, 300px);
      grid-template-rows: repeat(${Math.ceil(nrImgPreBodas / 4)}, 300px);
    }
  }

  @media screen and (min-width: 2560px) {
    .gallery {
      grid-template-columns: repeat(5, 300px);
      grid-template-rows: repeat(${Math.ceil(nrImgPreBodas / 5)}, 300px);
    }
  }
  `));
  document.body.appendChild(S);
  /* 
  fin prebodas
  */

  /*  
    bodas
  */ 
  let bodas = document.getElementById('bodas');
  let galeria_bodas = document.getElementById('galeria-bodas');
  let titleBoda = document.getElementById('titleBoda');
  let currentBoda;
  if (titleBoda) {
    currentBoda = titleBoda.getAttribute('name');    
  }

  //tapa bodas
  if (bodas) {
    for (let index = 0; index < nrTapaBoda; index++) {
      bodas.innerHTML += `
      <a href="boda${index + 1}.html" id="boda-link" name="${index}">
        <img class="portafolio__img" src="./imgs/tapaboda${index + 1}.jpg" alt="boda${index + 1}">
      </a>
      `;
      
    }  
  }

  // Precarga de todas la imagenes

  if (galeria_bodas) {
    for (let index = 0; index < nrImgBodas; index++) {
      galeria_bodas.innerHTML += `
      <div class="gallery-item"><a href="${listRutaImg[currentBoda-1]}imageboda${index + 1}.jpg" data-fancybox="gallery" data-caption="boda ${index + 1}"><img src="${listRutaImg[currentBoda-1]}miniboda${index + 1}.jpg" alt="boda ${index + 1}"/></a></div>
      `;
    }
  }

  //estilos
  S.type = 'text/css';
  S.appendChild(document.createTextNode(`
  .gallery {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(1, 300px);
    grid-template-rows: repeat(${nrImgBodas}, 300px);
    grid-gap: 1em;
  }

  @media screen and (min-width: 768px) {
    .gallery {
      grid-template-columns: repeat(2, 300px);
      grid-template-rows: repeat(${Math.ceil(nrImgBodas / 2)}, 300px);
    }
  }

  @media screen and (min-width: 1024px) {
    .gallery {
      grid-template-columns: repeat(3, 300px);
      grid-template-rows: repeat(${Math.ceil(nrImgBodas / 3)}, 300px);
    }
  }

  @media screen and (min-width: 1440px) {
    .gallery {
      grid-template-columns: repeat(4, 300px);
      grid-template-rows: repeat(${Math.ceil(nrImgBodas / 4)}, 300px);
    }
  }

  @media screen and (min-width: 2560px) {
    .gallery {
      grid-template-columns: repeat(5, 300px);
      grid-template-rows: repeat(${Math.ceil(nrImgBodas / 5)}, 300px);
    }
  }
  `));
  document.body.appendChild(S);
  /* 
    fin bodas
  */
  /*
  MENU
  */
  let botonMenu = document.getElementById('toggle');
  let menu = document.getElementById('menu-container');


  botonMenu.addEventListener("click", () => {
    if (menu.getAttribute("class") != "mostrar") {
      menu.setAttribute("class", "mostrar");
    } else {
      menu.setAttribute("class", null);
    }
  });
})();