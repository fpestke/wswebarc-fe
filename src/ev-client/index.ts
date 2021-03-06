// tslint:disable
/**
 * Tesla JSON API
 * A swagger representation of the unofficial Tesla API for Model S and Model X Vehicles.  To use the API directly from the SwaggerHub documentation, click the `Interactive API Docs` tab and follow these steps: * Authenticate with the `/oauth/token` operation.  Use your **tesla** email address and password * In the response, copy the `access_token` value. * Click the `Authenticate` button and enter `Bearer {access_token}` (replace `{access_token}` with the value you copied previously)  You are now logged in to the Tesla API from within the Swagger docs.  Typical usage of the API is performed by:  * Since the API allows access to multiple Tesla vehicles under the same account, copy your `id` from the `/api/1/vehicles` operation response. * Enter the `id` value in the appropriate locations when calling the API 
 *
 * OpenAPI spec version: 2.0.2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export * from "./api";
export * from "./configuration";
