import { Inject, Injectable } from '@nestjs/common';
import { EmployeesSMGService } from '../../types/services.types';
import { GetAllEmployeesSMGOutput } from '../../types/smg.types';
import { HttpClient } from '../../types/utils.types';

@Injectable()
export class EmployeesSMGServiceImpl implements EmployeesSMGService {
    constructor(@Inject('HttpClient') private httpClient: HttpClient) {}

    async getAllEmployees(): Promise<GetAllEmployeesSMGOutput> {
        return {
            status: 220,
            data: {
                users: [
                    {
                        placeholder: 'Meh',
                    },
                ],
            },
        };
    }
}
