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
  let encabBodas = ['Antonio + Amy', 'Chris + Janet', 'Gino + Jazmin', 'Giomar + Bárbara', 'Sean + Susan', 'Omar + Karen', 'Moises + Roxana']; //encabezado de bodas

  for (let index = 0; index < nrTapaBoda; index++) {
    listRutaImg[index] = "./imgs/galeria-bodas/boda" + (index + 1) + "/";
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
      <a href="boda${index + 1}.html" id="boda-link" name="${index}" class="img-link">
        <figure>
          <figcaption class="subencabezado">${encabBodas[index]}</figcaption>
          <img class="portafolio__img" src="./imgs/tapaboda${index + 1}.jpg" alt="${encabBodas[index]}">          
        </figure>
      </a>
      `;
    }
  }

  // Precarga de todas la imagenes

  if (galeria_bodas) {
    for (let index = 0; index < nrImgBodas; index++) {
      galeria_bodas.innerHTML += `
      <div class="gallery-item"><a href="${listRutaImg[currentBoda - 1]}imageboda${index + 1}.jpg" data-fancybox="gallery" data-caption="boda ${index + 1}"><img src="${listRutaImg[currentBoda - 1]}miniboda${index + 1}.jpg" alt="boda ${index + 1}"/></a></div>
      `;
    }
  }

  /*
  fin bodas
  */
  
  /*
  estilos galeria
  */
  let S = document.createElement('style');
  S.type = 'text/css';
  S.appendChild(document.createTextNode(`
  .gallery {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(${Math.ceil(nrImgPreBodas / 3)}, 1fr);
    
    grid-row-gap: .2em;
    grid-column-gap: .4em;
  }

  @media screen and (min-width: 768px) {
    .gallery {
    }
  }

  @media screen and (min-width: 1024px) {
    .gallery {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(${Math.ceil(nrImgPreBodas / 4)}, 1fr);
    }
  }

  @media screen and (min-width: 1440px) {
    .gallery {
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(${Math.ceil(nrImgPreBodas / 5)}, 1fr); 
    }
  }

  @media screen and (min-width: 2560px) {
    .gallery {
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(${Math.ceil(nrImgPreBodas / 5)}, 1fr);
    }
  }
  `));
  document.body.appendChild(S);

  /*
   fin estilos galeria
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