import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const APP_PATH = path.join(__dirname, 'src', 'App.tsx');

let content = fs.readFileSync(APP_PATH, 'utf8');

// Update Yipy Play Store URL
const oldYipyUrl = 'playStoreUrl: "https://play.google.com/store/apps/details?id=com.yipy.app"';
const newYipyUrl = 'playStoreUrl: "https://play.google.com/store/apps/details?id=com.yipy.centratamagroup.staff"';

if (content.includes(oldYipyUrl)) {
  content = content.replace(oldYipyUrl, newYipyUrl);
  console.log('Updated Yipy Play Store URL successfully.');
} else {
  console.error('Could not find Yipy Play Store URL in App.tsx');
}

// Update keyBCA Play Store URL
const oldKeyBcaUrl = 'playStoreUrl: "https://play.google.com/store/apps/details?id=com.bca.token"';
const newKeyBcaUrl = 'playStoreUrl: "https://play.google.com/store/apps/details?id=com.bca.keybca"';

if (content.includes(oldKeyBcaUrl)) {
  content = content.replace(oldKeyBcaUrl, newKeyBcaUrl);
  console.log('Updated keyBCA Play Store URL successfully.');
} else {
  console.error('Could not find keyBCA Play Store URL in App.tsx');
}

fs.writeFileSync(APP_PATH, content, 'utf8');
console.log('Play Store links updated successfully!');
