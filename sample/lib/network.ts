import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export class Network extends Construct {
  public readonly vpc: ec2.IVpc;
  constructor(scope: Construct, id: string) {
    super(scope, id);
    // VPC とサブネット
    const vpc = new ec2.Vpc(this, 'VPC', {
      natGateways: 0, 
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'MounttargetSubnet',
          subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
        },
        {
          cidrMask: 24,
          name: 'PublicSubnet',
          subnetType: ec2.SubnetType.PUBLIC,
        },
      ]
    });
    this.vpc = vpc;
  }
}