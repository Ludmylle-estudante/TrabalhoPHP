function mascaratel(mascarainput) {
  const tamanho = document.getElementById('tel').maxLength
  let tel = document.getElementById('tel').value
  console.log(tamanho)

  const mascara = {

      tele : tel.replace(/[^\d]/g,"").replace(/^(\d{2})(\d{1})(\d{4})(\d{4}).*/, '($1)$2$3-$4')

  };

  if (tel.length == tamanho) {
      document.getElementById('tel').value = mascara[mascarainput]
  }


}
 
