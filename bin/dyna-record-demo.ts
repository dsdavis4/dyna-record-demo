#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { DynaRecordDemoStack } from "../lib/dyna-record-demo-stack";

const app = new cdk.App();
new DynaRecordDemoStack(app, "DynaRecordDemoStack");
