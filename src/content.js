export const profileSrc = `${import.meta.env.BASE_URL}profile.jpg`

export const person = {
  name: 'Alberto Díez Sánchez',
  degree: 'PhD',
  title: 'Data Scientist · Biomedical Image Analysis',
  tagline:
    'AI-driven bioimage analysis pipelines for high-content microscopy',
  location: 'Trondheim, Norway',
  email: 'alberto.d.sanchez@ntnu.no',
  phone: '+47 735 98 595',
  phoneHref: 'tel:+4773598595',
  summary:
    "Senior bioimage analyst and computational scientist specializing in deep learning for microscopy. Builds reproducible, HPC-ready end-to-end pipelines for 2D/3D segmentation, object detection, and phenotypic profiling across tissues, organoids, and cell cultures. Leads CMIC's Bioimage Analysis Service at NTNU, supporting 15+ research groups.",
}

export const links = {
  linkedin: 'https://www.linkedin.com/in/adiezbiotech',
  github: 'https://github.com/adiezsanchez',
  ntnu: 'https://www.ntnu.edu/employees/alberto.d.sanchez',
  orcid: 'https://orcid.org/0000-0001-5146-3089',
}

export const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'publications', label: 'Publications' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export const experience = [
  {
    role: 'Computational Scientist — Bioimage Analysis, AI/ML, Single-Cell & HCS',
    org: 'NTNU / CMIC',
    place: 'Trondheim',
    dates: 'Jan 2024 – Present',
    bullets: [
      "Led CMIC Bioimage Analysis Service for 15+ groups",
      'Scaled HCS pipelines to Slurm/Nextflow (5–10× on multi-TB data)',
      'DL pipelines: segmentation, detection, phenotypic profiling (PyTorch, TensorFlow, CUDA)',
      'FAIR data: GitHub–Zenodo DOIs, BioImage Archive',
    ],
  },
  {
    role: 'Senior Scientist — Organoid & Stem Cell Biology / Immunology',
    org: "CEMIR, St. Olav's / NTNU",
    place: 'Trondheim',
    dates: 'Prior to 2024',
    bullets: [
      'Organoid screening; epigenetic control of epithelial differentiation',
      'First-author Nature Communications on LSD1 (2024)',
    ],
  },
  {
    role: 'Research / Junior Research Scientist — HCS, Bioimage Analysis',
    org: 'CNIC',
    place: 'Madrid',
    dates: 'May 2014 – Oct 2018',
    bullets: [
      'HCS / 3D culture analysis; Tox_(R)Tool (PLoS Comput Biol); PhD on stromal CAV1 in breast cancer angiogenesis',
    ],
  },
]

export const education = [
  {
    degree: 'PhD Molecular Biosciences',
    school: 'Universidad Autónoma de Madrid (UAM)',
    dates: '2014–2018',
    details: [
      'Thesis: Role of stromal Caveolin-1 (CAV1) in breast cancer angiogenesis',
      'Supervisor: Miguel Ángel del Pozo, CNIC',
      'Defended 19 Oct 2018',
      'La Caixa fellowship',
    ],
  },
  {
    degree: 'Master Molecular Medicine',
    school: 'Universidad Autónoma de Madrid (UAM)',
    dates: '2012–2013',
    details: ['3.86 GPA', 'CNIC Master Programme Grant'],
  },
]

