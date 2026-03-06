import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import { Network } from './network'

export class SampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const network = new Network(this, 'NetworkConstruct');
  }
}
