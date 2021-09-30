## Mandatory assignments

**Assignment 4:**

Sync your changes to s3 and write down your s3 bucket url.

bucket url: `https://s3.console.aws.amazon.com/s3/buckets/kavya-week2?region=us-east-1&tab=objects`

**Assignment 5:**

Right now, the website does not support https. Explain which other AWS service needs to be integrated in order to achieve this.

service name: `cloud front`

**Assignment 6:**

Figure out and write down the price per month of storing 51TB on S3.

Price: `S3 Standard storage: 51 TB per month x 1024 GB in a TB = 52224 GB per month`

Total size of website: `BucketSizeBytes	157,856,166`

**Assignment 7:**

Write down the main cost factors for S3

brief description: `There are three primary costs associated with S3: storage cost charged per GB per month or hour, API cost for operation of files, and data transfer cost outside the AWS region`

**Assignment 8:**

The file `week2/assignments/products.json` needs to be uploaded Inside the bucket `hyf-serverless-course-week-2`. Upload the file through the CLI and write down the command needed.

docs: `ws s3 cp /Users/kavyareddy/Desktop/serverless-hyf/masterclass-serverless/week2/materials/homework/products-kavya.json s3://kavya-week2`

**Assignment 9:**
Write down a brief use case on when S3 could be used for a data engineering assignment: 

use case: `Amazon S3 is commonly used in AWS Data Engineering for Data Storage from multiple sources because it’s a highly scalable, fast, cost-effective solution. S3 stores data in Objects, which are fundamental entities that consist of data and its metadata. Objects stores pairs where metadata is the description of respective data like Date has Date-Time description. With AWS Data Engineering, Amazon S3 allows you to run Big Data Analytics for better insights.`

command:

## Optional assignments: 

**Assignment 10:**

What can be done to reduce the pricing for S3 when hosting a large number of files?

brief description: `Store your data in a compressed format,Evenly distribute S3 objects,Use S3 for hosting static websites,Appropriately tag and monitor buckets,Enable “Lifecycle” feature,Use Compressible Formats,Removing Unused S3 Buckets,Use a Cloud Cost Optimization service` 

**Assignment 11:**

There are many security features built into S3. Find your favourite feature, documentation for it, and explain briefly why.

brief description of favourite security feature: `AWS PrivateLink fo for S3: AWS PrivateLink for Amazon S3 provides direct access to S3 via a private endpoint within your virtual private network. This allows you to simplify your network architecture by connecting to S3 from on-premises or in AWS using private IP addresses in your Virtual Private Cloud (VPC), eliminating the need to use public IPs, configure firewall rules, or configure an Internet Gateway to access S3 from on-premises.` 
