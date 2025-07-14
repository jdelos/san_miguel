import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    team: collection({
      label: 'Team Members',
      slugField: 'name',
      path: 'src/content/team/*',
      format: { contentField: 'content' },
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        displayName: fields.text({ 
          label: 'Display Name',
          description: 'Full name as displayed on the website'
        }),
        role: fields.text({ 
          label: 'Role',
          description: 'Job title or position'
        }),
        department: fields.select({
          label: 'Department',
          options: [
            { label: 'Médicos', value: 'Médicos' },
            { label: 'Técnicas de Laboratorio', value: 'Técnicas de Laboratorio' },
            { label: 'Enfermeros', value: 'Enfermeros' },
            { label: 'Administración, Recepción y Limpieza', value: 'Administración, Recepción y Limpieza' },
          ],
          defaultValue: 'Médicos',
        }),
        image: fields.image({
          label: 'Profile Photo',
          directory: 'src/assets/team',
          publicPath: '/src/assets/team/',
          validation: { isRequired: true },
        }),
        imagePosition: fields.select({
          label: 'Image Position',
          description: 'Choose where to focus the image crop',
          options: [
            { label: 'Center Top (Default)', value: 'center top' },
            { label: 'Center Center', value: 'center center' },
            { label: 'Center Bottom', value: 'center bottom' },
            { label: 'Left Top', value: 'left top' },
            { label: 'Left Center', value: 'left center' },
            { label: 'Left Bottom', value: 'left bottom' },
            { label: 'Right Top', value: 'right top' },
            { label: 'Right Center', value: 'right center' },
            { label: 'Right Bottom', value: 'right bottom' },
          ],
          defaultValue: 'center top',
        }),
        order: fields.integer({ 
          label: 'Display Order',
          description: 'Order in which this person appears in their department (lower numbers first)',
          validation: { isRequired: false },
        }),
        startDate: fields.date({ 
          label: 'Start Date',
          description: 'When this person joined the team',
          validation: { isRequired: false },
        }),
        isActive: fields.checkbox({
          label: 'Active Team Member',
          description: 'Uncheck to hide this person from the website',
          defaultValue: true,
        }),
        content: fields.mdx({
          label: 'Biography',
          description: 'Short bio or description of this team member',
        }),
      },
    }),
    
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        snippet: fields.text({ 
          label: 'Snippet',
          description: 'Short description for the blog post'
        }),
        image: fields.image({
          label: 'Featured Image',
          directory: 'src/assets/blog',
          publicPath: '/src/assets/blog/',
          validation: { isRequired: true },
        }),
        imageAlt: fields.text({ 
          label: 'Image Alt Text',
          description: 'Alternative text for accessibility'
        }),
        publishDate: fields.date({ 
          label: 'Publish Date',
          defaultValue: { kind: 'today' },
        }),
        author: fields.text({ 
          label: 'Author',
          defaultValue: 'Quina Care',
        }),
        category: fields.text({ 
          label: 'Category',
          description: 'Blog post category'
        }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          {
            label: 'Tags',
            itemLabel: props => props.value || 'Tag',
          }
        ),
        draft: fields.checkbox({
          label: 'Draft',
          description: 'Check to hide this post from the website',
          defaultValue: false,
        }),
        content: fields.mdx({
          label: 'Content',
        }),
      },
    }),

    services: collection({
      label: 'Medical Services',
      slugField: 'title',
      path: 'src/content/services/*',
      format: { contentField: 'description' },
      schema: {
        title: fields.slug({ name: { label: 'Service Title' } }),
        displayTitle: fields.text({ 
          label: 'Display Title',
          description: 'Title as shown on the website'
        }),
        icon: fields.text({ 
          label: 'Icon',
          description: 'Icon name from Boxicons (e.g., bx:bxs-user)',
          defaultValue: 'bx:bxs-star'
        }),
        price: fields.text({ 
          label: 'Price',
          description: 'Price information (optional)',
          validation: { isRequired: false },
        }),
        order: fields.integer({ 
          label: 'Display Order',
          description: 'Order in which this service appears (lower numbers first)',
          defaultValue: 1,
        }),
        isActive: fields.checkbox({
          label: 'Active Service',
          description: 'Uncheck to hide this service from the website',
          defaultValue: true,
        }),
        description: fields.mdx({
          label: 'Description',
          description: 'Detailed description of the service',
        }),
      },
    }),
  },

  singletons: {
    homepage: singleton({
      label: 'Homepage Content',
      path: 'src/content/homepage/index',
      schema: {
        heroImage: fields.image({
          label: 'Hero Image',
          directory: 'src/assets',
          publicPath: '/src/assets/',
          validation: { isRequired: true },
        }),
        heroImageAlt: fields.text({ 
          label: 'Hero Image Alt Text',
          description: 'Alternative text for accessibility'
        }),
        title: fields.text({ 
          label: 'Main Title',
          description: 'Main title on the homepage'
        }),
        subtitle: fields.text({ 
          label: 'Subtitle',
          description: 'Subtitle below the main title'
        }),
        welcomeTitle: fields.text({ 
          label: 'Welcome Section Title',
          description: 'Title for the welcome section'
        }),
        welcomeDescription: fields.text({ 
          label: 'Welcome Description',
          description: 'Main description in the welcome section',
          multiline: true
        }),
        teamSectionTitle: fields.text({ 
          label: 'Team Section Title',
          description: 'Title for the team section'
        }),
        teamSectionDescription: fields.text({ 
          label: 'Team Section Description',
          description: 'Description for the team section',
          multiline: true
        }),
        servicesSectionTitle: fields.text({ 
          label: 'Services Section Title',
          description: 'Title for the services section'
        }),
        servicesSectionDescription: fields.text({ 
          label: 'Services Section Description',
          description: 'Description for the services section',
          multiline: true
        }),
        privacyNotice: fields.text({ 
          label: 'Privacy Notice',
          description: 'Privacy and confidentiality notice',
          multiline: true
        }),
        servicesTitle: fields.text({ 
          label: 'Services Section Title',
          description: 'Title for the services section'
        }),
        servicesDescription: fields.text({ 
          label: 'Services Section Description',
          description: 'Description for the services section',
          multiline: true
        }),
      },
    }),

    about: singleton({
      label: 'About Page',
      path: 'src/content/about/index',
      schema: {
        pageTitle: fields.text({ 
          label: 'Page Title',
          description: 'Title for the about page'
        }),
        pageDescription: fields.text({ 
          label: 'Page Description',
          description: 'Description for the about page',
          multiline: true
        }),
        historyTitle: fields.text({ 
          label: 'History Section Title',
          description: 'Title for the history section'
        }),
        historyContent: fields.text({ 
          label: 'History Content',
          description: 'Content for the history section',
          multiline: true
        }),
        fundingTitle: fields.text({ 
          label: 'Funding Section Title',
          description: 'Title for the funding section'
        }),
        fundingContent: fields.text({ 
          label: 'Funding Content',
          description: 'Content for the funding section',
          multiline: true
        }),
        locationTitle: fields.text({ 
          label: 'Location Section Title',
          description: 'Title for the location section'
        }),
        locationContent: fields.text({ 
          label: 'Location Content',
          description: 'Content for the location section',
          multiline: true
        }),
        researchTitle: fields.text({ 
          label: 'Research Section Title',
          description: 'Title for the research section'
        }),
        researchContent: fields.text({ 
          label: 'Research Content',
          description: 'Content for the research section',
          multiline: true
        }),
      },
    }),

    foundation: singleton({
      label: 'Foundation Page',
      path: 'src/content/foundation/index',
      schema: {
        pageTitle: fields.text({ 
          label: 'Page Title',
          description: 'Title for the foundation page'
        }),
        pageDescription: fields.text({ 
          label: 'Page Description',
          description: 'Description for the foundation page',
          multiline: true
        }),
        mainTitle: fields.text({ 
          label: 'Main Section Title',
          description: 'Title for the main section'
        }),
        mainContent: fields.text({ 
          label: 'Main Content',
          description: 'Content for the main section',
          multiline: true
        }),
        internationalTitle: fields.text({ 
          label: 'International Presence Title',
          description: 'Title for the international presence section'
        }),
        internationalContent: fields.text({ 
          label: 'International Content',
          description: 'Content for the international presence section',
          multiline: true
        }),
        teamTitle: fields.text({ 
          label: 'Team Section Title',
          description: 'Title for the team section'
        }),
        teamContent: fields.text({ 
          label: 'Team Content',
          description: 'Content for the team section',
          multiline: true
        }),
        missionTitle: fields.text({ 
          label: 'Mission Section Title',
          description: 'Title for the mission section'
        }),
        missionContent: fields.text({ 
          label: 'Mission Content',
          description: 'Content for the mission section',
          multiline: true
        }),
        fundingTitle: fields.text({ 
          label: 'Funding Section Title',
          description: 'Title for the funding section'
        }),
        fundingContent: fields.text({ 
          label: 'Funding Content',
          description: 'Content for the funding section',
          multiline: true
        }),
        supportCallToAction: fields.text({ 
          label: 'Support Call to Action',
          description: 'Call to action for supporters',
          multiline: true
        }),
        foundersTitle: fields.text({ 
          label: 'Founders Section Title',
          description: 'Title for the founders section'
        }),
        jacobTitle: fields.text({ 
          label: 'Jacob Title',
          description: 'Title for Dr. Jacob van der Ende'
        }),
        jacobDescription: fields.text({ 
          label: 'Jacob Description',
          description: 'Description for Dr. Jacob van der Ende',
          multiline: true
        }),
        carolienTitle: fields.text({ 
          label: 'Carolien Title',
          description: 'Title for Dra. Carolien Bouwman'
        }),
        carolienDescription: fields.text({ 
          label: 'Carolien Description',
          description: 'Description for Dra. Carolien Bouwman',
          multiline: true
        }),
      },
    }),

    siteSettings: singleton({
      label: 'Site Settings',
      path: 'src/content/settings/index',
      schema: {
        siteName: fields.text({ 
          label: 'Site Name',
          description: 'Name of the website'
        }),
        siteDescription: fields.text({ 
          label: 'Site Description',
          description: 'Description of the website',
          multiline: true
        }),
        contactEmail: fields.text({ 
          label: 'Contact Email',
          description: 'Main contact email'
        }),
        contactPhone: fields.text({ 
          label: 'Contact Phone',
          description: 'Main contact phone number'
        }),
        address: fields.text({ 
          label: 'Address',
          description: 'Hospital address',
          multiline: true
        }),
        socialMedia: fields.array(
          fields.text({ label: 'Social Media URL' }),
          {
            label: 'Social Media Links',
            itemLabel: props => props.value || 'Social Media Link',
          }
        ),
        emergencyHours: fields.text({ 
          label: 'Emergency Hours',
          description: 'Emergency service hours'
        }),
        consultationHours: fields.text({ 
          label: 'Consultation Hours',
          description: 'Regular consultation hours'
        }),
      },
    }),
  },
  
  ui: {
    brand: {
      name: 'Quina Care CMS',
    },
    navigation: {
      'Content': ['homepage', 'about', 'foundation', 'siteSettings'],
      'Team & Staff': ['team'],
      'Services': ['services'],
      'Blog': ['blog'],
    },
  },
});
