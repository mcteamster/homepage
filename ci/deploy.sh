#!/bin/bash
distribution="E2NRV94G8JRSL6"
bucket="s3://homepage-customresourcestack-m387loq-s3bucketroot-319of6ff77vf"

# cloudformation deploy
#aws --region us-east-1 cloudformation deploy --stack-name homepage --template-file ./template.yaml --capabilities CAPABILITY_NAMED_IAM CAPABILITY_AUTO_EXPAND --parameter-overrides DomainName=mcteamster.com HostedZoneId=Z0639363ZGUL9YOFVOMV CreateApex=yes
# aws cloudfront get-distribution-config --id $distribution > distribution-config.json
# etag=$(jq -r ".ETag" < distribution-config.json)
# jq '.DistributionConfig.DefaultCacheBehavior.ResponseHeadersPolicyId = "60669652-455b-4ae9-85a4-c4c02393f86c" | .DistributionConfig' < distribution-config.json > new-config.json
# aws cloudfront update-distribution --id $distribution --distribution-config file://new-config.json --if-match $etag
# rm distribution-config.json
# rm new-config.json
## NEED TO RE-APPLY OAI to the S3 Origin?

# website deploy
cd ..
npm run build
cd ./ci
aws s3 sync "../dist" "$bucket"

# invalidation
aws cloudfront create-invalidation --distribution-id=$distribution --path="/*"