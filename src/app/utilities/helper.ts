export function converErrorApi(response: any ):string[]{
    const result: string[]=[];
    if(response.error){
        if(typeof response.error === 'string'){
            result.push(response.error);
        // }else{
        //     const ma
        }
    }
    return result;
}