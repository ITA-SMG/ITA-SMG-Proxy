import { Inject, Injectable } from '@nestjs/common';
import { AuthenticationSMGService } from '../../types/services.types';
import { AuthenticationData, LoginSMGOutput, RefreshTokenSMGOutput } from '../../types/smg.types';
import { HttpClient } from '../../types/utils.types';
import { LoginInput } from '../../types/graphql.types';
import { AuthenticationError } from '../../types/errors.types';

@Injectable()
export class AuthenticationSMGServiceImpl implements AuthenticationSMGService {
    constructor(@Inject('HttpClient') private httpClient: HttpClient) {}

    async login(data: LoginInput): Promise<LoginSMGOutput> {
        const result = await this.httpClient.post(
            '/api/v1/auth/authenticate',
            {},
            {
                username: data.username,
                password: data.password,
            }
        );

        return {
            ...result,
            error: result.error ? new AuthenticationError(result.error) : null,
        };
    }

    async refreshToken(data: AuthenticationData): Promise<RefreshTokenSMGOutput> {
        const result = await this.httpClient.post(
            '/api/v1/auth/token/refresh',
            {},
            {
                refreshToken: data.refreshToken,
            }
        );

        return {
            ...result,
            error: result.error ? new AuthenticationError(result.error) : null,
        };
    }
}
