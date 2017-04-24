/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

'use strict';

export class ElevatorConfiguration {

    constructor() {
        this.capacity = 4;
        this.height = 200;
        this.width = 100;
    }

    clone() {
        let elevatorConfiguration = new ElevatorConfiguration();
        Object.assign(elevatorConfiguration, this);
        return elevatorConfiguration;
    }

    getPrice() {
        return this.capacity * 5 + this.height * 2 + this.width * 3;
    }

}
