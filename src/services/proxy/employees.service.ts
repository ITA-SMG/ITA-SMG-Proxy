import { Inject, Injectable } from '@nestjs/common';
import { EmployeesService, EmployeesSMGService } from '../../types/services.types';
import { GetAllEmployeesOutput } from '../../types/graphql.types';
import { ServiceMappers } from '../../utils/service-mappers.util';

@Injectable()
export class EmployeesServiceImpl implements EmployeesService {
    constructor(@Inject('EmployeesSMGService') private smgService: EmployeesSMGService) {}

    async getAllEmployees(): Promise<GetAllEmployeesOutput> {
        const smgResponse = await this.smgService.getAllEmployees();

        return ServiceMappers.toProxyAllEmployees(smgResponse);
    }
}
