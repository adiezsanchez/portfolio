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
    "Senior bioimage analyst and biotech computational scientist specializing in deep learning for microscopy and biomedical image analysis. Builds reproducible, HPC-ready end-to-end pipelines for 2D/3D segmentation, object detection, and phenotypic profiling across scales: organs, tissues, organoids, and cells. Leads CMIC's Bioimage Analysis Service at NTNU, supporting 15+ research groups.",
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
      'Led CMIC Bioimage Analysis platform supporting +200 researchers',
      'Scaled HCS pipelines to HPC using Slurm/Nextflow (5–10× on multi-TB data)',
      'Deep Learning & Computer Vision: segmentation, object detection, representation learning (PyTorch, TensorFlow, CUDA)',
      'Data Science: ML, data visualization, feature extraction, clustering, dimensionality reduction',
      'FAIR data management',
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
    role: 'Research Scientist - HCS, Drug Discovery, Biotech',
    org: 'CNIC, Spain',
    place: 'Madrid',
    dates: 'May 2014 – Oct 2018',
    bullets: [
      'Designed and executed high-content perturbation screening assays (HCS), integrating genetic (siRNA) and chemical perturbations to investigate cancer biology',
      'Developed and optimized automated phenotypic screening workflows spanning assay design, multiplexed staining (Cell Painting), liquid handling, robotic plate processing, and high-content imaging',
      'Led preclinical studies evaluating proprietary therapeutic compounds in triple-negative breast cancer through a collaboration with pharma',
    ],
  },
]

export const education = [
  
  {
    degree: 'Deep Learning for image analysis',
    school: 'European Molecular Biology Laboratory (EMBL), Germany',
    dates: 'June 2023',
    details: [
    ],
  },
  {
    degree: 'Microscopy data analysis: Machine Learning',
    school: 'European Bioinformatics Institute (EMBL-EBI), UK',
    dates: 'May 2024',
    details: [
    ],
  },
  {
    degree: 'Advanced Methods in Bioimage Analysis',
    school: 'European Molecular Biology Organization (EMBO), online',
    dates: 'September 2023',
    details: [
    ],
  },
  {
    degree: 'Nextflow: Building reproducible and scalable data analysis workflows',
    school: 'Seqera, online',
    dates: 'December 2025',
    details: [
    ],
  },
  {
    degree: 'PhD in Molecular Biosciences',
    school: 'Universidad Autónoma de Madrid (UAM), Spain',
    dates: '2014–2018',
    details: [
      'High-throughput screening and tumor microenvironment',
      '"La Caixa" 2014 fellowship (5% success rate)',
      'EMBO Short-Term and Bohringer Ingelheim Travel Grants'
    ],
  },
  {
    degree: 'Master in Molecular Medicine',
    school: 'Universidad Autónoma de Madrid (UAM), Spain',
    dates: '2012–2013',
    details: [
      'Breast cancer biology and angiogenesis',
      '3.86 GPA', 
      'CNIC Master Programme Grant'],
  },
  {
    degree: 'MSc in Biotechnology',
    school: 'Universidad Francisco de Vitoria (UFV), Spain',
    dates: '2007–2012',
    details: ['3.84 GPA'
    ],
  },
  {
    degree: 'BSc in Biotechnology',
    school: 'Technological University of the Shannon (TUS), Ireland',
    dates: '2010–2011',
    details: ['Distinction with First Class Honours'
    ],
  },
]

