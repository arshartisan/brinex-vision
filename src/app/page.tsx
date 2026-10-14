import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronRight,
  CloudSun,
  FileText,
  FlaskConical,
  Focus,
  GraduationCap,
  Layers3,
  Leaf,
  MapPin,
  Microscope,
  Network,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Waves,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  GradingCalculator,
  ResearchExplorer,
} from "@/components/research-explorer";

const report = "/research/IT22346322.pdf";
const paper = "/research/TENCON2026_Track3_Arshaq.pdf";

function SectionHeading({
  number,
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span>{number}</span>
        {label}
      </p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
function Brand() {
  return (
    <a href="#" className="brand" aria-label="Brinex Vision home">
      <span className="brand-symbol">
        <Focus size={23} strokeWidth={1.8} aria-hidden="true" />
      </span>
      <span>
        brinex<span className="brand-light">vision</span>
        <span className="brand-period">.</span>
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#research">The research</a>
            <a href="#methodology">How it works</a>
            <a href="#results">Results</a>
            <a href="#resources">Resources</a>
          </nav>
          <Button variant="outline" size="sm" asChild>
            <a href={paper} target="_blank" rel="noreferrer">
              Read the paper <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
          <details className="mobile-menu">
            <summary aria-label="Open navigation">
              <Layers3 size={20} aria-hidden="true" />
            </summary>
            <nav aria-label="Mobile navigation">
              <a href="#research">The research</a>
              <a href="#methodology">How it works</a>
              <a href="#results">Results</a>
              <a href="#resources">Resources</a>
            </nav>
          </details>
        </div>
      </header>
      <main id="main">
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-inner">
            <div className="research-badge">
              <span className="status-dot" /> Computer vision for a better salt
              industry <ChevronRight size={13} aria-hidden="true" />
            </div>
            <h1>
              A clearer view.
              <br />
              <span>A better grade of salt.</span>
            </h1>
            <p className="hero-description">
              Turning visual inspection into measurable insight.
              <br className="desktop-break" /> AI-powered impurity detection and
              quality grading,
              <br className="desktop-break" /> built for Sri Lanka’s tropical
              salt production.
            </p>
            <div className="hero-actions">
              <Button size="lg" asChild>
                <a href="#research">
                  Explore the research <ArrowRight aria-hidden="true" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={report} target="_blank" rel="noreferrer">
                  <BookOpen aria-hidden="true" /> Read the full report
                </a>
              </Button>
            </div>
            <p className="hero-location">
              <MapPin size={13} aria-hidden="true" /> Rooted in Puttalam.
              Developed at SLIIT.
            </p>
            <ResearchExplorer />
          </div>
        </section>
        <section
          className="metrics-strip container"
          aria-label="Reported research results"
        >
          <div className="metric">
            <strong>
              99.41<span>%</span>
            </strong>
            <p>Detection precision</p>
          </div>
          <div className="metric">
            <strong>
              99.37<span>%</span>
            </strong>
            <p>mAP at IoU 0.5</p>
          </div>
          <div className="metric">
            <strong>1,952</strong>
            <p>Annotated & augmented images</p>
          </div>
          <div className="metric">
            <strong>
              5 <span>FPS</span>
            </strong>
            <p>Reported CPU stream rate</p>
          </div>
          <p className="metrics-source">
            Reported in the research documents · 293 held-out test images{" "}
            <a href={`${report}#page=47`} target="_blank" rel="noreferrer">
              View evaluation <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          </p>
        </section>
        <section id="research" className="section container research-section">
          <div>
            <SectionHeading
              number="01"
              label="THE RESEARCH"
              title="An age-old industry. A new way to see it."
              description="Salt is made by the sun and sea. Its quality deserves more than a subjective glance."
            />
            <p className="body-copy">
              At the salterns of Puttalam, harvested crystals are traditionally
              checked by hand. Inspectors look for discolouration, mineral
              inclusions, sand, and organic debris. Changing light, operator
              fatigue, and translucent crystal surfaces make consistent grading
              difficult.
            </p>
            <p className="body-copy">
              Brinex Vision presents the computer vision component of the{" "}
              <strong>
                Integrated Climate-Intelligent Salt Production Ecosystem
              </strong>
              . The research connects object detection with per-crystal
              whiteness analysis, turning a camera frame into quantitative
              quality signals and traceable batch records.
            </p>
            <a
              href={`${report}#page=19`}
              className="text-link"
              target="_blank"
              rel="noreferrer"
            >
              Read the research problem{" "}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
          <div className="research-note">
            <span className="note-icon">
              <Microscope size={25} strokeWidth={1.5} aria-hidden="true" />
            </span>
            <p className="overline">THE QUESTION BEHIND THE WORK</p>
            <blockquote>
              How can we detect impurities and grade salt crystals in real time,
              under the conditions of tropical production?
            </blockquote>
            <div className="note-divider" />
            <div className="research-challenges">
              {[
                {
                  icon: Focus,
                  title: "See the detail",
                  description: "Locate each crystal and contaminant.",
                },
                {
                  icon: Zap,
                  title: "Keep up with production",
                  description: "Fit within a 200 ms frame budget.",
                },
                {
                  icon: ShieldCheck,
                  title: "Make the result useful",
                  description: "Give operators an auditable quality signal.",
                },
              ].map((c) => (
                <div key={c.title}>
                  <c.icon size={17} aria-hidden="true" />
                  <span>
                    <strong>{c.title}</strong>
                    <p>{c.description}</p>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="methodology" className="section section-tinted">
          <div className="container">
            <SectionHeading
              number="02"
              label="THE METHODOLOGY"
              title="From field data to actionable insight."
              description="A complete inspection pipeline, designed around the crystals, conditions, and decisions that matter in a saltern."
            />
            <div className="method-grid">
              {[
                {
                  icon: MapPin,
                  n: "01",
                  title: "Learn from the field",
                  text: "Images captured at Puttalam salterns across midday sun, overcast skies, low-angle light, and supplementary LED lighting.",
                  foot: "~650 originals → 1,952 with augmentation",
                },
                {
                  icon: ScanLine,
                  n: "02",
                  title: "Find every object",
                  text: "YOLOv8 predicts a bounding box, class, and confidence for each object. Reviewed annotations distinguish pure salt, impure salt, and foreign material.",
                  foot: "3 classes · Label Studio + CVAT",
                },
                {
                  icon: Sparkles,
                  n: "03",
                  title: "Measure the quality",
                  text: "HSV analysis measures brightness and colour neutrality inside each detection. Class weights turn whiteness into an interpretable composite score.",
                  foot: "Purity + whiteness + weighted quality",
                },
                {
                  icon: Network,
                  n: "04",
                  title: "Connect the evidence",
                  text: "ONNX inference feeds a NestJS service. Results travel through gRPC and WebSocket to a Next.js dashboard, with sessions and batches saved in MongoDB.",
                  foot: "Detect → grade → persist → visualise",
                },
              ].map((item) => (
                <article className="method-card" key={item.n}>
                  <div className="method-card-top">
                    <item.icon size={23} strokeWidth={1.5} aria-hidden="true" />
                    <span>{item.n}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="method-foot">{item.foot}</div>
                </article>
              ))}
            </div>
            <div className="dataset-row">
              <div>
                <p className="overline">A PURPOSE-BUILT DATASET</p>
                <h3>
                  Designed to learn.
                  <br />
                  Kept separate to evaluate.
                </h3>
              </div>
              <div className="dataset-split">
                <div className="split-bar" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="split-labels">
                  <div>
                    <span className="class-dot pure" />
                    <strong>70%</strong>
                    <p>Training · 1,366</p>
                  </div>
                  <div>
                    <span className="class-dot validation" />
                    <strong>15%</strong>
                    <p>Validation · 293</p>
                  </div>
                  <div>
                    <span className="class-dot test" />
                    <strong>15%</strong>
                    <p>Test · 293</p>
                  </div>
                </div>
                <p className="small-note">
                  Reported dataset split. Augmentations include rotation,
                  flipping, brightness and contrast changes, noise, mosaic, and
                  cutout.
                </p>
                <p className="small-note">
                  Training uses COCO-pretrained weights, a 150-epoch budget,
                  batch size 16, and a cosine-annealed learning rate starting at
                  0.01. Early stopping monitors validation performance with a
                  patience of 20 epochs.
                </p>
              </div>
            </div>
            <div className="architecture">
              <div className="architecture-label">
                <Network size={16} aria-hidden="true" /> The system architecture
              </div>
              <div className="architecture-flow">
                {[
                  "Camera frame",
                  "Sharp preprocessing",
                  "YOLOv8 / ONNX",
                  "HSV grading",
                  "NestJS + MongoDB",
                  "Next.js dashboard",
                ].map((s, i) => (
                  <div key={s}>
                    <span>{s}</span>
                    {i < 5 && <ArrowRight size={14} aria-hidden="true" />}
                  </div>
                ))}
              </div>
              <p className="small-note">
                320 × 320 model input · confidence filtering + non-maximum
                suppression · selectable region of interest · asynchronous
                persistence
              </p>
              <p className="small-note">
                An object detector was chosen over frame-level MobileNet and
                ResNet classifiers because grading needs the position and pixel
                region of each crystal, not only a label for the whole image.
              </p>
            </div>
          </div>
        </section>
        <section id="grading" className="section container">
          <SectionHeading
            number="03"
            label="THE GRADING FRAMEWORK"
            title="Detection is only the beginning."
            description="Three complementary measures turn a set of bounding boxes into a quality assessment operators can understand."
          />
          <div className="formula-grid">
            <article>
              <span className="formula-index">01 / PURITY</span>
              <h3>How much of the salt looks clean?</h3>
              <code>Pure / (Pure + Impure) × 100</code>
              <p>
                The percentage of salt detections classed as pure. Foreign
                objects are excluded from this denominator and reported
                separately.
              </p>
            </article>
            <article>
              <span className="formula-index">02 / WHITENESS</span>
              <h3>How bright and neutral is it?</h3>
              <code>W = mean(V × (1 − S)) × 100</code>
              <p>
                Within each bounding box, HSV Value captures brightness and
                Saturation captures colour intensity. Bright, neutral pixels
                score higher.
              </p>
            </article>
            <article>
              <span className="formula-index">03 / COMPOSITE QUALITY</span>
              <h3>What does that mean together?</h3>
              <code>Q = W × class weight</code>
              <p>
                Pure salt receives a weight of 1.0, impure salt 0.3, and foreign
                material 0.0. Per-detection scores are averaged into a frame
                score.
              </p>
            </article>
          </div>
          <GradingCalculator />
          <div className="grading-note">
            <FlaskConical size={16} aria-hidden="true" />
            <p>
              These are visual quality measures. Chemical composition, food
              safety, and regulatory certification require appropriate testing
              beyond computer vision.
            </p>
          </div>
        </section>
        <section id="results" className="section section-tinted">
          <div className="container">
            <div className="results-heading">
              <SectionHeading
                number="04"
                label="THE EVIDENCE"
                title="Measured, not assumed."
                description="Evaluation reported on 293 held-out images. Each metric answers a different question about detection performance."
              />
              <a
                href={`${report}#page=47`}
                className="text-link"
                target="_blank"
                rel="noreferrer"
              >
                Explore the evaluation{" "}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
            <div className="results-grid">
              <div className="performance-panel">
                <p className="overline">OVERALL DETECTION PERFORMANCE</p>
                {[
                  {
                    name: "Precision",
                    value: 99.41,
                    description: "How often a predicted detection is correct.",
                  },
                  {
                    name: "Recall",
                    value: 99.14,
                    description: "How many ground-truth objects are found.",
                  },
                  {
                    name: "mAP@0.5",
                    value: 99.37,
                    description:
                      "Average precision at an IoU threshold of 0.5.",
                  },
                  {
                    name: "mAP@0.5:0.95",
                    value: 79.95,
                    description:
                      "Average precision across stricter box alignment thresholds.",
                  },
                ].map((m) => (
                  <div className="performance-row" key={m.name}>
                    <div>
                      <strong>{m.name}</strong>
                      <span>{m.value.toFixed(2)}%</span>
                    </div>
                    <div className="performance-track" aria-hidden="true">
                      <span style={{ width: `${m.value}%` }} />
                    </div>
                    <p>{m.description}</p>
                  </div>
                ))}
              </div>
              <div className="results-insight">
                <span className="note-icon">
                  <ShieldCheck size={25} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <p className="overline">THE OPERATIONALLY CRITICAL CLASS</p>
                <strong className="insight-number">
                  99.67<span>%</span>
                </strong>
                <h3>Recall for impure salt.</h3>
                <p>
                  The report records 607 correct detections out of 609 impure
                  crystal instances, with two missed. This class matters because
                  overlooked impurities can pass into the final product.
                </p>
                <div className="insight-bottom">
                  <span>
                    <Check size={14} aria-hidden="true" /> 98.86% impure-salt
                    precision
                  </span>
                  <span>
                    <Zap size={14} aria-hidden="true" /> ~45 ms synchronous
                    pipeline reported
                  </span>
                </div>
              </div>
            </div>
            <div
              className="table-wrap"
              role="region"
              aria-label="Class-level research results"
              tabIndex={0}
            >
              <table>
                <caption>Class-level results reported in the research</caption>
                <thead>
                  <tr>
                    <th scope="col">Detection class</th>
                    <th scope="col">Precision</th>
                    <th scope="col">Recall</th>
                    <th scope="col">Correct detections</th>
                    <th scope="col">Missed instances</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Pure salt", "96.32%", "100.00%", "654", "0"],
                    ["Impure salt", "98.86%", "99.67%", "607", "2"],
                    ["Unwanted material", "92.47%", "96.43%", "270", "10"],
                  ].map((r, i) => (
                    <tr key={r[0]}>
                      <th scope="row">
                        <span
                          className={`class-dot ${["pure", "impure", "unwanted"][i]}`}
                        />
                        {r[0]}
                      </th>
                      {r.slice(1).map((c, j) => (
                        <td key={j}>{c}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="source-note">
              Source: research report, Chapter 3, Tables 7–9. Overall metrics
              and class-level confusion-matrix results are reproduced as
              reported and have not been independently reconciled. The supplied
              documents alternate between YOLOv8 nano and medium, so the model
              variant needs confirmation before replication. On 50 expert-rated
              frames, the report also records a Spearman rank correlation above
              0.92 between the composite score and human quality ranking.
            </p>
          </div>
        </section>
        <section className="section container dashboard-section">
          <div className="dashboard-visual">
            <Image
              src="/research/dashboard.webp"
              alt="Research prototype dashboard showing a salt inspection frame, class detections, a purity gauge, and batch statistics"
              width={658}
              height={369}
            />
            <span className="image-caption">
              The research prototype · Report, Figure IV
            </span>
          </div>
          <div>
            <p className="eyebrow">
              <span>
                <Focus size={14} aria-hidden="true" />
              </span>
              BUILT AROUND THE OPERATOR
            </p>
            <h2>
              Insight that reaches
              <br />
              the people who need it.
            </h2>
            <p className="body-copy">
              The research goes beyond a model benchmark. Its operator dashboard
              brings together annotated camera frames, purity indicators,
              quality scores, and batch history.
            </p>
            <ul className="check-list">
              <li>
                <Check aria-hidden="true" /> Confidence and class overlays on
                each frame
              </li>
              <li>
                <Check aria-hidden="true" /> Session and batch records for
                traceability
              </li>
              <li>
                <Check aria-hidden="true" /> Region of interest for focused
                inspection
              </li>
              <li>
                <Check aria-hidden="true" /> Reporting and historical quality
                analysis
              </li>
            </ul>
            <a
              className="text-link"
              href={`${report}#page=40`}
              target="_blank"
              rel="noreferrer"
            >
              Explore the implementation{" "}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </section>
        <section id="ecosystem" className="section ecosystem-section">
          <div className="container">
            <SectionHeading
              number="05"
              label="THE BIGGER PICTURE"
              title="One vision. A connected ecosystem."
              description="Project 25-26J-431 brings four research components together across the salt production lifecycle. Vision supplies the evidence about the harvested product."
            />
            <div className="ecosystem-grid">
              {[
                {
                  icon: CloudSun,
                  n: "01",
                  title: "Crystallisation forecasting",
                  description:
                    "Use weather and sensor data to anticipate when salt will crystallise.",
                },
                {
                  icon: Layers3,
                  n: "02",
                  title: "Intelligent production planning",
                  description:
                    "Translate forecasts into operational plans around capacity and market conditions.",
                },
                {
                  icon: ScanLine,
                  n: "03",
                  title: "Computer vision quality control",
                  description:
                    "Inspect the harvested crystals and return measurable quality signals.",
                  active: true,
                },
                {
                  icon: Leaf,
                  n: "04",
                  title: "Waste valorisation",
                  description:
                    "Explore federated learning for by-product reuse across salterns without sharing raw site data.",
                },
              ].map((e) => (
                <article
                  className={`ecosystem-card ${e.active ? "is-focus" : ""}`}
                  key={e.n}
                >
                  <div>
                    <e.icon size={23} strokeWidth={1.5} aria-hidden="true" />
                    <span>{e.active ? "THIS RESEARCH" : e.n}</span>
                  </div>
                  <h3>{e.title}</h3>
                  <p>{e.description}</p>
                </article>
              ))}
            </div>
            <div className="conference-note">
              <GraduationCap size={21} strokeWidth={1.5} aria-hidden="true" />
              <p>
                <strong>Shared at ICHORA 2026.</strong> The supplied certificate
                records Muhammed Arshaq’s oral presentation of the related
                ecosystem paper, “From Pond to Market: A Two-Stage AI
                Forecasting System for Salt Production Planning in Puttalam, Sri
                Lanka.”
              </p>
              <a
                href="/research/ICHORA2026_230_Certificate_Arshaq.pdf"
                target="_blank"
                rel="noreferrer"
                aria-label="View ICHORA 2026 presentation certificate"
              >
                <ArrowUpRight size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
        <section className="section container limitations-section">
          <SectionHeading
            number="06"
            label="LIMITATIONS & NEXT STEPS"
            title="Good research leaves room to grow."
            description="The current work demonstrates a monitoring and grading prototype. Broader deployment brings new questions to test."
          />
          <Accordion type="single" collapsible defaultValue="geography">
            {[
              {
                id: "geography",
                title: "Validate beyond Puttalam",
                text: "The training and test images come from one geographic area. Different salterns may have different crystal shapes, mineral compositions, and contaminants. Multi-region datasets, per-site calibration, and evaluation are needed before assuming the same performance elsewhere.",
              },
              {
                id: "tracking",
                title: "Track crystals across frames",
                text: "Frames are processed independently, so a crystal may be detected repeatedly as it travels through the camera view. Temporal tracking with methods such as ByteTrack or DeepSORT is proposed to consolidate observations and improve count reliability.",
              },
              {
                id: "background",
                title: "Reduce background false positives",
                text: "Foreign material is the most diverse class and has the lowest reported precision. Tighter regions of interest, improved background handling, and more varied annotated examples could help reduce false detections.",
              },
              {
                id: "actuation",
                title: "Move from monitoring to physical sorting",
                text: "The current system detects and grades; it does not automatically remove contaminated material. Integrating pneumatic ejectors or diverter gates and validating the control loop is future work.",
              },
              {
                id: "edge",
                title: "Bring inference closer to the saltern",
                text: "The research prototype depends on a network-connected server. An edge deployment, for example on a Jetson-class device, is proposed for sites with intermittent connectivity. Privacy-preserving cross-site learning and adaptation to other granular products are further research directions.",
              },
            ].map((f) => (
              <AccordionItem value={f.id} key={f.id}>
                <AccordionTrigger>{f.title}</AccordionTrigger>
                <AccordionContent>{f.text}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
        <section id="resources" className="section resources-section">
          <div className="container">
            <SectionHeading
              number="07"
              label="READ THE RESEARCH"
              title="The detail behind the vision."
              description="Explore the methodology, implementation, and evidence in the original documents."
            />
            <div className="resource-grid">
              {[
                {
                  title: "The complete research report",
                  label: "DISSERTATION · 59 PAGES",
                  description:
                    "Salt Crystal Impurity Detection and Quality Grading Using Real-Time Computer Vision: For Tropical Salt Production.",
                  href: report,
                  foot: "Arshaq MJM · SLIIT · April 2026",
                  icon: BookOpen,
                },
                {
                  title: "The research manuscript",
                  label: "TENCON 2026 FILE · 5 PAGES",
                  description:
                    "Salt Crystal Impurity Detection and Quality Grading Using Computer Vision for Tropical Salt Production.",
                  href: paper,
                  foot: "Methodology, results & discussion",
                  icon: FileText,
                },
                {
                  title: "The presentation certificate",
                  label: "ICHORA 2026 · 1 PAGE",
                  description:
                    "Certificate documenting an oral presentation of the related salt production forecasting paper.",
                  href: "/research/ICHORA2026_230_Certificate_Arshaq.pdf",
                  foot: "Muhammed Arshaq · ICHORA 2026",
                  icon: GraduationCap,
                },
              ].map((r) => (
                <article className="resource-card" key={r.title}>
                  <div className="resource-top">
                    <r.icon size={22} strokeWidth={1.5} aria-hidden="true" />
                    <a
                      href={r.href}
                      download
                      aria-label={`Download ${r.title}`}
                    >
                      <ArrowDown size={18} aria-hidden="true" />
                    </a>
                  </div>
                  <p className="overline">{r.label}</p>
                  <h3>
                    <a href={r.href} target="_blank" rel="noreferrer">
                      {r.title}
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  </h3>
                  <p>{r.description}</p>
                  <span className="resource-foot">{r.foot}</span>
                </article>
              ))}
            </div>
            <div className="research-credits">
              <div>
                <span className="overline">VISION COMPONENT RESEARCHER</span>
                <p>
                  Muhammed Arshaq <span>IT22346322</span>
                </p>
              </div>
              <div>
                <span className="overline">SUPERVISION</span>
                <p>Dr. Bhagya Nathali Silva & Mrs. Thilini Jayalath</p>
              </div>
              <div>
                <span className="overline">INSTITUTION</span>
                <p>Sri Lanka Institute of Information Technology</p>
              </div>
            </div>
            <div className="closing-note">
              <Waves size={23} strokeWidth={1.5} aria-hidden="true" />
              <h2>
                A clearer picture.
                <br />
                <span>A more informed decision.</span>
              </h2>
              <Button size="lg" asChild>
                <a href={report} target="_blank" rel="noreferrer">
                  Go deeper into the research{" "}
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="container site-footer">
        <Brand />
        <p>Research rooted in Sri Lanka. Built for clearer insight.</p>
        <a href="#main">
          Back to top <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </footer>
    </>
  );
}
