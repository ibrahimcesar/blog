---
title: What is AWS Cloud Development Kit (CDK)
tags: ["AWS", "CDK", "Infrastructure as Code", "Cloud", "DevOps"]
category: "AWS"
description: "AWS CDK (Cloud Development Kit) is an open source framework to provision infrastructure in the Cloud by writing code in Python, TypeScript, JavaScript, .NET, Java"
featured: true
pubDate: "2022-10-22T10:50:00.000Z"
image: "~/assets/images/whatiscdk.png"
socialImage: "/features/what-is-cdk.png"
language: "en"
draft: false
---

```typescript ins={2,4-9}
 // 1️⃣ Resources are imported from 'aws-cdk-lib'
import { App, Stack, StackProps } from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';

// 2️⃣ Definition of the stack to be provisioned
export class MyStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    // 3️⃣ Creates a bucket, using this L3 construct for S3 resources
    const myBucket = new s3.Bucket(this, 'my-bucket');
  }
}

// 4️⃣ App instantiation
const app = new App();

// 5️⃣ Stack instantiation
new MyStack(app, `cdk-stack-dev`, {
  stackName: `cdk-stack-dev`,
  env: {region: process.env.CDK_DEFAULT_REGION},
});
```

## Constructs

```typescript {3}
import * as s3 from 'aws-cdk-lib/aws-s3';

const myBucket = new s3.Bucket(this, 'my-bucket', {
  blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
  bucketName: ``, // ⚠️ Here is defined the s3 bucket name
  encryption: BucketEncryption.S3_MANAGED,
  enforceSSL: true,
  eventBridgeEnabled: true,
  removalPolicy: RemovalPolicy.RETAIN,
  versioned: true,
});
```