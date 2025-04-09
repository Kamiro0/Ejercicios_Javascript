/* Próximo en la Fila

En informática una cola (queue) es una estructura de datos abstracta en la cual los elementos se mantienen en orden. Los nuevos elementos se pueden añadir al final de la cola y los elementos previos se retiran del principio de la cola.

Define una función proximoEnLaFila que tome un arreglo (arreglo) y un número (elemento) como argumentos. Agrega el número al final del arreglo y luego elimina el primer elemento del arreglo. La función proximoEnLaFila debe retornar el elemento que fue removido.

*/
function proximoEnLaFila(arreglo, elemento) {
    arreglo.push(elemento);       
    return arreglo.shift();       
  }
  let miCola = [1, 2, 3, 4, 5];
  console.log("COLA ANTES:", miCola);
  let eliminado = proximoEnLaFila(miCola, 6);
  console.log("ELEMENTO REMOVIDO:", eliminado);
  console.log("COLA DESPUÉS:", miCola);

// 1. CONJUNCIÓN (AND - &&)
let tablaAND = [
  { p: false, q: false, "p && q": false && false },
  { p: false, q: true,  "p && q": false && true },
  { p: true,  q: false, "p && q": true && false },
  { p: true,  q: true,  "p && q": true && true }
];
console.log("🔹 CONJUNCIÓN (AND - &&)");
console.table(tablaAND);

// 2. DISYUNCIÓN (OR - ||)
let tablaOR = [
  { p: false, q: false, "p || q": false || false },
  { p: false, q: true,  "p || q": false || true },
  { p: true,  q: false, "p || q": true || false },
  { p: true,  q: true,  "p || q": true || true }
];
console.log("🔹 DISYUNCIÓN (OR - ||)");
console.table(tablaOR);

// 3. NEGACIÓN (NOT - !)
let tablaNOT = [
  { p: false, "!p": !false },
  { p: true,  "!p": !true }
];
console.log("🔹 NEGACIÓN (NOT - !)");
console.table(tablaNOT);

// 4. IMPLICACIÓN (p → q) 
let tablaImplica = [
  { p: false, q: false, "p → q": !false || false },
  { p: false, q: true,  "p → q": !false || true },
  { p: true,  q: false, "p → q": !true || false },
  { p: true,  q: true,  "p → q": !true || true }
];
console.log("🔹 IMPLICACIÓN (p → q)");
console.table(tablaImplica);

// 5. BICONDICIONAL (p ↔ q) 
let tablaBicondicional = [
  { p: false, q: false, "p ↔ q": false === false },
  { p: false, q: true,  "p ↔ q": false === true },
  { p: true,  q: false, "p ↔ q": true === false },
  { p: true,  q: true,  "p ↔ q": true === true }
];
console.log("🔹 BICONDICIONAL (p ↔ q)");
console.table(tablaBicondicional);
