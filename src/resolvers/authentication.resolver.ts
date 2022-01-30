import { AuthenticationService } from '../types/services.types';
import { Resolver, Query, Mutation, Args } from 'type-graphql';
import { LoginInput, LoginOutput, RefreshTokenInput, RefreshTokenOutput } from '../types/graphql.types';
import { Inject, Injectable } from '@nestjs/common';
import { AuthenticationResolver } from '../types/resolvers.types';
import { GetAuthorizationToken } from '../utils/decorators/get-request-context.util';

@Injectable()
@Resolver()
export class AuthenticationResolverImpl implements AuthenticationResolver {
    constructor(@Inject('AuthenticationService') private authenticationService: AuthenticationService) {}

    @Mutation(() => LoginOutput)
    async login(@Args() data: LoginInput): Promise<LoginOutput> {
        return this.authenticationService.login(data);
    }

    @Mutation(() => RefreshTokenOutput)
    async refreshToken(
        @GetAuthorizationToken token: string | null,
        @Args() data: RefreshTokenInput
    ): Promise<RefreshTokenOutput> {
        return this.authenticationService.refreshToken({
            refreshToken: data.refreshToken,
            authorizationToken: token,
        });
    }

    @Query(() => String)
    async tempQuery(): Promise<string> {
        return 'temp';
    }
}
