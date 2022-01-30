import { Inject, Injectable } from '@nestjs/common';
import { UserSMGService } from '../../types/services.types';
import { UserSMGOutput } from '../../types/smg.types';
import { HttpClient } from '../../types/utils.types';

@Injectable()
export class UserSMGServiceImpl implements UserSMGService {
    constructor(@Inject('HttpClient') private httpClient: HttpClient) {}

    async getCurrentUser(): Promise<UserSMGOutput> {
        return {
            status: 220,
            data: {
                user: {
                    placeholder: 'Meh',
                },
            },
        };
    }
}
