/**
 * 3D IT Tech Matrix & Perspective Engine
 * Lightweight, performant 3D cyber grid, floating IT nodes, and 3D card tilt physics.
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    init3DTechCanvas();
    init3DCardTilt();
    initHero3DParallax();
  });

  /* ==========================================================================
     1. Interactive 3D IT Matrix & Floating Tech Grid Canvas
     ========================================================================== */
  function init3DTechCanvas() {
    let canvas = document.getElementById('tech-3d-canvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'tech-3d-canvas';
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
      canvas.style.zIndex = '-1';
      canvas.style.pointerEvents = 'none';
      canvas.style.opacity = '0.75';
      document.body.prepend(canvas);
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let rotX = 0;
    let rotY = 0;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    }

    window.addEventListener('resize', resize);
    resize();

    window.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / width - 0.5) * 2;
      mouseY = (e.clientY / height - 0.5) * 2;
      targetRotY = mouseX * 0.25;
      targetRotX = -mouseY * 0.2;
    });

    // 3D Floating IT Symbols & Nodes
    const techSymbols = ['0', '1', '</>', '{ }', 'SQL', 'PY', 'AI', 'GIT', 'DB', 'λ', '01'];
    const nodes = [];
    const numNodes = Math.min(width > 768 ? 45 : 22, 50);

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.8,
        z: Math.random() * 800 - 200,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 4 + 2,
        symbol: Math.random() > 0.45 ? techSymbols[Math.floor(Math.random() * techSymbols.length)] : null,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03
      });
    }

    // 3D Isometric Wireframe Cube in hero space
    const cubeVertices = [
      [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
      [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]
    ];
    const cubeEdges = [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7]
    ];

    let cubeAngleX = 0;
    let cubeAngleY = 0;
    let cubeAngleZ = 0;

    const fov = 450;

    function project3D(x, y, z) {
      const scale = fov / (fov + z);
      return {
        x: width / 2 + x * scale,
        y: height / 2 + y * scale,
        scale: scale
      };
    }

    function render(time) {
      ctx.clearRect(0, 0, width, height);

      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      const nodeColor = isLight ? 'rgba(99, 102, 241, ' : 'rgba(196, 113, 237, ';
      const cyanColor = isLight ? 'rgba(6, 182, 212, ' : 'rgba(18, 194, 233, ';
      const lineBase = isLight ? 'rgba(99, 102, 241, ' : 'rgba(196, 113, 237, ';

      // Smooth inertia rotation
      rotX += (targetRotX - rotX) * 0.05;
      rotY += (targetRotY - rotY) * 0.05;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // Render 3D Interconnected IT Nodes
      const projectedNodes = [];

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Animate positions
        n.x += n.vx;
        n.y += n.vy;
        n.z += n.vz;
        n.pulse += n.pulseSpeed;

        // Wrap boundaries
        if (n.x < -width * 0.8) n.x = width * 0.8;
        if (n.x > width * 0.8) n.x = -width * 0.8;
        if (n.y < -height * 0.9) n.y = height * 0.9;
        if (n.y > height * 0.9) n.y = -height * 0.9;
        if (n.z < -200) n.z = 600;
        if (n.z > 600) n.z = -200;

        // 3D rotation with mouse perspective
        let rx = n.x * cosY - n.z * sinY;
        let rz = n.z * cosY + n.x * sinY;
        let ry = n.y * cosX - rz * sinX;
        rz = rz * cosX + n.y * sinX;

        if (rz + fov > 10) {
          const proj = project3D(rx, ry, rz);
          const alpha = Math.max(0.1, Math.min(0.85, (1 - rz / 700) * (0.6 + 0.4 * Math.sin(n.pulse))));

          projectedNodes.push({
            proj: proj,
            alpha: alpha,
            symbol: n.symbol,
            size: n.size * proj.scale,
            rawZ: rz
          });
        }
      }

      // Draw 3D Connection Lines between nearby nodes
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const p1 = projectedNodes[i].proj;
          const p2 = projectedNodes[j].proj;
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const lineAlpha = (1 - dist / 140) * 0.18 * Math.min(projectedNodes[i].alpha, projectedNodes[j].alpha);
            ctx.strokeStyle = `${lineBase}${lineAlpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw Nodes & 3D Floating Tech Symbols
      for (let i = 0; i < projectedNodes.length; i++) {
        const item = projectedNodes[i];
        const p = item.proj;

        if (item.symbol) {
          ctx.font = `600 ${Math.max(10, Math.floor(12 * p.scale))}px 'Plus Jakarta Sans', monospace`;
          ctx.fillStyle = `${cyanColor}${item.alpha * 0.85})`;
          ctx.fillText(item.symbol, p.x, p.y);
        } else {
          ctx.fillStyle = `${nodeColor}${item.alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, Math.max(1.5, item.size), 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Render 3D Rotating Tech Cube in top-right or Hero background
      cubeAngleX += 0.008;
      cubeAngleY += 0.012;
      cubeAngleZ += 0.005;

      const cubeSize = 55;
      const cubeCenter = {
        x: width > 1024 ? width * 0.35 : 0,
        y: height * 0.02,
        z: 150
      };

      const cubeRotVertices = cubeVertices.map(([vx, vy, vz]) => {
        let x = vx * cubeSize;
        let y = vy * cubeSize;
        let z = vz * cubeSize;

        // Rotate Cube X
        let y1 = y * Math.cos(cubeAngleX) - z * Math.sin(cubeAngleX);
        let z1 = z * Math.cos(cubeAngleX) + y * Math.sin(cubeAngleX);

        // Rotate Cube Y
        let x2 = x * Math.cos(cubeAngleY) + z1 * Math.sin(cubeAngleY);
        let z2 = z1 * Math.cos(cubeAngleY) - x * Math.sin(cubeAngleY);

        // Rotate Cube Z
        let x3 = x2 * Math.cos(cubeAngleZ) - y1 * Math.sin(cubeAngleZ);
        let y3 = y1 * Math.cos(cubeAngleZ) + x2 * Math.sin(cubeAngleZ);

        // Add position + mouse rotation
        let fx = (x3 + cubeCenter.x) * cosY - (z2 + cubeCenter.z) * sinY;
        let fz = (z2 + cubeCenter.z) * cosY + (x3 + cubeCenter.x) * sinY;
        let fy = (y3 + cubeCenter.y) * cosX - fz * sinX;
        fz = fz * cosX + (y3 + cubeCenter.y) * sinX;

        return project3D(fx, fy, fz);
      });

      // Draw Cube Edges
      ctx.strokeStyle = isLight ? 'rgba(99, 102, 241, 0.35)' : 'rgba(196, 113, 237, 0.45)';
      ctx.lineWidth = 1.5;

      for (let e = 0; e < cubeEdges.length; e++) {
        const [v1, v2] = cubeEdges[e];
        ctx.beginPath();
        ctx.moveTo(cubeRotVertices[v1].x, cubeRotVertices[v1].y);
        ctx.lineTo(cubeRotVertices[v2].x, cubeRotVertices[v2].y);
        ctx.stroke();
      }

      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
  }

  /* ==========================================================================
     2. 3D Card Interactive Tilt with Glare Physics
     ========================================================================== */
  function init3DCardTilt() {
    const cardSelectors = [
      '.project-card',
      '.highlight-card',
      '.core-value-card',
      '.skill-category-card',
      '.cert-card',
      '.achieve-card',
      '.reference-card',
      '.timeline-card',
      '.resume-container-card',
      '.hero-avatar-frame'
    ];

    const cards = document.querySelectorAll(cardSelectors.join(', '));

    cards.forEach((card) => {
      // Ensure 3D perspective styles
      card.style.transformStyle = 'preserve-3d';
      card.style.transition = 'transform 0.08s ease-out, box-shadow 0.15s ease';

      // Create subtle dynamic reflection glare
      const glare = document.createElement('div');
      glare.className = 'card-3d-glare';
      glare.style.position = 'absolute';
      glare.style.top = '0';
      glare.style.left = '0';
      glare.style.width = '100%';
      glare.style.height = '100%';
      glare.style.borderRadius = 'inherit';
      glare.style.pointerEvents = 'none';
      glare.style.opacity = '0';
      glare.style.transition = 'opacity 0.25s ease';
      glare.style.zIndex = '5';
      glare.style.background = 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.15) 0%, transparent 70%)';
      card.style.position = card.style.position || 'relative';
      card.appendChild(glare);

      card.addEventListener('mouseenter', () => {
        glare.style.opacity = '1';
      });

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(8px)`;
        glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.18) 0%, transparent 65%)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        glare.style.opacity = '0';
      });
    });
  }

  /* ==========================================================================
     3. 3D Parallax & Floating Tech Elements in Hero
     ========================================================================== */
  function initHero3DParallax() {
    const heroVisual = document.querySelector('.hero-visual');
    if (!heroVisual) return;

    // Inject 3D Orbiting Tech Badges into Hero Visual
    const techBadgesData = [
      { icon: 'fa-brands fa-python', label: 'Python & AI', pos: 'badge-pos-1' },
      { icon: 'fa-solid fa-database', label: 'SQL & Data', pos: 'badge-pos-2' },
      { icon: 'fa-solid fa-code', label: 'Full-Stack', pos: 'badge-pos-3' },
      { icon: 'fa-solid fa-microchip', label: 'Computing', pos: 'badge-pos-4' }
    ];

    const badgesContainer = document.createElement('div');
    badgesContainer.className = 'hero-3d-badges-layer';
    badgesContainer.style.position = 'absolute';
    badgesContainer.style.top = '0';
    badgesContainer.style.left = '0';
    badgesContainer.style.width = '100%';
    badgesContainer.style.height = '100%';
    badgesContainer.style.pointerEvents = 'none';
    badgesContainer.style.zIndex = '3';

    badgesContainer.innerHTML = techBadgesData.map(b => `
      <div class="tech-3d-floating-pill ${b.pos}">
        <i class="${b.icon}"></i>
        <span>${b.label}</span>
      </div>
    `).join('');

    heroVisual.appendChild(badgesContainer);

    // Mouse Move 3D Parallax for Hero
    window.addEventListener('mousemove', (e) => {
      const moveX = (e.clientX / window.innerWidth - 0.5) * 20;
      const moveY = (e.clientY / window.innerHeight - 0.5) * 20;

      const avatar = heroVisual.querySelector('.hero-avatar-frame');
      const glow = heroVisual.querySelector('.hero-glow-bg');
      const floatingCard = heroVisual.querySelector('.hero-floating-card');
      const badges = heroVisual.querySelectorAll('.tech-3d-floating-pill');

      if (avatar) {
        avatar.style.transform = `perspective(800px) rotateY(${moveX * 0.5}deg) rotateX(${-moveY * 0.5}deg) translateZ(10px)`;
      }
      if (glow) {
        glow.style.transform = `translate(${moveX * 0.8}px, ${moveY * 0.8}px)`;
      }
      if (floatingCard) {
        floatingCard.style.transform = `translate(${moveX * 1.2}px, ${moveY * 1.2}px) translateZ(30px)`;
      }
      badges.forEach((badge, idx) => {
        const factor = (idx + 1) * 0.7;
        badge.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px) translateZ(${factor * 20}px)`;
      });
    });
  }
})();
