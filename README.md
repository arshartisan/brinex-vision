# Brinex Vision

A light research landing page for real-time salt crystal impurity detection and quality grading, based on all three documents in `docs/`. Built with Next.js, TypeScript, Tailwind CSS v4, and shadcn-style Radix components.

The page includes the research context, detection workflow, dataset split, grading formulas, an interactive grading calculator, reported results, the four-part ecosystem, limitations, and downloadable source documents. Actual inspection and dashboard figures are extracted from the dissertation. Geist and Geist Mono are hosted locally, so builds do not require Google Fonts.

The calculator demonstrates the report's formulas with a shared whiteness input; it is not connected to an inference service. Research performance figures are reproduced as reported. The source documents contain inconsistent YOLOv8 variant references, which the page acknowledges. The ICHORA certificate concerns the related forecasting paper, and the TENCON file is presented as a manuscript without claiming publication or acceptance.

## Development

```powershell
cd C:\Development\brinex-vision
npm run dev
```

Open http://localhost:3000.

```powershell
npm run lint
npm run typecheck
npm run build
```

## Add shadcn/ui components

With registry access available:

```powershell
npx shadcn@latest add input card dialog
```

## Offline installation

The initial dependency installation used cached packages. Two small dependency archives are included in `vendor/` because they were available locally but not in the npm cache. They preserve the packages' license files and allow reproducible installation through `package-lock.json`.

To use standard registry dependencies once online:

```powershell
npm install class-variance-authority@0.7.1 tw-animate-css@1.4.0
```

Locally hosted Geist fonts keep builds independent of Google Fonts downloads. Their SIL Open Font License is included in `public/fonts/OFL.txt`.