export const projects = [
  {
    name: 'Self-analytics tool for 3D segmentation of brain tissue',
    url: 'https://github.com/adiezsanchez/brain_tissue_nuc_segm',
    keywords: ['3D', 'Random Forest', 'Instance segmentation'],
    image: asset('projects/brain_tissue_nuc_segm.png'),
    blurb:
      'Cell population identification in stained mouse brain tissue sections and organoids using a fine-tuned StarDist 3D models. Simulation of cell compartments via GPU-accelerated morphological operations.',
  },
  {
    name: 'Representation Learning for image-based phenotypic profiling',
    aka: 'EMBED-HCS',
    url: 'https://github.com/adiezsanchez/lisaoya_hcs_embed',
    keywords: ['Representation Learning', 'Embeddings', 'Autoencoders'],
    image: asset('projects/lisaoya_hcs_embed.png'),
    blurb: 'Generation of biologically meaningful embeddings from High Content Imaging using DinoV3, autoencoders and a classification head. Dimensionality reduction for clustering and classification.',
  },
  {
    name: 'Phenotypic profiling of Human Colon Organoids in 3D.',
    aka: 'Pheno-HPC',
    url: 'https://github.com/adiezsanchez/shreya_ibd_orgs',
    keywords: ['HPC', 'CUDA + OpenCL', 'Cellpose'],
    image: asset('projects/shreya_ibd_orgs.png'),
    blurb: 'Cell and organoid segmentation with parent-child relationships and feature extraction for phenotypic profiling. HPC-ready with CUDA + OpenCL acceleration.',
  },
  {
    name: 'siRNA-based HCS for Tuberculosis-mediated cell death',
    aka: 'HCS-MTB',
    url: 'https://github.com/adiezsanchez/lisaoya_hcs_mtb',
    keywords: ['HCS', 'Phenotypic profiling', 'Perturbation screening'],
    image: asset('projects/lisaoya_hcs_mtb.png'),
    blurb: 'Hit detection in 2D fluorescence multichannel images derived from a siRNA HCS Assay. Tool developed for the Molecular Mechanisms of Mycobacterial and Viral Infections (MYCOVIR) lab.',
  },
  {
    name: 'Automated tissue-layer assignment and 3D root reconstruction',
    aka: 'FRET-NroOT',
    url: 'https://github.com/adiezsanchez/saramorg_fret_nroot',
    keywords: ['UNet3D', 'k-means clustering', 'Classification'],
    image: asset('projects/saramorg_fret_nroot.png'),
    blurb:
      'Automated tissue-layer assignment + 3D root reconstruction of Arabidopsis roots. Developed for the Functional Plant Biology group at NTNU.',
  },
  {
    name: 'YOLOv8-based organoid detection and characterization',
    aka: 'ISIS-BF-YOLO',
    url: 'https://github.com/adiezsanchez/intestinal_organoid_yolov8',
    keywords: ['Instance segmentation', 'Object detection', 'YOLO'],
    image: asset('projects/intestinal_organoid_yolov8.png'),
    blurb:
      'AI tools (YOLOv8) to analyze intestinal organoid imaging at the Martín-Alonso and Oudhoff labs.',
  },
  {
    name: 'Organoid detection and characterization from brightfield images',
    url: 'https://github.com/adiezsanchez/intestinal_organoid_brightfield_analysis',
    keywords: ['Object detection', 'Feature extraction', 'Classifiers'],
    image: asset('projects/intestinal_organoid_brightfield_analysis.png'),
    blurb:
      'Tools to analyze intestinal organoid imaging at the Martín-Alonso and Oudhoff labs.',
  },
  {
    name: '3D nuclear translocation study of YAP in intestinal organoids',
    aka: 'YAP-LOC3D',
    url: 'https://github.com/adiezsanchez/YAP_nuclear_3D_orgs',
    keywords: ['Data Visualization', 'Instance segmentation', 'CellposeSAM'],
    image: asset('projects/YAP_nuclear_3D_orgs.png'),
    blurb:
      '3D nuclear translocation study of YAP in intestinal organoids. Developed for the Martín-Alonso Regeneration lab.',
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
    cites: '~9 cites',
  },
  {
    year: 2024,
    journal: 'J Orthop Surg Res',
    title:
      'Biofilm and the effect of sonication in a chronic Staphylococcus epidermidis orthopedic in vivo implant infection model',
    doi: '10.1186/s13018-024-05309-3',
    cites: '~5 cites',
  },
  {
    year: 2022,
    journal: 'Sci Immunol',
    title:
      'BMP signaling in the intestinal epithelium drives a critical feedback loop to restrain IL-13-driven tuft cell hyperplasia',
    doi: '10.1126/sciimmunol.abl6543',
    cites: '~73 cites',
  },
  {
    year: 2021,
    journal: 'Nat Commun',
    title:
      'Smooth muscle-specific MMP17 (MT4-MMP) regulates the intestinal stem cell niche and regeneration after damage',
    doi: '10.1038/s41467-021-26904-6',
    cites: '~43 cites',
  },
  {
    year: 2021,
    journal: 'Front Cell Dev Biol',
    title:
      'A semi-automated organoid screening method demonstrates epigenetic control of intestinal epithelial differentiation',
    doi: '10.3389/fcell.2020.618552',
    cites: '~22 cites',
  },
  {
    year: 2021,
    journal: 'PLoS Pathogens',
    title:
      'Intestinal-epithelial LSD1 controls goblet cell maturation and effector responses required for gut immunity to bacterial and helminth infection',
    doi: '10.1371/journal.ppat.1009476',
    cites: '~18 cites',
  },
  {
    year: 2020,
    journal: 'Sci Adv',
    title:
      'LSD1 represses a neonatal/reparative gene program in adult intestinal epithelium',
    doi: '10.1126/sciadv.abc0367',
    cites: '~27 cites',
  },
  {
    year: 2018,
    journal: 'Cell Reports',
    title:
      'Caveolin-1 modulates mechanotransduction responses to substrate stiffness through actin-dependent control of YAP',
    doi: '10.1016/j.celrep.2018.10.024',
    cites: '~125 cites',
  },
  {
    year: 2018,
    journal: 'PLoS Comput Biol',
    title:
      'Tox_(R)CNN: Deep learning-based nuclei profiling tool for drug toxicity screening',
    doi: '10.1371/journal.pcbi.1006238',
    cites: '~75 cites',
  },
]

export const skills = [
  'Bioimage Analysis',
  'Data Science',
  'Computer Vision',
  'Machine Learning',
  'Deep Learning',
  'Python',
  'PyTorch',
  'TensorFlow',
  'CUDA',
  'Nextflow',
  'Slurm',
  'HPC',
  'FAIR',
  'Data Management',
  'Microscopy',
  'HCS',
  'Biotechnology',
]