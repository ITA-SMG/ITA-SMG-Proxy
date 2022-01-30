import { ArgsType, ClassType, Field, Int, ObjectType } from 'type-graphql';
import { PartialUser, StatusWrapper, User } from './common.types';
import { GraphQLScalarType } from 'graphql';
import { AuthenticationError, UserError } from './errors.types';

export type AvailableGeneratorType<T> = ClassType<T> | GraphQLScalarType;

export function StatusWrapperFactory<T, K>(
    TItemClass: AvailableGeneratorType<T>,
    KItemClass: AvailableGeneratorType<K>
): ClassType<StatusWrapper<T, K>> {
    @ObjectType({ isAbstract: true })
    class StatusWrapperClass implements StatusWrapper<T, K> {
        @Field(() => TItemClass, { nullable: true })
        status: T;

        @Field(() => KItemClass, { nullable: true })
        error?: K;
    }

    return StatusWrapperClass;
}

@ObjectType()
@ArgsType()
export class LoginInput {
    @Field(() => String)
    username: string;

    @Field(() => String)
    password: string;
}

@ObjectType()
export class LoginOutput extends StatusWrapperFactory(Int, AuthenticationError) {
    @Field(() => String, { nullable: true })
    token?: string;

    @Field(() => String, { nullable: true })
    refreshToken?: string;
}

@ObjectType()
@ArgsType()
export class RefreshTokenInput {
    @Field(() => String)
    refreshToken: string;
}

@ObjectType()
export class RefreshTokenOutput extends StatusWrapperFactory(Int, AuthenticationError) {
    @Field(() => String, { nullable: true })
    token?: string;

    @Field(() => String, { nullable: true })
    refreshToken?: string;
}

@ObjectType()
export class UserOutput extends StatusWrapperFactory(Int, UserError) {
    @Field(() => User, { nullable: true })
    user?: User;
}

@ObjectType()
export class PostTimesheetOutput extends StatusWrapperFactory(Int, String) {}

@ObjectType()
export class GetAllEmployeesOutput extends StatusWrapperFactory(Int, String) {
    @Field(() => [PartialUser])
    users: Array<PartialUser>;
}
