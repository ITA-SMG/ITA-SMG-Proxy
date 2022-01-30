import { TimesheetService } from '../types/services.types';
import { Resolver, Mutation } from 'type-graphql';
import { PostTimesheetOutput } from '../types/graphql.types';
import { Inject, Injectable } from '@nestjs/common';
import { TimesheetResolver } from '../types/resolvers.types';

@Injectable()
@Resolver()
export class TimesheetResolverImpl implements TimesheetResolver {
    constructor(@Inject('TimesheetService') private timesheetService: TimesheetService) {}

    @Mutation(() => PostTimesheetOutput)
    async postTimesheet(): Promise<PostTimesheetOutput> {
        return this.timesheetService.postTimesheet();
    }
}
