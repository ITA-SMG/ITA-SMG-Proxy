import { createParamDecorator, ResolverData } from 'type-graphql';
import { IncomingMessage } from 'http';

type Context = {
    req: {
        raw: IncomingMessage;
    };
};

export const GetAuthorizationToken = createParamDecorator((data: ResolverData<Context>) => {
    return data.context.req.raw.headers.authorization;
});
