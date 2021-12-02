
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

for(let i=0;i<10;i++)
{

if(array[i]>maximim)
{
    maximim=array[i];
}else if(array[i]>maximim2)
{
    maximim2=array[i];
}else if(array[i]<minimum)
{
    minimum=array[i];
}else if(array[i]<minimum2)
{
    minimum2=array[i];
}
}
console.log("2nd Largest",maximim2,",2nd Minimum",minimum2);