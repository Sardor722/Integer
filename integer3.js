let a = 231;
let x1,x2,x3;
x3 = a%10;
x2 = ((a%100)-x3)/10;
x1 = (a-(x2*10)-x3)/100;
s = x3*100 + x2*10 + x1; 
console.log(s);