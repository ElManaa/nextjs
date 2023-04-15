type validationResponse = {
    valid : boolean 
    message? : string
}

type validatorFn = ( value : any ) => Promise<validationResponse>;