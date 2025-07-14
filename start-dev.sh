#!/bin/bash

echo "🚀 Starting ZCA Development Server..."
echo "📝 Note: This is the Persian/RTL version of the original Bolt.new website"
echo ""

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    pnpm install
fi

# Start the development server
echo "🌐 Starting development server..."
pnpm run dev 