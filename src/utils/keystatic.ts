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
