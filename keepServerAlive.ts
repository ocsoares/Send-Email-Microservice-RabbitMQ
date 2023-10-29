import { CronJob } from 'cron';
import axios from 'axios';
import 'dotenv/config';

const url = process.env.DEPLOY_URL;

console.log('Cron job running');

// Run every 40 minutes to keep deploy's server alive
new CronJob(
    '*/40 * * * *',
    async () => {
        try {
            await axios.get(url);
        } catch (error) {
            console.log(error);
        }
    },
    null,
    true,
);
