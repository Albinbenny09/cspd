const fs = require('fs');
const path = require('path');

const pages = [
    { dir: 'external-advisory-committee', src: 'https://cspdin.wordpress.com/expert-advisory-board/' },
    { dir: 'affiliate-members', src: 'https://cspdin.wordpress.com/team-associate-members/' },
    { dir: 'people', src: 'https://cspdin.wordpress.com/team-members/' },
    { dir: 'research-population-dynamics', src: 'https://cspdin.wordpress.com/research-population-dynamics/' },
    { dir: 'research-health-and-care-economy', src: 'https://cspdin.wordpress.com/research-health-and-care-economy/' },
    { dir: 'research-human-capital-and-labour-markets', src: 'https://cspdin.wordpress.com/research-human-capital-and-labour-markets/' },
    { dir: 'research-technology-and-innovation', src: 'https://cspdin.wordpress.com/research-technology-and-innovation/' },
    { dir: 'research-food-and-ecology', src: 'https://cspdin.wordpress.com/research-food-and-ecology/' },
    { dir: 'initiatives-lecture-series', src: 'https://cspdin.wordpress.com/intitiatives-lecture-series/' },
    { dir: 'hopes-conference', src: 'https://cspdin.wordpress.com/hopes-conference/' },
    { dir: 'summer-school', src: 'https://cspdin.wordpress.com/intitiatives-doctoral-colloquium/' },
    { dir: 'trainings-workshops', src: 'https://cspdin.wordpress.com/intitiatives-training/' },
    { dir: 'faculty-student-exchanges', src: 'https://cspdin.wordpress.com/intitiatives-faculty-student-exchanges/' },
    { dir: 'connect-global', src: 'https://cspdin.wordpress.com/connect-global/' },
    { dir: 'connect-community', src: 'https://cspdin.wordpress.com/connect-community/' },
    { dir: 'publication', src: 'https://cspdin.wordpress.com/resources-publications-2/' },
    { dir: 'newsletter', src: 'https://cspdin.wordpress.com/resources-publications/' },
    { dir: 'centre-data-repository', src: 'https://cspdin.wordpress.com/resources-data-repository/' },
    { dir: 'internships', src: 'https://cspdin.wordpress.com/intitiatives-internships/' },
    { dir: 'contact-info', src: 'https://cspdin.wordpress.com/contact/' },
];

const appDir = path.join(__dirname, 'app');

pages.forEach(page => {
    const dirPath = path.join(appDir, page.dir);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
    const content = `import IframePage from "@/components/IframePage";

export default function Page() {
  return <IframePage src="${page.src}" />;
}
`;
    fs.writeFileSync(path.join(dirPath, 'page.tsx'), content);
    console.log(`Created ${page.dir}/page.tsx`);
});
