function toggleMode() {
  const html = document.documentElement

  //if (html.classList.contains('light')) {
  //  html.classList.remove('light')
  //} else {
  //  html.classList.add("light")
  //}
  /*O toggle faz do mesmo jeito que o if acima se tiver o light ele tira se não tiver ele adiciona*/
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver a light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/assets/avatar.png")
  }
}