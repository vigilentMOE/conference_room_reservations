#!/bin/bash

# Function to print usage instructions
print_usage() {
  echo "Usage: $0 -r <resourceId> -u <userId> -s <startTime> -e <endTime>"
  echo "Example: $0 -r 1 -u 2 -s '2023-12-01T10:00:00Z' -e '2023-12-01T11:00:00Z'"
}

# Parse command line arguments
while getopts "r:u:s:e:" opt; do
  case $opt in
    r) resourceId="$OPTARG" ;;
    u) userId="$OPTARG" ;;
    s) startTime="$OPTARG" ;;
    e) endTime="$OPTARG" ;;
    *) print_usage
       exit 1 ;;
  esac
done

# Check if all required arguments are provided
if [ -z "$resourceId" ] || [ -z "$userId" ] || [ -z "$startTime" ] || [ -z "$endTime" ]; then
  print_usage
  exit 1
fi

# Make the POST request using curl
response=$(curl -s -w "\nHTTP_STATUS:%{http_code}" -X POST http://localhost:3001/reservations \
  -H "Content-Type: application/json" \
  -d '{
    "resourceId": "'"$resourceId"'",
    "userId": "'"$userId"'",
    "startTime": "'"$startTime"'",
    "endTime": "'"$endTime"'"
  }')

# Extract the body and status from the response
body=$(echo "$response" | sed -e 's/HTTP_STATUS\:.*//g')
status=$(echo "$response" | tr -d '\n' | sed -e 's/.*HTTP_STATUS://')

# Print the response
echo "Response Body: $body"
echo "HTTP Status: $status"