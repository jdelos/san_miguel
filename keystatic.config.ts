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

    pageHeroes: singleton({
      label: 'Page Heroes',
      path: 'src/content/pageHeroes/index',
      schema: {
        // About Page Hero
        aboutHeroType: fields.select({
          label: 'About Hero Type',
          description: 'Choose between image or gradient background',
          options: [
            { label: 'Image', value: 'image' },
            { label: 'Gradient', value: 'gradient' }
          ],
          defaultValue: 'gradient'
        }),
        aboutHeroImage: fields.image({
          label: 'About Hero Image',
          directory: 'src/assets/heroes',
          publicPath: '/src/assets/heroes/',
          validation: { isRequired: false },
          description: 'Hero image for About page (only used if Image type is selected)'
        }),
        aboutHeroImageAlt: fields.text({ 
          label: 'About Hero Image Alt Text',
          description: 'Alternative text for accessibility',
          validation: { isRequired: false }
        }),
        
        // Contact Page Hero
        contactHeroType: fields.select({
          label: 'Contact Hero Type',
          description: 'Choose between image or gradient background',
          options: [
            { label: 'Image', value: 'image' },
            { label: 'Gradient', value: 'gradient' }
          ],
          defaultValue: 'gradient'
        }),
        contactHeroImage: fields.image({
          label: 'Contact Hero Image',
          directory: 'src/assets/heroes',
          publicPath: '/src/assets/heroes/',
          validation: { isRequired: false },
          description: 'Hero image for Contact page (only used if Image type is selected)'
        }),
        contactHeroImageAlt: fields.text({ 
          label: 'Contact Hero Image Alt Text',
          description: 'Alternative text for accessibility',
          validation: { isRequired: false }
        }),
        
        // Pricing Page Hero
        pricingHeroType: fields.select({
          label: 'Pricing Hero Type',
          description: 'Choose between image or gradient background',
          options: [
            { label: 'Image', value: 'image' },
            { label: 'Gradient', value: 'gradient' }
          ],
          defaultValue: 'gradient'
        }),
        pricingHeroImage: fields.image({
          label: 'Pricing Hero Image',
          directory: 'src/assets/heroes',
          publicPath: '/src/assets/heroes/',
          validation: { isRequired: false },
          description: 'Hero image for Pricing page (only used if Image type is selected)'
        }),
        pricingHeroImageAlt: fields.text({ 
          label: 'Pricing Hero Image Alt Text',
          description: 'Alternative text for accessibility',
          validation: { isRequired: false }
        }),
        
        // Foundation Page Hero
        foundationHeroType: fields.select({
          label: 'Foundation Hero Type',
          description: 'Choose between image or gradient background',
          options: [
            { label: 'Image', value: 'image' },
            { label: 'Gradient', value: 'gradient' }
          ],
          defaultValue: 'gradient'
        }),
        foundationHeroImage: fields.image({
          label: 'Foundation Hero Image',
          directory: 'src/assets/heroes',
          publicPath: '/src/assets/heroes/',
          validation: { isRequired: false },
          description: 'Hero image for Foundation page (only used if Image type is selected)'
        }),
        foundationHeroImageAlt: fields.text({ 
          label: 'Foundation Hero Image Alt Text',
          description: 'Alternative text for accessibility',
          validation: { isRequired: false }
        }),
        
        // Team Page Hero
        teamHeroType: fields.select({
          label: 'Team Hero Type',
          description: 'Choose between image or gradient background',
          options: [
            { label: 'Image', value: 'image' },
            { label: 'Gradient', value: 'gradient' }
          ],
          defaultValue: 'gradient'
        }),
        teamHeroImage: fields.image({
          label: 'Team Hero Image',
          directory: 'src/assets/heroes',
          publicPath: '/src/assets/heroes/',
          validation: { isRequired: false },
          description: 'Hero image for Team page (only used if Image type is selected)'
        }),
        teamHeroImageAlt: fields.text({ 
          label: 'Team Hero Image Alt Text',
          description: 'Alternative text for accessibility',
          validation: { isRequired: false }
        }),
      },
    }),

    contact: singleton({
      label: 'Contact Page',
      path: 'src/content/contact/index',
      schema: {
        // Hero Section
        heroTitle: fields.text({ 
          label: 'Hero Title',
          description: 'Main title for the contact page hero',
          defaultValue: 'Contacto'
        }),
        heroDescription: fields.text({ 
          label: 'Hero Description',
          description: 'Description for the contact page hero',
          defaultValue: 'Estamos aquí para ayudarte con tu salud.'
        }),
        
        // Page Content
        pageTitle: fields.text({ 
          label: 'Page Title',
          description: 'Title for the contact page section',
          defaultValue: 'Contacto'
        }),
        pageDescription: fields.text({ 
          label: 'Page Description',
          description: 'Description for the contact page section',
          defaultValue: 'Estamos aquí para ayudarte con tu salud.'
        }),
        
        // Hospital Information
        hospitalTitle: fields.text({ 
          label: 'Hospital Title',
          description: 'Title for the hospital information section',
          defaultValue: 'Hospital San Miguel'
        }),
        hospitalDescription: fields.text({ 
          label: 'Hospital Description',
          description: 'Description for the hospital information',
          multiline: true,
          defaultValue: '¿Necesitas atención médica o tienes preguntas? Estamos aquí para ayudarte. Completa el formulario o contáctanos directamente.'
        }),
        
        // Contact Information Section
        contactInfoTitle: fields.text({ 
          label: 'Contact Information Title',
          description: 'Title for the contact information section',
          defaultValue: 'Información de Contacto'
        }),
        hospitalName: fields.text({ 
          label: 'Hospital Name',
          description: 'Name of the hospital',
          defaultValue: 'Hospital San Miguel'
        }),
        hospitalAddress: fields.text({ 
          label: 'Hospital Address',
          description: 'Physical address of the hospital',
          multiline: true,
          defaultValue: 'Puerto El Carmen, Ecuador\nCoordenadas: 0.1165363, -75.8657967'
        }),
        contactEmail: fields.text({ 
          label: 'Contact Email',
          description: 'Contact email address',
          defaultValue: 'contacto@quinacare.org'
        }),
        contactPhone: fields.text({ 
          label: 'Contact Phone',
          description: 'Contact phone number',
          defaultValue: '+593-999-999999'
        }),
        
        // Operating Hours Section
        operatingHoursTitle: fields.text({ 
          label: 'Operating Hours Title',
          description: 'Title for the operating hours section',
          defaultValue: 'Horarios de Atención'
        }),
        mondayToFriday: fields.text({ 
          label: 'Monday to Friday Hours',
          description: 'Operating hours for Monday to Friday',
          defaultValue: '08:00 - 12:00 y 14:00 - 16:00'
        }),
        saturdayHours: fields.text({ 
          label: 'Saturday Hours',
          description: 'Operating hours for Saturday',
          defaultValue: 'Cerrado'
        }),
        sundayHours: fields.text({ 
          label: 'Sunday Hours',
          description: 'Operating hours for Sunday',
          defaultValue: '08:00 - 12:00'
        }),
        emergencyHours: fields.text({ 
          label: 'Emergency Hours',
          description: 'Emergency service hours',
          defaultValue: '24/7'
        }),
        
        // Location Section
        locationTitle: fields.text({ 
          label: 'Location Title',
          description: 'Title for the location section',
          defaultValue: 'Ubicación'
        }),
        mapEmbedUrl: fields.text({ 
          label: 'Map Embed URL',
          description: 'Google Maps embed URL for the hospital location',
          defaultValue: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995.2332111845547!2d-75.8664229!3d0.1164241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e278500325f573d%3A0x525352c18e9e7f55!2sHospital%20San%20Miguel!5e0!3m2!1ses!2sec!4v1737890000000!5m2!1ses!2sec'
        }),
        mapTitle: fields.text({ 
          label: 'Map Title',
          description: 'Title attribute for the map iframe',
          defaultValue: 'Hospital San Miguel Location'
        }),
      },
    }),
    
    pricing: singleton({
      label: 'Pricing Page',
      path: 'src/content/pricing/index',
      schema: {
        // Hero Section
        heroTitle: fields.text({ 
          label: 'Hero Title',
          description: 'Main title for the pricing page hero',
          defaultValue: 'Servicios Médicos y Tarifas'
        }),
        heroDescription: fields.text({ 
          label: 'Hero Description',
          description: 'Description for the pricing page hero',
          defaultValue: 'Ofrecemos atención médica de calidad a precios accesibles para toda la comunidad.'
        }),
        
        // Additional Services Section
        additionalServicesTitle: fields.text({ 
          label: 'Additional Services Title',
          description: 'Title for the additional services section',
          defaultValue: 'Servicios Adicionales'
        }),
        
        // Service Items
        laboratoryTitle: fields.text({ 
          label: 'Laboratory Title',
          description: 'Title for laboratory services',
          defaultValue: 'Laboratorio'
        }),
        laboratoryDescription: fields.text({ 
          label: 'Laboratory Description',
          description: 'Description for laboratory services',
          defaultValue: 'Pruebas de orina, heces y sangre'
        }),
        radiologyTitle: fields.text({ 
          label: 'Radiology Title',
          description: 'Title for radiology services',
          defaultValue: 'Radiología'
        }),
        radiologyDescription: fields.text({ 
          label: 'Radiology Description',
          description: 'Description for radiology services',
          defaultValue: 'Radiografías y ecografías'
        }),
        pharmacyTitle: fields.text({ 
          label: 'Pharmacy Title',
          description: 'Title for pharmacy services',
          defaultValue: 'Farmacia'
        }),
        pharmacyDescription: fields.text({ 
          label: 'Pharmacy Description',
          description: 'Description for pharmacy services',
          defaultValue: 'Medicamentos esenciales'
        }),
        surgeryTitle: fields.text({ 
          label: 'Surgery Title',
          description: 'Title for surgery services',
          defaultValue: 'Cirugías'
        }),
        surgeryDescription: fields.text({ 
          label: 'Surgery Description',
          description: 'Description for surgery services',
          defaultValue: 'Procedimientos seleccionados'
        }),
        
        // Disclaimer
        priceDisclaimer: fields.text({ 
          label: 'Price Disclaimer',
          description: 'Disclaimer text about commercial rates',
          defaultValue: '*Para estudios solicitados por cuenta propia, se aplican tarifas comerciales más altas.'
        }),
        
        // Pricing Cards
        pricingCards: fields.array(
          fields.object({
            name: fields.text({ 
              label: 'Service Name',
              description: 'Name of the service package'
            }),
            price: fields.text({ 
              label: 'Price',
              description: 'Price for the service package'
            }),
            popular: fields.checkbox({
              label: 'Popular',
              description: 'Mark this package as popular',
              defaultValue: false
            }),
            features: fields.array(
              fields.text({ label: 'Feature' }),
              {
                label: 'Features',
                itemLabel: props => props.value || 'Feature',
              }
            ),
            buttonText: fields.text({ 
              label: 'Button Text',
              description: 'Text for the action button'
            }),
            buttonLink: fields.text({ 
              label: 'Button Link',
              description: 'Link for the action button'
            }),
          }),
          {
            label: 'Pricing Cards',
            itemLabel: props => props.fields.name.value || 'Pricing Card',
          }
        ),
      },
    }),
    
    teamPage: singleton({
      label: 'Team Page',
      path: 'src/content/teamPage/index',
      schema: {
        // Hero Section
        heroTitle: fields.text({ 
          label: 'Hero Title',
          description: 'Main title for the team page hero',
          defaultValue: 'Nuestro Personal'
        }),
        heroDescription: fields.text({ 
          label: 'Hero Description',
          description: 'Description for the team page hero',
          defaultValue: 'Conoce a nuestro equipo médico y de apoyo comprometido con tu salud.'
        }),
        
        // Page Content
        pageTitle: fields.text({ 
          label: 'Page Title',
          description: 'Title for the team page section',
          defaultValue: 'Nuestro Personal'
        }),
        pageDescription: fields.text({ 
          label: 'Page Description',
          description: 'Description for the team page section',
          defaultValue: 'Conoce a nuestro equipo médico y de apoyo comprometido con tu salud.'
        }),
      },
    }),
    
    blogPage: singleton({
      label: 'Blog Page',
      path: 'src/content/blogPage/index',
      schema: {
        // Hero Section
        heroTitle: fields.text({ 
          label: 'Hero Title',
          description: 'Main title for the blog page hero',
          defaultValue: 'Nuestro Blog'
        }),
        heroDescription: fields.text({ 
          label: 'Hero Description',
          description: 'Description for the blog page hero',
          defaultValue: 'Mantente informado sobre salud y noticias del hospital.'
        }),
        
        // Page Content
        pageTitle: fields.text({ 
          label: 'Page Title',
          description: 'Title for the blog page section',
          defaultValue: 'Nuestro Blog'
        }),
        pageDescription: fields.text({ 
          label: 'Page Description',
          description: 'Description for the blog page section',
          defaultValue: 'Mantente informado sobre salud y noticias del hospital.'
        }),
      },
    }),

    footer: singleton({
      label: 'Footer Settings',
      path: 'src/content/footer/index',
      schema: {
        hospitalName: fields.text({ 
          label: 'Hospital Name',
          description: 'Name displayed in footer',
          defaultValue: 'Hospital San Miguel'
        }),
        description: fields.text({ 
          label: 'Hospital Description',
          description: 'Brief description about the hospital',
          multiline: true,
          defaultValue: 'Comprometidos con brindar la mejor atención médica con tecnología de vanguardia y un equipo humano altamente especializado. Tu salud es nuestra prioridad.'
        }),
        emergencyNumber: fields.text({ 
          label: 'Emergency Phone Number',
          description: 'Emergency contact number',
          defaultValue: '911'
        }),
        
        // Services Section
        servicesTitle: fields.text({ 
          label: 'Services Section Title',
          description: 'Title for services section in footer',
          defaultValue: 'Servicios'
        }),
        serviceLinks: fields.array(
          fields.object({
            title: fields.text({ 
              label: 'Service Name',
              description: 'Name of the service'
            }),
            url: fields.text({ 
              label: 'Service URL',
              description: 'Link to service page (e.g., /services/cardiologia)'
            }),
            isExternal: fields.checkbox({
              label: 'External Link',
              description: 'Check if this links to an external website',
              defaultValue: false
            })
          }),
          {
            label: 'Service Links',
            itemLabel: props => props.fields.title.value || 'Service Link',
            validation: { length: { min: 1 } }
          }
        ),
        
        // Contact Section
        contactTitle: fields.text({ 
          label: 'Contact Section Title',
          description: 'Title for contact section in footer',
          defaultValue: 'Contacto'
        }),
        contactAddress: fields.text({ 
          label: 'Contact Address',
          description: 'Physical address of the hospital',
          multiline: true,
          defaultValue: 'Calle Principal 123\nSan Miguel, El Salvador'
        }),
        contactPhone: fields.text({ 
          label: 'Contact Phone',
          description: 'Main phone number',
          defaultValue: '+503 2345-6789'
        }),
        contactEmail: fields.text({ 
          label: 'Contact Email',
          description: 'Main email address',
          defaultValue: 'info@hospitalsanmiguel.com'
        }),
        
        // Legal Links
        legalLinks: fields.array(
          fields.object({
            title: fields.text({ 
              label: 'Link Title',
              description: 'Title of the legal link'
            }),
            url: fields.text({ 
              label: 'Link URL',
              description: 'URL of the legal page'
            }),
            isExternal: fields.checkbox({
              label: 'External Link',
              description: 'Check if this links to an external website',
              defaultValue: false
            })
          }),
          {
            label: 'Legal Links',
            itemLabel: props => props.fields.title.value || 'Legal Link',
            validation: { length: { min: 1 } }
          }
        ),
        
        // Footer Bottom
        copyrightText: fields.text({ 
          label: 'Copyright Text',
          description: 'Copyright notice (year will be added automatically)',
          defaultValue: 'Hospital San Miguel. Todos los derechos reservados.'
        }),
        licenseInfo: fields.text({ 
          label: 'License Information',
          description: 'Hospital license and registration info',
          defaultValue: 'Licencia Sanitaria: LS-2024-001 | Registro Nacional: RN-HSM-2024'
        }),
        accreditationInfo: fields.text({ 
          label: 'Accreditation Information',
          description: 'Government accreditation details',
          defaultValue: 'Acreditado por el Ministerio de Salud de El Salvador'
        }),
      },
    }),
  },
  
  ui: {
    brand: {
      name: 'Quina Care CMS',
    },
    navigation: {
      'Pages': ['homepage', 'about', 'foundation', 'contact', 'pricing', 'teamPage', 'blogPage'],
      'Team & Staff': ['team'],
      'Services': ['services'],
      'Blog': ['blog'],
      'Site Settings': ['siteSettings', 'pageHeroes', 'footer'],
    },
  },
});
