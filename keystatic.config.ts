import { config, fields, collection, singleton } from '@keystatic/core';

// Content blocks - reusable components
const fullWidthBlock = fields.object({
  title: fields.text({ label: 'Title' }),
  content: fields.mdx({ label: 'Content' }),
  backgroundColor: fields.select({
    label: 'Background Color',
    options: [
      { label: 'White', value: 'white' },
      { label: 'Gray Light', value: 'gray-light' },
      { label: 'Brand Green', value: 'brand-green' },
      { label: 'Brand Red', value: 'brand-red' },
    ],
    defaultValue: 'white'
  }),
});

const cardBlock = fields.object({
  title: fields.text({ label: 'Title' }),
  content: fields.mdx({ label: 'Content' }),
  image: fields.image({
    label: 'Image',
    directory: 'src/assets/cards',
    publicPath: '/src/assets/cards/',
    validation: { isRequired: false },
  }),
  imageAlt: fields.text({ 
    label: 'Image Alt Text',
    validation: { isRequired: false }
  }),
  link: fields.text({ 
    label: 'Link URL',
    validation: { isRequired: false }
  }),
  linkText: fields.text({ 
    label: 'Link Text',
    validation: { isRequired: false }
  }),
});

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    // Pages - main collection for all pages
    pages: collection({
      label: 'Pages',
      slugField: 'slug',
      path: 'src/content/pages/*',
      format: { contentField: 'content' },
      schema: {
        slug: fields.slug({ 
          name: { label: 'Page URL' },
        }),
        title: fields.text({ 
          label: 'Page Title',
          description: 'Title shown in browser tab and search results'
        }),
        heroTitle: fields.text({ 
          label: 'Hero Title',
          description: 'Main title displayed in the hero section'
        }),
        heroDescription: fields.text({ 
          label: 'Hero Description',
          description: 'Description displayed in the hero section',
          multiline: true
        }),
        heroBackgroundType: fields.select({
          label: 'Hero Background Type',
          options: [
            { label: 'Gradient', value: 'gradient' },
            { label: 'Image', value: 'image' }
          ],
          defaultValue: 'gradient'
        }),
        heroBackgroundImage: fields.image({
          label: 'Hero Background Image',
          directory: 'src/assets/heroes',
          publicPath: '/src/assets/heroes/',
          validation: { isRequired: false },
        }),
        heroBackgroundImageAlt: fields.text({ 
          label: 'Hero Background Image Alt Text',
          validation: { isRequired: false }
        }),
        // Page content blocks
        blocks: fields.array(
          fields.conditional(
            fields.select({
              label: 'Block Type',
              options: [
                { label: 'Full Width Block', value: 'full-width' },
                { label: 'Two Column Cards', value: 'two-column-cards' },
              ],
              defaultValue: 'full-width'
            }),
            {
              'full-width': fullWidthBlock,
              'two-column-cards': fields.object({
                leftCard: cardBlock,
                rightCard: cardBlock,
              }),
            }
          ),
          {
            label: 'Content Blocks',
            itemLabel: (props) => {
              if (props.discriminant === 'full-width') {
return (props.value as any).title || 'Full Width Block';
              }
              if (props.discriminant === 'two-column-cards') {
return `Two Cards: ${(props.value as any).leftCard?.title || 'Left'} | ${(props.value as any).rightCard?.title || 'Right'}`;
              }
              return 'Content Block';
            },
          }
        ),
        isPublished: fields.checkbox({
          label: 'Published',
          description: 'Uncheck to hide this page from the website',
          defaultValue: true,
        }),
        order: fields.integer({ 
          label: 'Navigation Order',
          description: 'Order in navigation menu (lower numbers first)',
          defaultValue: 1,
        }),
        showInNavigation: fields.checkbox({
          label: 'Show in Navigation',
          description: 'Check to show this page in the main navigation menu',
          defaultValue: true,
        }),
        content: fields.mdx({
          label: 'Additional Content',
          description: 'Optional additional content for this page',
        }),
      },
    }),
    
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
    pricing: singleton({
      label: 'Pricing & Services',
      path: 'src/content/pricing/index',
      schema: {
        heroTitle: fields.text({ 
          label: 'Hero Title',
          defaultValue: 'Servicios médicos y tarifas'
        }),
        heroDescription: fields.text({ 
          label: 'Hero Description',
          defaultValue: 'Trabajamos con voluntarios de varios países, incluyendo los Países Bajos. Por eso, es posible que la atención sea brindada por personal médico extranjero. La atención brindada es en español.',
          multiline: true
        }),
        additionalServicesTitle: fields.text({ 
          label: 'Additional Services Title',
          defaultValue: 'Servicios Adicionales'
        }),
        laboratoryTitle: fields.text({ 
          label: 'Laboratory Title',
          defaultValue: 'Laboratorio Clínico'
        }),
        laboratoryDescription: fields.text({ 
          label: 'Laboratory Description',
          defaultValue: 'Análisis completos y especializados',
          multiline: true
        }),
        radiologyTitle: fields.text({ 
          label: 'Radiology Title',
          defaultValue: 'Radiología'
        }),
        radiologyDescription: fields.text({ 
          label: 'Radiology Description',
          defaultValue: 'Estudios de imagen con tecnología moderna',
          multiline: true
        }),
        pharmacyTitle: fields.text({ 
          label: 'Pharmacy Title',
          defaultValue: 'Farmacia'
        }),
        pharmacyDescription: fields.text({ 
          label: 'Pharmacy Description',
          defaultValue: 'Medicamentos y productos farmacéuticos',
          multiline: true
        }),
        surgeryTitle: fields.text({ 
          label: 'Surgery Title',
          defaultValue: 'Cirugía Menor'
        }),
        surgeryDescription: fields.text({ 
          label: 'Surgery Description',
          defaultValue: 'Procedimientos quirúrgicos menores',
          multiline: true
        }),
        priceDisclaimer: fields.text({ 
          label: 'Price Disclaimer',
          defaultValue: 'Los precios pueden variar según la complejidad del caso. Consulte con nuestro personal para información específica.',
          multiline: true
        }),
        showPricingTable: fields.checkbox({
          label: 'Show Pricing Table',
          description: 'Display pricing information in a table format',
          defaultValue: true
        }),
        pricingTableTitle: fields.text({
          label: 'Pricing Table Title',
          defaultValue: 'Tabla de Precios'
        }),
        pricingCards: fields.array(
          fields.object({
            name: fields.text({ 
              label: 'Service Name',
              validation: { isRequired: true }
            }),
            price: fields.text({ 
              label: 'Price',
              validation: { isRequired: true }
            }),
            priceUSD: fields.text({ 
              label: 'Price USD',
              validation: { isRequired: false }
            }),
            priceCOP: fields.text({ 
              label: 'Price COP',
              validation: { isRequired: false }
            }),
            availability: fields.text({ 
              label: 'Availability',
              defaultValue: 'Horario regular'
            }),
            isEmergency: fields.checkbox({
              label: 'Emergency Service',
              description: 'Highlight as emergency service',
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
              defaultValue: 'Agendar Cita'
            }),
            buttonLink: fields.text({ 
              label: 'Button Link',
              defaultValue: '/contact'
            }),
          }),
          {
            label: 'Pricing Details',
            itemLabel: props => props.value.name || 'Service',
          }
        ),
      },
    }),

    // Global Settings
    siteSettings: singleton({
      label: 'Site Settings',
      path: 'src/content/settings/index',
      schema: {
        siteName: fields.text({ 
          label: 'Site Name',
          description: 'Name of the website',
          defaultValue: 'Hospital San Miguel'
        }),
        siteDescription: fields.text({ 
          label: 'Site Description',
          description: 'Description of the website',
          multiline: true,
          defaultValue: 'Comprometidos con brindar la mejor atención médica.'
        }),
        contactEmail: fields.text({ 
          label: 'Contact Email',
          description: 'Main contact email',
          defaultValue: 'contacto@quinacare.org'
        }),
        contactPhone: fields.text({ 
          label: 'Contact Phone',
          description: 'Main contact phone number',
          defaultValue: '+593-999-999999'
        }),
        address: fields.text({ 
          label: 'Address',
          description: 'Hospital address',
          multiline: true,
          defaultValue: 'Puerto El Carmen, Ecuador'
        }),
      },
    }),
  },
  
  ui: {
    brand: {
      name: 'Quina Care CMS',
    },
    navigation: {
      'Pages': ['pages'],
      'Team & Staff': ['team'],
      'Services': ['services'],
      'Pricing': ['pricing'],
      'Blog': ['blog'],
      'Site Settings': ['siteSettings'],
    },
  },
});
