import { UserService } from '../types/services.types';
import { Resolver, Mutation } from 'type-graphql';
import { UserOutput } from '../types/graphql.types';
import { Inject, Injectable } from '@nestjs/common';
import { UserResolver } from '../types/resolvers.types';

@Injectable()
@Resolver()
export class UserResolverImpl implements UserResolver {
    constructor(@Inject('UserService') private userService: UserService) {}

    @Mutation(() => UserOutput)
    async getCurrentUser(): Promise<UserOutput> {
        return this.userService.getCurrentUser();
    }
}
