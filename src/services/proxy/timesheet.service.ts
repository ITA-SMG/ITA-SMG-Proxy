import { Inject, Injectable } from '@nestjs/common';
import { TimesheetService, TimesheetSMGService } from '../../types/services.types';
import { PostTimesheetOutput } from '../../types/graphql.types';
import { ServiceMappers } from '../../utils/service-mappers.util';

@Injectable()
export class TimesheetServiceImpl implements TimesheetService {
    constructor(@Inject('TimesheetSMGService') private smgService: TimesheetSMGService) {}

    async postTimesheet(): Promise<PostTimesheetOutput> {
        const smgResponse = await this.smgService.postTimesheet();

        return ServiceMappers.toPostTimesheetOutput(smgResponse);
    }
}
