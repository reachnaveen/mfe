#!/bin/bash

# ----- CONFIG -----
DOCKER_REPO="reachnaveen"   # e.g., "docker.io/yourusername" or ECR repo
IMAGE_TAG="dev"               # or use `$(git rev-parse --short HEAD)` for commit-based tags
# ------------------

set -e  # Exit on error

declare -A APPS=(
  ["host-app"]="host-app"
  ["product-search-mfe"]="product-search-mfe"
  ["product-details-mfe"]="product-details-mfe"
  ["product-filter-mfe"]="product-filter-mfe"  
  ["backend"]="backend"
)

for dir in "${!APPS[@]}"; do
  image="${DOCKER_REPO}/${APPS[$dir]}:${IMAGE_TAG}"

  echo "🔧 Building $dir..."
  docker build -t "$image" "./$dir"

  echo "📤 Pushing $image..."
  docker push "$image"

  echo "✅ Done: $image"
done

echo "🚀 All images built and pushed successfully."
