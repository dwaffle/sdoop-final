import {Constructor} from './mixin.withTowPackage'

export function with4x4<Parent extends Constructor>( MixOn:Parent ){
    
    return class extends MixOn {

        is4x4 = true
        isIn4x4 = false
        toggle4x4(){
            this.isIn4x4 = !this.isIn4x4
        }

    }

}