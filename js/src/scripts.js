const functions = [];
const textarea = document.querySelector('.textarea');
const response = document.querySelector('.response');
const clearBtn = document.querySelector('.clear');
const list = document.querySelector('.list');
const contentDiv = document.querySelector('.content');
let selectedIndex = 0;

const getPreElement = (string) => {
  let pre = document.createElement('pre');
  let code = document.createElement('code');
  code.className = 'JavaScript';
  code.textContent = string;
  pre.appendChild(code);
  return pre;
}

const executeProblem = (index) => {
  const values = textarea.value;
  let result = functions[ index ](values);
  let pre = getPreElement(result);
  response.appendChild(pre);
  hljs.highlightBlock(response);
}

const clearResults = () => {
  response.textContent = '';
  textarea.value = '';
}

const appendToDOM = (string, index) => {
  const pre = getPreElement(string);
  // create button
  const button = document.createElement('button');
  const span = document.createElement('span');
  span.textContent = 'Execute';
  button.className = 'btn orange';
  button.appendChild(span);

  button.addEventListener('click', () => {
    executeProblem(index);
  });

  pre.className = `code-block code-block-${index}`;

  let displayClass = index ? 'hidden' : ''
  let container = document.createElement('div');
  container.className = `container-${index} ${displayClass}`;
  
  container.appendChild(pre);
  container.appendChild(button);

  contentDiv.appendChild(container);
}

const runCode = (content) => {
  return Function.call({}, content)();
}

const addMenuItem = (string, index) => {
  const title = string.split('\n', 1)[0].replace('//', '');
  let li = document.createElement('li');
  li.className = 'list-element';
  li.textContent = title;

  li.addEventListener('click', () => {
    if (selectedIndex !== index) {
      const currentDiv = document.querySelector(`.container-${selectedIndex}`);
      const selectedDiv = document.querySelector(`.container-${index}`);
      
      currentDiv.classList.add('hidden');
      selectedDiv.classList.remove('hidden');
      selectedIndex = index;
    }
  });

  list.appendChild(li);
}

const parseResponse = ( response, index ) => {

  let decoder = new TextDecoder();
  let reader = response.body.getReader();
  let finalResult = '';

  // read() returns a promise that resolves
  // when a value has been received
  reader.read().then(function processResult( result ) {
    if (result.done) {
      let func = runCode(finalResult);
      functions.push( execute.bind( {} ) );
      addMenuItem(finalResult, functions.length - 1);
      appendToDOM( finalResult, functions.length - 1 );
      //hljs.highlightBlock( document.querySelector( `.code-block-${index}` ) );
      return;
    };
    
    finalResult += decoder.decode(result.value, {stream: true});

    // Read some more, and recall this function
    return reader.read().then(processResult);
  });
};

(function init() {

  const hostname = window.location.hostname;
  let path = '';
  if ( hostname.includes('github') ) {
    path = '/ex';
  }

  clearBtn.addEventListener('click', clearResults);

  Promise.all( [
    fetch(`${path}/js/src/reverse-words.js`),
    fetch(`${path}/js/src/unique-character.js`),
    fetch(`${path}/js/src/second-minimum.js`),
    fetch(`${path}/js/src/repeating-characters.js`),
    fetch(`${path}/js/src/power-of-ten.js`),
    fetch(`${path}/js/src/minimul-length-subarray-with-sum-higher.js`),
    fetch(`${path}/js/src/insertion-sort.js`),
    fetch(`${path}/js/src/selection-sort.js`),
    fetch(`${path}/js/src/merge-sort.js`),
    fetch(`${path}/js/src/quick-sort.js`),
    fetch(`${path}/js/src/binary-search-tree.js`),
    fetch(`${path}/js/src/best-offers.js`),
    fetch(`${path}/js/src/overlapping-rectangles.js`),
    fetch(`${path}/js/src/column-name-from-number.js`),
    fetch(`${path}/js/src/sum-tree.js`),
    fetch(`${path}/js/src/balanced-tree.js`),
    fetch(`${path}/js/src/sort-stack.js`),
    fetch(`${path}/js/src/array-sort-wave.js`),
    fetch(`${path}/js/src/ugly-numbers.js`),
    fetch(`${path}/js/src/egg-problem.js`),
    fetch(`${path}/js/src/merge-strings.js`),
    fetch(`${path}/js/src/max-staircase.js`),
    fetch(`${path}/js/src/min-flips.js`),
    fetch(`${path}/js/src/find-in-matrix.js`),
    fetch(`${path}/js/src/graph-min-cost-path.js`)
  ] )
  .then( ( responses ) => {
    responses.forEach( ( response, index ) => {
      parseResponse( response, index );
    } );
  });

  setTimeout(() => {
    hljs.initHighlighting();
  }, 3000);
})();

