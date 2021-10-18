// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

(function() {
  // generating table

  const table = document.createElement('table');
  table.classList = ['table'];
  {
    const thead = document.createElement('thead');
    {
      const key = document.createElement('td');
      key.innerText = 'Key';

      const value = document.createElement('td');
      value.innerText = 'Value';

      const tr = document.createElement('tr');

      tr.append(key);
      tr.append(value);

      thead.append(tr);
    }

    const tbody = document.createElement('tbody');
    {
      const key = document.createElement('td');
      key.innerText = 'No Input';

      const value = document.createElement('td');
      value.innerText = 'No Input';

      const tr = document.createElement('tr');
      tr.classList= ['table-danger'];

      tr.append(key);
      tr.append(value);

      tbody.append(tr);
    }

    table.appendChild(thead);
    table.appendChild(tbody);
  }

  document.querySelector('body').append(table);
})();
// Place any jQuery/helper plugins in here.
