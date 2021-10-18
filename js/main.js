window.addEventListener('keydown', parseEvent);

function parseEvent(ev) {
  ev.stopPropagation();
  const newTbody = generateTBody(ev);

  document.querySelector('tbody').replaceWith(newTbody);
}

function generateTBody(obj) {
  const exclude = ['function', 'object'];
  const importantValues = ['key', 'code', 'keyCode'];

  const tbody = document.createElement('tbody');

  for (const key in obj) {
    if (exclude.indexOf(typeof obj[key]) !== -1) continue;
    const tr = document.createElement('tr');
    if (typeof obj[key] === 'boolean' && obj[key]) {
      tr.classList = ['table-warning'];
    }
    if (importantValues.indexOf(key) !== -1) {
      tr.classList = ['table-info'];
    }

    const keyValue = document.createElement('td');
    keyValue.innerText = key;
    const value = document.createElement('td');
    value.innerHTML = obj[key];
    tr.append(keyValue);
    tr.append(value);

    tbody.append(tr);
  }

  return tbody;
}
