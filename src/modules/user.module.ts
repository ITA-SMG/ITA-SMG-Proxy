import { Module } from '@nestjs/common';
import { UserResolverImpl } from '../resolvers/user.resolver';
import { HttpClientImpl } from '../utils/http-client.util';
import { UserServiceImpl } from '../services/proxy/user.service';
import { UserSMGServiceImpl } from '../services/smg/user.service';

@Module({
    imports: [],
    providers: [
        {
            provide: 'UserService',
            useClass: UserServiceImpl,
        },
        {
            provide: 'UserSMGService',
            useClass: UserSMGServiceImpl,
        },
        {
            provide: 'HttpClient',
            useClass: HttpClientImpl,
        },
        UserResolverImpl,
    ],
    exports: [],
})
export class UserModule {}
