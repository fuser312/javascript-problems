function avg(a, b) {
    return (a + b) / 2;
}

avg.x = 4;


console.log(avg(5, 6) + avg.x);



avg.avg = () => avg.x * 3;
console.log(avg(5, 6) + avg.x + avg.avg());



function foo(x) {
    if (x()) {
        return x.a / x.y();
    }
    else {
        return x.a() / x.y;
    }
}

 function z(){

 }
z.a = () => 10;
z.y = () => 1;

console.log(foo(z));