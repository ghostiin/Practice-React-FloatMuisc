export const getDuration= time => {
    //const duration= time / 1000;
    const duration = time; //s
    const min=parseInt(duration/ 60 ,10);
    const s=parseInt(duration-min*60,10);
    //const s = parseInt(duration%60,10)
    if(!isNaN(min)&&!isNaN(s)){
        return `${min}:${s}`;
    }else {
        return `??:??`;
    }
    
}