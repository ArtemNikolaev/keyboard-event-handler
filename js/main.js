window.addEventListener('keydown', parseEvent);

function parseEvent(ev) {
  ev.stopPropagation();
  const newTbody = generateTBody(ev);

  document.querySelector('tbody').replaceWith(newTbody);
}

function generateTBody(obj) {
  const tbody = document.createElement('tbody');

  for (const key in obj) {
    if (typeof obj[key] === 'function') continue;

    const keyValue = document.createElement('td');
    keyValue.innerText = key;
    const value = document.createElement('td');
    value.innerHTML = obj[key];
    const tr = document.createElement('tr');
    tr.append(keyValue);
    tr.append(value);

    tbody.append(tr);
  }

  return tbody;
}
