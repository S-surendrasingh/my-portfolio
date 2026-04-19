/**
 * Generates public/resume.pdf. Run: npm run generate:resume
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import {
  resumeEducation,
  resumeExperience,
  resumeProfile,
  resumeSkills,
} from "../lib/resume-content";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const PAGE_WIDTH = 612;
const PAGE_HEIGHT = 792;
const MARGIN = 50;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;
const LINE_HEIGHT = 14;
const SECTION_GAP = 18;

const colors = {
  text: rgb(0.12, 0.12, 0.14),
  muted: rgb(0.35, 0.35, 0.4),
  accent: rgb(0.45, 0.2, 0.75),
  rule: rgb(0.82, 0.82, 0.86),
};

function wrapText(text: string, font: { widthOfTextAtSize: (t: string, s: number) => number }, size: number, maxWidth: number) {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let line = "";

  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    const width = font.widthOfTextAtSize(test, size);
    if (width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

type PdfFont = Awaited<ReturnType<PDFDocument["embedFont"]>>;
type PdfPage = ReturnType<PDFDocument["addPage"]>;

function drawLines(
  page: PdfPage,
  lines: string[],
  x: number,
  y: number,
  font: PdfFont,
  size: number,
  color: ReturnType<typeof rgb>
) {
  let cursorY = y;
  for (const line of lines) {
    page.drawText(line, { x, y: cursorY, size, font, color });
    cursorY -= LINE_HEIGHT;
  }
  return cursorY;
}

async function main() {
  const pdf = await PDFDocument.create();
  const fontRegular = await pdf.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdf.embedFont(StandardFonts.HelveticaBold);

  let page = pdf.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  let y = PAGE_HEIGHT - MARGIN;

  const ensureSpace = (needed: number) => {
    if (y - needed < MARGIN) {
      page = pdf.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
      y = PAGE_HEIGHT - MARGIN;
    }
  };

  page.drawText(resumeProfile.name, {
    x: MARGIN,
    y,
    size: 22,
    font: fontBold,
    color: colors.text,
  });
  y -= 26;

  page.drawText(resumeProfile.title, {
    x: MARGIN,
    y,
    size: 12,
    font: fontRegular,
    color: colors.accent,
  });
  y -= 16;

  const contactLine = `${resumeProfile.email}  |  ${resumeProfile.location}`;
  page.drawText(contactLine, { x: MARGIN, y, size: 9, font: fontRegular, color: colors.muted });
  y -= 12;

  const linkParts = [
    resumeProfile.links.linkedin,
    resumeProfile.links.github,
    resumeProfile.links.upwork,
  ].filter(Boolean) as string[];
  y = drawLines(
    page,
    wrapText(linkParts.join("  ·  "), fontRegular, 8, CONTENT_WIDTH),
    MARGIN,
    y,
    fontRegular,
    8,
    colors.muted
  );
  y -= SECTION_GAP;

  page.drawLine({
    start: { x: MARGIN, y },
    end: { x: PAGE_WIDTH - MARGIN, y },
    thickness: 1,
    color: colors.rule,
  });
  y -= SECTION_GAP;

  const sectionTitle = (label: string) => {
    ensureSpace(40);
    page.drawText(label.toUpperCase(), {
      x: MARGIN,
      y,
      size: 10,
      font: fontBold,
      color: colors.accent,
    });
    y -= LINE_HEIGHT + 4;
  };

  sectionTitle("Summary");
  y = drawLines(
    page,
    wrapText(resumeProfile.summary, fontRegular, 10, CONTENT_WIDTH),
    MARGIN,
    y,
    fontRegular,
    10,
    colors.text
  );
  y -= SECTION_GAP;

  sectionTitle("Core skills");
  for (const group of resumeSkills) {
    ensureSpace(36);
    page.drawText(group.title, { x: MARGIN, y, size: 10, font: fontBold, color: colors.text });
    y -= LINE_HEIGHT;
    y = drawLines(
      page,
      wrapText(group.tags.join(" · "), fontRegular, 9, CONTENT_WIDTH),
      MARGIN,
      y,
      fontRegular,
      9,
      colors.muted
    );
    y -= 6;
  }
  y -= SECTION_GAP - 6;

  sectionTitle("Experience");
  for (const role of resumeExperience) {
    ensureSpace(80);
    page.drawText(role.title, { x: MARGIN, y, size: 11, font: fontBold, color: colors.text });
    y -= LINE_HEIGHT;
    const meta = `${role.company}  |  ${role.period}  |  ${role.location}`;
    page.drawText(meta, { x: MARGIN, y, size: 9, font: fontRegular, color: colors.muted });
    y -= LINE_HEIGHT + 2;

    for (const bullet of role.bullets) {
      ensureSpace(28);
      const bulletLines = wrapText(bullet, fontRegular, 9, CONTENT_WIDTH - 14);
      page.drawText("•", { x: MARGIN, y, size: 9, font: fontRegular, color: colors.text });
      y = drawLines(page, bulletLines, MARGIN + 12, y, fontRegular, 9, colors.text);
      y -= 2;
    }
    y -= 8;
  }

  sectionTitle("Education");
  ensureSpace(40);
  page.drawText(resumeEducation.degree, {
    x: MARGIN,
    y,
    size: 10,
    font: fontBold,
    color: colors.text,
  });
  y -= LINE_HEIGHT;
  y = drawLines(
    page,
    wrapText(resumeEducation.institution, fontRegular, 9, CONTENT_WIDTH),
    MARGIN,
    y,
    fontRegular,
    9,
    colors.muted
  );
  page.drawText(resumeEducation.years, {
    x: MARGIN,
    y: y - LINE_HEIGHT,
    size: 9,
    font: fontRegular,
    color: colors.muted,
  });

  const bytes = await pdf.save();
  const outDir = path.join(root, "public");
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, "resume.pdf");
  fs.writeFileSync(outPath, bytes);
  console.log(`Wrote ${outPath} (${bytes.length} bytes)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
