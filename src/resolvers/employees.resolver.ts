import { EmployeesService } from '../types/services.types';
import { Resolver, Mutation } from 'type-graphql';
import { GetAllEmployeesOutput } from '../types/graphql.types';
import { Inject, Injectable } from '@nestjs/common';
import { EmployeesResolver } from '../types/resolvers.types';

@Injectable()
@Resolver()
export class EmployeesResolverImpl implements EmployeesResolver {
    constructor(@Inject('EmployeesService') private employeesService: EmployeesService) {}

    @Mutation(() => GetAllEmployeesOutput)
    async getAllEmployees(): Promise<GetAllEmployeesOutput> {
        return this.employeesService.getAllEmployees();
    }
}
