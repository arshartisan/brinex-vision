"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Layers3,
  ScanLine,
  SlidersHorizontal,
  Workflow,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ResearchExplorer() {
  return (
    <div className="inspection-card">
      <div className="inspection-toolbar">
        <span>
          <ScanLine size={16} aria-hidden="true" /> Inside the inspection
        </span>
        <span className="sample-label">
          <span className="status-dot" /> Recorded research example
        </span>
      </div>
      <div className="inspection-body">
        <figure className="inspection-image">
          <Image
            src="/research/inspection.webp"
            alt="Actual research frame with bounding boxes around four pure crystals, three impure crystals, and four unwanted objects"
            width={643}
            height={362}
            priority
          />
          <figcaption>
            <span>PUTTALAM, SRI LANKA</span>
            <span>Research report · Figure XI</span>
          </figcaption>
        </figure>
        <Tabs defaultValue="detection" className="inspection-detail">
          <TabsList aria-label="Explore the inspection">
            <TabsTrigger value="detection">Detection</TabsTrigger>
            <TabsTrigger value="grading">Grading</TabsTrigger>
            <TabsTrigger value="pipeline">Pipeline</TabsTrigger>
          </TabsList>
          <TabsContent value="detection">
            <p className="overline">EVERY CRYSTAL COUNTS</p>
            <h3>
              Three classes.
              <br />
              One clear picture.
            </h3>
            <p>
              Locate salt crystals and foreign objects, with a confidence score
              for every detection.
            </p>
            <div className="class-counts">
              <div>
                <span className="class-dot pure" />
                Pure salt<strong>04</strong>
              </div>
              <div>
                <span className="class-dot impure" />
                Impure salt<strong>03</strong>
              </div>
              <div>
                <span className="class-dot unwanted" />
                Unwanted material<strong>04</strong>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="grading">
            <p className="overline">BEYOND BOUNDING BOXES</p>
            <h3>
              Turn detections
              <br />
              into a quality signal.
            </h3>
            <p>
              Four pure crystals out of seven salt detections give this example
              a detection-based purity of:
            </p>
            <div className="example-purity">
              57.1<span>%</span>
            </div>
            <p className="small-note">
              Foreign objects are counted separately. Visual purity is not a
              chemical NaCl measurement.
            </p>
          </TabsContent>
          <TabsContent value="pipeline">
            <p className="overline">FROM CAMERA TO DASHBOARD</p>
            <h3>
              A connected
              <br />
              inspection workflow.
            </h3>
            <div className="mini-pipeline">
              {[
                "Capture & resize",
                "YOLOv8 detection",
                "HSV quality scoring",
                "Store & stream results",
              ].map((s, i) => (
                <div key={s}>
                  <span>0{i + 1}</span>
                  {s}
                  {i < 3 && <ArrowRight size={14} aria-hidden="true" />}
                </div>
              ))}
            </div>
            <p className="small-note">
              The recorded frame is a research example, not a live camera
              connection.
            </p>
          </TabsContent>
        </Tabs>
      </div>
      <div className="inspection-foot">
        <span>
          <Layers3 size={14} aria-hidden="true" /> Per-crystal localisation
        </span>
        <span>
          <SlidersHorizontal size={14} aria-hidden="true" /> Multi-parameter
          grading
        </span>
        <span>
          <Workflow size={14} aria-hidden="true" /> Batch-level traceability
        </span>
      </div>
    </div>
  );
}

export function GradingCalculator() {
  const [pure, setPure] = useState(8);
  const [impure, setImpure] = useState(2);
  const [unwanted, setUnwanted] = useState(1);
  const [whiteness, setWhiteness] = useState(90);
  const total = pure + impure + unwanted;
  const purity = pure + impure ? (pure / (pure + impure)) * 100 : null;
  const quality = total ? (whiteness * (pure + impure * 0.3)) / total : null;
  const controls = [
    { id: "pure", label: "Pure crystals", value: pure, set: setPure, max: 20 },
    {
      id: "impure",
      label: "Impure crystals",
      value: impure,
      set: setImpure,
      max: 20,
    },
    {
      id: "unwanted",
      label: "Foreign objects",
      value: unwanted,
      set: setUnwanted,
      max: 10,
    },
    {
      id: "whiteness",
      label: "Crystal whiteness",
      value: whiteness,
      set: setWhiteness,
      max: 100,
    },
  ];
  return (
    <div className="calculator">
      <div className="calculator-controls">
        <div className="calculator-heading">
          <SlidersHorizontal size={17} aria-hidden="true" />
          <span>Try the grading model</span>
          <span className="tag">Interactive example</span>
        </div>
        <p>Adjust the sample to see how each measure responds.</p>
        {controls.map((c) => (
          <div className="range-field" key={c.id}>
            <label htmlFor={c.id}>
              {c.label}
              <output htmlFor={c.id}>
                {c.value}
                {c.id === "whiteness" ? "%" : ""}
              </output>
            </label>
            <input
              id={c.id}
              type="range"
              min={0}
              max={c.max}
              value={c.value}
              onChange={(e) => c.set(Number(e.target.value))}
            />
          </div>
        ))}
      </div>
      <div className="calculator-result" aria-live="polite" aria-atomic="true">
        <p className="overline">YOUR SAMPLE, EXPLAINED</p>
        <div className="score-number">
          {quality === null ? "—" : quality.toFixed(1)}
          <span>/ 100</span>
        </div>
        <span className="score-label">Composite quality score</span>
        <div className="score-meter" aria-hidden="true">
          <div style={{ width: `${quality ?? 0}%` }} />
        </div>
        <div className="result-row">
          <span>Detection-based purity</span>
          <strong>
            {purity === null ? "No salt detected" : `${purity.toFixed(1)}%`}
          </strong>
        </div>
        <div className="result-row">
          <span>Whiteness input</span>
          <strong>{whiteness}%</strong>
        </div>
        <p className="small-note">
          For clarity, every crystal uses the same whiteness input here. The
          research computes whiteness separately for each detected region, then
          averages the weighted scores across detections. This example does not
          certify a batch.
        </p>
      </div>
    </div>
  );
}
