# Keystatic CMS Setup for Quina Care

## Overview
This project now includes Keystatic CMS for easy content management. You can edit team members, blog posts, and adjust image positioning directly through a web interface.

## Quick Start

### 1. Start the development server
```bash
npm run dev
```

### 2. Access the CMS
Visit: `http://localhost:4321/keystatic`

Or use the shortcut:
```bash
npm run cms
```

## Features

### Team Management
- **Add/Edit Team Members**: Full CRUD operations for team members
- **Department Organization**: Organize team members by department
- **Image Positioning**: Fine-tune how profile photos are cropped and positioned
- **Display Order**: Control the order of team members within departments
- **Active Status**: Show/hide team members without deleting them

### Image Positioning Options
For each team member photo, you can:
- Choose from preset focus areas (center top, center center, etc.)
- Use custom CSS object-position values (e.g., "30% 20%")
- Preview changes in real-time through the CMS interface

### Blog Management
- **Create/Edit Posts**: Full blog post management
- **Featured Images**: Upload and manage blog post images
- **Categories and Tags**: Organize content
- **Draft Status**: Save drafts before publishing

## Content Structure

### Team Members
Each team member has:
- **Name**: URL-friendly slug
- **Display Name**: Full name shown on website
- **Role**: Job title or position
- **Department**: One of four predefined departments
- **Profile Photo**: Uploaded image
- **Image Position**: Cropping and positioning settings
- **Biography**: Markdown content
- **Display Order**: Numerical order within department
- **Active Status**: Show/hide from website
- **Start Date**: When they joined the team

### Image Position Settings
- **Focus Area**: Predefined positions like "center top", "left center", etc.
- **Custom Position**: CSS object-position value for precise control
- **Preview**: Real-time preview in the CMS

## File Structure
```
src/
├── content/
│   ├── team/           # Team member MDX files
│   └── blog/           # Blog post files
├── pages/
│   └── keystatic/      # CMS admin interface
│       └── [...params].astro
├── components/
│   └── TeamCard.astro  # Updated with image positioning
└── assets/
    └── team/           # Team member photos
keystatic.config.ts     # CMS configuration
```

## Usage Tips

### Adding New Team Members
1. Go to `/keystatic` in your browser
2. Click "Team Members" → "Create Team Member"
3. Fill in the details
4. Upload a profile photo
5. Adjust image positioning using the dropdown or custom values
6. Save and publish

### Adjusting Image Positioning
- Use the "Focus Area" dropdown for common positions
- For precise control, use "Custom Position" with CSS values like:
  - "30% 20%" (30% from left, 20% from top)
  - "center 25%" (centered horizontally, 25% from top)
  - "75% center" (75% from left, centered vertically)

### Managing Departments
Team members are organized into these departments:
- Médicos
- Técnicas de Laboratorio
- Enfermeros
- Administración, Recepción y Limpieza

### Display Order
- Lower numbers appear first
- Leave empty to use default order
- Can be decimal (e.g., 1.5) to insert between existing members

## Development

### Local Development
```bash
# Start development server
npm run dev

# Start with CMS open
npm run cms
```

### Production Build
```bash
npm run build
```

The CMS interface is only available in development mode. Content changes are saved as files in the repository and will be built into the static site.

## Troubleshooting

### Common Issues
1. **CMS not loading**: Make sure the development server is running
2. **Images not showing**: Check that images are in the correct directory
3. **Content not updating**: Restart the development server after making changes

### File Permissions
Make sure the following directories are writable:
- `src/content/team/`
- `src/content/blog/`
- `src/assets/team/`

## Next Steps
- The CMS is configured for local development
- For production deployment, you might want to configure Git-based storage
- Consider adding authentication for multi-user access
- Add more content types as needed (services, testimonials, etc.)
