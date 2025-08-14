export const projects = [
    {
      title: 'MO CORP',
      description: 'Create a pipeline for a golang app using gitea and fluxcd, the project also automate new developers onboarding.',
      preview: './img/projects/mo-corp.png',
      source: 'https://github.com/tw0-face/mo-corp',
      tags: ['kubernetes', 'gitops'],
      type: 'devops',
    },
    {
      title: 'YAVA',
      description: 'Create a pipeline for a the docker voting app using argo workflow, argocd, argo events, argo rollouts and kargo.',
      preview: './img/projects/yava.png',
      source: 'https://github.com/tw0-face/yava',
      tags: ['kubernetes', 'gitops', 'aws'],
      type: 'devops',
    },
    {
      title: 'Petclinic',
      description: 'Create a pipeline for a the famous petclinic java app using jenkins, spinnaker and istio with secret management using vault.',
      preview: './img/projects/petclinic.png',
      source: 'https://github.com/tw0-face/petclinic',
      tags: ['kubernetes'],
      type: 'devops',
    },
    {
      title: 'Matches',
      description: 'Solve matchstick quizzes, compare between nimlang and python.',
      preview: './img/projects/matches.png',
      source: 'https://github.com/tw0-face/matches',
      tags: ['nimlang', 'python'],
      type: 'personal',
    },
    {
        title: 'Conky GIF',
        description: 'A workaround to create a GIF widegt in GNOME using conky.',
        preview: './img/projects/conky-gif.png',
        website: 'https://medium.com/@mostafarashed3462/conky-gif-widget-on-gnome-b899c2e933f2',
        source: 'https://github.com/tw0-face/Conky-GIF',
        tags: ['linux'],
        type: 'personal',
      },
      {
        title: 'NeTools',
        description: 'A CLI for network scanning and MAC spoofing.',
        preview: './img/projects/netools.png',
        source: 'https://github.com/tw0-face/NeTools',
        tags: ['python','linux'],
        type: 'personal',
      },
      {
        title: 'Huffman Encoder',
        description: 'A python script that implements huffman encoding for compressing data.',
        preview: './img/projects/huffman-encoder.png',
        source: 'https://github.com/tw0-face/Huffman-encoder',
        tags: ['python'],
        type: 'college',
      },
      {
        title: 'Automatic Hand Sanitizer Dispenser',
        description: 'An ESP32 automatic hand sanitizer dispenser.',
        preview: './img/projects/hand-sanitizer-dispenser.png',
        source: 'https://github.com/tw0-face/Automatic-Hand-Sanitizer-Dispenser',
        tags: ['IOT'],
        type: 'college',
      },
      {
        title: 'Nautilus Playlist Duration',
        description: 'A video time calculator nautilus extension.',
        preview: './img/projects/nautilus-playlist.png',
        source: 'https://github.com/tw0-face/nautilus-playlist-duration',
        tags: ['linux', 'python'],
        type: 'personal',
      },
      {
        title: 'AVR Signature Reader',
        description: 'statically analyze an old AVR RS-232 programmer (called serialdoodad) written in C, understand how it works and rewrite the function that reads the AVR signature in python.',
        preview: './img/projects/avr-signature-reader.png',
        source: 'https://github.com/tw0-face/AVR-signature-reader?tab=readme-ov-file',
        tags: ['IOT'],
        type: 'college',
      },
      {
        title: 'Data Structure',
        description: 'Solution of college DS Assignments.',
        preview: './img/projects/ds.png',
        source: 'https://github.com/tw0-face/Data-Structure-Course',
        tags: ['python', 'java'], 
        type: 'college',
      },
      {
        title: 'Matlab Projects',
        description: 'A set of projects part of \'analog communication, computational mathematics, power systems, signals ans systems\' college courses.',
        preview: './img/projects/matlab.png',
        source: 'https://github.com/tw0-face/Matlab-GUIs',
        tags: ['matlab'],
        type: 'college',
      },
  ];
  
  // Tag metadata
  export const Tags = {
    linux: {
      label: '🐧 Linux',
      description: 'Projects involving the Linux operating system, tools, or system-level development.',
      color: '#39ca30',
    },
    matlab: {
      label: '🔢 Matlab',
      description: 'Numerical computing or data analysis projects using MATLAB and its toolboxes.',
      color: '#dfd545',
    },
    nimlang: {
        label: '👑 nim',
        description: 'Projects written in Nim — a fast, expressive, systems programming language.',
        color: '#a44fb7',
      },
    
      python: {
        label: '🐍 python',
        description: 'Scripts, apps, or tools developed in Python.',
        color: '#127f82',
      },
    
      gitops: {
        label: '🔄 GitOps',
        description: 'Infrastructure as code projects using GitOps workflows for deployment automation.',
        color: '#fe6829',
      },
    
      kubernetes: {
        label: '☸️ Kubernetes',
        description: 'Projects leveraging Kubernetes for container orchestration and scalable deployments.',
        color: '#8c2f00',
      },
    
      IOT: {
        label: '📶 IOT',
        description: 'Internet of Things projects involving sensors, devices, or embedded systems.',
        color: '#4267b2',
      },
    
      aws: {
        label: '☁️ AWS',
        description: 'Projects built using Amazon Web Services for cloud infrastructure or services.',
        color: '#14cfc3',
      },
    
      gcp: {
        label: '🌐 GCP',
        description: 'Software running on or integrating with Google Cloud Platform services.',
        color: '#ffcfc3',
      },

      java: {
        label: '☕ JAVA',
        description: 'JAVA programming language.',
        color: '#e63946',
      },
  };
  
  // List of tag keys
  export const TagList = Object.keys(Tags);
  
  // Project type metadata
  export const projectTypeMap = {
    devops: '♾️ DevOps',
    college: '🎓 College',
    personal: '👨‍💻 Personal'
  };
  
  export const projectDescriptionMap = {
    devops: 'CI/CD pipelines, automation, infrastructure, or tooling to support software delivery.',
    college: 'Academic or coursework-related projects from university.',
    personal: 'Self-driven, hobby, or passion projects.'
  };
  
  // Group projects by type
  export const groupByProjects = projects.reduce((group, project) => {
    const { type } = project;
    if (!group[type]) {
      group[type] = [];
    }
    group[type].push(project);
    return group;
  }, {});
  