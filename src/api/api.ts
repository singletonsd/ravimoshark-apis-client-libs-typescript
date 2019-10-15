export * from './addresses.service';
import { AddressesService } from './addresses.service';
export * from './addresses.serviceInterface'
export * from './clients.service';
import { ClientsService } from './clients.service';
export * from './clients.serviceInterface'
export const APIS = [AddressesService, ClientsService];
