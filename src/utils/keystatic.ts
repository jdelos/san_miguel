import { readFileSync } from 'fs';
import { join } from 'path';
import yaml from 'js-yaml';

export async function getHomepageData() {
  try {
    const filePath = join(process.cwd(), 'src/content/homepage/index.yaml');
    const fileContent = readFileSync(filePath, 'utf8');
    const data = yaml.load(fileContent) as any;
    return data;
  } catch (error) {
    console.error('Error reading homepage data:', error);
    return null;
  }
}

export async function getAboutData() {
  try {
    const filePath = join(process.cwd(), 'src/content/about/index.yaml');
    const fileContent = readFileSync(filePath, 'utf8');
    const data = yaml.load(fileContent) as any;
    return data;
  } catch (error) {
    console.error('Error reading about data:', error);
    return null;
  }
}

export async function getFoundationData() {
  try {
    const filePath = join(process.cwd(), 'src/content/foundation/index.yaml');
    const fileContent = readFileSync(filePath, 'utf8');
    const data = yaml.load(fileContent) as any;
    return data;
  } catch (error) {
    console.error('Error reading foundation data:', error);
    return null;
  }
}

export async function getSiteSettingsData() {
  try {
    const filePath = join(process.cwd(), 'src/content/settings/index.yaml');
    const fileContent = readFileSync(filePath, 'utf8');
    const data = yaml.load(fileContent) as any;
    return data;
  } catch (error) {
    console.error('Error reading site settings data:', error);
    return null;
  }
}

export async function getFooterData() {
  try {
    const filePath = join(process.cwd(), 'src/content/footer/index.yaml');
    const fileContent = readFileSync(filePath, 'utf8');
    const data = yaml.load(fileContent) as any;
    return data;
  } catch (error) {
    console.error('Error reading footer data:', error);
    // Return default footer data if file doesn't exist
    return {
      hospitalName: 'Hospital San Miguel',
      description: 'Comprometidos con brindar la mejor atención médica con tecnología de vanguardia y un equipo humano altamente especializado. Tu salud es nuestra prioridad.',
      emergencyNumber: '911',
      servicesTitle: 'Servicios',
      serviceLinks: [
        { title: 'Medicina General', url: '/services/medicina-general', isExternal: false },
        { title: 'Cardiología', url: '/services/cardiologia', isExternal: false },
        { title: 'Neurología', url: '/services/neurologia', isExternal: false },
        { title: 'Pediatría', url: '/services/pediatria', isExternal: false },
        { title: 'Urgencias', url: '/services/urgencias', isExternal: false },
        { title: 'Laboratorio', url: '/services/laboratorio', isExternal: false },
      ],
      contactTitle: 'Contacto',
      contactAddress: 'Calle Principal 123\nSan Miguel, El Salvador',
      contactPhone: '+503 2345-6789',
      contactEmail: 'info@hospitalsanmiguel.com',
      legalLinks: [
        { title: 'Política de Privacidad', url: '/privacy', isExternal: false },
        { title: 'Términos de Servicio', url: '/terms', isExternal: false },
        { title: 'Derechos del Paciente', url: '/patient-rights', isExternal: false },
      ],
      copyrightText: 'Hospital San Miguel. Todos los derechos reservados.',
      licenseInfo: 'Licencia Sanitaria: LS-2024-001 | Registro Nacional: RN-HSM-2024',
      accreditationInfo: 'Acreditado por el Ministerio de Salud de El Salvador',
    };
  }
}
