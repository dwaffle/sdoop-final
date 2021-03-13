export type Constructor = new (...args: any[]) => any;

export function withTowPackage<Parent extends Constructor>( MixOn:Parent ){
    
    return class extends MixOn {

        towLimit = 4

    }

}