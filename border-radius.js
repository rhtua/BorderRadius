function atualizaValor(elem) {
    var text = document.getElementById(elem.id + "-text");
    text.innerHTML = elem.value;
    atualizaBorda(elem.id, elem.value);
  }

function atualizaBorda(borda, valor){
    var tl = document.getElementById('top-left').value + '% ';
    var tr = document.getElementById('top-right').value + '% ';
    var br = document.getElementById('bottom-right').value + '% ';
    var bl = document.getElementById('bottom-left').value + '% ';
    var css = 'border-radius: ' + tl + tr + br + bl;
    
    document.getElementsByClassName("border")[0].setAttribute('style', css);
    document.getElementById("css").innerHTML = css;
}

function copy(){
  var copyText = document.getElementById("css");
  copyText.select();
  document.execCommand("copy");
  alert("Propriedade copiada: " + copyText.value);
}