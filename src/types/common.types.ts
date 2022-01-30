import { Field, ObjectType } from 'type-graphql';

export type StatusWrapper<T, K> = {
    status: T;
    error?: K;
};

@ObjectType()
export class User {
    @Field(() => String, { nullable: true })
    placeholder?: string;
}

@ObjectType()
export class PartialUser {
    @Field(() => String, { nullable: true })
    placeholder?: string;
}
