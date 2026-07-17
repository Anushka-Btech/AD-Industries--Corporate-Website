import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import facility from "@/assets/facility.jpg";

export const products = [
  {
    slug: "precision-shafts",
    name: "Precision Machined Shafts",
    category: "CNC Machining",
    image: product1,
    tagline: "Sub-micron tolerance turned components",
    description:
      "Hardened and ground shafts turned on multi-axis CNCs, held to ±5 μm across production runs. Ideal for pumps, gearboxes, and motion systems.",
  },
  {
    slug: "gear-assemblies",
    name: "Gear & Bearing Assemblies",
    category: "Powertrain",
    image: product2,
    tagline: "Balanced, heat-treated, ready to install",
    description:
      "Complete gear train assemblies with in-house heat treatment, dynamic balancing, and 100% inspection reports.",
  },
  {
    slug: "sheet-enclosures",
    name: "Sheet-Metal Enclosures",
    category: "Fabrication",
    image: product3,
    tagline: "Powder-coated, laser-cut, precision-folded",
    description:
      "Custom enclosures for electrical panels, control cabinets, and OEM equipment. Certified for IP54 and above.",
  },
];

export const gallery = [
  { src: gallery1, label: "Quality inspection" },
  { src: gallery2, label: "Robotic welding cell" },
  { src: gallery3, label: "CNC production line" },
  { src: facility, label: "Bhiwadi facility" },
  { src: product1, label: "Turned components" },
  { src: product2, label: "Gear assemblies" },
  { src: product3, label: "Fabricated enclosures" },
];

export const services = [
  { title: "CNC Machining", desc: "3, 4 and 5-axis milling and turning for prototype and production runs." },
  { title: "Sheet-Metal Fabrication", desc: "Laser cutting, CNC bending, welding and powder-coating under one roof." },
  { title: "Assembly & Testing", desc: "Sub-assembly, kitting, torque-controlled fastening and end-of-line testing." },
  { title: "Heat Treatment", desc: "In-house induction hardening, tempering and stress relieving for critical parts." },
  { title: "Surface Finishing", desc: "Zinc plating, black oxide, anodizing and powder coating to spec." },
  { title: "Reverse Engineering", desc: "Sample-to-drawing conversion with GD&T and full documentation." },
];

export const industries = [
  "Automotive", "Renewable Energy", "Industrial Automation", "Agriculture",
  "Oil & Gas", "Aerospace", "Medical Devices", "Defence",
];

export const stats = [
  { label: "Years of manufacturing", value: 22, suffix: "+" },
  { label: "Components shipped", value: 4200000, suffix: "+" },
  { label: "OEM partners", value: 180, suffix: "" },
  { label: "On-time delivery", value: 99, suffix: "%" },
];

export const timeline = [
  { year: "2002", title: "Founded in Bhiwadi", desc: "A.D. Industries opens its first workshop in RIICO Industrial Area." },
  { year: "2008", title: "First CNC line", desc: "Introduced multi-axis CNC turning for automotive OEMs." },
  { year: "2014", title: "ISO 9001 certified", desc: "Quality systems formalized across the plant." },
  { year: "2019", title: "Fabrication unit", desc: "Added laser cutting, bending and powder-coating in-house." },
  { year: "2024", title: "Robotic welding cell", desc: "Deployed automated welding for large-volume programs." },
];

export const testimonials = [
  { name: "R. Malhotra", role: "Head of Sourcing, ThermaCore", quote: "Deliveries are metronomic. Their quality PPAP is what we wish every partner would send." },
  { name: "K. Iyer", role: "Plant Manager, GreenAxle Motors", quote: "We moved a high-mix program to A.D. Industries and cut our supplier count in half." },
  { name: "S. Bakshi", role: "Design Lead, Helios Automation", quote: "From CAD to first article in ten days. That's the kind of speed prototyping actually needs." },
];

export const faq = [
  { q: "Do you take low-volume prototype orders?", a: "Yes. We routinely handle 1-off prototypes through to runs of 100,000+ pieces per year." },
  { q: "What certifications do you hold?", a: "ISO 9001:2015 for quality management, with IATF 16949 in progress for our automotive line." },
  { q: "Can you sign NDAs before quoting?", a: "Absolutely. We sign mutual NDAs before receiving any drawings or specifications." },
  { q: "Do you export?", a: "Yes, we ship regularly to partners in the EU, GCC and South-East Asia through our nominated logistics providers." },
];

export const jobs = [
  { title: "CNC Programmer", location: "Bhiwadi, Rajasthan", type: "Full-time", exp: "3-6 yrs" },
  { title: "Quality Engineer", location: "Bhiwadi, Rajasthan", type: "Full-time", exp: "2-5 yrs" },
  { title: "Production Supervisor", location: "Bhiwadi, Rajasthan", type: "Full-time", exp: "5-10 yrs" },
  { title: "Design Engineer (SolidWorks)", location: "Hybrid, NCR", type: "Full-time", exp: "2-4 yrs" },
  { title: "Sales Manager – OEM", location: "Delhi NCR", type: "Full-time", exp: "6-10 yrs" },
];
