import { ObjectHelper } from './../../../Utility/ObjectHelper';
import { Trip } from './../../../Model/Trip';
import { Injectable } from '@angular/core';

@Injectable()
export class TripService {

  trips: Trip[] = [];
  constructor() {
    ObjectHelper.pullObjectsFromFirebase('trips/', Trip, list => {
      this.trips = list;
    });
  }
  getTrips() {
    return this.trips;
  }


}
