provider "aws" {
  region = "ap-northeast-1"
}
resource "aws_s3_bucket" "bucket" {
  bucket = var.img_bucket_name
}
resource "aws_s3_bucket_public_access_block" "public" {
  bucket                  = aws_s3_bucket.bucket.bucket
  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}
resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = aws_s3_bucket.bucket.bucket
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = aws_s3_bucket.bucket.arn
      },
    ]
  })
}
