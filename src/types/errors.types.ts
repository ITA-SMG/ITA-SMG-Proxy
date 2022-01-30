import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class AuthenticationError {
    @Field(() => String)
    message: string;

    constructor(message: string) {
        this.message = message;
    }
}

@ObjectType()
export class UserError {
    @Field(() => String)
    message: string;
}
