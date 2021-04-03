/** Function hoisted first */
foo();
var foo;
function foo() {
    console.log('1');
}
foo = function () {
    console.log('2');
}
/**  */
/** Scope Closure */
function bar() {
    var test = 'bello';
}

{
    let test = 'Chao';
}

bar();
console.log('Scope Closure', test);
