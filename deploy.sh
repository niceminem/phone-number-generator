#!/bin/bash

# Deploy script for Phone Number Generator Dynamic System
# This script regenerates all pages and prepares them for deployment

echo "🚀 Phone Number Generator Deployment Script"
echo "============================================="

# Check if required files exist
if [[ ! -f "template.html" ]]; then
    echo "❌ Error: template.html not found"
    exit 1
fi

if [[ ! -f "countries-data.json" ]]; then
    echo "❌ Error: countries-data.json not found"
    exit 1
fi

if [[ ! -f "generate_pages.py" ]]; then
    echo "❌ Error: generate_pages.py not found"
    exit 1
fi

# Check if Python is available
if ! command -v python3 &> /dev/null; then
    echo "❌ Error: Python 3 is required but not installed"
    exit 1
fi

echo "📋 Pre-deployment checks passed"

# Generate all pages
echo "🔄 Regenerating all pages..."
python3 generate_pages.py

if [[ $? -eq 0 ]]; then
    echo "✅ Page generation completed successfully"
else
    echo "❌ Error: Page generation failed"
    exit 1
fi

# Validate generated HTML files
echo "🔍 Validating generated HTML files..."
for file in index.html *-phone-number-generator.html; do
    if [[ -f "$file" ]]; then
        if [[ $(head -1 "$file") == "<!DOCTYPE html>" ]]; then
            echo "✅ $file is valid"
        else
            echo "⚠️  Warning: $file may not be valid HTML"
        fi
    fi
done

# Validate language pack JSON files
echo "🌍 Validating language pack files..."
if [[ -d "js/lang" ]]; then
    for file in js/lang/*.json; do
        if python3 -c "import json; json.load(open('$file'))" 2>/dev/null; then
            echo "✅ $(basename $file) is valid JSON"
        else
            echo "❌ Error: $(basename $file) is invalid JSON"
        fi
    done
else
    echo "⚠️  Warning: js/lang directory not found"
fi

# Check for required static files
echo "📁 Checking required static files..."
required_files=(
    "css/style.css"
    "css/generator.css"
    "js/script.js"
    "js/phone-generator.js"
    "js/i18n.js"
)

for file in "${required_files[@]}"; do
    if [[ -f "$file" ]]; then
        echo "✅ $file exists"
    else
        echo "⚠️  Warning: $file not found"
    fi
done

echo ""
echo "============================================="
echo "🎉 Deployment preparation complete!"
echo ""
echo "📝 Summary:"
echo "   - HTML pages generated from template"
echo "   - Language packs created as JSON files"
echo "   - Dynamic language loading enabled"
echo "   - Template-based generation system ready"
echo ""
echo "💡 To add new countries:"
echo "   1. Add country data to countries-data.json"
echo "   2. Run: python3 generate_pages.py"
echo "   3. Deploy updated files"
echo ""
echo "🌍 To add new languages:"
echo "   1. Add translations to js/i18n.js"
echo "   2. Run: python3 generate_pages.py"
echo "   3. Update language selector in countries-data.json"
echo ""
echo "🚀 Ready for deployment!"