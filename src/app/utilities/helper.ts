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

export function toBase64(file:File) {  
    return new Promise((resolve,reject)   => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);   
        reader.onerror = error => reject(error);
    
    })
}