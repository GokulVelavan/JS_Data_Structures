
let number=51;
let array=[];
for(let i=1;i*i<=number;i++)
{
    if(number%i==0)
    {
           array.push(i);
    }
}
console.log(array);