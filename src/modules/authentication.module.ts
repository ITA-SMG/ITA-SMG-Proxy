import { Module } from '@nestjs/common';
import { AuthenticationServiceImpl } from '../services/proxy/authentication.service';
import { AuthenticationResolverImpl } from '../resolvers/authentication.resolver';
import { AuthenticationSMGServiceImpl } from '../services/smg/authentication.service';
import { HttpClientImpl } from '../utils/http-client.util';

@Module({
    imports: [],
    providers: [
        {
            provide: 'AuthenticationService',
            useClass: AuthenticationServiceImpl,
        },
        {
            provide: 'AuthenticationSMGService',
            useClass: AuthenticationSMGServiceImpl,
        },
        {
            provide: 'HttpClient',
            useClass: HttpClientImpl,
        },
        AuthenticationResolverImpl,
    ],
    exports: [],
})
export class AuthenticationModule {}
