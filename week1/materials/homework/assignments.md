#### Example asignment

command: `lambda list-functions`

doc: `https://docs.aws.amazon.com/cli/latest/reference/lambda/list-functions.html`

## Mandatory assignments

**Assignment 1:**

command: `aws s3 ls`

doc: `https://docs.aws.amazon.com/cli/latest/reference/s3/ls.html`

number of buckets: `11`

**Assignment 2:**
filename: `hello-hyf.txt`

## Optional Assignments
**Assignment 3:**
command: `aws s3 presign s3://hyf-products-bucket/hello-hyf.txt --expires-in 3600`

url: `https://hyf-products-bucket.s3.amazonaws.com/hello-hyf.txt?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2F346X675XN7OAVQ%2F20210905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210905T134107Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=10c4002ca9f305c59789abfadf555ac38b3c569ae22b650ec08ab77d416340d2`



**Assignment 4:**
command : `aws s3 ls s3://hyf-products-bucket  --summarize`

Total Objects: `7`
Total Size: `1196468760`

command : `aws s3 ls s3://hyf-products-bucket/hello-hyf.txt  --human-readable`

Total Size:  `11 Bytes hello-hyf.txt`




