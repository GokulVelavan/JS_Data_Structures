
let array=[];
let maximim=0;
let maximim2=-2;
let minimum=1000;
let minimum2=1000;
for(let i=0;i<10;i++)
{
    let data1=Math.floor(Math.random()*1000);
    console.log(data1)
    array.push(data1);
}
array.sort(function(a, b){return  b-a});

console.log("2nd Largest",array[1],",2nd Minimum",array[8]);