import { Module } from '@nestjs/common';
import { HttpClientImpl } from '../utils/http-client.util';
import { EmployeesResolverImpl } from '../resolvers/employees.resolver';
import { EmployeesServiceImpl } from '../services/proxy/employees.service';
import { EmployeesSMGServiceImpl } from '../services/smg/employees.service';

@Module({
    imports: [],
    providers: [
        {
            provide: 'EmployeesService',
            useClass: EmployeesServiceImpl,
        },
        {
            provide: 'EmployeesSMGService',
            useClass: EmployeesSMGServiceImpl,
        },
        {
            provide: 'HttpClient',
            useClass: HttpClientImpl,
        },
        EmployeesResolverImpl,
    ],
    exports: [],
})
export class EmployeesModule {}
