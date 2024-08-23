import conf from '../conf.js';
import {Client, ID, Databases, Storage, Query} from "appwrite";


export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        
    }
}

const service = new Service()
export default service