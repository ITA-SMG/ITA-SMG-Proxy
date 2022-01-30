import { Inject, Injectable } from '@nestjs/common';
import { TimesheetSMGService } from '../../types/services.types';
import { PostTimesheetSMGOutput } from '../../types/smg.types';
import { HttpClient } from '../../types/utils.types';

@Injectable()
export class TimesheetSMGServiceImpl implements TimesheetSMGService {
    constructor(@Inject('HttpClient') private httpClient: HttpClient) {}

    async postTimesheet(): Promise<PostTimesheetSMGOutput> {
        return {
            status: 220,
        };
    }
}
