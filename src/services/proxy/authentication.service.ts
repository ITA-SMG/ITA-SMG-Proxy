import { Inject, Injectable } from '@nestjs/common';
import { AuthenticationService, AuthenticationSMGService } from '../../types/services.types';
import { LoginInput, LoginOutput, RefreshTokenOutput } from '../../types/graphql.types';
import { ServiceMappers } from '../../utils/service-mappers.util';
import { AuthenticationData } from '../../types/smg.types';

@Injectable()
export class AuthenticationServiceImpl implements AuthenticationService {
    constructor(@Inject('AuthenticationSMGService') private smgService: AuthenticationSMGService) {}

    async login(data: LoginInput): Promise<LoginOutput> {
        const smgResponse = await this.smgService.login(data);

        return ServiceMappers.toLoginOutput(smgResponse);
    }

    async refreshToken(data: AuthenticationData): Promise<RefreshTokenOutput> {
        const smgResponse = await this.smgService.refreshToken(data);

        return ServiceMappers.toRefreshTokenOutput(smgResponse);
    }
}
