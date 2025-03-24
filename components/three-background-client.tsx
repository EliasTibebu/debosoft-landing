"use client"

import { useRef, useEffect } from "react"

export default function ThreeBackgroundClient() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Import Three.js modules dynamically
    const importModules = async () => {
      const THREE = await import("three")
      const { OrbitControls } = await import("three/examples/jsm/controls/OrbitControls")

      // Scene setup
      const scene = new THREE.Scene()

      // Camera setup
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      camera.position.z = 15

      // Renderer setup
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      })
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      containerRef.current.appendChild(renderer.domElement)

      // Create particle groups - representing different teams working together
      const createParticleGroup = (color, count, radius, speed, yOffset = 0) => {
        const group = new THREE.Group()
        const particlesGeometry = new THREE.BufferGeometry()
        const particlePositions = new Float32Array(count * 3)
        const particleVelocities = []

        // Create particles in a circular formation
        for (let i = 0; i < count; i++) {
          const angle = (i / count) * Math.PI * 2
          const x = Math.cos(angle) * radius
          const z = Math.sin(angle) * radius
          const y = yOffset + (Math.random() - 0.5) * 0.5

          particlePositions[i * 3] = x
          particlePositions[i * 3 + 1] = y
          particlePositions[i * 3 + 2] = z

          // Store velocity for animation
          particleVelocities.push({
            x: Math.cos(angle) * speed,
            y: (Math.random() - 0.5) * 0.01,
            z: Math.sin(angle) * speed,
          })
        }

        particlesGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3))

        const particlesMaterial = new THREE.PointsMaterial({
          size: 0.05,
          color: new THREE.Color(color),
          transparent: true,
          opacity: 0.8,
          blending: THREE.AdditiveBlending,
        })

        const particles = new THREE.Points(particlesGeometry, particlesMaterial)
        group.add(particles)

        return { group, particles, velocities: particleVelocities }
      }

      // Create three particle groups representing "work together, grow together, expand together"
      // Using the new primary color #2563EB and variations
      const group1 = createParticleGroup("#2563EB", 200, 4, 0.005, -2) // Work together (primary blue)
      const group2 = createParticleGroup("#3B82F6", 200, 6, 0.003, 0) // Grow together (lighter blue)
      const group3 = createParticleGroup("#1D4ED8", 200, 8, 0.002, 2) // Expand together (darker blue)

      scene.add(group1.group)
      scene.add(group2.group)
      scene.add(group3.group)

      // Create connecting lines between particles (representing connections)
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x2563eb,
        transparent: true,
        opacity: 0.2,
      })

      const connectionLines = []
      const maxConnectionDistance = 2
      const maxConnections = 100 // Limit connections for performance

      function updateConnections() {
        // Remove old connections
        connectionLines.forEach((line) => scene.remove(line))
        connectionLines.length = 0

        // Get all particle positions
        const allParticles = [
          { particles: group1.particles, color: "#2563EB" },
          { particles: group2.particles, color: "#3B82F6" },
          { particles: group3.particles, color: "#1D4ED8" },
        ]

        let connectionCount = 0

        // Create connections between nearby particles
        for (let g = 0; g < allParticles.length; g++) {
          const positions = allParticles[g].particles.geometry.attributes.position.array

          for (let i = 0; i < positions.length; i += 3) {
            if (connectionCount >= maxConnections) break

            // Only create connections for some particles (for performance)
            if (Math.random() > 0.05) continue

            const x1 = positions[i]
            const y1 = positions[i + 1]
            const z1 = positions[i + 2]

            // Find nearby particles in all groups
            for (let h = 0; h < allParticles.length; h++) {
              if (connectionCount >= maxConnections) break

              const targetPositions = allParticles[h].particles.geometry.attributes.position.array

              for (let j = 0; j < targetPositions.length; j += 3) {
                if (i === j && g === h) continue // Skip same particle

                const x2 = targetPositions[j]
                const y2 = targetPositions[j + 1]
                const z2 = targetPositions[j + 2]

                const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2))

                if (distance < maxConnectionDistance) {
                  const lineGeometry = new THREE.BufferGeometry().setFromPoints([
                    new THREE.Vector3(x1, y1, z1),
                    new THREE.Vector3(x2, y2, z2),
                  ])

                  const opacity = 1 - distance / maxConnectionDistance
                  const lineMat = new THREE.LineBasicMaterial({
                    color: 0x2563eb,
                    transparent: true,
                    opacity: opacity * 0.2,
                  })

                  const line = new THREE.Line(lineGeometry, lineMat)
                  scene.add(line)
                  connectionLines.push(line)
                  connectionCount++

                  if (connectionCount >= maxConnections) break
                }
              }
            }
          }
        }
      }

      // Add ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
      scene.add(ambientLight)

      // Add directional light
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
      directionalLight.position.set(1, 1, 1)
      scene.add(directionalLight)

      // Controls
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.enableDamping = true
      controls.enableZoom = false
      controls.autoRotate = true
      controls.autoRotateSpeed = 0.5

      // Handle resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }

      window.addEventListener("resize", handleResize)

      // Mouse movement effect
      let mouseX = 0
      let mouseY = 0

      const handleMouseMove = (event: MouseEvent) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1
      }

      window.addEventListener("mousemove", handleMouseMove)

      // Animation loop
      const clock = new THREE.Clock()
      let connectionUpdateTimer = 0

      const animate = () => {
        requestAnimationFrame(animate)

        const delta = clock.getDelta()
        connectionUpdateTimer += delta

        // Update particle positions
        const updateParticleGroup = (group) => {
          const positions = group.particles.geometry.attributes.position.array

          for (let i = 0; i < positions.length / 3; i++) {
            // Get current position
            const ix = i * 3
            const iy = i * 3 + 1
            const iz = i * 3 + 2

            // Update position based on velocity
            positions[ix] += group.velocities[i].x
            positions[iy] += group.velocities[i].y
            positions[iz] += group.velocities[i].z

            // Limit the movement radius (orbit-like behavior)
            const distance = Math.sqrt(positions[ix] * positions[ix] + positions[iz] * positions[iz])

            if (distance > 10) {
              // Reset to orbit radius
              const angle = Math.atan2(positions[iz], positions[ix])
              positions[ix] = Math.cos(angle) * 10
              positions[iz] = Math.sin(angle) * 10
            }
          }

          group.particles.geometry.attributes.position.needsUpdate = true

          // Rotate the entire group (representing working together)
          group.group.rotation.y += 0.001
        }

        updateParticleGroup(group1)
        updateParticleGroup(group2)
        updateParticleGroup(group3)

        // Update connections periodically for performance
        if (connectionUpdateTimer > 0.5) {
          updateConnections()
          connectionUpdateTimer = 0
        }

        // Respond to mouse movement
        group1.group.rotation.x += mouseY * 0.0002
        group1.group.rotation.y += mouseX * 0.0002

        group2.group.rotation.x += mouseY * 0.0001
        group2.group.rotation.y += mouseX * 0.0001

        group3.group.rotation.x += mouseY * 0.00005
        group3.group.rotation.y += mouseX * 0.00005

        controls.update()
        renderer.render(scene, camera)
      }

      animate()

      // Cleanup
      return () => {
        window.removeEventListener("resize", handleResize)
        window.removeEventListener("mousemove", handleMouseMove)
        if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
          containerRef.current.removeChild(renderer.domElement)
        }
      }
    }

    importModules()
  }, [])

  return <div ref={containerRef} className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true" />
}

