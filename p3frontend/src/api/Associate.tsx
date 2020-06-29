import axios from 'axios';
import  {Associate} from '../models/Associate'
import  {Batch} from '../models/Batch'
import FailedRequestException from '../exceptions/FailedRequestException';
import { getBatchById } from './batch';

const associate = axios.create({

    //baseURL : 'http://localhost:8080', // Use this to test on your local machine, leave commented out.
    baseURL : ' http://3.21.185.168:8585', // The server was using this port instead for some reason
    //baseURL : 'http://18.216.197.108:8080',
  
    withCredentials: true,
  
  });

export async function getAllAssociates() : Promise <Associate[]> {
try {
  
  let response = await associate.get('/associates');

  return response.data.map((a : Associate) => {

    let {associateId, firstName, lastName, email, active, interviewScore, batch} = a;

    return new Associate (associateId, firstName, lastName, email, active, interviewScore, batch);
  
  });} catch (e)  {
    throw new FailedRequestException('The request has failed.');
  }
}