export const projects = [
  {
    name: 'brain_tissue_nuc_segm',
    stars: 9,
    url: 'https://github.com/adiezsanchez/brain_tissue_nuc_segm',
    blurb:
      'Segmentation of nuclear signals in fluorescently stained mouse brain tissue sections with a fine-tuned StarDist 3D model and/or Cellpose.',
  },
  {
    name: 'intestinal_organoid_brightfield_analysis',
    stars: 6,
    url: 'https://github.com/adiezsanchez/intestinal_organoid_brightfield_analysis',
    blurb:
      'Tools to analyze intestinal organoid imaging at the Martín-Alonso / Oudhoff lab.',
  },
  {
    name: 'saramorg_fret_nroot',
    stars: 3,
    url: 'https://github.com/adiezsanchez/saramorg_fret_nroot',
    blurb:
      'Arabidopsis thaliana root FRET-ratio analysis in nuclei, 3D root reconstruction, and automatic tissue-layer assignment. Developed for the Functional Plant Biology group at NTNU.',
  },
  {
    name: 'intestinal_organoid_yolov8',
    aka: 'ISIS-BF-YOLO',
    stars: 3,
    url: 'https://github.com/adiezsanchez/intestinal_organoid_yolov8',
    blurb:
      'AI tools (YOLOv8) to analyze intestinal organoid imaging at the Martín-Alonso / Oudhoff lab.',
  },
  {
    name: 'YAP_nuclear_3D_orgs',
    aka: 'YAP-LOC3D',
    stars: 2,
    url: 'https://github.com/adiezsanchez/YAP_nuclear_3D_orgs',
    blurb:
      '3D nuclear translocation study of YAP in intestinal organoids. Developed for the Martín-Alonso Regeneration lab.',
  },
  {
    name: 'microglia_dna_damage',
    stars: 1,
    url: 'https://github.com/adiezsanchez/microglia_dna_damage',
    blurb: 'Python script to analyze DNA damage in microglial cells.',
  },
  {
    name: 'ClawBio',
    stars: null,
    featured: true,
    url: 'https://github.com/adiezsanchez/ClawBio',
    blurb:
      'Bioinformatics-native AI agent skill library. Local-first, privacy-focused, and reproducible. Featured recent work.',
  },
]

export const publications = [
  {
    year: 2024,
    journal: 'Nat Commun',
    title:
      'LSD1 drives intestinal epithelial maturation and controls small intestinal immune cell composition independent of microbiota in a murine model',
    doi: '10.1038/s41467-024-47815-2',
    firstAuthor: true,
  },
  {
    year: 2024,
    journal: 'J Orthop Surg Res',
    title:
      'Biofilm and the effect of sonication in a chronic Staphylococcus epidermidis orthopedic in vivo implant infection model',
    doi: '10.1186/s13018-024-05309-3',
  },
  {
    year: 2022,
    journal: 'Sci Immunol',
    title:
      'BMP signaling in the intestinal epithelium drives a critical feedback loop to restrain IL-13-driven tuft cell hyperplasia',
    doi: '10.1126/sciimmunol.abl6543',
  },
  {
    year: 2021,
    journal: 'Nat Commun',
    title:
      'Smooth muscle-specific MMP17 (MT4-MMP) regulates the intestinal stem cell niche and regeneration after damage',
    doi: '10.1038/s41467-021-26904-6',
  },
  {
    year: 2021,
    journal: 'Front Cell Dev Biol',
    title:
      'A semi-automated organoid screening method demonstrates epigenetic control of intestinal epithelial differentiation',
    doi: '10.3389/fcell.2020.618552',
  },
  {
    year: 2021,
    journal: 'PLoS Pathogens',
    title:
      'Intestinal-epithelial LSD1 controls goblet cell maturation and effector responses required for gut immunity to bacterial and helminth infection',
    doi: '10.1371/journal.ppat.1009476',
  },
  {
    year: 2020,
    journal: 'Sci Adv',
    title:
      'LSD1 represses a neonatal/reparative gene program in adult intestinal epithelium',
    doi: '10.1126/sciadv.abc0367',
  },
  {
    year: 2018,
    journal: 'Cell Reports',
    title:
      'Caveolin-1 modulates mechanotransduction responses to substrate stiffness through actin-dependent control of YAP',
    doi: '10.1016/j.celrep.2018.10.024',
    cites: '~147 cites',
  },
  {
    year: 2018,
    journal: 'PLoS Comput Biol',
    title:
      'Tox_(R)CNN: Deep learning-based nuclei profiling tool for drug toxicity screening',
    doi: '10.1371/journal.pcbi.1006238',
    cites: '~79 cites',
  },
]

export const skills = [
  'Python',
  'PyTorch',
  'TensorFlow',
  'CUDA',
  'Cellpose',
  'StarDist',
  'YOLOv8',
  'napari',
  'Nextflow',
  'Slurm',
  'HPC',
  'FAIR',
  'Zenodo',
  'BioImage Archive',
  'HCS',
  '3D microscopy',
  'organoids',
]

export const versions = [
  {
    id: 'v1',
    path: '/v1',
    letter: 'A',
    name: 'Scientific Dark',
    blurb:
      'Dark theme with a microscopy and data aesthetic. Teal and cyan accents on deep navy.',
  },
  {
    id: 'v3',
    path: '/v3',
    letter: 'C',
    name: 'Bold Modern',
    blurb:
      'Large hero type, card grids, and snappy section reveals — still professional.',
  },
]
