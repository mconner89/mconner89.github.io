function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

function characterScript(code) {
  // for of loop that loops through SCRIPTS array
  for (let script of SCRIPTS) {
    // using script input, looks at a specific range and checks if code falls 
    // in between a specific range
    if (script.ranges.some(([from, to]) => {
      // if so, return entire range
      return code >= from && code < to;
      })) {
      return script;
    }
  }
  return null;
}

// outputs array of objects that counts how many times a specific name exists
function countBy(items, groupName) {
  let counts = []; // [{name: "name", count: 2}, {name: name2, count: 1}]
  // loops each element "item" of items array
  for (let item of items) {
    // return a specific name back to countBy function so it can be added to array
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({
        name,
        count: 1
      });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function textScripts(text) {
  let scripts = countBy(text, char => {
    // invoke characterScript function, passing in char and using the codePointAt function
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({
    name
  }) => name != "none");

  let total = scripts.reduce((n, {
    count
  }) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts.map(({
    name,
    count
  }) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
  }).join(", ");
}

function range(start, end, step) {
  if (step == null) step = 1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  return array;
}

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++)
    total += array[i];
  return total;
}

// This makes sure the data is exported in node.js —
// `require('./path/to/jaques_journal.js')` will get you the array.
if (typeof module != "undefined" && module.exports && (typeof window == "undefined" || window.exports != exports)) {
  module.exports = {
    repeat,
    characterScript,
    countBy,
    textScripts,
    range,
    sum,
  };
}
if (typeof global != "undefined") {
  global.repeat = repeat;
  global.characterScript = characterScript;
  global.countBy = countBy;
  global.textScripts = textScripts;
  global.range = range;
  global.sum = sum;
}
