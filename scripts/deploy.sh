#!/bin/bash

# CRITICAL: This script is the ONLY source of truth for deployment.
# Any deployment operation must be executed through this script.
# Manual deployments are strictly prohibited.

set -e

echo "🚀 Reso Website Deployment Script"
echo "=================================="

# Step 1: Verify dependencies
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed"
    exit 1
fi

# Step 2: Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Step 3: Build
echo "🔨 Building project..."
npm run build

# Step 4: Verify dist output
if [ ! -d "dist" ]; then
    echo "❌ Build failed: dist/ directory not found"
    exit 1
fi

echo "✅ Build successful"
echo "📁 Deployment artifacts ready in dist/"
echo ""
echo "Next steps:"
echo "1. Review dist/ contents"
echo "2. Deploy to hosting platform (Vercel, Netlify, etc.)"
echo "3. Run deployment validation"
