const DATA = [
      {
        id: 'profile', label: 'Perfil', kicker: 'PERFIL / VISÃO GERAL', title: 'Olá, eu sou Levi.', color: 0x83e2e8,
        pos: [0, 0, 0], size: .53,
        copy: 'Estou construindo minha trajetória na área de tecnologia, com foco em desenvolvimento back-end. Gosto de aprender na prática, resolver problemas e transformar conceitos em pequenos projetos.',
        tags: ['Back-end em formação', 'Python', 'Aprendizado contínuo'],
        topics: [
          ['Objetivo profissional', 'Quero iniciar minha carreira em desenvolvimento de sistemas, com foco no back-end.'],
          ['Como aprendo', 'Estudo os fundamentos, replico exemplos, entendo o código e pratico com exercícios próprios.'],
          ['Interesses', 'Desenvolvimento de sistemas, APIs, Linux, redes, python e tecnologia.']
        ],
        links: [{ label: 'GitHub pessoal ↗', url: 'https://github.com/lev1developer' }]
      },
      {
        id: 'skills', label: 'Habilidades', kicker: 'COMPETÊNCIAS / FUNDAMENTOS', title: 'Minha base técnica', color: 0x8baeff,
        pos: [5.8, 1.7, -.7], size: .44,
        copy: 'Atualmente desenvolvo fundamentos de programação com Python. Também utilizo Git e GitHub para versionar, organizar e publicar meus estudos. Estou em fase de consolidação dessas competências.',
        tags: ['Python · fundamentos', 'Lógica de programação', 'Git', 'GitHub', 'linux'],
        topics: [
          ['Python', 'Prática com variáveis, tipos de dados, condicionais, laços de repetição e funções.'],
          ['Lógica', 'Decomposição de problemas, estruturas condicionais, repetição e organização do raciocínio.'],
          ['Git', 'Controle de versão para acompanhar alterações e manter o histórico dos projetos.'],
          ['GitHub', 'Repositórios para organizar e compartilhar exercícios e projetos de estudo.'],
          ['linux', 'Familiaridade com terminal e comandos Linux, Experiência prática com Arch Linux como sistema operacional principal, mas também possuindo conhecimento em kali, mint.'],
        ]
      },
      {
        id: 'projects', label: 'Projetos', kicker: 'PRÁTICA / REPOSITÓRIOS', title: 'Aprender construindo', color: 0xb8a0ff,
        pos: [8.0, -2.5, 1.8], size: .46,
        copy: 'Meus projetos atuais são exercícios práticos para consolidar os fundamentos de Python. Cada um representa uma etapa de aprendizado em lógica, funções, condicionais e laços de repetição.',
        tags: ['Projetos de estudo', 'Python', 'Código versionado'],
        topics: [
          ['Cadastro + IMC', 'Script que recebe dados, calcula o IMC e apresenta informações formatadas.'],
          ['Classificador de idade', 'Exercício de funções e estruturas condicionais para classificar faixas etárias.'],
          ['Gerador de tabuada', 'Utiliza laços de repetição e range() para gerar tabuadas.'],
          ['Contador regressivo', 'Prática de while e controle de tempo com o módulo time.']
        ],
        links: [{ label: 'Repositório estudos-python ↗', url: 'https://github.com/lev1developer/estudos-python' }]
      },
      {
        id: 'experience', label: 'Experiência', kicker: 'TRAJETÓRIA / PROFISSIONAL', title: 'Jovem Aprendiz', color: 0xf0b18b,
        pos: [3.0, -5.1, -1.4], size: .43,
        copy: 'Atuação como auxiliar logístico na área de separação de produtos. A experiência amplia meu contato com rotina profissional, organização e responsabilidade no ambiente de trabalho.',
        tags: ['Jovem Aprendiz', 'Auxiliar logístico', 'Rotina operacional'],
        topics: [
          ['Área de atuação', 'Auxiliar logístico na separação de produtos, com foco em organização e atenção às atividades.'],
          ['Vivência profissional', 'Experiência em ambiente de trabalho, com atenção às atividades e à rotina operacional.']
        ]
      },
      {
        id: 'education', label: 'Formação', kicker: 'EDUCAÇÃO / FORMAÇÃO', title: 'Ensino Médio', color: 0x8cdbb8,
        pos: [-2.6, -5.5, 1.3], size: .42,
        copy: '3º ano do Ensino Médio em 2026. Em paralelo à formação escolar, mantenho uma rotina de estudos voltada para tecnologia e desenvolvimento de software.',
        tags: ['Ensino Médio', '3º ano · 2026'],
        topics: [
          ['Formação escolar', '3º ano do Ensino Médio em 2026.'],
          ['Estudos complementares', 'Estudo independente de programação, inglês e fundamentos de tecnologia.']
        ]
      },
      {
        id: 'learning', label: 'Em estudo', kicker: 'EVOLUÇÃO / PRÓXIMAS ETAPAS', title: 'Próximos passos no back-end', color: 0xf0cb86,
        pos: [-6.1, -2.5, -1.2], size: .43,
        copy: 'Meu próximo ciclo de estudos é aprofundar Python, avançar para bancos de dados com SQL, entender comunicação HTTP e construir APIs. O objetivo é transformar os fundamentos em aplicações back-end completas.',
        tags: ['Python', 'SQL · próximo passo', 'APIs · próximo passo', 'Back-end'],
        topics: [
          ['SQL', 'Aprender consultas, relacionamentos e modelagem de bancos de dados.'],
          ['APIs', 'Entender HTTP, rotas, requisições e respostas para integrar aplicações.'],
          ['Back-end', 'Desenvolver regras de negócio, persistência de dados e serviços.']
        ]
      },
      {
        id: 'languages', label: 'Idiomas', kicker: 'COMUNICAÇÃO / IDIOMAS', title: 'Comunicação', color: 0x79c9ce,
        pos: [-6.0, 2.6, 2.2], size: .4,
        copy: 'Português nativo. Inglês em nível básico, com estudos em andamento para desenvolver leitura, compreensão e comunicação.',
        tags: ['Português · nativo', 'Inglês · básico'],
        topics: [
          ['Português', 'Idioma nativo.'],
          ['Inglês', 'Nível básico, em desenvolvimento por meio de estudos contínuos.']
        ]
      },
      {
        id: 'contact', label: 'Contato', kicker: 'CONTATO / CONEXÕES', title: 'Vamos conversar?', color: 0xe8a8d3,
        pos: [-1.1, 5.7, -2.4], size: .41,
        copy: 'Entre em contato comigo pelo Instagram ou WhatsApp. Você também pode acompanhar meus estudos e projetos pelo GitHub.',
        tags: ['Instagram', '@lev1sk8', 'WhatsApp', '+55 11 96666-2637', 'GitHub', 'linkedin'],
        topics: [
          ['Instagram', 'Meu perfil: @lev1sk8.'],
          ['WhatsApp', 'Entre em contato pelo número +55 11 96666-2637.'],
          ['GitHub', 'Perfil público com repositórios e projetos de estudo.'],
          ['Repositório de estudos', 'Exercícios e práticas de Python organizados ao longo da minha evolução.'],
          ['linkedin', 'meu perfil profissional no linkedin.'],
        ],
        links: [
          { label: 'Instagram ↗', url: 'https://www.instagram.com/lev1sk8/' },
          { label: 'WhatsApp ↗', url: 'https://wa.me/5511966662637' },
          { label: 'GitHub ↗', url: 'https://github.com/lev1developer' },
          { label: 'Estudos-python ↗', url: 'https://github.com/lev1developer/estudos-python' },
          { label: 'LinkedIn ↗', url: 'https://www.linkedin.com/in/felipe-levi-238ba1367' },
        ]
      }
    ];

    const $ = (id) => document.getElementById(id);
    const stage = $('map-stage');
    const canvas = $('network-canvas');
    const loading = $('map-loading');
    const fallback = $('map-fallback');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    $('year').textContent = new Date().getFullYear();

    let currentSelection = { section: 'profile', topic: null };
    let focusNode = () => {};
    let sceneReady = false;

    function renderPanel(sectionId, topicIndex = null, moveCamera = true) {
      const item = DATA.find((entry) => entry.id === sectionId);
      if (!item) return;
      currentSelection = { section: sectionId, topic: topicIndex };
      const topic = topicIndex === null ? null : item.topics[topicIndex];
      $('inspector-index').textContent = `${String(DATA.indexOf(item) + 1).padStart(2, '0')} / ${String(DATA.length).padStart(2, '0')}`;
      $('node-kicker').textContent = item.kicker;
      $('node-title').textContent = topic ? topic[0] : item.title;
      $('node-copy').textContent = topic ? topic[1] : item.copy;
      $('node-color').style.background = `#${item.color.toString(16).padStart(6, '0')}`;
      $('node-color').style.boxShadow = `0 0 10px #${item.color.toString(16).padStart(6, '0')}`;

      const tags = $('node-tags');
      tags.replaceChildren();
      (item.tags || []).forEach((label) => {
        const el = document.createElement('span'); el.className = 'tag'; el.textContent = label; tags.append(el);
      });

      const topics = $('topic-list');
      topics.replaceChildren();
      (item.topics || []).forEach((entry, index) => {
        const btn = document.createElement('button');
        btn.className = `topic-button${topicIndex === index ? ' active' : ''}`;
        btn.type = 'button'; btn.textContent = entry[0];
        btn.addEventListener('click', () => {
          renderPanel(sectionId, index, false);
          focusNode(sectionId, true);
        });
        topics.append(btn);
      });
      $('topic-heading').textContent = topic ? 'Outros pontos desta área' : 'Pontos desta área';

      const actions = $('inspector-action'); actions.replaceChildren();
      (item.links || []).forEach((link) => {
        const a = document.createElement('a'); a.className = 'small-link'; a.href = link.url;
        a.target = '_blank'; a.rel = 'noopener noreferrer'; a.textContent = link.label; actions.append(a);
      });
      if (!item.links || !item.links.length) {
        const note = document.createElement('span'); note.className = 'small-link'; note.textContent = 'Em desenvolvimento'; note.style.cursor = 'default'; actions.append(note);
      }

      document.querySelectorAll('[data-focus]').forEach((button) => {
        button.classList.toggle('active', button.dataset.focus === sectionId);
      });
      if (moveCamera) focusNode(sectionId, true);
    }

    // Os atalhos acessíveis permanecem utilizáveis mesmo se WebGL não estiver disponível.
    const fallbackLinks = $('fallback-links');
    DATA.forEach((item) => {
      const btn = document.createElement('button'); btn.type = 'button'; btn.textContent = item.label;
      btn.addEventListener('click', () => renderPanel(item.id, null, sceneReady)); fallbackLinks.append(btn);
    });
    document.querySelectorAll('[data-focus]').forEach((button) => {
      button.addEventListener('click', () => renderPanel(button.dataset.focus, null, true));
    });

    // Busca tópicos, habilidades e áreas pelo nome.
    const searchInput = $('map-search');
    const searchResults = $('search-results');
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim().toLocaleLowerCase('pt-BR');
      searchResults.replaceChildren();
      if (!query) { searchResults.classList.remove('open'); return; }
      const matches = [];
      DATA.forEach((item) => {
        if (item.label.toLocaleLowerCase('pt-BR').includes(query) || item.title.toLocaleLowerCase('pt-BR').includes(query)) matches.push({ item, topic: null, label: item.label });
        item.topics.forEach((topic, index) => {
          if (topic[0].toLocaleLowerCase('pt-BR').includes(query) || topic[1].toLocaleLowerCase('pt-BR').includes(query)) matches.push({ item, topic: index, label: topic[0] });
        });
        item.tags.forEach((tag) => {
          if (tag.toLocaleLowerCase('pt-BR').includes(query)) matches.push({ item, topic: null, label: tag });
        });
      });
      const unique = matches.filter((match, i) => matches.findIndex((other) => other.item.id === match.item.id && other.topic === match.topic) === i).slice(0, 6);
      if (!unique.length) {
        const empty = document.createElement('div'); empty.className = 'search-result'; empty.textContent = 'Nenhum resultado encontrado'; searchResults.append(empty);
      } else {
        unique.forEach((match) => {
          const btn = document.createElement('button'); btn.className = 'search-result'; btn.type = 'button';
          const title = document.createElement('span'); title.textContent = match.label;
          const kind = document.createElement('small'); kind.textContent = match.item.label;
          btn.append(title, kind);
          btn.addEventListener('click', () => {
            renderPanel(match.item.id, match.topic, true); searchResults.classList.remove('open'); searchInput.value = '';
          });
          searchResults.append(btn);
        });
      }
      searchResults.classList.add('open');
    });
    searchInput.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') { searchResults.classList.remove('open'); searchInput.blur(); }
      if (event.key === 'Enter') searchResults.querySelector('button')?.click();
    });
    document.addEventListener('pointerdown', (event) => {
      if (!event.target.closest('.search-wrap')) searchResults.classList.remove('open');
    });

    renderPanel('profile', null, false);

    try {
      const THREE = await import('https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js');
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
      renderer.setSize(stage.clientWidth, stage.clientHeight, false);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.15;

      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x080d17, .0085);
      const camera = new THREE.PerspectiveCamera(47, stage.clientWidth / stage.clientHeight, .1, 180);
      const target = new THREE.Vector3(0, 0, 0);
      const targetGoal = target.clone();
      let distance = 22, distanceGoal = 22, theta = .42, phi = 1.24;
      const minPhi = .15, maxPhi = Math.PI - .15;

      scene.add(new THREE.AmbientLight(0xa8c0d4, .7));
      const keyLight = new THREE.PointLight(0x8bdce4, 27, 55, 1.8); keyLight.position.set(1, 5, 9); scene.add(keyLight);
      const fillLight = new THREE.PointLight(0x9b8bff, 17, 48, 1.8); fillLight.position.set(-9, -4, -6); scene.add(fillLight);
      const rimLight = new THREE.PointLight(0x75a8cb, 12, 42, 1.7); rimLight.position.set(9, 1, -8); scene.add(rimLight);

      const network = new THREE.Group(); scene.add(network);
      const pickables = [];
      const clusterObjects = {};
      const childObjects = {};
      const flows = [];
      const clock = new THREE.Clock();
      const raycaster = new THREE.Raycaster();
      const pointer = new THREE.Vector2();

      function createGlowTexture() {
        const textureCanvas = document.createElement('canvas'); textureCanvas.width = textureCanvas.height = 128;
        const ctx = textureCanvas.getContext('2d');
        const gradient = ctx.createRadialGradient(64, 64, 1, 64, 64, 64);
        gradient.addColorStop(0, 'rgba(255,255,255,1)');
        gradient.addColorStop(.12, 'rgba(222,250,255,.88)');
        gradient.addColorStop(.34, 'rgba(123,205,225,.24)');
        gradient.addColorStop(1, 'rgba(90,155,200,0)');
        ctx.fillStyle = gradient; ctx.fillRect(0, 0, 128, 128);
        const texture = new THREE.CanvasTexture(textureCanvas); texture.colorSpace = THREE.SRGBColorSpace; return texture;
      }
      const glowTexture = createGlowTexture();

      function makeLabel(text, color, small = false) {
        const labelCanvas = document.createElement('canvas'); labelCanvas.width = 512; labelCanvas.height = 128;
        const ctx = labelCanvas.getContext('2d');
        ctx.fillStyle = 'rgba(8,14,24,.88)';
        ctx.beginPath(); ctx.roundRect(5, 12, 502, 104, 22); ctx.fill();
        ctx.strokeStyle = 'rgba(170,207,225,.24)'; ctx.lineWidth = 2; ctx.stroke();
        ctx.fillStyle = `#${new THREE.Color(color).getHexString()}`;
        ctx.beginPath(); ctx.arc(42, 64, 7, 0, Math.PI * 2); ctx.fill();
        ctx.font = `${small ? '500 29px' : '650 34px'} Inter, -apple-system, BlinkMacSystemFont, sans-serif`;
        ctx.textAlign = 'left'; ctx.textBaseline = 'middle'; ctx.fillStyle = '#e8f2f9'; ctx.fillText(text, 66, 65, 420);
        const texture = new THREE.CanvasTexture(labelCanvas); texture.colorSpace = THREE.SRGBColorSpace;
        const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false }));
        sprite.scale.set(small ? Math.max(1.25, text.length * .105) : Math.max(1.9, text.length * .145), small ? .35 : .47, 1);
        return sprite;
      }

      // Estrelas de fundo.
      const starCount = 1900;
      const starPositions = new Float32Array(starCount * 3);
      const starSizes = new Float32Array(starCount);
      for (let i = 0; i < starCount; i++) {
        const radius = 25 + Math.random() * 62;
        const u = Math.random() * 2 - 1;
        const angle = Math.random() * Math.PI * 2;
        const side = Math.sqrt(1 - u * u);
        starPositions[i * 3] = radius * side * Math.cos(angle);
        starPositions[i * 3 + 1] = radius * u;
        starPositions[i * 3 + 2] = radius * side * Math.sin(angle);
        starSizes[i] = .035 + Math.random() * .045;
      }
      const starGeometry = new THREE.BufferGeometry();
      starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
      starGeometry.setAttribute('size', new THREE.BufferAttribute(starSizes, 1));
      const starField = new THREE.Points(starGeometry, new THREE.PointsMaterial({ color: 0x9bb8d2, size: .06, transparent: true, opacity: .58, sizeAttenuation: true, depthWrite: false }));
      scene.add(starField);

      function addConnection(startArray, endArray, color = 0x7eaabd, opacity = .19, curveBend = .2, particle = true) {
        const start = new THREE.Vector3(...startArray);
        const end = new THREE.Vector3(...endArray);
        const mid = start.clone().add(end).multiplyScalar(.5);
        const direction = new THREE.Vector3().subVectors(end, start).normalize();
        const normal = new THREE.Vector3(direction.y, -direction.x, direction.z * .28).normalize();
        mid.addScaledVector(normal, curveBend);
        const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
        const geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(38));
        const material = new THREE.LineBasicMaterial({ color, transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending });
        network.add(new THREE.Line(geometry, material));
        if (particle) {
          const bead = new THREE.Mesh(new THREE.SphereGeometry(.035, 8, 8), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: .9, blending: THREE.AdditiveBlending }));
          network.add(bead); flows.push({ curve, bead, offset: Math.random(), speed: .055 + Math.random() * .035 });
        }
      }

      let totalTopics = 0;
      DATA.forEach((item, index) => {
        const group = new THREE.Group(); group.position.set(...item.pos); network.add(group);
        const color = new THREE.Color(item.color);
        const sphere = new THREE.Mesh(
          new THREE.IcosahedronGeometry(item.size, 2),
          new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: .95, roughness: .3, metalness: .08 })
        );
        group.add(sphere);
        const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture, color, transparent: true, opacity: .72, blending: THREE.AdditiveBlending, depthWrite: false }));
        halo.scale.set(3.5, 3.5, 1); group.add(halo);
        const ring = new THREE.Mesh(new THREE.TorusGeometry(item.size * 1.58, .012, 6, 72), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: .42 }));
        ring.rotation.set(.9 + index * .14, .25 + index * .11, .5); group.add(ring);
        const label = makeLabel(item.label, item.color, false); label.position.set(0, .78, 0); group.add(label);
        const hit = new THREE.Mesh(new THREE.SphereGeometry(.92, 12, 10), new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }));
        hit.userData = { section: item.id, type: 'cluster' }; group.add(hit); pickables.push(hit);
        clusterObjects[item.id] = { group, sphere, halo, ring, label, hit, color, item };

        item.topics.forEach((topic, topicIndex) => {
          totalTopics++;
          const angle = (Math.PI * 2 * topicIndex / Math.max(1, item.topics.length)) + index * .53;
          const radius = 1.08 + (topicIndex % 2) * .22;
          const offset = [Math.cos(angle) * radius, Math.sin(angle) * .83, Math.sin(angle * 1.3) * .65];
          const childColor = color.clone().lerp(new THREE.Color(0xe5f3fa), .35);
          const childGroup = new THREE.Group(); childGroup.position.set(...offset); group.add(childGroup);
          const childMesh = new THREE.Mesh(new THREE.SphereGeometry(.12, 12, 10), new THREE.MeshStandardMaterial({ color: childColor, emissive: childColor, emissiveIntensity: .8, roughness: .35, metalness: .05 }));
          childGroup.add(childMesh);
          const childGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture, color, transparent: true, opacity: .46, blending: THREE.AdditiveBlending, depthWrite: false }));
          childGlow.scale.set(.95, .95, 1); childGroup.add(childGlow);
          const childLabel = makeLabel(topic[0], item.color, true); childLabel.position.set(0, .36, 0); childLabel.visible = false; childGroup.add(childLabel);
          const childHit = new THREE.Mesh(new THREE.SphereGeometry(.43, 10, 8), new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }));
          childHit.userData = { section: item.id, topic: topicIndex, type: 'topic' }; childGroup.add(childHit); pickables.push(childHit);
          childObjects[`${item.id}:${topicIndex}`] = { group: childGroup, mesh: childMesh, glow: childGlow, label: childLabel, parent: item.id };
          addConnection([0, 0, 0], offset, item.color, .3, topicIndex % 2 ? .13 : -.13, false);
        });
      });

      // Relações entre áreas para criar uma rede com vários caminhos.
      const connections = [
        ['profile', 'skills'], ['skills', 'projects'], ['projects', 'experience'], ['experience', 'education'],
        ['education', 'learning'], ['learning', 'skills'], ['profile', 'languages'], ['languages', 'contact'],
        ['profile', 'contact'], ['projects', 'learning'], ['skills', 'learning'], ['experience', 'contact'],
        ['projects', 'contact'], ['education', 'profile'], ['languages', 'skills']
      ];
      connections.forEach(([from, to], index) => {
        const a = DATA.find((item) => item.id === from).pos;
        const b = DATA.find((item) => item.id === to).pos;
        addConnection(a, b, 0x719fb7, .17, index % 2 ? .48 : -.48, true);
      });
      $('map-counter').textContent = `${String(DATA.length).padStart(2, '0')} ÁREAS · ${String(totalTopics).padStart(2, '0')} TÓPICOS · NAVEGAÇÃO LIVRE`;

      function applySelection(sectionId, topicIndex = null) {
        Object.entries(clusterObjects).forEach(([id, object]) => {
          const active = id === sectionId;
          object.sphere.material.emissiveIntensity = active ? 2.2 : .82;
          object.halo.material.opacity = active ? .98 : .48;
          object.group.scale.setScalar(active ? 1.13 : 1);
          object.label.material.opacity = active ? 1 : .82;
          object.ring.material.opacity = active ? .85 : .28;
          const clusterData = object.item;
          clusterData.topics.forEach((_, index) => {
            const child = childObjects[`${id}:${index}`];
            child.label.visible = active;
            child.mesh.material.emissiveIntensity = active ? 1.28 : .62;
            child.glow.material.opacity = active ? .75 : .28;
            child.group.scale.setScalar(active && topicIndex === index ? 1.22 : 1);
          });
        });
      }

      function setCamera() {
        target.lerp(targetGoal, .075);
        distance += (distanceGoal - distance) * .075;
        const spherical = new THREE.Vector3().setFromSpherical(new THREE.Spherical(distance, phi, theta));
        camera.position.copy(target).add(spherical);
        camera.lookAt(target);
      }
      focusNode = (sectionId, animateCamera = true) => {
        const item = DATA.find((entry) => entry.id === sectionId); if (!item) return;
        applySelection(sectionId, currentSelection.topic);
        if (animateCamera) { targetGoal.set(...item.pos); distanceGoal = 14.5; }
      };
      function resetCamera() {
        targetGoal.set(0, 0, 0); distanceGoal = 22; theta = .42; phi = 1.24;
        renderPanel('profile', null, false); applySelection('profile', null);
      }

      function resize() {
        const width = Math.max(1, stage.clientWidth); const height = Math.max(1, stage.clientHeight);
        renderer.setSize(width, height, false); camera.aspect = width / height; camera.updateProjectionMatrix();
      }
      const resizeObserver = new ResizeObserver(resize); resizeObserver.observe(stage);

      let dragging = false, moved = false, lastX = 0, lastY = 0, dragMode = 'orbit', pointerStart = 0;
      const activePointers = new Map(); let pinchStart = 0;
      function pickAt(clientX, clientY) {
        const rect = canvas.getBoundingClientRect();
        pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
        pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(pointer, camera);
        return raycaster.intersectObjects(pickables, false)[0] || null;
      }
      canvas.addEventListener('pointerdown', (event) => {
        canvas.focus(); canvas.setPointerCapture?.(event.pointerId);
        activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
        pointerStart = performance.now();
        if (activePointers.size === 2) {
          const points = [...activePointers.values()]; pinchStart = Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
          dragging = true; moved = true; return;
        }
        dragging = true; moved = false; lastX = event.clientX; lastY = event.clientY;
        dragMode = (event.button === 2 || event.shiftKey) ? 'pan' : 'orbit';
      });
      canvas.addEventListener('pointermove', (event) => {
        if (activePointers.has(event.pointerId)) activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
        if (!dragging) {
          const hit = pickAt(event.clientX, event.clientY);
          canvas.style.cursor = hit ? 'pointer' : 'grab';
          return;
        }
        if (activePointers.size >= 2) {
          const points = [...activePointers.values()].slice(0, 2);
          const currentPinch = Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
          if (pinchStart > 0 && currentPinch > 0) distanceGoal = THREE.MathUtils.clamp(distanceGoal * (pinchStart / currentPinch), 7.5, 48);
          pinchStart = currentPinch; moved = true; return;
        }
        const dx = event.clientX - lastX; const dy = event.clientY - lastY; lastX = event.clientX; lastY = event.clientY;
        if (Math.abs(dx) + Math.abs(dy) > 2) moved = true;
        if (dragMode === 'orbit') {
          theta -= dx * .005; phi = THREE.MathUtils.clamp(phi + dy * .005, minPhi, maxPhi);
        } else {
          const right = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0);
          const up = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 1);
          const factor = distance * .00135;
          targetGoal.addScaledVector(right, -dx * factor); targetGoal.addScaledVector(up, dy * factor);
        }
      });
      function releasePointer(event) {
        const wasMoved = moved;
        activePointers.delete(event.pointerId);
        if (activePointers.size < 2) pinchStart = 0;
        if (activePointers.size === 0) dragging = false;
        if (activePointers.size === 0 && !wasMoved && performance.now() - pointerStart < 550) {
          const hit = pickAt(event.clientX, event.clientY);
          if (hit) {
            const data = hit.object.userData;
            renderPanel(data.section, data.type === 'topic' ? data.topic : null, true);
          }
        }
      }
      canvas.addEventListener('pointerup', releasePointer);
      canvas.addEventListener('pointercancel', releasePointer);
      canvas.addEventListener('contextmenu', (event) => event.preventDefault());
      canvas.addEventListener('wheel', (event) => {
        event.preventDefault(); distanceGoal = THREE.MathUtils.clamp(distanceGoal * Math.exp(event.deltaY * .001), 7.5, 48);
      }, { passive: false });

      $('zoom-in').addEventListener('click', () => distanceGoal = Math.max(7.5, distanceGoal * .82));
      $('zoom-out').addEventListener('click', () => distanceGoal = Math.min(48, distanceGoal * 1.2));
      $('reset-view').addEventListener('click', resetCamera);
      let paused = reducedMotion;
      const motionButton = $('toggle-motion');
      motionButton.setAttribute('aria-pressed', String(paused));
      motionButton.textContent = paused ? '▶' : 'Ⅱ';
      motionButton.title = paused ? 'Retomar animações' : 'Pausar animações';
      motionButton.addEventListener('click', () => {
        paused = !paused; motionButton.setAttribute('aria-pressed', String(paused));
        motionButton.textContent = paused ? '▶' : 'Ⅱ';
        motionButton.title = paused ? 'Retomar animações' : 'Pausar animações';
      });

      function panByKey(key) {
        const viewDirection = new THREE.Vector3(); camera.getWorldDirection(viewDirection);
        const right = new THREE.Vector3().crossVectors(viewDirection, camera.up).normalize();
        const forward = new THREE.Vector3(viewDirection.x, 0, viewDirection.z).normalize();
        const step = Math.max(.4, distance * .03);
        if (key === 'w' || key === 'arrowup') targetGoal.addScaledVector(forward, step);
        if (key === 's' || key === 'arrowdown') targetGoal.addScaledVector(forward, -step);
        if (key === 'a' || key === 'arrowleft') targetGoal.addScaledVector(right, -step);
        if (key === 'd' || key === 'arrowright') targetGoal.addScaledVector(right, step);
      }
      window.addEventListener('keydown', (event) => {
        if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
        const key = event.key.toLowerCase();
        if (['w', 'a', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(key)) {
          event.preventDefault(); panByKey(key);
        }
        if (key >= '1' && key <= '8') renderPanel(DATA[Number(key) - 1].id, null, true);
        if (key === 'escape') resetCamera();
      });

      sceneReady = true;
      applySelection('profile', null);
      focusNode('profile', false);
      loading.classList.add('hidden');

      function animate() {
        requestAnimationFrame(animate);
        const elapsed = clock.getElapsedTime();
        setCamera();
        if (!paused) {
          starField.rotation.y = elapsed * .0014;
          starField.rotation.x = Math.sin(elapsed * .05) * .01;
          Object.values(clusterObjects).forEach((object, index) => {
            const pulse = 1 + Math.sin(elapsed * 1.2 + index * .72) * .035;
            object.halo.scale.set(3.5 * pulse, 3.5 * pulse, 1);
            object.sphere.rotation.y = elapsed * .12 * (index % 2 ? 1 : -1);
            object.ring.rotation.z += .0005;
          });
          flows.forEach((flow) => {
            const progress = (elapsed * flow.speed + flow.offset) % 1;
            flow.bead.position.copy(flow.curve.getPointAt(progress));
          });
        }
        renderer.render(scene, camera);
      }
      animate();
    } catch (error) {
      console.warn('O mapa 3D não pôde ser inicializado:', error);
      loading.classList.add('hidden');
      fallback.classList.add('visible');
      $('map-counter').textContent = 'MODO ALTERNATIVO · NAVEGAÇÃO POR TÓPICOS';
    }
