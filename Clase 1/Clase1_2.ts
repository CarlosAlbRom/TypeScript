function calcular_bono(monto:number, porc=0.10):number
{
    if (monto>1000)
    {
        monto += 100
    }else
    {
        if (monto>=0 && monto<=1000)
        {
            monto = monto + (monto * porc)
        }
    }
    return monto
}
var a:number
var b:string

a=calcular_bono(1500)
b=calcular_bono(750, 0.2).toString()

console.log("El Primer Valor es:", a)
console.log("El Segundo Valor es:", b)
