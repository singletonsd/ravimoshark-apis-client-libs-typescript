/**
 * Ravimoshark Client API
 * This is an API to interact with Ravimoshark client database. # Introduction This API allow to create, modify and delete addresses and clients. # User Authentication This API does not contain any kind of user validation but It request to have a valid authentication user to interact with it. For more information about user Authentication, please refer to [Ravimoshark User Authentication](https://ravimoshark.com/back/apis/auth/latest). 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: dev@ravimoshark.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */import { Addresses } from './addresses';


/**
 * Client information.
 */
export interface Clients { 
    refClient?: string;
    addresses?: Array<Addresses>;
    addressesId?: Array<number>;
    companyName?: string;
    email?: string;
    frequency?: string;
    group?: string;
    name?: string;
    nickname?: string;
    sector?: string;
    state?: string;
    status?: string;
    stateGroup?: string;
    score?: string;
    typeClient?: string;
    vat?: string;
}