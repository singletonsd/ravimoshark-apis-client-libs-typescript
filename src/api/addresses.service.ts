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
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { Addresses } from '../model/addresses';
import { CustomError } from '../model/customError';
import { Deleted } from '../model/deleted';
import { IdInteger } from '../model/idInteger';
import { InlineResponse200 } from '../model/inlineResponse200';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { AddressesServiceInterface }                            from './addresses.serviceInterface';


@Injectable()
export class AddressesService implements AddressesServiceInterface {

    protected basePath = 'http://localhost:8002';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Add one address.
     * Add one address.
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addAddress(body: Addresses, observe?: 'body', reportProgress?: boolean): Observable<Addresses>;
    public addAddress(body: Addresses, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Addresses>>;
    public addAddress(body: Addresses, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Addresses>>;
    public addAddress(body: Addresses, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addAddress.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Addresses>(`${this.basePath}/addresses`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete one address.
     * Delete one address.
     * @param id id to delete or search
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteAddress(id: number, observe?: 'body', reportProgress?: boolean): Observable<IdInteger>;
    public deleteAddress(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<IdInteger>>;
    public deleteAddress(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IdInteger>>;
    public deleteAddress(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteAddress.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<IdInteger>(`${this.basePath}/addresses/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Edit one address.
     * Edit one address.
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public editAddress(body: Addresses, observe?: 'body', reportProgress?: boolean): Observable<Addresses>;
    public editAddress(body: Addresses, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Addresses>>;
    public editAddress(body: Addresses, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Addresses>>;
    public editAddress(body: Addresses, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling editAddress.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<Addresses>(`${this.basePath}/addresses`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get one address.
     * Get one address.
     * @param id id to delete or search
     * @param deleted Get all, deleted, not deleted data. Default not deleted.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAddressById(id: number, deleted?: Deleted, observe?: 'body', reportProgress?: boolean): Observable<Addresses>;
    public getAddressById(id: number, deleted?: Deleted, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Addresses>>;
    public getAddressById(id: number, deleted?: Deleted, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Addresses>>;
    public getAddressById(id: number, deleted?: Deleted, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getAddressById.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (deleted !== undefined && deleted !== null) {
            queryParameters = queryParameters.set('deleted', <any>deleted);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Addresses>(`${this.basePath}/addresses/${encodeURIComponent(String(id))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get all addresses.
     * Get all addresses.
     * @param skip number of item to skip
     * @param limit max records to return
     * @param orderBy order by property.
     * @param filterBy filter data.
     * @param deleted Get all, deleted, not deleted data. Default not deleted.
     * @param metadata If metadata is needed (for pagination controls)
     * @param refClient Data from a desired contract
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAddresses(skip?: number, limit?: number, orderBy?: string, filterBy?: string, deleted?: Deleted, metadata?: boolean, refClient?: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse200>;
    public getAddresses(skip?: number, limit?: number, orderBy?: string, filterBy?: string, deleted?: Deleted, metadata?: boolean, refClient?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse200>>;
    public getAddresses(skip?: number, limit?: number, orderBy?: string, filterBy?: string, deleted?: Deleted, metadata?: boolean, refClient?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse200>>;
    public getAddresses(skip?: number, limit?: number, orderBy?: string, filterBy?: string, deleted?: Deleted, metadata?: boolean, refClient?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {








        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (skip !== undefined && skip !== null) {
            queryParameters = queryParameters.set('skip', <any>skip);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', <any>limit);
        }
        if (orderBy !== undefined && orderBy !== null) {
            queryParameters = queryParameters.set('orderBy', <any>orderBy);
        }
        if (filterBy !== undefined && filterBy !== null) {
            queryParameters = queryParameters.set('filterBy', <any>filterBy);
        }
        if (deleted !== undefined && deleted !== null) {
            queryParameters = queryParameters.set('deleted', <any>deleted);
        }
        if (metadata !== undefined && metadata !== null) {
            queryParameters = queryParameters.set('metadata', <any>metadata);
        }
        if (refClient !== undefined && refClient !== null) {
            queryParameters = queryParameters.set('refClient', <any>refClient);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse200>(`${this.basePath}/addresses`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
