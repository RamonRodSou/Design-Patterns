import Transport from "./Transport";
import IVehicle from "./vehicles/interfaces/IVehicle";
import Motocicle from "./vehicles/Motocicle";


export default class MotocicleTransport extends Transport {

    protected createTransport(): IVehicle {
        
        return new Motocicle
    }

    
}