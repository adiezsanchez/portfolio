const asset = (path) => `${import.meta.env.BASE_URL}${path}`

export const profiles = {
  light: asset('profile-light.png'),
  dark: asset('profile-dark.png'),
}

export const person = {
  name: 'Alberto Díez Sánchez',
  degree: 'PhD',
  title: 'Data Scientist · Biomedical Image Analysis · Computer Vision · ML/AI x Bio',
  tagline:
    'AI-driven bioimage analysis pipelines for high-content microscopy',
  location: 'Trondheim, Norway',
  email: 'adiezsanchez@pm.me',
  phone: '+47 413 74 790',
  phoneHref: 'tel:+4741374790',
  summary:
    "Senior bioimage analyst and biotech computational scientist specializing in deep learning for microscopy and biomedical image analysis. Builds reproducible, HPC-ready end-to-end pipelines for 2D/3D segmentation, object detection, and phenotypic profiling across tissues, organoids, and cell cultures. Leads CMIC's Bioimage Analysis Service at NTNU, supporting 15+ research groups.",
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
  { id: 'conferences', label: 'Conferences' },
  { id: 'education', label: 'Education' },
  { id: 'publications', label: 'Publications' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export const experience = [
  {
    role: 'Computational Scientist - Bioimage Analysis, AI/ML, Single-Cell & HCS',
    org: 'Cellular and Molecular Imaging Core (CMIC) / NTNU, Norway',
    place: 'Trondheim',
    dates: 'Jan 2024 – Present',
    bullets: [
      'Led CMIC Bioimage Analysis platform serving 15+ research groups',
      'Scaled HCS pipelines to HPC using Slurm/Nextflow (5–10× on multi-TB data)',
      'DL pipelines: segmentation, object detection, representation learning (PyTorch, TensorFlow, CUDA)',
      'FAIR data management: GitHub–Zenodo DOIs, BioImage Archive',
    ],
  },
  {
    role: 'Senior Scientist - Organoid & Stem Cell Biology / Immunology',
    org: "CEMIR, St. Olav's Hospital / NTNU, Norway",
    place: 'Trondheim',
    dates: 'Prior to 2024',
    bullets: [
      'Led and contributed to studies integrating imaging, microbiome profiling, bulk RNA-seq, and single-cell transcriptomics data',
      'Developed and optimized advanced confocal microscopy workflows for organoids, tissues, and animal models',
      'Drove experimental research programs in stem cell regulation, tissue regeneration, and host–immune interactions',
    ],
  },
  {
    role: 'Research Scientist — HCS, Drug Discovery, Biotech',
    org: 'CNIC, Spain',
    place: 'Madrid',
    dates: 'May 2014 – Oct 2018',
    bullets: [
      'Designed and executed high-content perturbation screening assays, integrating genetic (siRNA) and chemical perturbations to investigate cancer biology',
      'Developed and optimized automated phenotypic screening workflows spanning assay design, multiplexed staining (Cell Painting), liquid handling, robotic plate processing, and high-content imaging',
      'Led preclinical studies evaluating proprietary therapeutic compounds in triple-negative breast cancer through a collaboration with pharme',
    ],
  },
]

export const education = [
  {
    degree: 'PhD in Molecular Biosciences',
    school: 'Universidad Autónoma de Madrid (UAM), Spain',
    dates: '2014–2018',
    details: [
      'Breast cancer biology and angiogenesis',
      '"La Caixa" 2014 fellowship (5% success rate)',
      'EMBO Short-Term and Bohringer Ingelheim Travel Grants'
    ],
  },
  {
    degree: 'Master in Molecular Medicine',
    school: 'Universidad Autónoma de Madrid (UAM), Spain',
    dates: '2012–2013',
    details: ['3.86 GPA', 'CNIC Master Programme Grant'],
  },
  {
    degree: 'MSc in Biotechnology',
    school: 'Universidad Francisco de Vitoria (UFV), Spain',
    dates: '2007–2012',
    details: [
    ],
  },
]

export const projects = [
  {
    name: 'brain_tissue_nuc_segm',
    url: 'https://github.com/adiezsanchez/brain_tissue_nuc_segm',
    keywords: ['StarDist 3D', 'Cellpose', 'Nuclear segmentation'],
    image: asset('projects/brain_tissue_nuc_segm.png'),
    blurb:
      'Segmentation of nuclear signals in fluorescently stained mouse brain tissue sections with a fine-tuned StarDist 3D model and/or Cellpose.',
  },
  {
    name: 'intestinal_organoid_brightfield_analysis',
    url: 'https://github.com/adiezsanchez/intestinal_organoid_brightfield_analysis',
    keywords: ['Brightfield', 'Organoids', 'Quantification'],
    image: asset('projects/intestinal_organoid_brightfield_analysis.png'),
    blurb:
      'Tools to analyze intestinal organoid imaging at the Martín-Alonso / Oudhoff lab.',
  },
  {
    name: 'saramorg_fret_nroot',
    url: 'https://github.com/adiezsanchez/saramorg_fret_nroot',
    keywords: ['UNet3D', 'k-means clustering', 'Classification'],
    image: asset('projects/saramorg_fret_nroot.png'),
    blurb:
      'Arabidopsis thaliana root FRET-ratio analysis in nuclei, 3D root reconstruction, and automatic tissue-layer assignment. Developed for the Functional Plant Biology group at NTNU.',
  },
  {
    name: 'intestinal_organoid_yolov8',
    aka: 'ISIS-BF-YOLO',
    url: 'https://github.com/adiezsanchez/intestinal_organoid_yolov8',
    keywords: ['YOLOv8', 'Instance segmentation', 'Organoids'],
    image: asset('projects/intestinal_organoid_yolov8.png'),
    blurb:
      'AI tools (YOLOv8) to analyze intestinal organoid imaging at the Martín-Alonso / Oudhoff lab.',
  },
  {
    name: 'YAP_nuclear_3D_orgs',
    aka: 'YAP-LOC3D',
    url: 'https://github.com/adiezsanchez/YAP_nuclear_3D_orgs',
    keywords: ['CellposeSAM', 'Nuclear translocation', '3D organoids'],
    image: asset('projects/YAP_nuclear_3D_orgs.png'),
    blurb:
      '3D nuclear translocation study of YAP in intestinal organoids. Developed for the Martín-Alonso Regeneration lab.',
  },
  {
    name: 'microglia_dna_damage',
    url: 'https://github.com/adiezsanchez/microglia_dna_damage',
    keywords: ['DNA damage', 'Microglia', 'Nuclei'],
    image: asset('projects/microglia_dna_damage.png'),
    blurb: 'Python script to analyze DNA damage in microglial cells.',
  },
  {
    name: 'ClawBio',
    url: 'https://github.com/adiezsanchez/ClawBio',
    keywords: ['AI agents', 'Bioinformatics', 'Reproducibility'],
    image: asset('projects/ClawBio.png'),
    blurb:
      'Bioinformatics-native AI agent skill library. Local-first, privacy-focused, and reproducible. Featured recent work.',
  },
]

export const conferences = [
  {
    title: 'Reproducible bioimage analysis pipelines using Pixi',
    venue: 'I2K Conference',
    url: 'https://www.youtube.com/watch?v=rw10YpY7k2I&t=47s',
    image: asset('conferences/rw10YpY7k2I.jpg'),
  },
  {
    title: 'Python for Bioimage Analysis',
    venue: 'Online Workshop',
    url: 'https://www.youtube.com/watch?v=tzdFuxF2E3U',
    image: asset('conferences/tzdFuxF2E3U.jpg'),
  },
  {
    title: 'NEUROSEG Self-Analytics Tool',
    venue: 'Online Workshop',
    url: 'https://www.youtube.com/watch?v=lJU8cnHMmPg',
    image: asset('conferences/lJU8cnHMmPg.jpg'),
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