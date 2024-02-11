import IVehicle from "./interfaces/IVehicle";

export default class Car implements IVehicle {

    startRoute(): void {
        this.getCargo()
        console.log("Iniciando o Trajeto....");
    }
    getCargo(): void {
        console.log("Passageiro embarcou.");
    }

}