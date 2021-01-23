import { Injectable } from '@angular/core';
import { SeatsArrangementService} from '../../app/seats-arrangment/seats-arrangement.service'
import {SeatsArrangementMockData} from '../../app/seats-arrangment/seat-arrangement.data'
import { Observable } from 'rxjs';
import {asyncData} from '../async-observable-helpers'

@Injectable()

export class SeatsTestService extends SeatsArrangementService{

    constructor() {
        super(null);
      }

      getScreenArrangement(){
        return asyncData(SeatsArrangementMockData.screenConfiguration)
    
      }
      getScreenSchedule(){
        return asyncData(SeatsArrangementMockData.screenSchedule)
      }



}