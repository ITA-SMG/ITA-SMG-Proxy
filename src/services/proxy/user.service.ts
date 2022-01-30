import { Inject, Injectable } from '@nestjs/common';
import { UserService, UserSMGService } from '../../types/services.types';
import { UserOutput } from '../../types/graphql.types';
import { ServiceMappers } from '../../utils/service-mappers.util';

@Injectable()
export class UserServiceImpl implements UserService {
    constructor(@Inject('UserSMGService') private smgService: UserSMGService) {}

    async getCurrentUser(): Promise<UserOutput> {
        const smgResponse = await this.smgService.getCurrentUser();

        return ServiceMappers.toUserOutput(smgResponse);
    }
}
