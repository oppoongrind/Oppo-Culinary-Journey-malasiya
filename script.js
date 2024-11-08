// Dark/Light Mode Toggle
const toggleButton = document.getElementById("toggleTheme");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        });

        // Scroll Indicator Animation
        window.addEventListener("scroll", () => {
            const scrollProgress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
                document.getElementById('scrollIndicator').style.width = `${scrollProgress}%`;
                });

                // Initialize GSAP Animations
                gsap.from(".main-heading", { duration: 1, y: -50, opacity: 0 });
                gsap.from(".sub-heading", { duration: 1, delay: 0.5, x: -50, opacity: 0 });

                // Initialize Three.js (3D Scene)
                const scene = new THREE.Scene();
                const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
                const renderer = new THREE.WebGLRenderer();
                document.getElementById('threeCanvas').appendChild(renderer.domElement);
                renderer.setSize(window.innerWidth, window.innerHeight);
                const geometry = new THREE.BoxGeometry();
                const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
                const cube = new THREE.Mesh(geometry, material);
                scene.add(cube);
                camera.position.z = 5;
                const animate = function () {
                    requestAnimationFrame(animate);
                        cube.rotation.x += 0.01;
                            cube.rotation.y += 0.01;
                                renderer.render(scene, camera);
                                };
                                animate();

                                // Data Visualization with D3.js
                                const width = 500, height = 500;
                                const svg = d3.select("#chart").append("svg").attr("width", width).attr("height", height);
                                const data = [10, 20, 30, 40, 50];
                                svg.selectAll("circle")
                                    .data(data)
                                        .enter()
                                            .append("circle")
                                                .attr("cx", (d, i) => i * 50 + 25)
                                                    .attr("cy", height / 2)
                                                        .attr("r", d => d);

                                                        // Kinetic Typography with anime.js
                                                        anime({
                                                            targets: '.main-heading',
                                                                translateY: [30, 0],
                                                                    easing: 'easeOutExpo',
                                                                        duration: 1500,
                                                                        });

                                                                        // Weather Particle Animation (using particles.js or custom)
                                                                        const particles = document.querySelector('.particles');
                                                                        const particleCount = 100;
                                                                        for (let i = 0; i < particleCount; i++) {
                                                                            const particle = document.createElement('div');
                                                                                particle.classList.add('particle');
                                                                                    particles.appendChild(particle);
                                                                                    }

                                                                                    // Parallax Effect
                                                                                    const parallax = document.querySelector('.parallax');
                                                                                    window.addEventListener('scroll', () => {
                                                                                        let offset = window.scrollY * 0.5;
                                                                                            parallax.style.backgroundPosition = `center ${offset}px`;
                                                                                            });
