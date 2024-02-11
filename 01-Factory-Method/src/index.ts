import CarTransport from "./transport/CarTransport"
import MotocicleTransport from "./transport/MotocicleTrasnport"
import Transport from "./transport/Transport"

declare var process:any

let transport: Transport;

if (process.argv.includes('--uber')) {
    transport = new CarTransport()

    if(transport){
        transport.startTransport()
    }
    
}else if (process.argv.includes('--log')){
    transport = new MotocicleTransport()

    if(transport){
        transport.startTransport()
    }
    
}else {
    console.log('Selecione o tipo de entrega')
}

