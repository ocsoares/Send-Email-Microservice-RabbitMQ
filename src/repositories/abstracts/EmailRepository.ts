import { IEmail } from 'src/models/IEmail';

export abstract class EmailRepository {
    abstract save(data: IEmail): Promise<void>;
}
