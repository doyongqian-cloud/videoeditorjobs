const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generatePDF(htmlFile, outputFile) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  const htmlPath = path.resolve(__dirname, '..', 'public', 'assets', 'resume', htmlFile);
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');
  
  await page.setContent(htmlContent);
  
  const pdfPath = path.resolve(__dirname, '..', 'public', 'assets', 'resume', outputFile);
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0.5in',
      right: '0.5in',
      bottom: '0.5in',
      left: '0.5in'
    }
  });
  
  await browser.close();
  console.log(`Generated: ${outputFile}`);
}

async function generateAllPDFs() {
  const resumes = [
    { html: 'modern-video-editor-resume.html', pdf: 'modern-video-editor-resume.pdf' },
    { html: 'creative-portfolio-resume.html', pdf: 'creative-portfolio-resume.pdf' },
    { html: 'professional-corporate-resume.html', pdf: 'professional-corporate-resume.pdf' },
    { html: 'freelancer-showcase-resume.html', pdf: 'freelancer-showcase-resume.pdf' },
    { html: 'entry-level-starter-resume.html', pdf: 'entry-level-starter-resume.pdf' },
    { html: 'senior-editor-executive-resume.html', pdf: 'senior-editor-executive-resume.pdf' }
  ];

  for (const resume of resumes) {
    try {
      await generatePDF(resume.html, resume.pdf);
    } catch (error) {
      console.error(`Error generating ${resume.pdf}:`, error.message);
    }
  }
}

generateAllPDFs().then(() => {
  console.log('All PDFs generated successfully!');
}).catch(console.error);
