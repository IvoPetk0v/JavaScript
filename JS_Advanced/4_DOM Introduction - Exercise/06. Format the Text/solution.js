function solve() {
  let input = document.getElementById('input');

  let sentences = input.value.split('.').filter(ch => ch !== '');

  let output = document.getElementById('output');

  while (sentences.length > 0) {
    let text = sentences.splice(0, 3).join(". ") + '.';
    let p = document.createElement('p');
    p.textContent = text;
   output.appendChild(p);
  }
}