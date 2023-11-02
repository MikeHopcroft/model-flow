import {Command} from 'commander';

import {Configuration, wrapper} from '../../../lib/app/index.js';
import {ILogger} from '../../../lib/shared/index.js';

export interface TrainOptions {
  dryrun?: boolean;
  env?: string;
  filter?: string;
}

export async function train(this: Command, options: TrainOptions) {
  wrapper(trainInternal, this, options);
}

export async function trainInternal(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logger: ILogger,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  configuration: Configuration,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options: TrainOptions
) {
  console.log('Train command not implemented.');
}
